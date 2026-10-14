import { Suspense } from "react";
import ContactView from "./ContactView";

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <ContactView />
    </Suspense>
  );
}
