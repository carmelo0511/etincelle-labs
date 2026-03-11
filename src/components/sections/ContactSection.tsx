"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

/* ---------- Colorful bar chart visualization ---------- */
function ContactBarChart() {
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
              <div
                className="h-[14px] rounded-l-sm"
                style={{
                  width: `${bar.colorWidth}%`,
                  backgroundColor: bar.color,
                  opacity: 0.85,
                }}
              />
              <div
                className="h-[14px] rounded-r-sm bg-text-primary/70"
                style={{
                  width: `${bar.totalWidth - bar.colorWidth}%`,
                }}
              />
            </>
          ) : (
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
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  required,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-[14px] font-medium text-text-primary">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          rows={1}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="border-b border-border-light bg-transparent pb-3 text-[15px] text-text-primary placeholder:text-text-muted/60 focus:border-text-primary focus:outline-none transition-colors resize-none"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          className="border-b border-border-light bg-transparent pb-3 text-[15px] text-text-primary placeholder:text-text-muted/60 focus:border-text-primary focus:outline-none transition-colors"
        />
      )}
    </div>
  );
}

/* ---------- Main Contact Section ---------- */
type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    linkedin: "",
    message: "",
  });

  const set = (field: keyof typeof form) => (val: string) =>
    setForm((prev) => ({ ...prev, [field]: val }));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", email: "", company: "", linkedin: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

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
          {status === "success" ? (
            <div className="flex flex-col items-start justify-center gap-4 py-16">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-medium text-text-primary">
                Message sent
              </h2>
              <p className="text-text-secondary">
                Thanks for reaching out — we&apos;ll get back to you shortly.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-2 text-sm font-medium text-text-primary underline underline-offset-4 hover:text-text-secondary transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              <FormField
                label="Name"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={set("name")}
                required
              />
              <FormField
                label="Email"
                name="email"
                placeholder="hello@etincelle.com"
                type="email"
                value={form.email}
                onChange={set("email")}
                required
              />
              <FormField
                label="Company"
                name="company"
                placeholder="Etincelle"
                value={form.company}
                onChange={set("company")}
              />
              <FormField
                label="Linkedin Link"
                name="linkedin"
                placeholder="https://www.linkedin.com/company/etincelle"
                type="url"
                value={form.linkedin}
                onChange={set("linkedin")}
              />
              <FormField
                label="Your message"
                name="message"
                placeholder="Tell us about your challenge or what you'd like to build..."
                type="textarea"
                value={form.message}
                onChange={set("message")}
              />

              {status === "error" && (
                <p className="text-sm text-red-600">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}

              <div className="mt-2">
                <Button
                  variant="primary"
                  size="md"
                  type="submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Sending..." : "Submit"}
                </Button>
              </div>
            </form>
          )}

          {/* Right: Bar chart visualization */}
          <div className="hidden items-start pt-4 lg:flex">
            <ContactBarChart />
          </div>
        </div>
      </div>
    </section>
  );
}
