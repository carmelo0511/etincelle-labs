import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { ContactSection } from "@/components/sections/ContactSection";
import { ContactFooter } from "@/components/layout/ContactFooter";

export const metadata: Metadata = {
  title: "Contact Us | Etincelle",
  description:
    "Get in touch with Etincelle. Tell us about your operations challenges and we'll design a custom dashboard, automation, or AI tool for your Toronto business.",
  openGraph: {
    title: "Contact Us | Etincelle",
    description:
      "Start a project with Etincelle — AI-powered dashboards, automations, and tools for Toronto service businesses.",
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
