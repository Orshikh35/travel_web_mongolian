"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import { ChevronDownIcon, ClockIcon, PinIcon, ShieldIcon } from "../components/Icons";
import { useLanguage } from "../context/LanguageContext";
import { TOURS, findTourBySlug } from "../data/tours";
import { formatDate, formatPrice, todayIso } from "../lib/format";
import { postJson, SubmitStatus } from "../lib/postJson";

const clampTravelers = (value: number) => (Number.isFinite(value) ? Math.min(50, Math.max(1, Math.round(value))) : 1);

const BookingView = () => {
  const { lang, t } = useLanguage();
  const b = t.booking;
  const router = useRouter();
  const searchParams = useSearchParams();

  const [form, setForm] = useState(() => ({
    name: "",
    email: "",
    phone: "",
    tour: findTourBySlug(searchParams.get("tour") ?? undefined)?.slug ?? "",
    date: searchParams.get("date") ?? "",
    travelers: clampTravelers(Number(searchParams.get("travelers") ?? 2)),
    notes: "",
  }));
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const tour = findTourBySlug(form.tour);
  const update = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) => setForm((current) => ({ ...current, [key]: value }));

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");
    const result = await postJson<{ reference: string }>("/api/book", {
      ...form,
      tourTitle: tour ? tour.title.en : "",
      lang,
    });
    if (!result) {
      setStatus("error");
      return;
    }
    const params = new URLSearchParams({ ref: result.reference, tour: form.tour, travelers: String(form.travelers) });
    if (form.date) params.set("date", form.date);
    router.push(`/book/confirmation?${params.toString()}`);
  };

  return (
    <div className="bg-canvas pt-28 pb-24 md:pt-32">
      <div className="container-shell">
        <SectionHeading as="h1" eyebrow={b.eyebrow} title={b.title} description={b.description} className="py-8" />

        <ol className="mt-4 grid gap-3 sm:grid-cols-3">
          {b.steps.map((step, index) => (
            <li key={step} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 text-sm font-semibold text-ink-soft shadow-soft">
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  index === 0 ? "bg-brand text-white" : "bg-canvas text-faint"
                }`}
              >
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="premium-card p-6 md:p-8">
              <h2 className="text-xl font-bold text-ink">{b.contactTitle}</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label htmlFor="book-name" className="field-label">
                    {b.name}
                  </label>
                  <input id="book-name" required autoComplete="name" value={form.name} onChange={(e) => update("name", e.target.value)} className="field-input" />
                </div>
                <div>
                  <label htmlFor="book-email" className="field-label">
                    {b.email}
                  </label>
                  <input
                    id="book-email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="field-input"
                  />
                </div>
                <div>
                  <label htmlFor="book-phone" className="field-label">
                    {b.phone}
                  </label>
                  <input
                    id="book-phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className="field-input"
                  />
                </div>
              </div>
            </div>

            <div className="premium-card p-6 md:p-8">
              <h2 className="text-xl font-bold text-ink">{b.tripTitle}</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label htmlFor="book-tour" className="field-label">
                    {b.tour}
                  </label>
                  <div className="relative">
                    <select
                      id="book-tour"
                      required
                      value={form.tour}
                      onChange={(e) => update("tour", e.target.value)}
                      className="field-input cursor-pointer appearance-none pr-11"
                    >
                      <option value="" disabled>
                        {b.selectTour}
                      </option>
                      {TOURS.map((item) => (
                        <option key={item.slug} value={item.slug}>
                          {item.title[lang]}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-faint" />
                  </div>
                </div>
                <div>
                  <label htmlFor="book-date" className="field-label">
                    {b.date}
                  </label>
                  <input
                    id="book-date"
                    type="date"
                    required
                    min={todayIso()}
                    suppressHydrationWarning
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    className="field-input"
                  />
                </div>
                <div>
                  <label htmlFor="book-travelers" className="field-label">
                    {b.travelers}
                  </label>
                  <input
                    id="book-travelers"
                    type="number"
                    min={1}
                    max={50}
                    required
                    value={form.travelers}
                    onChange={(e) => update("travelers", clampTravelers(Number(e.target.value)))}
                    className="field-input"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="book-notes" className="field-label">
                    {b.notes}
                  </label>
                  <textarea
                    id="book-notes"
                    rows={4}
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    placeholder={b.notesPlaceholder}
                    className="field-input resize-y"
                  />
                </div>
              </div>
            </div>

            {status === "error" ? (
              <p role="alert" className="rounded-2xl border border-sand/30 bg-sand-soft px-5 py-4 text-sm font-semibold text-sand-strong">
                {t.common.errorGeneric}
              </p>
            ) : null}

            <Button type="submit" variant="secondary" size="lg" isLoading={status === "sending"} className="w-full sm:w-auto">
              {status === "sending" ? t.common.sending : b.submit}
            </Button>
          </form>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="premium-card overflow-hidden">
              {tour ? (
                <div className="relative aspect-video">
                  <Image src={tour.coverImage} alt={tour.title[lang]} fill sizes="380px" className="object-cover" />
                </div>
              ) : null}
              <div className="p-6">
                <h2 className="text-xs font-bold tracking-[0.18em] text-faint uppercase">{b.summaryTitle}</h2>
                {tour ? (
                  <>
                    <p className="mt-3 text-lg leading-snug font-bold text-ink">{tour.title[lang]}</p>
                    <div className="mt-2 space-y-1.5 text-sm text-muted">
                      <p className="flex items-center gap-2">
                        <PinIcon className="h-4 w-4" />
                        {tour.destination[lang]}
                      </p>
                      <p className="flex items-center gap-2">
                        <ClockIcon className="h-4 w-4" />
                        {tour.duration[lang]}
                      </p>
                    </div>
                  </>
                ) : (
                  <p className="mt-3 text-sm text-muted">{b.selectTour}</p>
                )}

                <dl className="mt-5 space-y-3 border-t border-ink/8 pt-5 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">{b.date}</dt>
                    <dd className="text-right font-semibold text-ink">{form.date ? formatDate(form.date, lang) : "—"}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted">{b.travelers}</dt>
                    <dd className="font-semibold text-ink">{t.common.travelers(form.travelers)}</dd>
                  </div>
                  {tour && tour.priceFrom > 0 ? (
                    <div className="flex justify-between gap-4 border-t border-ink/8 pt-3 text-base">
                      <dt className="font-semibold text-ink">{b.estTotal}</dt>
                      <dd className="font-extrabold text-ink">{formatPrice(tour.priceFrom * form.travelers, tour.currency, lang)}</dd>
                    </div>
                  ) : null}
                </dl>

                <p className="mt-5 flex gap-3 rounded-2xl bg-brand-soft p-4 text-sm leading-6 text-brand-strong">
                  <ShieldIcon className="mt-0.5 h-5 w-5 shrink-0" />
                  {b.noPayment}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BookingView;
