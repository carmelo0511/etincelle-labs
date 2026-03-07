"use client";

import { processSteps } from "@/lib/constants";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { useState, useEffect, useRef, useCallback, useId } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Round floats to 3 decimal places — prevents hydration mismatches
   from tiny floating-point differences between Node.js SSR and browser */
const R = (n: number) => Math.round(n * 1000) / 1000;

/* ================================================================
   SVG Visualizations — one per process step
   Each renders inside a 400×300 viewBox, cream-dark card
   ================================================================ */

/* ── 1. Hypothesize — Binoculars: two overlapping bar-circles with flame center ── */
function Viz1() {
  const u = useId();
  const c0 = `${u}-c0`, c1 = `${u}-c1`, g = `${u}-g`;
  return (
    <svg viewBox="0 0 360 240" fill="none" className="h-full w-full" aria-hidden="true">
      <defs>
        <clipPath id={c0}><circle cx="120" cy="120" r="100"/></clipPath>
        <clipPath id={c1}><circle cx="240" cy="120" r="100"/></clipPath>
        <linearGradient id={g} x1="180" y1="155" x2="180" y2="80" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#4A7CFF"/><stop offset="30%" stopColor="#D94F8C"/><stop offset="60%" stopColor="#F07C4A"/><stop offset="100%" stopColor="#F5A623"/></linearGradient>
      </defs>
      <g clipPath={`url(#${c0})`}>
        {[24,34,44,54,64,74,84,94,104,114,124,134,144,154,164,174,184,194,204,214].map(x => (
          <rect key={x} x={x} y={20} width={5} height={200} rx={2.5} fill="#2A2A28" />
        ))}
      </g>
      <g clipPath={`url(#${c1})`}>
        {[144,154,164,174,184,194,204,214,224,234,244,254,264,274,284,294,304,314,324,334].map(x => (
          <rect key={x} x={x} y={20} width={5} height={200} rx={2.5} fill="#2A2A28" />
        ))}
      </g>
      <path d="M180 80 C186 95, 192 108, 192 120 C192 132, 186 145, 180 155 C174 145, 168 132, 168 120 C168 108, 174 95, 180 80Z" fill={`url(#${g})`} />
      <text x="8" y="124" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="16" fill="#2A2A28">a.</text>
      <text x="348" y="124" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="16" fill="#2A2A28">b.</text>
      <line x1="22" y1="120" x2="0" y2="120" stroke="#2A2A28" />
      <line x1="340" y1="120" x2="360" y2="120" stroke="#2A2A28" />
    </svg>
  );
}

/* ── 2. Design — Isometric cube of bars with gradient diamond ── */
function Viz2() {
  const u = useId();
  const t = `${u}-t`, l = `${u}-l`, r = `${u}-r`, g = `${u}-g`;
  return (
    <svg viewBox="0 0 380 340" fill="none" className="h-full w-full" aria-hidden="true">
      <defs>
        <clipPath id={t}><polygon points="190,30 310,90 190,150 70,90"/></clipPath>
        <clipPath id={l}><polygon points="70,90 190,150 190,280 70,220"/></clipPath>
        <clipPath id={r}><polygon points="190,150 310,90 310,220 190,280"/></clipPath>
        <linearGradient id={g} x1="160" y1="150" x2="220" y2="150" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#F5A623"/><stop offset="30%" stopColor="#E85A3A"/><stop offset="60%" stopColor="#D94F8C"/><stop offset="100%" stopColor="#5B6DC7"/></linearGradient>
      </defs>
      <g clipPath={`url(#${t})`}>
        {[75,85,95,105,115,125,135,145,155,165,175,185,195,205,215,225,235,245,255,265,275,285,295,305].map(x => (
          <rect key={x} x={x} y={25} width={5} height={130} rx={2.5} fill="#2A2A28" />
        ))}
      </g>
      <g clipPath={`url(#${l})`}>
        {[75,85,95,105,115,125,135,145,155,165,175,185].map(x => (
          <rect key={x} x={x} y={85} width={5} height={200} rx={2.5} fill="#2A2A28" />
        ))}
      </g>
      <g clipPath={`url(#${r})`}>
        {[195,205,215,225,235,245,255,265,275,285,295,305].map(x => (
          <rect key={x} x={x} y={85} width={5} height={200} rx={2.5} fill="#2A2A28" />
        ))}
      </g>
      <polygon points="190,120 225,150 190,180 155,150" fill={`url(#${g})`} />
      <text x="40" y="65" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="18" fill="#2A2A28">1.</text>
      <text x="330" y="155" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="18" fill="#2A2A28">2.</text>
      <text x="40" y="255" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="18" fill="#2A2A28">3.</text>
    </svg>
  );
}

/* ── 3. Experiment — Circular bar gauge with gradient arc ── */
function Viz3() {
  const u = useId();
  const g = `${u}-g`;
  const bars: [number, number, number][] = [
    [0,28,5],[8,30,5],[16,32,5],[24,34,5],[32,35,5],[40,36,5],[48,36,5],[56,35,5],[64,34,5],[72,32,5],[80,30,5],
    [170,30,5],[178,32,5],[186,34,5],[194,36,5],[202,36,5],[210,35,5],[218,34,5],[226,32,5],[234,30,5],[242,28,5],[250,25,5],[258,22,5],
    [266,18,4],[274,14,3],[282,10,3],[290,8,2],
    [-10,8,2],[-18,10,3],[-26,14,3],[-34,18,4],[-42,22,5],[-50,25,5],[-58,28,5],[-66,30,5],[-74,32,5],[-82,34,5],[-90,35,5],
  ];
  return (
    <svg viewBox="0 0 380 380" fill="none" className="h-full w-full" aria-hidden="true">
      <defs><linearGradient id={g} x1="310" y1="70" x2="310" y2="310" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#F5A623"/><stop offset="35%" stopColor="#F07C4A"/><stop offset="65%" stopColor="#D94F8C"/><stop offset="100%" stopColor="#5B6DC7"/></linearGradient></defs>
      {bars.map(([rot, h, w], i) => (
        <rect key={i} x={190 - w / 2} y={40} width={w} height={h} rx={w / 2} fill="#2A2A28" transform={`rotate(${rot},190,190)`} />
      ))}
      <path d="M 310 60 A 140 140 0 0 1 310 320" stroke={`url(#${g})`} strokeWidth="28" fill="none" strokeLinecap="round" />
      <text x="68" y="98" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="18" fill="#2A2A28">A.</text>
      <text x="56" y="310" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="18" fill="#2A2A28">B.</text>
      <text x="340" y="200" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="18" fill="#2A2A28">C.</text>
    </svg>
  );
}

/* ── 4. Evaluate — Overlapping oval blobs of colored bars ── */
function Viz4() {
  const u = useId();
  const blobs: { cx: number; cy: number; rx: number; ry: number; bars: { x: number; w: number; h: number }[]; color: string }[] = [
    { cx: 52, cy: 140, rx: 28, ry: 50, color: "#2A2A28", bars: [28,35,42,49,56,63,70].map(x => ({ x, w: 4, h: 120 })) },
    { cx: 100, cy: 140, rx: 36, ry: 75, color: "#2A2A28", bars: [68,76,84,92,100,108,116,124].map(x => ({ x, w: 4.5, h: 180 })) },
    { cx: 158, cy: 140, rx: 42, ry: 100, color: "#2A2A28", bars: [120,128,136,144,152,160,168,176,184,192].map(x => ({ x, w: 5, h: 220 })) },
    { cx: 215, cy: 140, rx: 32, ry: 85, color: "amber", bars: [
      { x: 187, w: 5, h: 200 }, { x: 195, w: 5, h: 200 }, { x: 203, w: 5, h: 200 }, { x: 211, w: 5, h: 200 }, { x: 219, w: 5, h: 200 }, { x: 227, w: 5, h: 200 }, { x: 235, w: 5, h: 200 },
    ] },
    { cx: 265, cy: 140, rx: 36, ry: 95, color: "red", bars: [
      { x: 233, w: 5, h: 220 }, { x: 241, w: 5, h: 220 }, { x: 249, w: 5, h: 220 }, { x: 257, w: 5, h: 220 }, { x: 265, w: 5, h: 220 }, { x: 273, w: 5, h: 220 }, { x: 281, w: 5, h: 220 }, { x: 289, w: 5, h: 220 },
    ] },
    { cx: 310, cy: 140, rx: 30, ry: 72, color: "#D94F8C", bars: [284,292,300,308,316,324,332].map(x => ({ x, w: 5, h: 180 })) },
    { cx: 350, cy: 140, rx: 24, ry: 55, color: "#5B6DC7", bars: [330,338,346,354,362].map(x => ({ x, w: 5, h: 140 })) },
    { cx: 385, cy: 140, rx: 18, ry: 40, color: "#4A7CFF", bars: [370,378,386,394].map(x => ({ x, w: 5, h: 100 })) },
  ];
  const amberColors = ["#ECC94B","#F5A623","#F5A623","#F5A623","#F5A623","#ECC94B","#ECC94B"];
  const redColors = ["#F07C4A","#E85A3A","#E85A3A","#D94F8C","#D94F8C","#D94F8C","#E85A3A","#F07C4A"];
  return (
    <svg viewBox="0 0 420 280" fill="none" className="h-full w-full" aria-hidden="true">
      <defs>
        {blobs.map((blob, bi) => (
          <clipPath key={bi} id={`${u}-c${bi}`}><ellipse cx={blob.cx} cy={blob.cy} rx={blob.rx} ry={blob.ry}/></clipPath>
        ))}
      </defs>
      <rect x="10" y="136" width="2" height="4" rx="1" fill="#2A2A28" />
      <rect x="15" y="134" width="2" height="8" rx="1" fill="#2A2A28" />
      <rect x="20" y="132" width="2" height="12" rx="1" fill="#2A2A28" />
      {blobs.map((blob, bi) => (
        <g key={bi} clipPath={`url(#${u}-c${bi})`}>
          {blob.bars.map((b, j) => {
            let fill = blob.color;
            if (blob.color === "amber") fill = amberColors[j] ?? "#F5A623";
            if (blob.color === "red") fill = redColors[j] ?? "#E85A3A";
            return <rect key={j} x={b.x} y={blob.cy - b.h / 2 + 10} width={b.w} height={b.h} rx={b.w / 2} fill={fill} />;
          })}
        </g>
      ))}
      <rect x="405" y="132" width="2" height="12" rx="1" fill="#4A7CFF" />
      <rect x="410" y="134" width="2" height="8" rx="1" fill="#4A7CFF" />
      <rect x="415" y="136" width="2" height="4" rx="1" fill="#4A7CFF" />
    </svg>
  );
}

/* ── 5. Productionize — 4×4 grid of bar clusters, center colored ── */
function Viz5() {
  type GridGroup = { tx: number; ty: number; bars: { x: number; fill: string }[] };
  const dark = (offsets: number[]) => offsets.map(x => ({ x, fill: "#2A2A28" }));
  const row0: GridGroup[] = [
    { tx: 10, ty: 10, bars: dark([4,14,24,34,44,54]) },
    { tx: 92, ty: 10, bars: dark([0,10,20,30,40,50,60]) },
    { tx: 174, ty: 10, bars: dark([0,10,20,30,40,50,60]) },
    { tx: 258, ty: 10, bars: dark([4,14,24,34,44,54]) },
  ];
  const colorA = [
    { x: 0, fill: "#5B6DC7" },{ x: 10, fill: "#D94F8C" },{ x: 20, fill: "#E85A3A" },{ x: 30, fill: "#F07C4A" },{ x: 40, fill: "#F5A623" },{ x: 50, fill: "#E85A3A" },{ x: 60, fill: "#D94F8C" },
  ];
  const colorB = [
    { x: 0, fill: "#F5A623" },{ x: 10, fill: "#F07C4A" },{ x: 20, fill: "#D94F8C" },{ x: 30, fill: "#5B6DC7" },{ x: 40, fill: "#4A7CFF" },{ x: 50, fill: "#D94F8C" },{ x: 60, fill: "#5B6DC7" },
  ];
  const colorC = [
    { x: 0, fill: "#4A7CFF" },{ x: 10, fill: "#D94F8C" },{ x: 20, fill: "#E85A3A" },{ x: 30, fill: "#F5A623" },{ x: 40, fill: "#F07C4A" },{ x: 50, fill: "#E85A3A" },{ x: 60, fill: "#D94F8C" },
  ];
  const colorD = [
    { x: 0, fill: "#F5A623" },{ x: 10, fill: "#F07C4A" },{ x: 20, fill: "#D94F8C" },{ x: 30, fill: "#5B6DC7" },{ x: 40, fill: "#4A7CFF" },{ x: 50, fill: "#D94F8C" },{ x: 60, fill: "#5B6DC7" },
  ];
  const row1: GridGroup[] = [
    { tx: 10, ty: 90, bars: dark([4,14,24,34,44,54]) },
    { tx: 92, ty: 90, bars: colorA },
    { tx: 174, ty: 90, bars: colorB },
    { tx: 258, ty: 90, bars: dark([4,14,24,34,44,54]) },
  ];
  const row2: GridGroup[] = [
    { tx: 10, ty: 170, bars: dark([4,14,24,34,44,54]) },
    { tx: 92, ty: 170, bars: colorC },
    { tx: 174, ty: 170, bars: colorD },
    { tx: 258, ty: 170, bars: dark([4,14,24,34,44,54]) },
  ];
  const row3: GridGroup[] = [
    { tx: 10, ty: 250, bars: dark([4,14,24,34,44,54]) },
    { tx: 92, ty: 250, bars: dark([0,10,20,30,40,50,60]) },
    { tx: 174, ty: 250, bars: dark([0,10,20,30,40,50,60]) },
    { tx: 258, ty: 250, bars: dark([4,14,24,34,44,54]) },
  ];
  const allGroups = [...row0, ...row1, ...row2, ...row3];
  return (
    <svg viewBox="0 0 340 340" fill="none" className="h-full w-full" aria-hidden="true">
      {allGroups.map((g, gi) => (
        <g key={gi} transform={`translate(${g.tx},${g.ty})`}>
          {g.bars.map((b, bi) => (
            <rect key={bi} x={b.x} y={0} width={5} height={55} rx={2.5} fill={b.fill} />
          ))}
        </g>
      ))}
    </svg>
  );
}

/* ── 6. Support — Infinity loop of bars with gradient accent ── */
function Viz6() {
  const u = useId();
  const clip = `${u}-inf`;
  const grad = `${u}-sg`;
  // Generate evenly spaced bars across the full width
  const barXs = Array.from({ length: 40 }, (_, i) => 12 + i * 10);
  return (
    <svg viewBox="0 0 420 280" fill="none" className="h-full w-full" aria-hidden="true">
      <defs>
        <clipPath id={clip}>
          <path d="M210 140 C210 90, 150 50, 100 50 C50 50, 10 90, 10 140 C10 190, 50 230, 100 230 C150 230, 210 190, 210 140 C210 90, 270 50, 320 50 C370 50, 410 90, 410 140 C410 190, 370 230, 320 230 C270 230, 210 190, 210 140Z" />
        </clipPath>
        <linearGradient id={grad} x1="185" y1="160" x2="235" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4A7CFF" />
          <stop offset="35%" stopColor="#5B6DC7" />
          <stop offset="65%" stopColor="#D94F8C" />
          <stop offset="100%" stopColor="#F5A623" />
        </linearGradient>
      </defs>
      <g clipPath={`url(#${clip})`}>
        {barXs.map((x) => (
          <rect key={x} x={x} y={30} width={5} height={220} rx={2.5} fill="#2A2A28" />
        ))}
      </g>
      <circle cx="210" cy="140" r="22" fill={`url(#${grad})`} />
      <text x="90" y="38" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="16" fill="#2A2A28">∞</text>
      <text x="320" y="262" fontFamily="Playfair Display, serif" fontStyle="italic" fontSize="16" fill="#2A2A28">vi.</text>
    </svg>
  );
}

const visualizations = [Viz1, Viz2, Viz3, Viz4, Viz5, Viz6];

/* ================================================================
   Main Process Section — Pinned scroll-driven layout
   The entire section pins to the viewport. Scroll progress drives:
   1. Which step text is shown (vertical slider on left)
   2. Which visualization is shown (crossfade on right)
   ================================================================ */

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepCount = processSteps.length;

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollHeight = containerRef.current.scrollHeight - window.innerHeight;
    // How far we've scrolled into the pinned container
    const scrolled = -rect.top;
    const progress = Math.max(0, Math.min(1, scrolled / scrollHeight));
    const step = Math.min(stepCount - 1, Math.floor(progress * stepCount));
    setActiveStep(step);
  }, [stepCount]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const ActiveViz = visualizations[activeStep] ?? Viz1;

  return (
    <section id="process" className="bg-[#F9F9F6]">
      {/* Header: section marker + main statement — these scroll normally */}
      <div className="mx-auto max-w-6xl px-6 pt-28 md:pt-36 lg:px-8 lg:pt-44">
        <AnimateOnScroll>
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border-light">
              <span className="text-[14px] text-text-muted">2</span>
            </div>
            <div className="mt-1 h-10 w-px bg-border-light" />
            <span className="text-[14px] font-normal text-text-muted">
              Process
            </span>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.1}>
          <h2 className="mx-auto mt-16 max-w-4xl text-center text-[1.75rem] font-medium leading-[1.18] tracking-[-0.02em] text-text-primary sm:text-3xl md:text-[2.75rem] md:leading-[1.12] lg:text-[3.25rem] lg:leading-[1.1]">
            We build your systems with{" "}
            <span className="font-serif italic">the same rigor</span>{" "}
            you bring to your craft.
          </h2>
        </AnimateOnScroll>
      </div>

      {/* Pinned scroll-driven area */}
      {/* Height = stepCount * 80vh — balanced scroll distance per step */}
      <div
        ref={containerRef}
        style={{ height: `${stepCount * 80}vh` }}
        className="relative mt-20 md:mt-28"
      >
        {/* Sticky inner — pinned to viewport. On mobile, offset by sticky nav height */}
        <div className="sticky top-[57px] h-[calc(100vh-57px)] overflow-hidden lg:top-0 lg:h-screen">
          <div className="mx-auto flex h-full max-w-6xl items-center px-6 lg:px-8">
            <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              {/* Left: step text slider — shows adjacent steps faded */}
              <div className="relative flex items-center">
                <div className="relative h-[420px] w-full md:h-[480px]">
                  {processSteps.map((step, i) => {
                    const distance = i - activeStep;
                    const absD = Math.abs(distance);
                    // Gentler opacity falloff: active=1, ±1=0.3, ±2=0.12, further=0.05
                    const opacity = absD === 0 ? 1 : absD === 1 ? 0.3 : absD === 2 ? 0.12 : 0.05;
                    return (
                      <div
                        key={step.numeral}
                        className="absolute inset-x-0 flex flex-col justify-start transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
                        style={{
                          transform: `translateY(${distance * 140 + 140}px)`,
                          opacity,
                        }}
                      >
                        <span className="text-[13px] font-medium text-text-muted">
                          {step.numeral}.
                        </span>
                        <h3 className="mt-3 text-2xl font-medium tracking-[-0.01em] text-text-primary md:text-[1.75rem]">
                          {step.title}
                        </h3>
                        <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-text-secondary">
                          {step.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: visualization — responsive for all screen sizes */}
              {/* Desktop: large card alongside text */}
              <div className="hidden items-center justify-center lg:flex">
                <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl bg-cream-dark">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      className="absolute inset-0"
                    >
                      <ActiveViz />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Mobile/Tablet: compact viz below the text */}
              <div className="flex items-center justify-center lg:hidden">
                <div className="relative aspect-[4/3] w-full max-w-xs overflow-hidden rounded-xl bg-cream-dark sm:max-w-sm">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0"
                    >
                      <ActiveViz />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacer for smooth exit */}
      <div className="h-16 md:h-24" />
    </section>
  );
}
