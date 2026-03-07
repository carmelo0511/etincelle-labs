import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
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
      "@id": "https://etincelle.ca/#organization",
      name: "Etincelle Labs",
      url: "https://etincelle.ca",
      email: "hello@etincelle.ca",
      description:
        "AI operations studio in Toronto. We build finished dashboards, automations, and AI-powered systems for service businesses.",
      founder: {
        "@type": "Person",
        name: "Bryan Nakache",
      },
      areaServed: {
        "@type": "City",
        name: "Toronto",
      },
      sameAs: [
        "https://linkedin.com/company/etincelle-labs",
        "https://x.com/etincelle_labs",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://etincelle.ca/#localbusiness",
      name: "Etincelle Labs",
      url: "https://etincelle.ca",
      email: "hello@etincelle.ca",
      description:
        "AI operations studio in Toronto specializing in custom dashboards, workflow automation, and AI-powered tools for service businesses.",
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
      "@id": "https://etincelle.ca/#website",
      url: "https://etincelle.ca",
      name: "Etincelle",
      publisher: { "@id": "https://etincelle.ca/#organization" },
    },
    {
      "@type": "Service",
      name: "AI Operations Systems",
      provider: { "@id": "https://etincelle.ca/#organization" },
      description:
        "Custom dashboards, workflow automation, AI-powered tools, and digital redesigns delivered in days at a fixed price.",
      areaServed: {
        "@type": "City",
        name: "Toronto",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Project",
          price: "1999",
          priceCurrency: "CAD",
          description:
            "A complete system — designed, built, and delivered in days. You own everything.",
        },
        {
          "@type": "Offer",
          name: "Support",
          price: "199",
          priceCurrency: "CAD",
          description:
            "Ongoing monthly maintenance, updates, and improvements after delivery.",
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
            text: "Service businesses in Toronto — restaurants, photo studios, salons, gyms, retail shops, clinics.",
          },
        },
        {
          "@type": "Question",
          name: "How long does a typical project take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most projects go live within 5 business days.",
          },
        },
        {
          "@type": "Question",
          name: "Do you charge hourly or per project?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Per project with a fixed price. No surprise invoices, no retainer lock-ins.",
          },
        },
        {
          "@type": "Question",
          name: "What happens after the project is delivered?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You own everything. If you want ongoing support, we offer optional monthly plans.",
          },
        },
        {
          "@type": "Question",
          name: "Can you work with our existing tools?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We integrate with whatever you already use — Google Workspace, Notion, Airtable, Shopify, Square, and hundreds more.",
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
