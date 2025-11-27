import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, date, notes } = body;

    await resend.emails.send({
      from: "Orshikh Travel <onboarding@resend.dev>",
      to: "batorshikh35@gmail.com",
      subject: "Шинэ аяллын захиалга",
      html: `
        <h2>Шинэ захиалга ирлээ</h2>
        <p><b>Нэр:</b> ${name}</p>
        <p><b>Утас:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Огноо:</b> ${date}</p>
        <p><b>Тайлбар:</b> ${notes}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("MAIL ERROR:", error);
    return NextResponse.json({ success: false, error });
  }
}
