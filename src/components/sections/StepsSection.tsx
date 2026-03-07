import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { pricingTiers } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

/* ---------- Decorative card visualizations ----------
   These sit at the bottom of each card and blend into the
   card background — no separate container, just elements
   that fade naturally into the surface.
   ---------------------------------------------------- */

function ProjectViz() {
  return (
    <div className="flex w-full flex-col gap-1.5 px-8 pb-8 pt-2">
      <div className="flex gap-1.5">
        <div className="h-10 flex-[2] rounded-lg bg-text-primary/[0.05]" />
        <div className="h-10 flex-[1] rounded-lg bg-text-primary/[0.08]" />
      </div>
      <div className="flex gap-1.5">
        <div className="h-7 flex-[1] rounded-lg bg-text-primary/[0.06]" />
        <div className="h-7 flex-[1] rounded-lg bg-text-primary/[0.04]" />
        <div className="h-7 flex-[1] rounded-lg bg-text-primary/[0.07]" />
      </div>
      <div className="flex gap-1.5">
        <div className="h-8 flex-[1] rounded-lg bg-text-primary/[0.04]" />
        <div className="h-8 flex-[3] rounded-lg bg-text-primary/[0.06]" />
      </div>
    </div>
  );
}

function SupportViz() {
  return (
    <div className="flex w-full items-center justify-center px-8 pb-8 pt-4">
      <svg
        viewBox="0 0 240 48"
        fill="none"
        className="w-full max-w-[240px] opacity-[0.14]"
        aria-hidden="true"
      >
        {/* Flat line → pulse → flat line — like a heartbeat monitor */}
        <path
          d="M0 24 H60 L68 24 L74 8 L80 40 L86 14 L92 32 L98 24 H240"
          stroke="#1a1a19"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Second pulse further right, quieter */}
        <path
          d="M140 24 L146 18 L152 30 L158 24"
          stroke="#1a1a19"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

const vizComponents = [ProjectViz, SupportViz];

export function StepsSection() {
  return (
    <section id="pricing" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8 lg:py-36">
        {/* Section header */}
        <AnimateOnScroll>
          <div className="flex items-center gap-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border-light">
              <span className="text-[13px] text-text-muted">3</span>
            </div>
            <div className="h-px w-14 bg-border-light" />
            <span className="text-[14px] font-normal text-text-muted">
              Pricing
            </span>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <h2 className="mt-10 max-w-lg text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-text-primary md:text-[2.5rem] md:leading-[1.1]">
            You pay for the system.{" "}
            <span className="text-text-secondary">Not the clock.</span>
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-text-secondary">
            Fixed price. Delivered in days. You own everything.
          </p>
        </AnimateOnScroll>

        {/* Pricing cards grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-5">
          {pricingTiers.map((tier, i) => {
            const Viz = vizComponents[i];
            return (
              <AnimateOnScroll key={tier.name} delay={0.1 + i * 0.1}>
                <div className="flex h-full flex-col overflow-hidden rounded-xl bg-cream-dark">
                  {/* Tier header */}
                  <div className="px-7 pt-7 pb-1 md:px-8 md:pt-8">
                    <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-muted">
                      {tier.name}
                    </span>
                    <div className="mt-3 flex items-baseline gap-1.5">
                      <span className="text-[2.5rem] font-semibold tracking-[-0.03em] text-text-primary md:text-[3rem]">
                        {tier.price}
                      </span>
                      <span className="text-[14px] text-text-secondary">
                        {tier.currency}
                        {tier.period !== "one-time" && (
                          <span className="text-text-muted">
                            {tier.period}
                          </span>
                        )}
                      </span>
                    </div>
                    <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-text-secondary">
                      {tier.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="mt-5 flex flex-col gap-2.5 px-7 pb-5 md:px-8">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-[13px] leading-snug text-text-secondary"
                      >
                        <span className="mt-[3px] block h-[5px] w-[5px] shrink-0 rounded-full bg-text-muted/60" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-auto px-7 pb-4 md:px-8">
                    <Button variant="primary" size="md" href={tier.href}>
                      {tier.cta}
                    </Button>
                  </div>

                  {/* Visualization — blends into card surface */}
                  <div className="mt-2 flex items-end overflow-hidden">
                    {Viz && <Viz />}
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
