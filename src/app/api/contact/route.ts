import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact the administrator." },
        { status: 500 },
      );
    }

    const body = await request.json();
    const { fullName, email, message } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
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
Message:
${message}

---
Sent from Portfolio Contact Form
    `.trim();

    console.log("Attempting to send email via Resend...");

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // You can change this to your verified domain
      to: "navdeepannu0@gmail.com", // Must match your Resend account email in testing mode
      subject: `New Contact Form Submission from ${fullName}`,
      text: emailContent,
      replyTo: email, // This allows you to reply directly to the person who submitted the form
    });

    if (error) {
      console.error("Resend API error:", JSON.stringify(error, null, 2));
      return NextResponse.json(
        { error: `Failed to send email: ${error.message || "Unknown error"}` },
        { status: 500 },
      );
    }

    console.log("Email sent successfully:", data);

    return NextResponse.json(
      { success: true, message: "Email sent successfully", data },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to send message: ${errorMessage}` },
      { status: 500 },
    );
  }
}
