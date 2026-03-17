import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { ContactSection } from "@/components/sections/ContactSection";
import { ContactFooter } from "@/components/layout/ContactFooter";

export const metadata: Metadata = {
  title: "Get Started | Free AI Consultation — Etincelle Labs Toronto",
  description:
    "Book a free consultation with Etincelle Labs. Tell us what's slowing you down and we'll show you how AI can fix it. Response within 24 hours.",
  openGraph: {
    title: "Get Started | Free AI Consultation — Etincelle Labs Toronto",
    description:
      "Book a free consultation with Etincelle Labs. Tell us what's slowing you down and we'll show you how AI can fix it.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="lg:ml-[200px]">
        <ContactSection />
        <ContactFooter />
      </main>
    </>
  );
}
