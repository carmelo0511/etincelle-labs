"use client";

import { motion, type Variants } from "framer-motion";
import { works } from "@/lib/constants";
import { SketchIllustration, SketchCanadaGoose, type SketchType } from "@/components/ui/SketchIllustrations";
import { useEffect, useState } from "react";

/* ── Animations ──────────────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

/* ── Areas of work with colored dot separators ──────────────────── */
const areas = ["Applied AI", "Adaptive Interfaces", "Digital Health", "Education", "Gaming"];
const dotColors = ["#FB923C", "#EF4444", "#34D399", "#8B5CF6", "#4A7CFF", "#EC4899"];

/* ── Letter-flip title config ───────────────────────────────────── */
const titleLetters = "ETINCELLE".split("");
const flippedIndices = new Set([0, 3, 4, 5, 6, 7, 8]); // E, N, C, E, L, L, E

/* ── Fade-in wrapper — animates on load, not on scroll ────────── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      custom={delay}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Project Card ────────────────────────────────────────────────── */
function ProjectCard({
  work,
  index,
}: {
  work: (typeof works)[0];
  index: number;
}) {
  return (
    <FadeIn delay={0.3 + index * 0.06}>
      <a href={`/works/${work.slug}`} className="group block">
        {/* Sketch thumbnail */}
        <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-sm bg-[#e8e9e0]">
          <SketchIllustration
            type={work.sketchType as SketchType}
            className="h-full w-full p-10 opacity-80 transition-all duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
          />
        </div>

        {/* Title row: name + colored category tag */}
        <div className="mt-4 flex items-center gap-3">
          <h3 className="text-[15px] font-semibold leading-tight tracking-[-0.01em] text-text-primary">
            {work.title}
          </h3>
          <span
            className="rounded-full px-2.5 py-[3px] text-[10px] font-semibold uppercase tracking-[0.05em] text-white"
            style={{ backgroundColor: work.categoryColor }}
          >
            {work.category}
          </span>
        </div>

        {/* Description */}
        <p className="mt-1.5 text-[13px] leading-relaxed text-text-secondary">
          {work.description}
        </p>

        {/* View project link */}
        <span className="mt-2 inline-block text-[12px] font-medium uppercase tracking-[0.08em] text-text-muted transition-colors group-hover:text-text-primary">
          View project &rarr;
        </span>
      </a>
    </FadeIn>
  );
}

/* ── Analog Clock with red second hand on hover ──────────────────── */
function AnalogClock({
  tzOffset,
  label,
}: {
  tzOffset: number; // UTC offset in hours (e.g. -5 for EST)
  label: string;
}) {
  const [time, setTime] = useState<{ h: number; m: number; s: number } | null>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    function tick() {
      const now = new Date();
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const local = new Date(utc + tzOffset * 3600000);
      setTime({
        h: local.getHours(),
        m: local.getMinutes(),
        s: local.getSeconds(),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [tzOffset]);

  if (!time) return null;

  const hourDeg = (time.h % 12) * 30 + time.m * 0.5;
  const minDeg = time.m * 6;
  const secDeg = time.s * 6;
  const displayTime = `${String(time.h).padStart(2, "0")}:${String(time.m).padStart(2, "0")}`;

  return (
    <div
      className="group flex flex-col items-center gap-1.5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true">
        {/* Face */}
        <circle cx="28" cy="28" r="26" stroke="#1a1a19" strokeWidth="1.2" opacity="0.35" />
        {/* Hour ticks */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const x1 = 28 + 22 * Math.cos(angle);
          const y1 = 28 + 22 * Math.sin(angle);
          const x2 = 28 + 24.5 * Math.cos(angle);
          const y2 = 28 + 24.5 * Math.sin(angle);
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1a1a19" strokeWidth="1" opacity="0.25" />
          );
        })}
        {/* Hour hand */}
        <line
          x1="28" y1="28" x2="28" y2="14"
          stroke="#1a1a19" strokeWidth="1.8" strokeLinecap="round"
          transform={`rotate(${hourDeg} 28 28)`}
        />
        {/* Minute hand */}
        <line
          x1="28" y1="28" x2="28" y2="8"
          stroke="#1a1a19" strokeWidth="1.2" strokeLinecap="round"
          transform={`rotate(${minDeg} 28 28)`}
        />
        {/* Second hand — red, only visible on hover */}
        <line
          x1="28" y1="32" x2="28" y2="7"
          stroke="#EF4444" strokeWidth="0.8" strokeLinecap="round"
          transform={`rotate(${secDeg} 28 28)`}
          opacity={hovered ? 1 : 0}
          style={{ transition: "opacity 0.3s ease" }}
        />
        {/* Center dot */}
        <circle cx="28" cy="28" r={hovered ? 2 : 1.5} fill={hovered ? "#EF4444" : "#1a1a19"} style={{ transition: "all 0.3s ease" }} />
      </svg>
      <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-text-primary">{label}</span>
      <span className="text-[12px] font-medium tabular-nums text-text-secondary">{displayTime}</span>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────── */
export default function WorksPage() {
  return (
    <>
      {/* ── Top nav ─────────────────────────────────────────── */}
      <nav className="fixed top-0 z-50 w-full bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-5">
          <a href="/" className="flex items-center">
            <div className="h-[10px] w-[10px] rounded-full bg-text-primary" />
          </a>

          {/* Brand title with letter-flip hover effect */}
          <a
            href="/"
            className="group absolute left-1/2 -translate-x-1/2 text-[13px] font-semibold uppercase tracking-[0.15em] text-text-primary"
          >
            {titleLetters.map((letter, i) => (
              <span
                key={i}
                className={
                  flippedIndices.has(i)
                    ? "inline-block transition-transform duration-75 ease-out group-hover:[transform:scaleX(-1)]"
                    : "inline-block"
                }
              >
                {letter}
              </span>
            ))}
          </a>

          <a
            href="/#contact"
            className="text-[12px] font-medium uppercase tracking-[0.1em] text-text-muted transition-colors hover:text-text-primary"
          >
            Contact
          </a>
        </div>
      </nav>

      <main className="bg-white">
        {/* ── Hero with overlapping sketches ───────────────── */}
        <section className="relative mx-auto max-w-[1200px] px-8 pb-10 pt-28 md:pt-36 lg:pt-40">
          {/* Decorative burst sketch — bottom left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="pointer-events-none absolute -bottom-16 -left-8 z-0 hidden w-[320px] md:block lg:-left-4 lg:w-[400px]"
          >
            <svg viewBox="0 0 400 300" fill="none" aria-hidden="true" className="w-full opacity-[0.18]">
              <path
                d="M210 170 L180 60 M210 170 L140 90 M210 170 L100 140
                   M210 170 L90 200 M210 170 L120 250 M210 170 L180 270
                   M210 170 L250 265 M210 170 L300 240 M210 170 L330 190
                   M210 170 L320 130 M210 170 L280 80 M210 170 L240 55"
                stroke="#1a1a19"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M180 60 L165 100 L100 90 L130 145 L80 160 L130 190
                   L90 230 L145 220 L120 270 L185 240 L180 275 L215 250
                   L250 280 L255 230 L310 250 L290 195 L340 180 L290 155
                   L330 120 L270 110 L290 65 L235 95 L240 50 L200 85 Z"
                stroke="#1a1a19"
                strokeWidth="2"
                fill="none"
                strokeLinejoin="round"
              />
              <path
                d="M210 170 L165 100 M210 170 L130 145 M210 170 L145 220
                   M210 170 L210 255 M210 170 L275 230 M210 170 L290 150
                   M210 170 L265 95"
                stroke="#1a1a19"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.7"
              />
              <circle cx="220" cy="230" r="14" stroke="#1a1a19" strokeWidth="1.2" fill="none" opacity="0.6" />
              <text x="220" y="235" textAnchor="middle" fontSize="13" fontFamily="serif" fill="#1a1a19" opacity="0.6">1</text>
              <path d="M175 48 L180 38 L185 48 Z" stroke="#1a1a19" strokeWidth="1" fill="none" opacity="0.5" />
              <path d="M80 262 L340 262" stroke="#1a1a19" strokeWidth="2" strokeLinecap="round" />
              <path d="M100 260 L100 80 L320 80 L320 260 L100 260" stroke="#1a1a19" strokeWidth="1.2" opacity="0.3" />
            </svg>
          </motion.div>

          {/* Decorative head sketch — top right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="pointer-events-none absolute -right-4 -top-4 z-0 hidden w-[280px] md:block lg:-right-0 lg:w-[340px]"
          >
            <svg viewBox="0 0 400 300" fill="none" aria-hidden="true" className="w-full opacity-[0.18]">
              <path
                d="M200 280 L200 265 Q185 260 175 250 Q160 240 155 225
                   Q148 210 150 195 L150 180 Q150 165 158 155
                   Q165 145 170 135 Q175 120 180 110 Q190 95 205 85
                   Q220 75 240 72 Q260 72 275 80 Q290 90 295 105
                   Q298 115 295 130"
                stroke="#1a1a19"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M295 130 Q298 150 292 165 Q285 180 275 190
                   Q268 198 265 210 Q262 225 260 240 Q258 255 255 265 L255 275"
                stroke="#1a1a19"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M170 170 Q160 165 158 175 Q155 190 162 195 Q168 198 172 190"
                stroke="#1a1a19"
                strokeWidth="1.8"
                fill="none"
              />
              <path d="M235 115 Q240 112 248 115 Q252 118 248 120" stroke="#1a1a19" strokeWidth="1.2" fill="none" opacity="0.5" />
              <path d="M275 140 Q282 152 278 160 Q275 165 270 162" stroke="#1a1a19" strokeWidth="1.5" fill="none" opacity="0.6" />
              <path
                d="M200 95 Q210 85 220 80 Q230 76 240 78 Q245 80 242 85 Q238 90 230 88"
                stroke="#1a1a19"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path d="M225 82 Q222 88 218 92 Q215 95 212 92" stroke="#1a1a19" strokeWidth="1.8" fill="none" />
              <path d="M215 88 L330 65" stroke="#1a1a19" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M200 92 L192 95 L195 88 L200 92" stroke="#1a1a19" strokeWidth="1.2" fill="none" />
              <path d="M210 82 Q215 70 230 65 Q245 62 260 68" stroke="#1a1a19" strokeWidth="1.2" fill="none" opacity="0.4" />
            </svg>
          </motion.div>

          {/* Hero text — centered, above sketches */}
          <div className="relative z-10 mx-auto max-w-[900px]">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.05}
              className="text-center text-[2rem] font-normal leading-[1.22] tracking-[-0.025em] text-text-primary sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              I&apos;m a builder who turns
              messy operations into
              systems that run themselves.
            </motion.h1>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
              className="mt-12 text-center md:mt-16"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-text-muted">
                Areas of Work
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-1 gap-y-1">
                {areas.map((area, i) => (
                  <span key={area} className="flex items-center">
                    <span className="text-[13px] text-text-secondary transition-colors hover:text-text-primary">
                      {area}
                    </span>
                    <span
                      className="mx-2.5 inline-block h-[6px] w-[6px] rounded-full"
                      style={{ backgroundColor: dotColors[i] }}
                    />
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Projects grid — 2 column ─────────────────────── */}
        <section className="mx-auto max-w-[1000px] px-8 pb-20 pt-14 md:pb-28 md:pt-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
            {works.map((work, i) => (
              <ProjectCard key={work.title} work={work} index={i} />
            ))}
          </div>
        </section>

        {/* ── Founder statement with Canada goose ────────── */}
        <section className="relative mx-auto max-w-[1000px] px-8 py-20 md:py-32">
          {/* Canada goose — overlaps bottom right, like Early Works flamingo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.0 }}
            className="pointer-events-none absolute -right-4 bottom-0 z-0 w-[260px] md:-right-10 md:bottom-[-40px] md:w-[340px] lg:-right-4 lg:bottom-[-60px] lg:w-[420px]"
          >
            <SketchCanadaGoose className="w-full opacity-[0.22]" />
          </motion.div>

          {/* Hand/abstract sketch — overlaps left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="pointer-events-none absolute -left-12 top-8 z-0 hidden w-[220px] md:block lg:-left-8 lg:w-[280px]"
          >
            <svg viewBox="0 0 300 400" fill="none" aria-hidden="true" className="w-full opacity-[0.15]">
              <path
                d="M150 80 Q170 60 190 70 Q210 80 200 110 Q195 130 180 145
                   Q165 155 155 170 Q148 185 155 200 Q165 210 180 205
                   Q195 200 200 185 Q205 170 215 160 Q230 150 240 165
                   Q248 180 240 200 Q230 220 210 230"
                stroke="#1a1a19"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
              <path d="M130 120 L150 100 L170 120 L150 140 Z" stroke="#1a1a19" strokeWidth="1.5" fill="none" opacity="0.5" />
              <path d="M148 115 L152 115 M150 113 L150 117" stroke="#1a1a19" strokeWidth="1" opacity="0.4" />
            </svg>
          </motion.div>

          <FadeIn delay={0.9}>
            <h2
              className="relative z-10 text-center text-[1.6rem] font-normal leading-[1.3] tracking-[-0.02em] text-text-primary sm:text-[2rem] md:text-[2.4rem] lg:text-[2.75rem]"
              style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
            >
              I design, build, and ship
              dashboards, automations, and
              AI tools — so Toronto business
              owners can stop doing
              everything manually and get
              back to what they do best.
            </h2>
          </FadeIn>
        </section>

        {/* ── Founder card — single centered ────────────── */}
        <section className="mx-auto max-w-[1000px] px-8 pb-20 md:pb-28">
          <FadeIn delay={1.0}>
            <div className="mx-auto max-w-[240px] text-center">
              <div
                className="mx-auto flex aspect-square w-full items-center justify-center rounded-sm"
                style={{ backgroundColor: "#1a1a1912" }}
              >
                <span className="text-[3rem] font-bold text-text-primary lg:text-[3.5rem]">
                  BN
                </span>
              </div>
              <p className="mt-4 text-[12px] font-bold uppercase tracking-[0.08em] text-text-primary">
                Bryan Nakache
              </p>
              <p className="mt-1 text-[12px] text-text-secondary">
                Founder &middot; Toronto
              </p>
            </div>
          </FadeIn>
        </section>

        {/* ── Credentials ─────────────────────────────────── */}
        <section className="mx-auto max-w-[700px] px-8 pb-28 pt-10 md:pb-36">
          <FadeIn delay={1.3}>
            <div className="text-center">
              <p
                className="text-[1rem] leading-[1.65] text-text-primary sm:text-[1.1rem] md:text-[1.2rem]"
                style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
              >
                I&apos;ve spent years building products
                and systems — from consumer apps to internal
                tools — for startups and established businesses
                alike. I bring an engineering-first approach
                to operations, combining AI tools with practical
                design to deliver real results.
              </p>
              <p
                className="mt-6 text-[1rem] leading-[1.65] text-text-primary sm:text-[1.1rem] md:text-[1.2rem]"
                style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
              >
                Based in <strong className="font-bold">Toronto</strong>,
                I work with local service businesses —
                restaurants, studios, salons, clinics — to
                replace manual workflows with systems
                that run on their own. Fixed price,
                delivered in days, fully owned by you.
              </p>
            </div>
          </FadeIn>
        </section>

        {/* ── Footer ──────────────────────────────────────── */}
        <footer className="mt-8">
          {/* Top border — thick like Early Works */}
          <div className="mx-auto max-w-[1200px] px-8">
            <div className="border-t-[2px] border-text-primary/15" />
          </div>

          <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-8 pb-10 pt-16 sm:flex-row sm:items-end sm:justify-between">
            {/* Left — Analog clock */}
            <div className="flex items-end gap-6">
              <AnalogClock tzOffset={-5} label="TO" />
            </div>

            {/* Center — Inquiries */}
            <div className="flex flex-col gap-4">
              <div>
                <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-text-primary">
                  Inquiries
                </span>
                <a
                  href="mailto:hello@etincelle.ca"
                  className="block text-[14px] text-text-secondary transition-colors hover:text-text-primary"
                >
                  hello@etincelle.ca
                </a>
              </div>
            </div>

            {/* Right — Icons + copyright */}
            <div className="flex items-end gap-5">
              <div className="flex items-center gap-3">
                {/* Hamburger */}
                <button type="button" aria-label="Menu" className="flex flex-col gap-[4px]">
                  <span className="block h-[2px] w-5 bg-text-primary" />
                  <span className="block h-[2px] w-5 bg-text-primary" />
                  <span className="block h-[2px] w-5 bg-text-primary" />
                </button>
                {/* Bar chart */}
                <div className="flex items-end gap-[2.5px]">
                  <span className="block h-3.5 w-[3.5px] bg-text-primary" />
                  <span className="block h-5 w-[3.5px] bg-text-primary" />
                  <span className="block h-[13px] w-[3.5px] bg-text-primary" />
                </div>
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-text-primary">
                Etincelle &copy; 2026
              </span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
