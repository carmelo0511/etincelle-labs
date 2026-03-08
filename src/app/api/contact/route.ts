import { NextResponse } from "next/server";
import { Resend } from "resend";

/* ------------------------------------------------------------------ */
/*  POST /api/contact                                                  */
/*  1. Validate payload                                                */
/*  2. Send notification email via Resend                              */
/*  3. Create / update HubSpot contact                                 */
/* ------------------------------------------------------------------ */

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactPayload {
  name: string;
  email: string;
  company: string;
  linkedin: string;
  dataInterest: string;
  message: string;
}

/* ---------- HubSpot helper ---------- */
async function upsertHubSpotContact(data: ContactPayload) {
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) {
    console.warn("HUBSPOT_ACCESS_TOKEN not set — skipping HubSpot sync");
    return null;
  }

  // Split "Bryan Nakache" → firstname / lastname
  const nameParts = data.name.trim().split(/\s+/);
  const firstname = nameParts[0] ?? "";
  const lastname = nameParts.slice(1).join(" ") || "";

  // Combine data interest + message for the HubSpot `message` field
  const fullMessage = [
    data.dataInterest && `Data interest: ${data.dataInterest}`,
    data.message,
  ]
    .filter(Boolean)
    .join("\n\n");

  const properties: Record<string, string> = {
    firstname,
    lastname,
    email: data.email,
    company: data.company,
    hs_linkedin_url: data.linkedin,
    message: fullMessage,
  };

  // Try to create the contact first
  const createRes = await fetch(
    "https://api.hubapi.com/crm/v3/objects/contacts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ properties }),
    }
  );

  if (createRes.ok) return createRes.json();

  // If 409 conflict (contact already exists), update instead
  if (createRes.status === 409) {
    const conflict = await createRes.json();
    const existingId = conflict?.message?.match(/Existing ID: (\d+)/)?.[1];

    if (existingId) {
      const updateRes = await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${existingId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ properties }),
        }
      );
      return updateRes.json();
    }
  }

  const error = await createRes.text();
  console.error("HubSpot error:", error);
  return null;
}

/* ---------- Main handler ---------- */
export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload;

    // Basic validation
    if (!body.name || !body.email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Run email + HubSpot in parallel
    const [emailResult, hubspotResult] = await Promise.allSettled([
      // 1. Send notification email
      resend.emails.send({
        from: "Etincelle Contact Form <noreply@etincellelabs.com>",
        to: process.env.CONTACT_EMAIL ?? "hello@etincellelabs.com",
        subject: `New contact: ${body.name} — ${body.company || "No company"}`,
        replyTo: body.email,
        html: `
          <h2>New contact form submission</h2>
          <table style="border-collapse:collapse;font-family:sans-serif;">
            <tr><td style="padding:8px 16px 8px 0;font-weight:600;">Name</td><td style="padding:8px 0;">${body.name}</td></tr>
            <tr><td style="padding:8px 16px 8px 0;font-weight:600;">Email</td><td style="padding:8px 0;"><a href="mailto:${body.email}">${body.email}</a></td></tr>
            <tr><td style="padding:8px 16px 8px 0;font-weight:600;">Company</td><td style="padding:8px 0;">${body.company || "—"}</td></tr>
            <tr><td style="padding:8px 16px 8px 0;font-weight:600;">LinkedIn</td><td style="padding:8px 0;">${body.linkedin ? `<a href="${body.linkedin}">${body.linkedin}</a>` : "—"}</td></tr>
            <tr><td style="padding:8px 16px 8px 0;font-weight:600;">Data Interest</td><td style="padding:8px 0;">${body.dataInterest || "—"}</td></tr>
            <tr><td style="padding:8px 16px 8px 0;font-weight:600;">Message</td><td style="padding:8px 0;">${body.message || "—"}</td></tr>
          </table>
        `,
      }),

      // 2. Sync to HubSpot
      upsertHubSpotContact(body),
    ]);

    const emailOk = emailResult.status === "fulfilled";
    const hubspotOk = hubspotResult.status === "fulfilled" && hubspotResult.value !== null;

    if (!emailOk) {
      console.error("Email send failed:", (emailResult as PromiseRejectedResult).reason);
    }

    return NextResponse.json({
      success: true,
      email: emailOk ? "sent" : "failed",
      hubspot: hubspotOk ? "synced" : "skipped",
    });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
