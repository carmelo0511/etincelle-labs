import type { Metadata } from "next";
import { inter, playfairDisplay } from "@/lib/fonts";
import "./globals.css";

const siteUrl = "https://etincelle.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Etincelle | AI Ops Studio — Toronto",
    template: "%s | Etincelle",
  },
  description:
    "AI operations studio in Toronto. We build finished dashboards, automations, and AI-powered systems for service businesses — fixed price, delivered in days.",
  keywords: [
    "AI operations studio",
    "Toronto business automation",
    "custom dashboards",
    "workflow automation",
    "AI-powered tools",
    "operations redesign",
    "small business automation Toronto",
  ],
  authors: [{ name: "Bryan Nakache", url: siteUrl }],
  creator: "Etincelle Labs",
  publisher: "Etincelle Labs",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Etincelle",
    title: "Etincelle | AI Ops Studio — Toronto",
    description:
      "Finished systems for your business — dashboards, automations, AI tools. Fixed price, delivered in days, 100% ownership.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Etincelle | AI Ops Studio — Toronto",
    description:
      "Finished systems for your business — dashboards, automations, AI tools. Fixed price, delivered in days.",
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
        {/* Geo meta tags for hyperlocal Toronto SEO */}
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Toronto" />
        <meta name="geo.position" content="43.6532;-79.3832" />
        <meta name="ICBM" content="43.6532, -79.3832" />
      </head>
      <body>{children}</body>
    </html>
  );
}
