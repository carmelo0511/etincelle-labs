import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export function ServicesSection() {
  return (
    <section id="services" className="bg-cream-light">
      <div className="mx-auto max-w-5xl px-6 py-28 md:py-40 lg:px-8 lg:py-52">
        <AnimateOnScroll>
          <h2
            className="text-center text-[1.5rem] font-normal leading-[1.35] tracking-[-0.02em] text-text-primary sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem]"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            We build operations dashboards, workflow
            automation, AI-powered tools, and complete
            digital redesigns{" "}
            <span className="text-text-muted">
              for Toronto businesses that want to
              replace manual work with systems that
              run themselves.
            </span>
          </h2>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
