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
    // The message also rides in `destination` ("Interested In" in the email),
    // because the original Apps Script has no separate message field.
    destination: 'France' + (city ? ` (flying from ${city})` : '')
      + (clean(b.message, 1500) ? ` · Message: ${clean(b.message, 500)}` : ''),
    message: clean(b.message, 1500),
    page: clean(b.page, 200),
  };
}

/* ---- phone numbers: same rules as the form (assets/js/fr-main.js) ---- */
/* Phone check per dial code: [national-number pattern, message]. Mobile and landline formats real carriers use. */
const PHONE_RULES={
  '+91':[/^[6-9]\d{9}$/,'Indian mobile numbers have 10 digits and start with 6, 7, 8 or 9.'],
  '+971':[/^(5[024568]\d{7}|[2-4679]\d{7})$/,'UAE numbers have 9 digits for mobiles (50, 52, 54, 55, 56 or 58…) or 8 for landlines.'],
  '+94':[/^(7[0-8]\d{7}|[1-689]\d{8})$/,'Sri Lankan numbers have 9 digits, mobiles start with 7.'],
  '+977':[/^(9[78]\d{8}|[1-8]\d{6,7})$/,'Nepali mobiles have 10 digits and start with 97 or 98.'],
  '+880':[/^(1[3-9]\d{8}|[2-9]\d{6,9})$/,'Bangladeshi mobiles have 10 digits after +880 and start with 13 to 19.'],
  '+974':[/^[3-7]\d{7}$/,'Qatari numbers have 8 digits and start with 3, 4, 5, 6 or 7.'],
  '+966':[/^(5\d{8}|1\d{7})$/,'Saudi mobiles have 9 digits and start with 5.'],
  '+968':[/^[279]\d{7}$/,'Omani numbers have 8 digits and start with 7, 9 or 2.'],
  '+65':[/^[689]\d{7}$/,'Singapore numbers have 8 digits and start with 6, 8 or 9.'],
  '+33':[/^[1-9]\d{8}$/,'French numbers have 9 digits after +33 (10 with the leading 0).'],
  '+44':[/^(7\d{9}|[1-3]\d{8,9})$/,'UK mobiles have 10 digits after +44 and start with 7.'],
  '+1':[/^[2-9]\d{2}[2-9]\d{6}$/,'US and Canadian numbers have 10 digits: area code then number.']
};
/* Returns {ok:true, e164:'+91 9876543210'} or {ok:false, msg}. */
function checkPhone(cc,raw){
  cc=String(cc||'').trim();var d=String(raw||'').replace(/\D/g,''),cd=cc.replace(/\D/g,'');
  if(!d)return {ok:false,msg:'Enter a phone number we can reach you on.'};
  var r=PHONE_RULES[cc];
  /* typed the country code again (+91 98…, 0091 98…, 9198…) */
  var dd=d.replace(/^00/,'');if(cd&&dd.indexOf(cd)===0&&(String(raw).trim().charAt(0)==='+'||/^00/.test(d)||(r&&!r[0].test(d.replace(/^0+/,''))&&r[0].test(dd.slice(cd.length).replace(/^0+/,'')))))d=dd.slice(cd.length);
  if(cd!=='1'&&d.charAt(0)==='0')d=d.replace(/^0+/,'');                                                   /* trunk 0, e.g. 098765… or 07… */
  if(/^(\d)\1+$/.test(d))return {ok:false,msg:'That number doesn\'t look real. Please check it.'};
  var seq='01234567890123456789',rev='98765432109876543210';
  if(d.length>=7&&(seq.indexOf(d)>-1||rev.indexOf(d)>-1))return {ok:false,msg:'That number doesn\'t look real. Please check it.'};
  if(/^(\d{2})\1{3,}$/.test(d)||/^(\d{3})\1{2,}$/.test(d))return {ok:false,msg:'That number doesn\'t look real. Please check it.'};
  var tail=d.slice(-7);if(/^(\d)\1{6}$/.test(tail))return {ok:false,msg:'That number doesn\'t look real. Please check it.'};
  if(r){if(!r[0].test(d))return {ok:false,msg:r[1]};}
  else if(d.length<6||d.length+cd.length>15)return {ok:false,msg:'Enter a valid number for that country, without the country code.'};
  return {ok:true,e164:cc+' '+d};
}

/** Server-side mirror of the form's checks. Returns an error message or null. */
export function validate(lead) {
  if (lead.name.length < 2) return 'Please enter your name.';
  if (!EMAIL_RE.test(lead.email)) return 'Please enter a valid email address.';
  const m = /^(\+\d{1,4})\s*(.*)$/.exec(lead.phone);
  const res = m ? checkPhone(m[1], m[2]) : checkPhone('', lead.phone);
  if (!res.ok) return res.msg;
  lead.phone = res.e164;          // stored the same way for every lead: "+91 9812312345"
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
