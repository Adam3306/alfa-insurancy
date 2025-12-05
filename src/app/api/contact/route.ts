import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const { name, email, phone, message } = formData;

    // Validate form fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Név, email és üzenet mezők kötelezőek" },
        { status: 400 }
      );
    }

    // Validate Resend API key
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY environment variable is not set");
      return NextResponse.json(
        { message: "Email szolgáltatás nincs konfigurálva" },
        { status: 500 }
      );
    }

    // Set recipient email
    const recipientEmail =
      process.env.RECIPIENT_EMAIL || "szego@premiumbiztositasok.hu";

    // Set sender email (must be verified in Resend)
    // Production: use verified domain (alphabiztositas.com)
    // Development: use onboarding@resend.dev for testing
    const isProduction = process.env.NODE_ENV === "production";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL ||
      (isProduction
        ? "noreply@alphabiztositas.com"
        : "onboarding@resend.dev");

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: `"Alpha Biztosítás" <${fromEmail}>`,
      to: recipientEmail,
      replyTo: email,
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
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Telefon:</strong> ${phone || "Nem adott meg"}</p>
          <p><strong>Üzenet:</strong></p>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { message: "Hiba történt az üzenet küldése közben" },
        { status: 500 }
      );
    }

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
