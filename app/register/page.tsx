"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AuthCard from "../components/AuthCard";
import Button from "../components/Button";
import { useLanguage } from "../context/LanguageContext";

const RegisterPage = () => {
  const router = useRouter();
  const { t } = useLanguage();
  const r = t.auth.register;
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
    <AuthCard title={r.title} subtitle={r.subtitle} footerText={r.haveAccount} footerLinkLabel={r.switch} footerHref="/login">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="register-first" className="field-label">
              {r.firstName}
            </label>
            <input id="register-first" required autoComplete="given-name" className="field-input" />
          </div>
          <div>
            <label htmlFor="register-last" className="field-label">
              {r.lastName}
            </label>
            <input id="register-last" required autoComplete="family-name" className="field-input" />
          </div>
        </div>
        <div>
          <label htmlFor="register-email" className="field-label">
            {r.email}
          </label>
          <input id="register-email" required type="email" autoComplete="email" className="field-input" placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="register-password" className="field-label">
            {r.password}
          </label>
          <input id="register-password" required type="password" autoComplete="new-password" minLength={8} className="field-input" />
        </div>
        <label className="flex items-start gap-3 text-sm leading-6 text-muted">
          <input required type="checkbox" className="mt-1 h-4 w-4 rounded accent-brand" />
          {r.agree}
        </label>
        <Button type="submit" variant="primary" className="w-full" isLoading={isLoading}>
          {r.submit}
        </Button>
      </form>
    </AuthCard>
  );
};

export default RegisterPage;
