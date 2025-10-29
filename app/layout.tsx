import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Magic of Bromo",
  description: "Experience the Magic of Bromo – Travel, stays, and stories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body">{children}</body>
    </html>
  );
}
