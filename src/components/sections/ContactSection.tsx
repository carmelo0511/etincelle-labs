"use client";

import { Button } from "@/components/ui/Button";

/* ---------- Colorful bar chart visualization ---------- */
function ContactBarChart() {
  /* Each bar: colored segment + gray/dark extension to fill the row.
     Top bars are more colorful, bottom bars fade to monochrome. */
  const bars = [
    { color: "#FBBF24", colorWidth: 72, totalWidth: 88 },
    { color: "#4A7CFF", colorWidth: 65, totalWidth: 92 },
    { color: "#8B5CF6", colorWidth: 60, totalWidth: 90 },
    { color: "#EC4899", colorWidth: 55, totalWidth: 88 },
    { color: "#FB923C", colorWidth: 50, totalWidth: 85 },
    { color: "#F87171", colorWidth: 45, totalWidth: 82 },
    { color: "#FB923C", colorWidth: 40, totalWidth: 90 },
    { color: "#1a1a19", colorWidth: 0, totalWidth: 88 },
    { color: "#1a1a19", colorWidth: 0, totalWidth: 92 },
    { color: "#1a1a19", colorWidth: 0, totalWidth: 85 },
    { color: "#1a1a19", colorWidth: 0, totalWidth: 90 },
    { color: "#1a1a19", colorWidth: 0, totalWidth: 87 },
    { color: "#1a1a19", colorWidth: 0, totalWidth: 92 },
    { color: "#1a1a19", colorWidth: 0, totalWidth: 84 },
    { color: "#1a1a19", colorWidth: 0, totalWidth: 90 },
    { color: "#1a1a19", colorWidth: 0, totalWidth: 88 },
    { color: "#1a1a19", colorWidth: 0, totalWidth: 86 },
  ];

  return (
    <div className="flex w-full flex-col gap-[7px]">
      {bars.map((bar, i) => (
        <div key={i} className="flex items-center">
          {bar.colorWidth > 0 ? (
            <>
              {/* Colored segment */}
              <div
                className="h-[14px] rounded-l-sm"
                style={{
                  width: `${bar.colorWidth}%`,
                  backgroundColor: bar.color,
                  opacity: 0.85,
                }}
              />
              {/* Gray extension */}
              <div
                className="h-[14px] rounded-r-sm bg-text-primary/70"
                style={{
                  width: `${bar.totalWidth - bar.colorWidth}%`,
                }}
              />
            </>
          ) : (
            /* Monochrome bar */
            <div
              className="h-[14px] rounded-sm bg-text-primary/80"
              style={{ width: `${bar.totalWidth}%` }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ---------- Form field component ---------- */
function FormField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[14px] font-medium text-text-primary">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          rows={1}
          className="border-b border-border-light bg-transparent pb-3 text-[15px] text-text-primary placeholder:text-text-muted/60 focus:border-text-primary focus:outline-none transition-colors resize-none"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="border-b border-border-light bg-transparent pb-3 text-[15px] text-text-primary placeholder:text-text-muted/60 focus:border-text-primary focus:outline-none transition-colors"
        />
      )}
    </div>
  );
}

/* ---------- Main Contact Section ---------- */
export function ContactSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28 lg:px-8 lg:pt-32">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <h1 className="font-serif text-[2.75rem] font-normal leading-[1.1] tracking-[-0.02em] text-text-primary md:text-[3.5rem] lg:text-[4rem]">
            Contact
          </h1>
          <p className="mt-4 max-w-md text-[16px] leading-relaxed text-text-secondary">
            Please fill out the form below to contact our team.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
          {/* Left: Form */}
          <div className="flex flex-col gap-10">
            <FormField label="Name" placeholder="Etincelle" />
            <FormField
              label="Email"
              placeholder="hello@etincelle.ai"
              type="email"
            />
            <FormField label="Company" placeholder="Etincelle" />
            <FormField
              label="Linkedin Link"
              placeholder="https://www.linkedin.com/company/etincelle"
              type="url"
            />
            <FormField
              label="Type of data and languages interested in"
              placeholder="Atlas in French, German, and Chinese"
            />
            <FormField
              label="Your message"
              placeholder="Got a question or idea? Type it here!"
              type="textarea"
            />

            <div className="mt-2">
              <Button variant="primary" size="md">
                Submit
              </Button>
            </div>
          </div>

          {/* Right: Bar chart visualization */}
          <div className="hidden items-start pt-4 lg:flex">
            <ContactBarChart />
          </div>
        </div>
      </div>
    </section>
  );
}
