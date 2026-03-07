"use client";

import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

const primaryText = "We are an AI operations studio.";
const secondaryText =
  "We deliver finished systems — not decks, not proposals, not retainers that drag on. If your business runs on manual work, we replace it with something that runs itself.";

export function MissionSection() {
  return (
    <section id="mission" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20 lg:px-8 lg:py-24">
        {/* Section label */}
        <AnimateOnScroll>
          <div className="flex items-center gap-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border-light">
              <span className="text-[13px] text-text-muted">1</span>
            </div>
            <div className="h-px w-16 bg-border-light" />
            <span className="text-[14px] font-normal text-text-muted">
              About
            </span>
          </div>
        </AnimateOnScroll>

        {/* Mission text */}
        <AnimateOnScroll>
          <div className="mt-14 md:mt-20">
            <h2 className="max-w-5xl text-[1.75rem] font-normal leading-[1.25] tracking-[-0.02em] sm:text-[2rem] md:text-[2.25rem] lg:text-[2.5rem]">
              <span className="text-text-primary">{primaryText}</span>{" "}
              <span className="text-text-secondary">{secondaryText}</span>
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Stats row */}
        <AnimateOnScroll delay={0.15}>
          <div className="mt-16 grid grid-cols-2 gap-8 md:mt-20 md:grid-cols-4 md:gap-12">
            <div>
              <div className="text-[2.5rem] font-semibold tracking-[-0.03em] text-text-primary md:text-[3rem]">
                8+
              </div>
              <div className="mt-1 text-[13px] uppercase tracking-[0.08em] text-text-muted">
                Hrs/week saved per client
              </div>
            </div>
            <div>
              <div className="text-[2.5rem] font-semibold tracking-[-0.03em] text-text-primary md:text-[3rem]">
                5
              </div>
              <div className="mt-1 text-[13px] uppercase tracking-[0.08em] text-text-muted">
                Days average to go live
              </div>
            </div>
            <div>
              <div className="text-[2.5rem] font-semibold tracking-[-0.03em] text-text-primary md:text-[3rem]">
                100%
              </div>
              <div className="mt-1 text-[13px] uppercase tracking-[0.08em] text-text-muted">
                Fixed pricing
              </div>
            </div>
            <div>
              <div className="text-[2.5rem] font-semibold tracking-[-0.03em] text-text-primary md:text-[3rem]">
                100%
              </div>
              <div className="mt-1 text-[13px] uppercase tracking-[0.08em] text-text-muted">
                Ownership
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
