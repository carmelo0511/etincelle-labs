"use client";

import { useState } from "react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { faqs } from "@/lib/constants";

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const id = `faq-${index}`;

  return (
    <div className="border-b border-border-light">
      <button
        type="button"
        id={`${id}-question`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`${id}-answer`}
        className="flex w-full items-center justify-between py-6 text-left md:py-7"
      >
        <span className="pr-8 text-[1rem] font-medium text-text-primary md:text-[1.1rem]">
          {question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className={`shrink-0 text-text-muted transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <path
            d="M10 4v12M4 10h12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div
        id={`${id}-answer`}
        role="region"
        aria-labelledby={`${id}-question`}
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] pb-6" : "max-h-0"
        }`}
      >
        <p className="max-w-2xl text-[15px] leading-relaxed text-text-secondary">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36 lg:px-8 lg:py-44">
        <AnimateOnScroll>
          <div className="flex items-center gap-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border-light">
              <span className="text-[13px] text-text-muted">6</span>
            </div>
            <div className="h-px w-16 bg-border-light" />
            <span className="text-[14px] font-normal text-text-muted">
              FAQ
            </span>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <h2 className="mt-10 max-w-md text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-text-primary md:text-[2.5rem] md:leading-[1.1]">
            Common questions, straight answers
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-text-secondary">
            Everything you need to know before we start building.
          </p>
        </AnimateOnScroll>

        <div className="mt-14">
          {faqs.map((faq, i) => (
            <AnimateOnScroll key={faq.question} delay={0.1 + i * 0.05}>
              <FAQItem question={faq.question} answer={faq.answer} index={i} />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
