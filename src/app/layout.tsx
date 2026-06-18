import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "StratGrove — Strategies for Growth",
    template: "%s — StratGrove",
  },
  description:
    "StratGrove is a 2026 marketing agency designing brand, digital, and AI-led growth systems for ambitious teams.",
  authors: [{ name: "StratGrove" }],
  openGraph: {
    title: "StratGrove — Strategies for Growth",
    description:
      "Brand, digital, web, SEO, AI SaaS and creative design — engineered for measurable growth.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
  icons: {
    icon: "/works/stratgrove-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
