import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, service, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"SerWiss Contact Form" <${process.env.SMTP_USER}>`,
      to: "office@digantix.com",
      replyTo: email,
      subject: `New inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
          <h2 style="font-size: 20px; margin-bottom: 24px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600; width: 140px; color: #64748b;">Name</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #007AC1;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Service</td>
              <td style="padding: 8px 0;">${service || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600; color: #64748b; vertical-align: top;">Message</td>
              <td style="padding: 8px 0; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
