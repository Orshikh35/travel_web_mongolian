import { Suspense } from "react";
import ToursView from "./ToursView";

export default function ToursPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <ToursView />
    </Suspense>
  );
}
