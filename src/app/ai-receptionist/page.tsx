import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LandingPage } from "@/components/sections/LandingPage";

export const metadata: Metadata = {
  title: "AI Receptionist for Small Business | Never Miss a Call — Etincelle Labs",
  description:
    "An AI receptionist that answers your business phone 24/7, books appointments, answers FAQs, and routes calls — so you never lose a customer to voicemail again.",
  openGraph: {
    title: "AI Receptionist for Small Business — Etincelle Labs",
    description:
      "Never miss a call again. Your AI receptionist answers 24/7, books appointments, and handles FAQs automatically.",
  },
};

export default function AIReceptionistPage() {
  return (
    <>
      <Navbar />
      <main className="lg:ml-[200px]">
        <LandingPage
          headline="An AI receptionist that never misses a call."
          subheadline="Your customers call. Your AI picks up — instantly. It answers questions, books appointments, takes messages, and routes urgent calls to your team. 24/7, no hold music."
          benefits={[
            {
              title: "Answers instantly, every time",
              description:
                "No voicemail, no missed calls. Your AI receptionist picks up on the first ring and handles conversations naturally — day or night.",
            },
            {
              title: "Books appointments automatically",
              description:
                "Connected to your calendar, it schedules appointments in real-time without back-and-forth. Customers get confirmed instantly.",
            },
            {
              title: "Knows your business inside out",
              description:
                "Trained on your services, pricing, hours, and FAQs. It answers like a team member who's been with you for years.",
            },
            {
              title: "Routes what matters to you",
              description:
                "Urgent calls get forwarded to your phone. Everything else is handled, logged, and summarized — so you stay in control without being interrupted.",
            },
          ]}
          steps={[
            { title: "Tell us your workflow", description: "We learn how your business handles calls, bookings, and customer questions." },
            { title: "We build your AI receptionist", description: "Trained on your business, connected to your tools, ready in days." },
            { title: "It picks up the phone", description: "Your AI receptionist goes live. You get summaries, logs, and total control." },
          ]}
          ctaText="Get your AI receptionist"
          ctaHref="/contact"
          calHref="https://cal.com/bryan-nakache-vse3wk"
        />
        <Footer />
      </main>
    </>
  );
}
