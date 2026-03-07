import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

/* Round floats to 3 decimal places — prevents hydration mismatches
   from tiny floating-point differences between Node.js SSR and browser */
const R = (n: number) => Math.round(n * 1000) / 1000;

/* ---------- Waveform visualization for Converse card ---------- */
function WaveformRow({ offset, width }: { offset: number; width: number }) {
  const barCount = Math.floor(width / 3.5);
  const bars = Array.from({ length: barCount }, (_, i) => {
    const seed = R(Math.sin(i * 1.7 + offset * 3.1) * 0.5 + 0.5);
    const height = R(4 + seed * 18);
    return { height, opacity: R(0.5 + seed * 0.5) };
  });

  return (
    <div
      className="flex items-center gap-[1.5px] rounded-lg bg-cream-dark/60 px-3 py-2.5"
      style={{ marginLeft: `${offset}%`, width: `${width}%` }}
    >
      {bars.map((bar, i) => (
        <div
          key={i}
          className="shrink-0 rounded-full bg-[#4A4639]"
          style={{
            width: "2px",
            height: `${bar.height}px`,
            opacity: bar.opacity,
          }}
        />
      ))}
    </div>
  );
}

function ConverseVisualization() {
  return (
    <div className="flex flex-col gap-3 px-6 pb-8 pt-4">
      <WaveformRow offset={0} width={48} />
      <WaveformRow offset={30} width={55} />
      <WaveformRow offset={5} width={52} />
      <WaveformRow offset={25} width={58} />
    </div>
  );
}

/* ---------- World map visualization for Atlas card ---------- */
function WorldMapVisualization() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden px-6 pb-8 pt-4">
      <svg
        viewBox="0 0 360 180"
        className="h-auto w-full opacity-[0.18]"
        fill="none"
      >
        {/* Simplified world map outlines using dot clusters */}
        {/* North America */}
        <ellipse cx="90" cy="60" rx="40" ry="30" stroke="#4A4639" strokeWidth="0.8" strokeDasharray="2 2" />
        {/* South America */}
        <ellipse cx="110" cy="120" rx="20" ry="35" stroke="#4A4639" strokeWidth="0.8" strokeDasharray="2 2" />
        {/* Europe */}
        <ellipse cx="180" cy="50" rx="22" ry="18" stroke="#4A4639" strokeWidth="0.8" strokeDasharray="2 2" />
        {/* Africa */}
        <ellipse cx="185" cy="100" rx="22" ry="32" stroke="#4A4639" strokeWidth="0.8" strokeDasharray="2 2" />
        {/* Asia */}
        <ellipse cx="255" cy="55" rx="50" ry="30" stroke="#4A4639" strokeWidth="0.8" strokeDasharray="2 2" />
        {/* Australia */}
        <ellipse cx="290" cy="130" rx="18" ry="12" stroke="#4A4639" strokeWidth="0.8" strokeDasharray="2 2" />

        {/* Scatter dots for visual texture */}
        {Array.from({ length: 120 }, (_, i) => {
          const x = R((Math.sin(i * 2.3 + 1.7) * 0.5 + 0.5) * 340 + 10);
          const y = R((Math.cos(i * 1.9 + 0.3) * 0.5 + 0.5) * 160 + 10);
          const r = R(0.8 + Math.sin(i * 3.7) * 0.4);
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={r}
              fill="#4A4639"
              opacity={R(0.3 + Math.sin(i * 1.1) * 0.2)}
            />
          );
        })}
      </svg>

      {/* Language count badges scattered on the map */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-5 gap-x-8 gap-y-3">
          {["EN", "ES", "ZH", "HI", "AR", "JA", "KO", "PT", "FR", "DE", "RU", "IT", "TR", "PL", "NL"].map(
            (lang, i) => (
              <span
                key={lang}
                className="text-[9px] font-medium tracking-wider text-text-muted/60"
                style={{ opacity: R(0.4 + (Math.sin(i * 2.1) * 0.5 + 0.5) * 0.6) }}
              >
                {lang}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Main section ---------- */
export function FeaturedDatasetsSection() {
  return (
    <section id="datasets" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36 lg:px-8 lg:py-44">
        {/* Section label */}
        <AnimateOnScroll>
          <div className="flex items-center gap-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-border-light">
              <span className="text-[12px] text-text-muted">3</span>
            </div>
            <div className="h-px w-10 bg-border-light" />
            <span className="text-[13px] font-normal text-text-muted">Featured Datasets</span>
          </div>
        </AnimateOnScroll>

        {/* Heading */}
        <AnimateOnScroll delay={0.1}>
          <h2 className="mt-10 max-w-4xl text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-text-primary md:text-[2.5rem] md:leading-[1.12] lg:text-[2.85rem] lg:leading-[1.1]">
            A dataset suite designed for speech-to-speech, multilingual, and voice interaction systems
          </h2>
        </AnimateOnScroll>

        {/* Dataset cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-18 lg:grid-cols-2 lg:gap-5">
          {/* Converse card */}
          <AnimateOnScroll delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-border-light/60 bg-white">
              <div className="px-8 pt-8 pb-4">
                <div className="flex items-center gap-3">
                  {/* Conversation icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-text-primary">
                    <rect x="2" y="4" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="8" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  <h3 className="text-2xl font-medium tracking-[-0.01em] text-text-primary md:text-[1.75rem]">
                    Converse
                  </h3>
                </div>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-text-secondary">
                  Our flagship English dataset consists of channel-separated, natural two-speaker conversations spanning a wide range of topics.
                </p>
              </div>
              <ConverseVisualization />
            </div>
          </AnimateOnScroll>

          {/* Atlas card */}
          <AnimateOnScroll delay={0.25}>
            <div className="overflow-hidden rounded-2xl border border-border-light/60 bg-white">
              <div className="px-8 pt-8 pb-4">
                <div className="flex items-center gap-3">
                  {/* Globe icon */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-text-primary">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                    <ellipse cx="12" cy="12" rx="4" ry="10" stroke="currentColor" strokeWidth="1" />
                    <line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1" />
                    <line x1="4" y1="7" x2="20" y2="7" stroke="currentColor" strokeWidth="0.75" />
                    <line x1="4" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="0.75" />
                  </svg>
                  <h3 className="text-2xl font-medium tracking-[-0.01em] text-text-primary md:text-[1.75rem]">
                    Atlas
                  </h3>
                </div>
                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-text-secondary">
                  A multilingual dataset spanning 15+ languages. It captures diverse accents and follows the same format as Converse.
                </p>
              </div>
              <WorldMapVisualization />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
