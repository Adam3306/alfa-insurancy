import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { name, email, phone, message } = formData;

    // Validate form fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required fields" },
        { status: 400 }
      );
    }

    // Configure email transporter
    // Note: In production, use real SMTP credentials
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER || "smtp.example.com",
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: Boolean(process.env.EMAIL_SECURE) || false,
      auth: {
        user: process.env.EMAIL_USER || "user@example.com",
        pass: process.env.EMAIL_PASSWORD || "password",
      },
    });

    // Set recipient email
    const recipientEmail =
      process.env.RECIPIENT_EMAIL || "info@alphabiztositas.hu";

    // Compose email
    const mailOptions = {
      from: `"Alpha Biztosítás" <${
        process.env.EMAIL_USER || "noreply@alphabiztositas.hu"
      }>`,
      to: recipientEmail,
      subject: `Új ajánlatkérés - ${name}`,
      text: `
        Név: ${name}
        Email: ${email}
        Telefon: ${phone || "Nem adott meg"}
        
        Üzenet:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b67c1;">Új ajánlatkérés érkezett</h2>
          <p><strong>Név:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || "Nem adott meg"}</p>
          <p><strong>Üzenet:</strong></p>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Üzenet sikeresen elküldve" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Hiba történt az üzenet küldése közben" },
      { status: 500 }
    );
  }
}
