import {apiTalksToDTO} from "./Talks.utils";
import {google} from "googleapis";

export const fetchTalks = async () => {
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

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.GOOGLE_DOC_ID,
        range: getSheetRange(),
    });

    return apiTalksToDTO(response.data.values);
};

function getSheetRange() {
    const googleSheetName = process.env.GOOGLE_DOC_SHEET_NAME;
    let range;
    if (googleSheetName) {
        range = `${googleSheetName}!B2:H`;
    } else {
        range = "B2:H";
    }
    return range
}
