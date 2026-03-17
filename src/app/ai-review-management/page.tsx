import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LandingPage } from "@/components/sections/LandingPage";

export const metadata: Metadata = {
  title: "AI Review Management | Respond to Reviews Automatically — Etincelle Labs",
  description:
    "An AI review manager that monitors Google, Yelp, and social platforms, drafts personalized responses, and helps you turn every review into a growth opportunity.",
  openGraph: {
    title: "AI Review Management — Etincelle Labs",
    description:
      "Respond to every review automatically. Your AI review manager monitors platforms, drafts replies, and protects your reputation 24/7.",
  },
};

export default function AIReviewManagementPage() {
  return (
    <>
      <Navbar />
      <main className="lg:ml-[200px]">
        <LandingPage
          headline="AI that manages your reviews — so you don't have to."
          subheadline="Every Google review, every Yelp mention, every social comment — monitored, analyzed, and responded to automatically. Your reputation stays strong without eating up your day."
          benefits={[
            {
              title: "Respond in minutes, not days",
              description:
                "Your AI drafts personalized, on-brand responses to every review — positive or negative — and sends them for your approval or posts automatically.",
            },
            {
              title: "Monitor every platform",
              description:
                "Google, Yelp, Facebook, Instagram — your AI watches them all and alerts you the moment a new review comes in.",
            },
            {
              title: "Turn negatives into wins",
              description:
                "Negative reviews get flagged immediately with suggested recovery responses. Address issues before they spiral — and show customers you care.",
            },
            {
              title: "Track your reputation over time",
              description:
                "See trends in your ratings, common praise, recurring complaints, and response times — all in a dashboard built for your business.",
            },
          ]}
          steps={[
            { title: "Connect your platforms", description: "We link your Google Business, Yelp, and social accounts in minutes." },
            { title: "Train your AI reviewer", description: "We teach it your brand voice, policies, and how you like to respond." },
            { title: "Reviews handled automatically", description: "Your AI monitors, drafts, and responds — you approve or let it run." },
          ]}
          ctaText="Start managing reviews with AI"
          ctaHref="/contact"
          calHref="https://cal.com/bryan-nakache-vse3wk"
        />
        <Footer />
      </main>
    </>
  );
}
