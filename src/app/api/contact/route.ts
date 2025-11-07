import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, website, budget, message } = body;

    // Validate required fields
    if (!fullName || !email || !budget || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Prepare email content
    const emailContent = `
New Contact Form Submission

From: ${fullName}
Email: ${email}
Website: ${website || "Not provided"}
Budget: ${budget}

Message:
${message}

---
Sent from Portfolio Contact Form
    `.trim();

    // For production, you would integrate with an email service like:
    // - Resend (recommended for Next.js)
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP

    // Example with Resend (you would need to install and configure):
    /*
    const { Resend } = require('resend');
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'navdeepanuu1@gmail.com',
      subject: `New Contact Form Submission from ${fullName}`,
      text: emailContent,
    });
    */

    // For now, we'll use a web3forms or similar service via fetch
    // This is a simple solution that doesn't require backend email configuration

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY || "",
        name: fullName,
        email: email,
        subject: `New Contact Form Submission from ${fullName}`,
        message: emailContent,
        from_name: "Portfolio Contact Form",
        to: "navdeepanuu1@gmail.com",
      }),
    });

    const result = await response.json();

    if (response.ok && result.success) {
      return NextResponse.json(
        { success: true, message: "Email sent successfully" },
        { status: 200 },
      );
    } else {
      throw new Error(result.message || "Failed to send email");
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
