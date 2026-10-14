import { NextResponse } from "next/server";
import { clean, isEmail, sendMail } from "../../lib/mail";
import { LANG_META, isLang } from "../../i18n/config";

// Handles both the contact form and the footer newsletter sign-up.
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const email = clean(body.email, 200);
  const lang = isLang(body.lang) ? LANG_META[body.lang].english : "";
  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
  }

  try {
    if (body.type === "newsletter") {
      await sendMail({
        subject: "Шинэ мэдээллийн бүртгэл",
        heading: "Мэдээлэл авахаар бүртгүүллээ",
        replyTo: email,
        rows: [
          ["Email", email],
          ["Хэл", lang],
        ],
      });
    } else {
      const name = clean(body.name, 120);
      const message = clean(body.message, 5000);
      if (!name || !message) {
        return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
      }
      const subject = clean(body.subject, 200);
      await sendMail({
        subject: `Шинэ хүсэлт: ${subject || name}`,
        heading: "Холбоо барих хуудаснаас шинэ хүсэлт ирлээ",
        replyTo: email,
        rows: [
          ["Нэр", name],
          ["Email", email],
          ["Гарчиг", subject],
          ["Хэл", lang],
          ["Мессеж", message],
        ],
      });
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("CONTACT MAIL ERROR:", error);
    return NextResponse.json({ ok: false, error: "Could not send message" }, { status: 502 });
  }
}
