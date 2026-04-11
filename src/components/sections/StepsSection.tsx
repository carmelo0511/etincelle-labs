import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { pricingTiers } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function StepsSection() {
  return (
    <section id="pricing" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 lg:px-8 lg:py-36">
        {/* Section header */}
        <AnimateOnScroll>
          <div className="flex items-center gap-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border-light">
              <span className="text-[13px] text-text-muted">4</span>
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
            Fixed pricing. No contracts. You own everything.
          </p>
        </AnimateOnScroll>

        {/* Pricing cards grid — 3 columns on desktop */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-5">
          {pricingTiers.map((tier, i) => (
            <AnimateOnScroll key={tier.name} delay={0.1 + i * 0.1}>
              <div
                className={`relative flex h-full flex-col overflow-hidden rounded-xl ${
                  tier.popular
                    ? "border-2 border-text-primary bg-cream-dark"
                    : "bg-cream-dark"
                }`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute right-5 top-5 rounded-full bg-text-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-cream">
                    Most Popular
                  </div>
                )}

                {/* Tier header */}
                <div className="px-7 pt-7 pb-1 md:px-8 md:pt-8">
                  <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-muted">
                    {tier.name}
                  </span>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-[2rem] font-semibold tracking-[-0.03em] text-text-primary md:text-[2.5rem]">
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-[14px] text-text-muted">
                        {tier.period}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-text-secondary">
                    {tier.subtitle}
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
                <div className="mt-auto px-7 pb-7 md:px-8 md:pb-8">
                  <Button
                    variant="primary"
                    size="md"
                    href={tier.href}
                    target="_blank"
                  >
                    {tier.cta}
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Bottom text */}
        <AnimateOnScroll delay={0.3}>
          <div className="mt-10 text-center">
            <p className="text-[13px] text-text-muted">
              Month-to-month. Cancel anytime. No lock-in.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
