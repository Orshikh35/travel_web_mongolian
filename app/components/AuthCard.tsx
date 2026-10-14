import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  footerText: string;
  footerLinkLabel: string;
  footerHref: string;
  children: React.ReactNode;
};

const AuthCard = ({ title, subtitle, footerText, footerLinkLabel, footerHref, children }: Props) => (
  <div className="flex min-h-screen items-center bg-canvas pt-28 pb-16">
    <div className="container-shell">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[32px] border border-ink/8 bg-white shadow-lift md:grid-cols-2">
        <div className="relative hidden min-h-[560px] md:block">
          <Image src="/oo.jpg" alt="" fill sizes="50vw" className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-t from-ink/70 to-transparent" />
        </div>
        <div className="p-8 sm:p-10 md:p-12">
          <h1 className="text-3xl font-extrabold tracking-[-0.035em] text-ink">{title}</h1>
          <p className="mt-2 text-[15px] text-muted">{subtitle}</p>
          <div className="mt-8">{children}</div>
          <p className="mt-8 text-center text-sm text-muted">
            {footerText}{" "}
            <Link href={footerHref} className="font-bold text-brand hover:text-brand-strong">
              {footerLinkLabel}
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AuthCard;
