import { Suspense } from "react";
import BookTourPage from "./BookTourPage";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-white p-10">Loading...</div>}>
      <BookTourPage />
    </Suspense>
  );
}
