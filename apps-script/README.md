# France leads: setup

The France landing page sends every consultation request to the same
**Website Leads** spreadsheet and inbox as the other country sites.

```
Visitor's browser ──POST /api/enquiry──▶ Netlify function (netlify/functions/enquiry.js)
                                           │ adds country "France" + the France token
                                           ▼
                                  Apps Script web app (apps-script/Code.gs)
                                           │
                     ┌─────────────────────┴─────────────────────┐
                     ▼                                           ▼
     "France Leads" tab in Website Leads        Email to business@tuteeconnect.com
                                                (Reply-To = the student)
```

The browser never sees the Apps Script URL or the token.

## 1. Update the Apps Script (about 5 minutes)

1. Open your existing leads project on script.google.com.
2. Replace the code with `apps-script/Code.gs` from this folder.
   - Every other country keeps working exactly as before.
   - The only changes are France support, a message note, and shared token checks.
3. Make up a new random token. Use a different value from every other site's token.
4. In `setFranceToken()`, replace `PASTE-A-NEW-LONG-RANDOM-TOKEN-HERE` with that token.
5. Choose `setFranceToken` and click **Run**.
6. Delete the token from the code again, and save.
7. Run `setupFranceLeads` to create the formatted **France Leads** tab.
8. Optional: run `testFranceLead`. One sample row and one email should arrive; delete the row afterwards.
9. Run `checkTokens`. It should report `France: own token (LEADS_TOKEN_FRANCE)`.
10. Click **Deploy → Manage deployments**, edit the existing web-app deployment, and choose **Version: New version → Deploy**.
    - This keeps the same /exec URL, so the other sites are untouched.

France only accepts its own token, never the shared `LEADS_TOKEN`, the same way the UAE does.

## 2. Put the site on Netlify

Deploy this whole folder: `index.html`, `img/`, `netlify/`, and `netlify.toml`.

1. Connect it to Netlify from a Git repository, or run `netlify deploy --prod` with the Netlify CLI.
   - Netlify Drop (drag and drop) does not run functions, so the form would not work from a Drop upload.
2. In **Site configuration → Environment variables**, add:

| Variable | Value |
|---|---|
| `APPS_SCRIPT_URL` | The web-app URL ending in `/exec` (the same one the other sites use) |
| `APPS_SCRIPT_TOKEN` | The France token from step 1 |
| `ALLOWED_ORIGINS` | Optional, e.g. `https://francetutee.netlify.app` |

3. Redeploy, so the function picks up the variables.

## 3. Test

1. Open the live site and send the form with your own details.
2. Within a few seconds, check two things:
   - A row in **France Leads**. Any message the student wrote is a note on their name cell (hover to read it).
   - An email titled **New France Lead – your name**.
3. If nothing arrives, open **Netlify → Logs → Functions → enquiry**.
   - `not set up yet` means the environment variables are missing.
   - `Unauthorised` means the token doesn't match `LEADS_TOKEN_FRANCE`.

## What each lead contains

| Sheet column | From the France form |
|---|---|
| Full Name, Email | Name, Email |
| Phone Number | Dial code + number, e.g. `+91 98765 43210` |
| State | State dropdown (Indian states, or "Outside India") |
| Shortlisted Universities | Up to 3 universities the student marked "+ Compare" in the university explorer |
| Course | Bachelor's / Master's / MBA / Grande école / PhD / Not sure yet |
| Lead Source | `France Landing Page – Consultation form`, plus any campaign tags, e.g. `(google / cpc / eiffel)` |
| Preferred Call Time | Best-time-to-call dropdown |
| Note on the name cell, and in the email | "Anything we should know?" message |
| Email only | Interested In (France and the city they fly from) and the page address |

The form also has a hidden spam trap and checks every field again on the server.

A visitor who has sent the form sees a thank-you card for 30 days, with a WhatsApp button and a "Send another enquiry" link.
