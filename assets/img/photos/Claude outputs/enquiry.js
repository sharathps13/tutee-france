/**
 * Tutee Connect France — /api/enquiry (Netlify Function).
 *
 * The landing page's consultation form POSTs JSON here. This function checks
 * it, shapes it into the lead format the "Website Leads" Apps Script expects,
 * and forwards it with the France token. The Apps Script URL and token live
 * only in Netlify environment variables, never in the browser:
 *
 *   APPS_SCRIPT_URL    the web-app URL ending in /exec
 *   APPS_SCRIPT_TOKEN  the same value saved by setFranceToken() in Apps Script
 *   ALLOWED_ORIGINS    optional, comma-separated, e.g.
 *                      https://francetutee.netlify.app,https://france.tuteeconnect.com
 */

const COUNTRY = 'France';
const MAX_BODY = 20000;

const json = (status, body) => ({
  statusCode: status,
  headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  body: JSON.stringify(body)
});

const clean = (v, n = 300) =>
  String(v == null ? '' : v).replace(/[\u0000-\u001f\u007f]+/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n);

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, body: '' };
  if (event.httpMethod !== 'POST') return json(405, { success: false, message: 'Use POST.' });

  const allowed = (process.env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
  const origin = event.headers.origin || event.headers.Origin || '';
  if (allowed.length && origin && !allowed.includes(origin)) return json(403, { success: false, message: 'Not allowed.' });

  const url = process.env.APPS_SCRIPT_URL;
  const token = process.env.APPS_SCRIPT_TOKEN;
  if (!url || !token) {
    console.error('APPS_SCRIPT_URL or APPS_SCRIPT_TOKEN is not set');
    return json(500, { success: false, message: 'The enquiry service is not set up yet.' });
  }

  const raw = event.isBase64Encoded ? Buffer.from(event.body || '', 'base64').toString('utf8') : (event.body || '');
  if (raw.length > MAX_BODY) return json(413, { success: false, message: 'That enquiry is too long.' });

  let b;
  try { b = JSON.parse(raw || '{}'); } catch (e) { return json(400, { success: false, message: 'Bad request.' }); }

  // Honeypot: real visitors never tick the hidden "botcheck" box. Pretend it worked.
  if (b.botcheck) return json(200, { success: true, message: 'Thanks!' });

  const name = clean(b.name, 120);
  const email = clean(b.email, 200);
  const phone = clean(b.phone, 40);
  const digits = phone.replace(/\D/g, '');
  if (name.length < 2) return json(400, { success: false, message: 'Please enter your name.' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return json(400, { success: false, message: 'Please enter a valid email address.' });
  if (digits.length < 7 || digits.length > 15) return json(400, { success: false, message: 'Please enter a valid phone number.' });

  // Where the lead came from: form + any campaign tags, e.g.
  // "France Landing Page – Consultation form (google / cpc / eiffel-2027)"
  const utm = ['utm_source', 'utm_medium', 'utm_campaign'].map((k) => clean(b[k], 60)).filter(Boolean);
  const leadSource = 'France Landing Page – ' + (clean(b.form_location, 60) || 'Website') + (utm.length ? ' (' + utm.join(' / ') + ')' : '');

  const city = clean(b.origin_city, 60);
  const lead = {
    token,
    country: COUNTRY,
    name,
    phone,
    email,
    state: clean(b.state, 80),
    shortlist: clean(b.shortlist, 1500),
    course: clean(b.course, 300),
    lead_source: leadSource,
    call_time: clean(b.call_time, 80),
    destination: 'France' + (city ? ' (flying from ' + city + ')' : ''),
    message: clean(b.message, 1500),
    page: clean(b.page, 200)
  };

  try {
    // Apps Script answers a POST with a redirect to the result; fetch follows it.
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), 25000);
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
      redirect: 'follow',
      signal: ctl.signal
    });
    clearTimeout(timer);
    const text = await res.text();
    let out;
    try { out = JSON.parse(text); } catch (e) { out = null; }
    if (!out) {
      console.error('Apps Script replied with non-JSON', res.status, text.slice(0, 300));
      return json(502, { success: false, message: 'We could not save your enquiry just now.' });
    }
    if (!out.success) {
      console.error('Apps Script refused the lead:', out.message);
      return json(502, { success: false, message: 'We could not save your enquiry just now.' });
    }
    if (out.mailed === false) console.warn('Lead saved but email failed:', out.mail_error);
    return json(200, { success: true, message: 'Thanks! An advisor will be in touch.' });
  } catch (err) {
    console.error('Forwarding failed:', err);
    return json(502, { success: false, message: 'We could not save your enquiry just now.' });
  }
};
