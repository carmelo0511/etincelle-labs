import { works } from "@/lib/constants";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  SketchIllustration,
  type SketchType,
} from "@/components/ui/SketchIllustrations";

/* ── Static params for SSG ─────────────────────────────────────── */
export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

/* ── Dynamic metadata ──────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) return {};

  return {
    title: work.title,
    description: work.description,
    openGraph: {
      title: `${work.title} | Etincelle`,
      description: work.description,
    },
  };
}

/* ── Page ─────────────────────────────────────────────────────── */
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) notFound();

  // Find adjacent projects for navigation
  const currentIndex = works.findIndex((w) => w.slug === slug);
  const prevWork = currentIndex > 0 ? works[currentIndex - 1] : null;
  const nextWork =
    currentIndex < works.length - 1 ? works[currentIndex + 1] : null;

  return (
    <>
      {/* ── Minimal top nav ──────────────────────────────── */}
      <nav className="fixed top-0 z-50 w-full bg-white">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-5">
          <Link href="/" className="flex items-center">
            <div className="h-[10px] w-[10px] rounded-full bg-text-primary" />
          </Link>

          <Link
            href="/works"
            className="text-[12px] font-medium uppercase tracking-[0.1em] text-text-muted transition-colors hover:text-text-primary"
          >
            All Works
          </Link>
        </div>
      </nav>

      <main className="bg-white">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="mx-auto max-w-[900px] px-8 pb-16 pt-28 md:pt-36">
          {/* Back link */}
          <Link
            href="/works"
            className="mb-8 inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.1em] text-text-muted transition-colors hover:text-text-primary"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Works
          </Link>

          {/* Category + Title */}
          <div className="flex items-center gap-3">
            <span
              className="rounded-full px-2.5 py-[3px] text-[10px] font-semibold uppercase tracking-[0.05em] text-white"
              style={{ backgroundColor: work.categoryColor }}
            >
              {work.category}
            </span>
            {work.year && (
              <span className="text-[12px] text-text-muted">{work.year}</span>
            )}
          </div>

          <h1
            className="mt-4 text-[2rem] font-normal leading-[1.2] tracking-[-0.025em] text-text-primary sm:text-[2.5rem] md:text-[3rem]"
            style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
          >
            {work.title}
          </h1>

          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-text-secondary md:text-[16px]">
            {work.description}
          </p>
        </section>

        {/* ── Sketch illustration ─────────────────────────── */}
        <section className="mx-auto max-w-[900px] px-8 pb-16">
          <div className="flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl bg-[#e8e9e0]">
            <SketchIllustration
              type={work.sketchType as SketchType}
              className="h-full w-full p-16 opacity-80"
            />
          </div>
        </section>

        {/* ── Details grid ────────────────────────────────── */}
        <section className="mx-auto max-w-[900px] px-8 pb-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Long description */}
            <div className="md:col-span-2">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">
                About the project
              </h2>
              <p
                className="mt-4 text-[1rem] leading-[1.7] text-text-primary md:text-[1.05rem]"
                style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
              >
                {work.longDescription}
              </p>
            </div>

            {/* Sidebar: deliverables + timeline */}
            <div className="flex flex-col gap-8">
              {work.deliverables && work.deliverables.length > 0 && (
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">
                    Deliverables
                  </h3>
                  <ul className="mt-3 flex flex-col gap-2">
                    {work.deliverables.map((d) => (
                      <li
                        key={d}
                        className="text-[14px] text-text-primary"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {work.timeline && (
                <div>
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">
                    Timeline
                  </h3>
                  <p className="mt-3 text-[14px] text-text-primary">
                    {work.timeline}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── Project navigation ──────────────────────────── */}
        <section className="border-t border-border-light">
          <div className="mx-auto flex max-w-[900px] items-stretch">
            {prevWork ? (
              <Link
                href={`/works/${prevWork.slug}`}
                className="group flex flex-1 flex-col justify-center px-8 py-10 transition-colors hover:bg-cream-light"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">
                  Previous
                </span>
                <span className="mt-2 text-[15px] font-semibold text-text-primary transition-colors group-hover:text-text-secondary">
                  {prevWork.title}
                </span>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {nextWork && (
              <Link
                href={`/works/${nextWork.slug}`}
                className="group flex flex-1 flex-col items-end justify-center border-l border-border-light px-8 py-10 text-right transition-colors hover:bg-cream-light"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-text-muted">
                  Next
                </span>
                <span className="mt-2 text-[15px] font-semibold text-text-primary transition-colors group-hover:text-text-secondary">
                  {nextWork.title}
                </span>
              </Link>
            )}
          </div>
        </section>

        {/* ── Footer ──────────────────────────────────────── */}
        <footer className="border-t border-border-light">
          <div className="mx-auto flex max-w-[900px] items-center justify-between px-8 py-8">
            <Link href="/" className="flex items-center">
              <div className="h-[8px] w-[8px] rounded-full bg-text-primary" />
            </Link>
            <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-text-muted">
              Etincelle &copy; 2026
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}
