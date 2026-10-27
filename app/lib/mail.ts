import { Resend } from "resend";

const MAIL_TO = process.env.BOOKING_EMAIL_TO ?? "batorshikh35@gmail.com";
const MAIL_FROM = process.env.BOOKING_EMAIL_FROM ?? "Eagle Land Tours <onboarding@resend.dev>";

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

export const isEmail = (value: unknown): value is string => typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

// Trims and caps user input so a single request can't produce an enormous email.
export const clean = (value: unknown, max = 500) => (typeof value === "string" ? value.trim().slice(0, max) : "");

type MailInput = {
  subject: string;
  heading: string;
  rows: [label: string, value: string][];
  replyTo?: string;
};

export const sendMail = async ({ subject, heading, rows, replyTo }: MailInput) => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not set");
  }

  const html = `
    <h2 style="font-family:sans-serif;color:#0e1d36">${escapeHtml(heading)}</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
      ${rows
        .filter(([, value]) => value)
        .map(
          ([label, value]) =>
            `<tr><td style="padding:6px 16px 6px 0;color:#5d6b65;vertical-align:top"><b>${escapeHtml(label)}</b></td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(value)}</td></tr>`,
        )
        .join("")}
    </table>`;

  const { error } = await new Resend(apiKey).emails.send({
    from: MAIL_FROM,
    to: MAIL_TO,
    subject,
    html,
    replyTo,
  });

  if (error) {
    throw new Error(`Resend error: ${error.message}`);
  }
};
