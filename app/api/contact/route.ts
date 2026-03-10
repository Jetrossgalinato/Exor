import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields." },
      { status: 400 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Exor Contact Form" <${process.env.GMAIL_USER}>`,
    to: "jetrossgalinato@gmail.com",
    replyTo: email,
    subject: `New Message from ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e1e2e;">New Contact Form Submission</h2>
        <hr style="border: none; border-top: 1px solid #e5e7eb;" />
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p style="background: #f9fafb; padding: 12px 16px; border-radius: 8px; white-space: pre-wrap;">${message}</p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}
