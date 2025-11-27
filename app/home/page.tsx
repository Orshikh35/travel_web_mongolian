import { Suspense } from "react";
import BookTourPage from "./TourDetailPage";
import TourDetailPage from "./TourDetailPage";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white p-10">Loading...</div>}>
      <TourDetailPage />
    </Suspense>
  );
}
