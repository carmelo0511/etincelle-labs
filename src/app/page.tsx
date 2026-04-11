import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhatWeBuildSection } from "@/components/sections/WhatWeBuildSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AIAuditSection } from "@/components/sections/AIAuditSection";
import { Footer } from "@/components/layout/Footer";
import Script from "next/script";

const CTABanner = dynamic(() => import("@/components/sections/CTABanner").then(m => ({ default: m.CTABanner })), { ssr: true });
const StepsSection = dynamic(() => import("@/components/sections/StepsSection").then(m => ({ default: m.StepsSection })), { ssr: true });
const NewsSection = dynamic(() => import("@/components/sections/NewsSection").then(m => ({ default: m.NewsSection })), { ssr: true });
const FAQSection = dynamic(() => import("@/components/sections/FAQSection").then(m => ({ default: m.FAQSection })), { ssr: true });

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
        "https://www.linkedin.com/in/bryannakache/",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://etincellelabs.com/#localbusiness",
      name: "Etincelle Labs",
      url: "https://etincellelabs.com",
      email: "hello@etincellelabs.com",
      description:
        "AI operations studio in Toronto. We build AI agents that answer your phones, manage your reviews, capture leads, and automate your operations.",
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
        "AI agents, workflow automations, and smart dashboards for businesses — including AI receptionists, review managers, lead capture, and booking assistants.",
      areaServed: {
        "@type": "City",
        name: "Toronto",
      },
      offers: [
        {
          "@type": "Offer",
          name: "AI Audit",
          price: "999",
          priceCurrency: "CAD",
          description:
            "60-min process mapping call with written report and prioritized automation roadmap. Credited toward your build if you move forward.",
        },
        {
          "@type": "Offer",
          name: "AI Agent",
          price: "500",
          priceCurrency: "CAD",
          description:
            "One AI agent — $500–$1,000 one-time setup, $300–$500/month to keep it running and optimized.",
        },
        {
          "@type": "Offer",
          name: "Custom Project",
          price: "1500",
          priceCurrency: "CAD",
          description:
            "AI agents, workflow automations, and internal tools. Fixed price agreed upfront. You own everything we build.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I get started if I'm not sure what I need?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start with our $999 AI Audit. In one 60-min call we map your entire operation, rank your biggest time and money wasters, and deliver a prioritized automation roadmap. If you move forward with a build, the $999 is credited toward your project.",
          },
        },
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
            text: "Yes. Most clients start with a single AI agent solving their biggest pain point. Once they see results, they expand to a custom project to automate more of their operations.",
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
        <AIAuditSection />
        <StepsSection />
        <CTABanner />
        <NewsSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
}
