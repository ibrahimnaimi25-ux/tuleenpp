import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: 'tuleen.rezek23@gmail.com',
      replyTo: email,
      subject: subject ? `[Portfolio] ${subject}` : `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #e8e0d0; padding: 40px; border: 1px solid #2a2a2a;">
          <div style="border-bottom: 1px solid #C9A96E30; padding-bottom: 24px; margin-bottom: 24px;">
            <h2 style="color: #C9A96E; font-size: 13px; letter-spacing: 0.3em; text-transform: uppercase; margin: 0 0 8px 0;">New Portfolio Contact</h2>
            <p style="color: #888; font-size: 12px; margin: 0;">Sent via tuleen-rezek.com</p>
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
            <tr>
              <td style="color: #888; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; padding: 8px 0; width: 100px;">Name</td>
              <td style="color: #e8e0d0; font-size: 14px; padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="color: #888; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; padding: 8px 0;">Email</td>
              <td style="color: #C9A96E; font-size: 14px; padding: 8px 0;">${email}</td>
            </tr>
            ${subject ? `
            <tr>
              <td style="color: #888; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; padding: 8px 0;">Subject</td>
              <td style="color: #e8e0d0; font-size: 14px; padding: 8px 0;">${subject}</td>
            </tr>` : ''}
          </table>
          <div style="border-top: 1px solid #2a2a2a; padding-top: 24px;">
            <p style="color: #888; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; margin: 0 0 12px 0;">Message</p>
            <p style="color: #e8e0d0; font-size: 15px; line-height: 1.8; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
