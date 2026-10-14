"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthCard from "../components/AuthCard";
import Button from "../components/Button";
import { useLanguage } from "../context/LanguageContext";

const LoginPage = () => {
  const router = useRouter();
  const { t } = useLanguage();
  const l = t.auth.login;
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
    }, 1500);
  };

  return (
    <AuthCard title={l.title} subtitle={l.subtitle} footerText={l.noAccount} footerLinkLabel={l.switch} footerHref="/register">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="login-email" className="field-label">
            {l.email}
          </label>
          <input id="login-email" required type="email" autoComplete="email" className="field-input" placeholder="you@example.com" />
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="login-password" className="text-sm font-semibold text-ink">
              {l.password}
            </label>
            <Link href="/contact" className="text-xs font-semibold text-brand hover:text-brand-strong">
              {l.forgot}
            </Link>
          </div>
          <input id="login-password" required type="password" autoComplete="current-password" className="field-input" />
        </div>
        <Button type="submit" variant="primary" className="w-full" isLoading={isLoading}>
          {l.submit}
        </Button>
      </form>
    </AuthCard>
  );
};

export default LoginPage;
