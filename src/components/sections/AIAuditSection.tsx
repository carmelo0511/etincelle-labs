import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";

const auditColumns = [
  {
    title: "60-min call",
    description: "We map every repeatable process in your business",
  },
  {
    title: "Written report",
    description: "Ranked by time and money impact",
  },
  {
    title: "Automation roadmap",
    description: "Specific AI recommendations you can act on immediately",
  },
];

export function AIAuditSection() {
  return (
    <section id="ai-audit" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8 lg:py-36">
        {/* Section header */}
        <AnimateOnScroll>
          <div className="flex items-center gap-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border-light">
              <span className="text-[13px] text-text-muted">3</span>
            </div>
            <div className="h-px w-14 bg-border-light" />
            <span className="text-[14px] font-normal text-text-muted">
              AI Audit
            </span>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <h2 className="mt-10 max-w-lg text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-text-primary md:text-[2.5rem] md:leading-[1.1]">
            Start with an AI Audit
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-text-secondary">
            Not sure what to automate first? We map your entire operation in one
            call and tell you exactly where you&apos;re losing time and money.
          </p>
        </AnimateOnScroll>

        {/* Three columns */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6">
          {auditColumns.map((col, i) => (
            <AnimateOnScroll key={col.title} delay={0.15 + i * 0.1}>
              <div className="h-full rounded-xl bg-cream-dark px-7 py-8 md:px-8 md:py-10">
                <h3 className="text-[1rem] font-medium tracking-[-0.01em] text-text-primary md:text-[1.1rem]">
                  {col.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-text-secondary">
                  {col.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* CTA */}
        <AnimateOnScroll delay={0.35}>
          <div className="mt-12 flex flex-col items-center gap-3">
            <Button variant="primary" size="md" href="https://cal.com/bryan-nakache-vse3wk" target="_blank">
              Book your audit — $999
            </Button>
            <p className="text-[13px] text-text-muted">
              Credited toward your build if you move forward.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
