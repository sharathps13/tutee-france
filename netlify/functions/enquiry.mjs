/**
 * Tutee Connect France — POST /api/enquiry → Apps Script "Website Leads".
 *
 * Netlify Functions v2 (ESM), zero dependencies (Node 18+ global fetch).
 *
 * The consultation form on index.html posts JSON here. This function checks it
 * again on the server, shapes it into the lead format the Website Leads Apps
 * Script expects (apps-script/Code.gs), and forwards it with the France token.
 * The script appends a row to the "France Leads" tab and emails the lead to
 * business@tuteeconnect.com with Reply-To set to the student.
 *
 * Nothing secret reaches the browser. Set these in Netlify → Site configuration
 * → Environment variables:
 *
 *   APPS_SCRIPT_URL    required  the web-app URL ending in /exec
 *   APPS_SCRIPT_TOKEN  required  the value saved by setFranceToken() in Apps Script
 *   ALLOWED_ORIGINS    optional  comma-separated, e.g. https://tutee-france.netlify.app
 *
 * Reached at /.netlify/functions/enquiry; netlify.toml rewrites POST /api/enquiry
 * to it.
 *
 * GET /api/enquiry answers a health check that says whether the variables are
 * present (never what they are). GET /api/enquiry?check=1 also pings the Apps
 * Script and reports its reply.
 */

const COUNTRY = 'France';
const MAX_BODY_BYTES = 20 * 1024;
const FORWARD_TIMEOUT_MS = 25000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const FAIL = 'We could not save your enquiry just now.';

function clean(value, limit = 300) {
  if (value === null || value === undefined) return '';
  return String(value).replace(/[\u0000-\u001f\u007f]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, limit);
}

function json(status, payload) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}

/** Build the Apps Script lead from the form body. Exported for local tests. */
export function toLead(b, token) {
  // "France Landing Page – Consultation form (google / cpc / eiffel-2027)"
  const utm = ['utm_source', 'utm_medium', 'utm_campaign'].map((k) => clean(b[k], 60)).filter(Boolean);
  const leadSource = 'France Landing Page – ' + (clean(b.form_location, 60) || 'Website')
    + (utm.length ? ' (' + utm.join(' / ') + ')' : '');
  const city = clean(b.origin_city, 60);
  const phone = clean(b.phone || `${b.country_code ?? ''} ${b.phone_number ?? ''}`, 40);
  return {
    token,
    country: COUNTRY,
    name: clean(b.name, 120),
    phone,
    email: clean(b.email, 200),
    state: clean(b.state, 80),
    shortlist: clean(b.shortlist, 1500),
    course: clean(b.course, 300),
    lead_source: leadSource,
    call_time: clean(b.call_time, 80),
    destination: 'France' + (city ? ` (flying from ${city})` : ''),
    message: clean(b.message, 1500),
    page: clean(b.page, 200),
  };
}

/** Server-side mirror of the form's checks. Returns an error message or null. */
export function validate(lead) {
  if (lead.name.length < 2) return 'Please enter your name.';
  if (!EMAIL_RE.test(lead.email)) return 'Please enter a valid email address.';
  const digits = lead.phone.replace(/\D/g, '');
  if (digits.length < 7 || digits.length > 15) return 'Please enter a valid phone number.';
  return null;
}

export default async function (req) {
  const url = (process.env.APPS_SCRIPT_URL || '').trim();
  const token = (process.env.APPS_SCRIPT_TOKEN || '').trim();

  if (req.method === 'GET') {
    const health = { success: true, endpoint: 'enquiry', country: COUNTRY, destination: 'apps-script',
      apps_script_url_set: Boolean(url), apps_script_token_set: Boolean(token) };
    // ?check=1 also calls the Apps Script health check (doGet, no token sent),
    // so a wrong URL or a deployment that isn't open to "Anyone" shows up here.
    if (new URL(req.url).searchParams.has('check') && url) {
      health.apps_script_url_looks_right = /^https:\/\/script\.google\.com\/macros\/s\/[^/]+\/exec$/.test(url);
      try {
        const res = await fetch(url, { redirect: 'follow' });
        const text = await res.text();
        let out = null;
        try { out = JSON.parse(text); } catch { /* not JSON */ }
        health.apps_script_http_status = res.status;
        health.apps_script_reply = out ? out.message : 'not JSON (usually a Google sign-in or error page: '
          + 'deploy the web app with "Who has access: Anyone")';
      } catch (err) {
        health.apps_script_reply = `could not reach it: ${err?.name}`;
      }
    }
    return json(200, health);
  }
  if (req.method !== 'POST') return json(405, { success: false, message: 'Method not allowed.' });

  const allowed = (process.env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
  const origin = req.headers.get('origin') || '';
  if (allowed.length && origin && !allowed.includes(origin)) return json(403, { success: false, message: 'Not allowed.' });

  if (!url || !token) {
    console.error('enquiry: APPS_SCRIPT_URL or APPS_SCRIPT_TOKEN is not set');
    return json(500, { success: false, message: 'The enquiry service is not set up yet. Please email business@tuteeconnect.com.' });
  }

  if (Number(req.headers.get('content-length') || 0) > MAX_BODY_BYTES) {
    return json(413, { success: false, message: 'That enquiry is too long.' });
  }
  let raw = '';
  try { raw = await req.text(); } catch { return json(400, { success: false, message: 'Could not read the submission.' }); }
  if (raw.length > MAX_BODY_BYTES) return json(413, { success: false, message: 'That enquiry is too long.' });

  let body;
  try { body = JSON.parse(raw || '{}'); } catch { return json(400, { success: false, message: 'Bad request.' }); }
  if (!body || typeof body !== 'object' || Array.isArray(body)) return json(400, { success: false, message: 'Bad request.' });

  // Honeypot: people never tick the hidden "botcheck" box. Pretend it worked.
  if (body.botcheck) return json(200, { success: true, message: 'Thanks!' });

  const lead = toLead(body, token);
  const problem = validate(lead);
  if (problem) return json(400, { success: false, message: problem });

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FORWARD_TIMEOUT_MS);
  try {
    // Apps Script answers a POST with a redirect to the result; fetch follows it.
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
      redirect: 'follow',
      signal: controller.signal,
    });
    const text = await res.text();
    let out = null;
    try { out = JSON.parse(text); } catch { /* not JSON */ }
    // `code` names the cause without revealing anything secret, so a failed
    // test lead can be diagnosed from the browser's Network tab.
    if (!out) {
      console.error(`enquiry: Apps Script replied with non-JSON (HTTP ${res.status}): ${text.slice(0, 200)}`);
      return json(502, { success: false, message: FAIL, code: `apps_script_not_json_http_${res.status}` });
    }
    if (!out.success) {
      console.error(`enquiry: Apps Script refused the lead: ${out.message}`);
      return json(502, { success: false, message: FAIL, code: 'apps_script_' + String(out.message || 'refused').toLowerCase().replace(/[^a-z]+/g, '_') });
    }
    if (out.mailed === false) console.warn(`enquiry: saved to the sheet but the email failed: ${out.mail_error}`);
    console.log('enquiry: saved to France Leads');
    return json(200, { success: true, message: 'Thanks! An advisor will be in touch.' });
  } catch (err) {
    console.error(`enquiry: forwarding failed: ${err?.name}: ${err?.message}`);
    return json(502, { success: false, message: FAIL, code: err?.name === 'AbortError' ? 'apps_script_timeout' : 'apps_script_unreachable' });
  } finally {
    clearTimeout(timer);
  }
}

// No `export const config = { path }` on purpose: a custom path takes the
// function off /.netlify/functions/enquiry, which is exactly where the
// /api/enquiry redirect in netlify.toml points, and every request 404s.
