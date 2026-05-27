import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Charity Vintage Cube — Reliquary Cards Calgary",
  description:
    "64-player charity vintage cube tournament hosted by Reliquary Cards in Calgary, Alberta. August 1–15, 2026. Top prize: Underground Sea.",
  openGraph: {
    title: "Charity Vintage Cube — Reliquary Cards Calgary",
    description:
      "Draft the most broken cards in Magic — for charity. Top prize: Underground Sea.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
