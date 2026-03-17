import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Phone, Star, MessageSquare, CalendarCheck, Workflow, Bot } from "lucide-react";

const solutions = [
  {
    icon: Phone,
    title: "AI Receptionist",
    description:
      "Answers every call, qualifies leads, books appointments. 24/7.",
  },
  {
    icon: Star,
    title: "AI Review Manager",
    description:
      "Responds to every Google and Yelp review in your brand voice. Instantly.",
  },
  {
    icon: MessageSquare,
    title: "AI Lead Capture",
    description:
      "A chatbot on your site that captures, qualifies, and follows up with leads while you sleep.",
  },
  {
    icon: CalendarCheck,
    title: "AI Booking Assistant",
    description:
      "Handles scheduling, confirmations, reminders, and no-show follow-ups automatically.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Connects your tools and eliminates copy-paste busywork across your operations.",
  },
  {
    icon: Bot,
    title: "Custom AI Agent",
    description:
      "Something else? We build agents for whatever your business needs.",
  },
];

export function WhatWeBuildSection() {
  return (
    <section id="solutions" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8 lg:py-36">
        <AnimateOnScroll>
          <h2 className="max-w-2xl text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-text-primary md:text-[2.5rem] md:leading-[1.1]">
            AI agents tailored to your business
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-text-secondary">
            Tell us what&apos;s slowing you down. We&apos;ll build the agent
            that fixes it.
          </p>
        </AnimateOnScroll>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, i) => {
            const Icon = solution.icon;
            return (
              <AnimateOnScroll key={solution.title} delay={0.08 + i * 0.06}>
                <div className="flex flex-col rounded-xl bg-cream-dark p-7 md:p-8">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-text-primary/[0.06]">
                    <Icon className="h-5 w-5 text-text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 text-[1rem] font-semibold tracking-[-0.01em] text-text-primary">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">
                    {solution.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
