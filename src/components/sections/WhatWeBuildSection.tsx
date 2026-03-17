import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const solutions = [
  {
    title: "AI Receptionist",
    description:
      "Answers every call, qualifies leads, books appointments. 24/7.",
  },
  {
    title: "AI Review Manager",
    description:
      "Responds to every Google and Yelp review in your brand voice. Instantly.",
  },
  {
    title: "AI Lead Capture",
    description:
      "A chatbot on your site that captures, qualifies, and follows up with leads while you sleep.",
  },
  {
    title: "AI Booking Assistant",
    description:
      "Handles scheduling, confirmations, reminders, and no-show follow-ups automatically.",
  },
  {
    title: "Workflow Automation",
    description:
      "Connects your tools and eliminates copy-paste busywork across your operations.",
  },
  {
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

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution, i) => (
            <AnimateOnScroll key={solution.title} delay={0.08 + i * 0.06} className="h-full">
              <div className="flex h-full flex-col rounded-xl border border-border-light bg-cream-light p-7 md:p-8 transition-colors duration-200 hover:bg-cream-dark/50">
                <span className="text-[13px] tabular-nums text-text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-serif text-[1.25rem] font-medium leading-snug tracking-[-0.01em] text-text-primary">
                  {solution.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-relaxed text-text-secondary">
                  {solution.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
