"use client";

import { works } from "@/lib/constants";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { SketchIllustration, type SketchType } from "@/components/ui/SketchIllustrations";
import { Button } from "@/components/ui/Button";

export function NewsSection() {
  /* Show first 3 works on homepage */
  const featured = works.slice(0, 3);

  return (
    <section id="news" className="bg-cream-light">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36 lg:px-8 lg:py-44">
        {/* Section label */}
        <AnimateOnScroll>
          <div className="flex items-center gap-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border-light">
              <span className="text-[13px] text-text-muted">5</span>
            </div>
            <div className="h-px w-16 bg-border-light" />
            <span className="text-[14px] font-normal text-text-muted">Works</span>
          </div>
        </AnimateOnScroll>

        {/* Header row */}
        <AnimateOnScroll delay={0.1}>
          <div className="mt-10 flex items-end justify-between">
            <h2 className="max-w-lg text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-text-primary md:text-[2.5rem] md:leading-[1.1]">
              Selected projects
            </h2>
          </div>
        </AnimateOnScroll>

        {/* Project cards grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {featured.map((work, i) => (
            <AnimateOnScroll key={work.title} delay={0.15 + i * 0.08}>
              <a href="/works" className="group block">
                {/* Sketch illustration thumbnail */}
                <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-sm bg-cream-dark transition-colors duration-300 group-hover:bg-cream">
                  <SketchIllustration
                    type={work.sketchType as SketchType}
                    className="h-full w-full p-6 opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>

                {/* Title + colored tag */}
                <div className="mt-4 flex items-center gap-2.5">
                  <h3 className="text-[15px] font-semibold leading-snug tracking-[-0.01em] text-text-primary transition-colors duration-200 group-hover:text-text-secondary">
                    {work.title}
                  </h3>
                  <span
                    className="rounded-full px-2 py-[2px] text-[9px] font-semibold uppercase tracking-[0.05em] text-white"
                    style={{ backgroundColor: work.categoryColor }}
                  >
                    {work.category}
                  </span>
                </div>
                <p className="mt-1.5 text-[13px] leading-relaxed text-text-secondary">
                  {work.description}
                </p>
              </a>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA: link to full works page */}
        <AnimateOnScroll delay={0.4}>
          <div className="mt-14 flex items-center justify-center">
            <Button variant="outline" size="md" href="/works">
              <span className="flex items-center gap-2.5">
                {/* Small pencil/sketch icon */}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="opacity-60">
                  <path
                    d="M11.5 1.5L14.5 4.5L5 14H2V11L11.5 1.5Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M9.5 3.5L12.5 6.5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                View all works
              </span>
            </Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
