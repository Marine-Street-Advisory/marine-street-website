import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const DESCRIPTION =
  "Marine Street solves complexity for companies that touch real estate. Advisory, technology, and capital for companies that use real estate and for real estate investors and operators.";

export const metadata: Metadata = {
  metadataBase: new URL("https://marine-street.com"),
  title: {
    default: "Marine Street | Advise · Build · Invest",
    template: "%s | Marine Street",
  },
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://marine-street.com",
    siteName: "Marine Street",
    title: "Marine Street | Advise · Build · Invest",
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marine Street | Advise · Build · Invest",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/fonts/newsreader-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/archivo-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
