import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhatWeBuildSection } from "@/components/sections/WhatWeBuildSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { StepsSection } from "@/components/sections/StepsSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Footer } from "@/components/layout/Footer";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://etincellelabs.com/#organization",
      name: "Etincelle Labs",
      url: "https://etincellelabs.com",
      email: "hello@etincellelabs.com",
      description:
        "AI operations studio in Toronto. We build AI agents, workflow automations, and smart dashboards that handle your phones, reviews, leads, and busywork — so you can focus on growth.",
      founder: {
        "@type": "Person",
        name: "Bryan Nakache",
      },
      areaServed: {
        "@type": "City",
        name: "Toronto",
      },
      knowsAbout: [
        "AI agents",
        "AI receptionist",
        "AI review management",
        "AI chatbot",
        "workflow automation",
        "business automation Toronto",
        "AI operations",
        "custom dashboards",
      ],
      sameAs: [
        "https://linkedin.com/company/etincelle-labs",
        "https://x.com/etincelle_labs",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://etincellelabs.com/#localbusiness",
      name: "Etincelle Labs",
      url: "https://etincellelabs.com",
      email: "hello@etincellelabs.com",
      description:
        "AI operations studio in Toronto. We build AI agents that answer your phones, manage your reviews, capture leads, and automate your operations — monthly plans from $297/mo.",
      founder: {
        "@type": "Person",
        name: "Bryan Nakache",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toronto",
        addressRegion: "ON",
        addressCountry: "CA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 43.6532,
        longitude: -79.3832,
      },
      areaServed: {
        "@type": "City",
        name: "Toronto",
      },
      knowsAbout: [
        "AI agents",
        "AI receptionist",
        "AI review management",
        "AI chatbot",
        "workflow automation",
        "business automation Toronto",
      ],
      priceRange: "$$",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://etincellelabs.com/#website",
      url: "https://etincellelabs.com",
      name: "Etincelle Labs",
      publisher: { "@id": "https://etincellelabs.com/#organization" },
    },
    {
      "@type": "Service",
      name: "AI Operations Systems",
      provider: { "@id": "https://etincellelabs.com/#organization" },
      description:
        "AI agents, workflow automations, and smart dashboards for businesses — including AI receptionists, review managers, lead capture, and booking assistants. Monthly plans from $297/mo.",
      areaServed: {
        "@type": "City",
        name: "Toronto",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Essentials",
          price: "297",
          priceCurrency: "CAD",
          description:
            "One AI agent tailored to your business with dashboard, monthly check-in, and email support. $500 one-time setup.",
        },
        {
          "@type": "Offer",
          name: "Growth",
          price: "697",
          priceCurrency: "CAD",
          description:
            "Unlimited AI agents and automations, custom integrations, bi-weekly optimization calls, and priority support. $1,500 one-time setup.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What kind of businesses do you work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Any business that's losing time to manual work, missed calls, or slow follow-ups. We've worked with restaurants, clinics, studios, home service companies, and more — but our AI agents adapt to any industry.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a typical project take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most projects go live within 5 business days. We move fast because we use AI-native tools and proven systems — no committees, no scope creep.",
          },
        },
        {
          "@type": "Question",
          name: "Do you charge hourly or per project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Per project with a fixed price. You know exactly what you're paying before we start. No surprise invoices, no retainer lock-ins.",
          },
        },
        {
          "@type": "Question",
          name: "What happens after the project is delivered?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You own everything. The system runs whether we're involved or not. If you want ongoing support, we offer optional monthly plans.",
          },
        },
        {
          "@type": "Question",
          name: "Can you work with our existing tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. We integrate with whatever you already use — Google Workspace, Notion, Airtable, Shopify, Square, Make.com, Zapier, GoHighLevel, and hundreds more via APIs and automation platforms.",
          },
        },
        {
          "@type": "Question",
          name: "What's an AI agent?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "An AI agent is a system that handles a specific job for your business automatically — like answering phone calls, responding to reviews, capturing leads on your website, or booking appointments. It runs 24/7, learns your business, and gets better over time.",
          },
        },
        {
          "@type": "Question",
          name: "Can I start small and upgrade later?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Most clients start with our Essentials plan — one AI agent solving their biggest pain point. Once they see results, they upgrade to Growth to automate more of their operations.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        strategy="afterInteractive"
      >{JSON.stringify(jsonLd)}</Script>
      <Navbar />
      <main data-sidebar="" className="lg:ml-[200px]">
        <HeroSection />
        <MissionSection />
        <WhatWeBuildSection />
        <ProcessSection />
        <ServicesSection />
        <StepsSection />
        <CTABanner />
        <NewsSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
