"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";

type Benefit = {
  title: string;
  description: string;
};

type Step = {
  title: string;
  description: string;
};

type LandingPageProps = {
  headline: string;
  subheadline: string;
  benefits: Benefit[];
  steps: Step[];
  ctaText: string;
  ctaHref: string;
  calHref: string;
};

export function LandingPage({
  headline,
  subheadline,
  benefits,
  steps,
  ctaText,
  ctaHref,
  calHref,
}: LandingPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28 lg:px-8 lg:pt-32">
          <AnimateOnScroll>
            <h1 className="font-serif text-[2.75rem] font-normal leading-[1.1] tracking-[-0.02em] text-text-primary md:text-[3.5rem] lg:text-[4rem]">
              {headline}
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.1}>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-text-secondary">
              {subheadline}
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="primary" size="md" href={ctaHref}>
                {ctaText}
              </Button>
              <a
                href={calHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                Or book a call directly
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-cream-dark">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">
          <AnimateOnScroll>
            <p className="text-xs font-medium uppercase tracking-widest text-text-muted">
              What you get
            </p>
          </AnimateOnScroll>
          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
            {benefits.map((benefit, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div>
                  <h3 className="text-[20px] font-medium text-text-primary">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                    {benefit.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">
          <AnimateOnScroll>
            <h2 className="font-serif text-[2rem] font-normal leading-[1.15] tracking-[-0.02em] text-text-primary md:text-[2.5rem]">
              How it works
            </h2>
          </AnimateOnScroll>
          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <AnimateOnScroll key={i} delay={i * 0.15}>
                <div className="flex flex-col gap-4">
                  <span className="text-[13px] font-medium uppercase tracking-widest text-text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[18px] font-medium text-text-primary">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8">
          <AnimateOnScroll>
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-serif text-[2rem] font-normal leading-[1.15] tracking-[-0.02em] text-text-inverse md:text-[2.5rem]">
                  Ready to automate?
                </h2>
                <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-text-inverse/70">
                  Tell us what&apos;s slowing you down. We&apos;ll send a free video audit showing exactly how AI can help — within 24 hours.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="inverse" size="md" href={ctaHref}>
                  {ctaText}
                </Button>
                <Button variant="outline" size="md" href={calHref} target="_blank" className="border-text-inverse/30 text-text-inverse hover:bg-text-inverse hover:text-navy">
                  Book a call
                </Button>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
