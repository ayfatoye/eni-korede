import type { VercelRequest, VercelResponse } from '@vercel/node';
import { google } from 'googleapis';

const allowedOrigins = [
  "http://localhost:5173"
];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const origin = req.headers.origin || "";

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    if (req.method !== 'POST') {
      return res.status(405).send('Only POST allowed');
    }

    const { name, email, attending, phoneNumber, phoneProvider, invitorName, countryCode } = req.body;

    // Validate required fields
    if (!name || !email || !attending || !phoneNumber || !invitorName) {
      return res.status(400).json({
        error: 'Missing required fields: name, email, attending, phoneNumber, or invitorName',
      });
    }

    const auth = new google.auth.JWT(
      process.env.GOOGLE_CLIENT_EMAIL,
      undefined,
      process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      ['https://www.googleapis.com/auth/spreadsheets']
    );

    const sheets = google.sheets({ version: 'v4', auth });
    console.log('Authenticated with Google Sheets API');


    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: 'RSVPs!A2',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, attending, phoneNumber, phoneProvider || '', countryCode, invitorName]],
      },
    });

    res.status(200).json({ message: 'RSVP recorded!' });
  } catch (error) {
    console.error('Error recording RSVP:', error);
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
  }
}
