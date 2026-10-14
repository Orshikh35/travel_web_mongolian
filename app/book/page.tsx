import { Suspense } from "react";
import BookingView from "./BookingView";

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-canvas" />}>
      <BookingView />
    </Suspense>
  );
}
