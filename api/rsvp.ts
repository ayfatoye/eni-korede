import type { VercelRequest, VercelResponse } from '@vercel/node';
import { google } from 'googleapis';

const allowedOrigins = [
  "http://localhost:5173",
  "https://bit.ly/eni-korede",
  "https://eni-korede.vercel.app/"
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


    // const auth = new google.auth.JWT(
    //   process.env.GOOGLE_CLIENT_EMAIL,
    //   undefined,
    //   process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    //   ['https://www.googleapis.com/auth/spreadsheets']
    // );

    const auth = new google.auth.JWT(
      process.env.GOOGLE_CLIENT_EMAIL,
      undefined,
      process.env.GOOGLE_PRIVATE_KEY,
      ['https://www.googleapis.com/auth/spreadsheets']
    );

    const sheets = google.sheets({ version: 'v4', auth });
    console.log('Authenticated my fine ass with Google Sheets API');

    const rawKey = process.env.GOOGLE_PRIVATE_KEY;
    // const rawKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

    if (!rawKey) {
      console.error("GOOGLE_PRIVATE_KEY is not defined");
    } else {
      console.log("GOOGLE_PRIVATE_KEY preview:", {
        length: rawKey.length,
        startsWith: rawKey.slice(0, 50), // first few characters
        endsWith: rawKey.slice(-50),     // last few characters
        lineCount: rawKey.split('\n').length
      });
    }


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
