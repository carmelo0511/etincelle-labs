import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LandingPage } from "@/components/sections/LandingPage";

export const metadata: Metadata = {
  title: "AI Automation for Toronto Businesses | AI Agents & Workflows — Etincelle Labs",
  description:
    "Automate your Toronto business with AI agents that answer phones, manage reviews, capture leads, and eliminate busywork. Monthly plans from $297. Free consultation.",
  openGraph: {
    title: "AI Automation for Toronto Businesses — Etincelle Labs",
    description:
      "AI agents that answer phones, manage reviews, capture leads, and automate your operations. Built in days, not months.",
  },
};

export default function AIAutomationTorontoPage() {
  return (
    <>
      <Navbar />
      <main className="lg:ml-[200px]">
        <LandingPage
          headline="AI automation for Toronto businesses."
          subheadline="Stop losing time to manual work. Our AI agents handle your phones, reviews, leads, and daily operations — so you can focus on what actually grows your business."
          benefits={[
            {
              title: "Answer every call, 24/7",
              description:
                "Never miss a customer call again. Your AI receptionist picks up instantly, books appointments, and answers FAQs — even at 2 AM.",
            },
            {
              title: "Automate the busywork",
              description:
                "From follow-up emails to invoice reminders to review responses — we connect your tools and let AI handle the repetitive tasks.",
            },
            {
              title: "Capture more leads",
              description:
                "AI-powered chat on your website engages visitors instantly, qualifies leads, and routes them to your team before they bounce.",
            },
            {
              title: "See everything in one dashboard",
              description:
                "Track calls, leads, reviews, and operations in a single custom dashboard built around the metrics that matter to your business.",
            },
          ]}
          steps={[
            { title: "Free audit", description: "We map your workflows and identify where AI saves you the most time." },
            { title: "Custom build", description: "We design and deploy your AI agents and automations in days, not months." },
            { title: "Go live", description: "Your system runs 24/7. You own everything — no lock-ins, no retainer traps." },
          ]}
          ctaText="Get a free AI audit for your business"
          ctaHref="/contact"
          calHref="https://cal.com/bryan-nakache-vse3wk"
        />
        <Footer />
      </main>
    </>
  );
}
