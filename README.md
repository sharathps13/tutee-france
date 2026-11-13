# Tutee Connect — France landing page

The redesigned France page (v62, November 2026), with:

- **Tutee AI**: answers from the page's own facts, offline and instant.
- **Live news bar**: France study news.
- **Glass header** and a phone-first layout with a bottom action bar (Tutee AI, Free consultation, WhatsApp).
- **Lead form**: saves to the **France Leads** tab of the Website Leads Google Sheet and emails business@tuteeconnect.com.

## Files

```
index.html                     the landing page (plain HTML, no build step)
img/                           hero photos, section photos, header logo
assets/js/fr-boot.js           runs first: theme, hero photo, explorer-tab state
assets/js/fr-main.js           page interactions, university explorer, lead form
assets/js/fr-ai.js             Tutee AI (local knowledge engine)
assets/js/fr-news.js           live news bar + "All updates" panel
netlify/functions/enquiry.mjs  POST /api/enquiry → Apps Script (Sheets + email)
netlify.toml                   publish settings, /api/enquiry route, security headers
apps-script/Code.gs            the Website Leads Apps Script, with France added
apps-script/README.md          lead setup, step by step
```

Every script is a same-origin file, because the Content-Security-Policy in `netlify.toml` allows no inline scripts. Keep it that way: an inline `<script>` added to `index.html` will be blocked on Netlify.

## How a lead travels

```
form (index.html) → POST /api/enquiry (Netlify function, adds the France token)
  → Apps Script web app → row in "France Leads" + email to business@tuteeconnect.com
```

The browser never sees the Apps Script URL or the token. They are Netlify environment variables:

| Variable | Value |
|---|---|
| `APPS_SCRIPT_URL` | The Website Leads web-app URL ending in `/exec` |
| `APPS_SCRIPT_TOKEN` | The France token saved with `setFranceToken()` |
| `ALLOWED_ORIGINS` | Optional: the site's own address |

Open `https://<your-site>/api/enquiry` in a browser to check them. It reports whether each variable is set, never its value.

## Local preview

Run `python3 serve.py`, or double-click **Start Local Server.command**. The page works locally, but the form needs the Netlify function. To test the whole lead path on your machine, run `netlify dev` with the variables in a local `.env` file. Don't commit that file.

## Older files

`universities.html`, `assets/css/*`, `assets/js/main.js`, `enhance.js`, `services-data.js`, `universities-data.js` and the `supabase-*` files come from the previous version of this site. The new `index.html` doesn't use or link to them. `universities.html` is still published at `/universities.html` until you remove it.

The previous enquiry function (Resend email plus Supabase) was replaced by the Apps Script version. It is still in Git history if you need it back.
