# Eagle Land Tours

Website for **Eagle Land Tours** and its 7-day program *Altai & Golden Eagle Festival* in Bayan-Ölgii, Western Mongolia:
Ölgii → Altai Tavan Bogd → Potanin Glacier → Khoton & Khurgan lakes, Baga Turgen Waterfall → eagle hunter family in Ulaankhus → two days at the Golden Eagle Festival → departure.

Next.js 16 · React 19 · Tailwind CSS 4 · Framer Motion. Six languages: Mongolian, English, Russian, Chinese, Korean, Japanese.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

Booking and contact forms email the office through Resend. Set in `.env`:

```
RESEND_API_KEY=...
BOOKING_EMAIL_TO=office@example.com          # optional
BOOKING_EMAIL_FROM="Eagle Land Tours <bookings@your-domain>"   # optional
```

## Where things live

| What | File |
| --- | --- |
| Company email, phone, WhatsApp, booking prefix | `app/data/company.ts` |
| Price, max group size, photos, icons per day | `app/data/tour.ts` |
| All text (program, FAQ, pages) per language | `app/i18n/dictionaries/{en,mn,ru,zh,ko,ja}.ts` |
| Photos | `public/images/` |
| Printed day cards (posters) | `public/program/day-1.webp` … `day-7.webp` |

`en.ts` is the source of truth: every other language must have the same keys and the same number of days and activities
(icons and photos are matched by position). TypeScript fails the build if a language file drifts.

## Before going live

- Replace the placeholder email/phone in `app/data/company.ts`.
- Set `priceFrom` in `app/data/tour.ts` (0 shows “Price on request”).
- Update `tour.departures.festival` once the 2027 festival dates are announced.
- Check the *included / not included* lists in the dictionaries against what the company actually offers.

Pages: `/` home · `/tour` full program · `/book` booking request · `/about` · `/contact`. Old `/tours/*` links redirect to `/tour`.
