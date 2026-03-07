import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { Button } from "@/components/ui/Button";

/* Horizontal bar chart visualization — bars extend left to right */
function HorizontalBarChart() {
  const bars = [
    { width: 72, color: "#4A7CFF", label: "" },
    { width: 90, color: "#8B5CF6", label: "" },
    { width: 55, color: "#34D399", label: "" },
    { width: 82, color: "#FB923C", label: "" },
    { width: 65, color: "#EC4899", label: "" },
    { width: 45, color: "#FBBF24", label: "" },
    { width: 78, color: "#4A7CFF", label: "" },
    { width: 58, color: "#34D399", label: "" },
    { width: 85, color: "#8B5CF6", label: "" },
    { width: 40, color: "#F87171", label: "" },
  ];

  return (
    <div className="flex w-full flex-col gap-[6px]">
      {bars.map((bar, i) => (
        <div key={i} className="flex items-center gap-0">
          <div
            className="h-[10px] rounded-r-sm md:h-[12px]"
            style={{
              width: `${bar.width}%`,
              backgroundColor: bar.color,
              opacity: 0.75,
            }}
          />
        </div>
      ))}
    </div>
  );
}

export function JoinSection() {
  return (
    <section id="careers" className="bg-cream-light">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36 lg:px-8 lg:py-44">
        {/* Section label */}
        <AnimateOnScroll>
          <div className="flex items-center gap-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border-light">
              <span className="text-[13px] text-text-muted">4</span>
            </div>
            <div className="h-px w-16 bg-border-light" />
            <span className="text-[14px] font-normal text-text-muted">
              Careers
            </span>
          </div>
        </AnimateOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: text content */}
          <AnimateOnScroll delay={0.1}>
            <div>
              <h2 className="max-w-md text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-text-primary md:text-[2.25rem] md:leading-[1.12]">
                Join us to shape the future of audio AI
              </h2>
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-text-secondary">
                We&apos;re hiring for research, engineering, and
                operations roles.
              </p>
              <div className="mt-8">
                <Button variant="primary" size="md" href="#">
                  See open roles
                </Button>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right: horizontal bar chart */}
          <AnimateOnScroll delay={0.2}>
            <div className="flex items-center">
              <HorizontalBarChart />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
