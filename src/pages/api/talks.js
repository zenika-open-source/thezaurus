import { google } from "googleapis";
import { withApiAuthRequired } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function handler(req, res) {
  if (req.method === "GET") {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        private_key: process.env.GOOGLE_CLIENT_PRIVATE_KEY.replace(
          /\\n/g,
          "\n"
        ),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const range = getSheetRange();

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_DOC_ID,
      range,
    });

    res.status(201).json({ talks: response.data.values });

    return;
  }
  res.status(200).json();
});

function getSheetRange() {
  const googleSheetName = process.env.GOOGLE_DOC_SHEET_NAME;
  let range;
  if (googleSheetName) {
    range = `${googleSheetName}!B2:J`;
  } else {
    range = "B2:J";
  }
  return range;
}
