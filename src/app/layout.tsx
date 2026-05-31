import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vintage Cube for Calgary Food Bank — Reliquary Cards",
  description:
    "64-player charity vintage cube tournament hosted by Reliquary Cards in Calgary, supporting the Calgary Food Bank. August 1–15, 2026. Top prize: Underground Sea.",
  icons: {
    icon: [
      { url: "/Reliquary-Favicon.png" },
      { url: "/Reliquary-Favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/Reliquary-Favicon.png",
  },
  openGraph: {
    title: "Vintage Cube for Calgary Food Bank — Reliquary Cards",
    description:
      "Draft the most broken cards in Magic — for the Calgary Food Bank. Top prize: Underground Sea.",
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
