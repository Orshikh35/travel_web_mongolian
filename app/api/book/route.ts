import { NextResponse } from "next/server";
import { randomBytes } from "node:crypto";
import { clean, isEmail, sendMail } from "../../lib/mail";
import { LANG_META, isLang } from "../../i18n/config";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = clean(body.name, 120);
  const phone = clean(body.phone, 60);
  const email = clean(body.email, 200);
  const date = clean(body.date, 20);
  const tour = clean(body.tourTitle, 200) || clean(body.tour, 120);
  const travelers = Math.min(50, Math.max(1, Number(body.travelers) || 1));
  const notes = clean(body.notes, 3000);
  const lang = isLang(body.lang) ? LANG_META[body.lang].english : "";

  if (!name || !phone || !isEmail(email) || !tour) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const reference = `NH-${randomBytes(3).toString("hex").toUpperCase()}`;

  try {
    await sendMail({
      subject: `Шинэ аяллын захиалга ${reference} — ${tour}`,
      heading: `Шинэ захиалга ирлээ (${reference})`,
      replyTo: email,
      rows: [
        ["Аялал", tour],
        ["Нэр", name],
        ["Утас", phone],
        ["Email", email],
        ["Огноо", date],
        ["Аялагчид", String(travelers)],
        ["Хэл", lang],
        ["Тайлбар", notes],
      ],
    });
    return NextResponse.json({ ok: true, reference });
  } catch (error) {
    console.error("BOOKING MAIL ERROR:", error);
    return NextResponse.json({ ok: false, error: "Could not send booking" }, { status: 502 });
  }
}
