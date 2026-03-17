import type { Metadata } from "next";
import { inter, playfairDisplay } from "@/lib/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const siteUrl = "https://etincellelabs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI Operations Studio in Toronto | AI Agents, Automation & Smart Systems — Etincelle Labs",
    template: "%s | Etincelle",
  },
  description:
    "Toronto AI operations studio building custom AI agents, workflow automation, and smart systems for businesses. AI receptionist, review management, lead capture, and more. Monthly plans from $297.",
  keywords: [
    "AI operations studio",
    "AI agents Toronto",
    "AI receptionist",
    "AI automation Toronto",
    "workflow automation",
    "AI review management",
    "AI chatbot",
    "business automation Toronto",
  ],
  authors: [{ name: "Bryan Nakache", url: siteUrl }],
  creator: "Etincelle Labs",
  publisher: "Etincelle Labs",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Etincelle Labs",
    title: "Etincelle Labs | AI Operations Studio — Toronto",
    description:
      "We build AI agents that handle your calls, reviews, bookings, and leads — 24/7. Built for your business in days.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Etincelle Labs | AI Operations Studio — Toronto",
    description:
      "We build AI agents that handle your calls, reviews, bookings, and leads — 24/7. Built for your business in days.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <head>
        {/* Preconnect to Google Fonts CDN for faster font loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="PASTE_YOUR_VERIFICATION_CODE_HERE" />
        {/* Geo meta tags for hyperlocal Toronto SEO */}
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        <meta name="geo.position" content="43.6532;-79.3832" />
        <meta name="ICBM" content="43.6532, -79.3832" />
      </head>
      <body>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
