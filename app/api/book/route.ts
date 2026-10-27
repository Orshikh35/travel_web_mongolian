import { NextResponse } from "next/server";
import { randomBytes } from "node:crypto";
import { clean, isEmail, sendMail } from "../../lib/mail";
import { LANG_META, isLang } from "../../i18n/config";
import en from "../../i18n/dictionaries/en";
import { COMPANY } from "../../data/company";
import { TOUR, isDeparture } from "../../data/tour";

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
  const departure = isDeparture(body.departure) ? body.departure : null;
  const date = departure === "private" ? clean(body.date, 20) : "";
  const travelers = Math.min(TOUR.maxTravelers, Math.max(1, Number(body.travelers) || 1));
  const notes = clean(body.notes, 3000);
  const lang = isLang(body.lang) ? LANG_META[body.lang].english : "";

  if (!name || !phone || !isEmail(email) || !departure || (departure === "private" && !date)) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const reference = `${COMPANY.bookingPrefix}-${randomBytes(3).toString("hex").toUpperCase()}`;
  // Emails go to the office in a fixed language, whatever language the guest used on the site.
  const tour = `${en.tour.name} (${en.tour.duration})`;
  const departureLabel = en.tour.departures[departure];

  try {
    await sendMail({
      subject: `Шинэ аяллын захиалга ${reference} — ${departureLabel}`,
      heading: `Шинэ захиалга ирлээ (${reference})`,
      replyTo: email,
      rows: [
        ["Аялал", tour],
        ["Хувилбар", departureLabel],
        ["Огноо", date],
        ["Нэр", name],
        ["Утас", phone],
        ["Email", email],
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
