import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LandingPage } from "@/components/sections/LandingPage";

export const metadata: Metadata = {
  title: "AI Chatbot for Business | Capture Leads 24/7 — Etincelle Labs",
  description:
    "An AI chatbot trained on your business that engages website visitors, answers questions, captures leads, and books appointments — 24/7 without lifting a finger.",
  openGraph: {
    title: "AI Chatbot for Business — Etincelle Labs",
    description:
      "Engage visitors, capture leads, and book appointments automatically with an AI chatbot trained on your business.",
  },
};

export default function AIChatbotPage() {
  return (
    <>
      <Navbar />
      <main className="lg:ml-[200px]">
        <LandingPage
          headline="An AI chatbot that turns visitors into customers."
          subheadline="Most website visitors leave without contacting you. Your AI chatbot engages them instantly — answering questions, capturing leads, and booking appointments before they bounce."
          benefits={[
            {
              title: "Engage visitors the moment they land",
              description:
                "Your AI chatbot greets visitors with the right message at the right time — no annoying popups, just smart, helpful conversations.",
            },
            {
              title: "Trained on your business",
              description:
                "It knows your services, pricing, availability, and policies. Visitors get accurate answers instantly — not generic bot responses.",
            },
            {
              title: "Capture and qualify leads",
              description:
                "Every conversation captures contact info and intent. Your AI qualifies leads and routes hot prospects to your team in real-time.",
            },
            {
              title: "Book appointments directly",
              description:
                "Connected to your calendar, your chatbot can schedule appointments, consultations, or demos without any back-and-forth.",
            },
          ]}
          steps={[
            { title: "Share your business info", description: "We learn your services, pricing, FAQs, and how you want to engage visitors." },
            { title: "We build your chatbot", description: "Trained on your business, styled to match your brand, deployed on your site." },
            { title: "Start converting visitors", description: "Your chatbot goes live and starts capturing leads and booking appointments 24/7." },
          ]}
          ctaText="Get your AI chatbot"
          ctaHref="/contact"
          calHref="https://cal.com/bryan-nakache-vse3wk"
        />
        <Footer />
      </main>
    </>
  );
}
