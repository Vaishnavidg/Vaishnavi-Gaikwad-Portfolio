# Logging contact-form submissions to a Google Sheet

The contact form (`src/components/ContactForm.tsx`) always works via a
`mailto:` link — no setup required. Optionally, it can *also* log every
submission as a row in a Google Sheet you own, using a small Google Apps
Script deployed as a Web App. No third-party account or paid service needed.

## 1. Create the sheet

1. Create a new Google Sheet (or reuse one) — e.g. "Portfolio contacts".
2. In the sheet, go to **Extensions → Apps Script**.
3. Delete the placeholder code and paste in:

```javascript
function doPost(e) {
  var sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Submissions") ||
    SpreadsheetApp.getActiveSpreadsheet().insertSheet("Submissions");

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Timestamp", "Name", "Email", "Message"]);
  }

  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(),
    data.name || "",
    data.email || "",
    data.message || "",
  ]);

  return ContentService.createTextOutput(
    JSON.stringify({ status: "ok" })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

4. Save the project (any name, e.g. "Portfolio contact webhook").

## 2. Deploy it as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set:
   - **Execute as:** Me (your Google account)
   - **Who has access:** Anyone
4. Click **Deploy**, then authorize it when prompted (it's your own script,
   acting only on this sheet).
5. Copy the **Web app URL** it gives you — it looks like
   `https://script.google.com/macros/s/AKfycb.../exec`.

## 3. Wire it into the site

Add the URL to a local `.env` file (never commit this — it's already in
`.gitignore`):

```
VITE_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/AKfycb.../exec
```

Restart the dev server (`pnpm dev` / `npm run dev`) after adding it, and set
the same variable in your hosting provider's environment settings for
production builds (e.g. GitHub Pages via Actions secrets, Vercel, Netlify).

## Notes

- The request is sent with `mode: "no-cors"`, so the browser can't read the
  script's response — this is expected with Apps Script web apps and doesn't
  mean the row failed to write. Check the Sheet directly to confirm.
- If `VITE_SHEET_WEBHOOK_URL` is unset, the form silently skips this step and
  only uses the `mailto:` flow.
- Anyone with the deployed URL can POST rows into this sheet. That's fine for
  a portfolio contact form, but don't reuse this script/sheet for anything
  sensitive.
