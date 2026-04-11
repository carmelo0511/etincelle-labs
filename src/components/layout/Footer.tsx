"use client";

import { useState } from "react";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { AISummary } from "@/components/ui/AISummary";

export function Footer() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", company: "", linkedin: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const validate = () => {
    const errs: { name?: string; email?: string } = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email";
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setFormState("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Request failed");
      setFormState("success");
      setFormData({ name: "", email: "", company: "", linkedin: "", message: "" });
    } catch {
      setFormState("error");
    }
  };

  return (
    <footer id="contact" className="bg-cream-dark">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Contact form section */}
        <AnimateOnScroll>
          <div className="py-24 md:py-32 lg:py-40">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">
              {/* Left: headline */}
              <div>
                <h2 className="max-w-sm text-[2.25rem] font-medium leading-[1.1] tracking-[-0.025em] text-text-primary md:text-[2.75rem] lg:text-5xl lg:leading-[1.08]">
                  Start creating
                </h2>
                <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-text-secondary">
                  Tell us what&apos;s eating your week. We&apos;ll tell you exactly what we&apos;d build and what it costs — on the first call.
                </p>
                {/* Founder presence */}
                <div className="mt-10 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-text-primary text-[14px] font-semibold text-cream">
                    BN
                  </div>
                  <div>
                    <div className="text-[14px] font-semibold text-text-primary">
                      Bryan Nakache
                    </div>
                    <div className="text-[12px] uppercase tracking-[0.08em] text-text-muted">
                      Founder
                    </div>
                  </div>
                </div>
                {/* Fallback contact */}
                <p className="mt-6 text-[13px] text-text-muted">
                  Or email us directly at{" "}
                  <a
                    href="mailto:hello@etincellelabs.com"
                    className="text-text-secondary underline underline-offset-2 transition-colors hover:text-text-primary"
                  >
                    hello@etincellelabs.com
                  </a>
                </p>
              </div>

              {/* Right: contact form */}
              {formState === "success" ? (
                <div className="flex flex-col items-start justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-green/15">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-xl font-medium text-text-primary">
                    Message sent
                  </h3>
                  <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-text-secondary">
                    We&apos;ll get back to you within 24 hours. Talk soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormState("idle")}
                    className="mt-6 text-[13px] font-medium text-text-muted underline underline-offset-2 transition-colors hover:text-text-primary"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-0" noValidate>
                  <div className="border-b border-border-light py-4">
                    <label htmlFor="contact-name" className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-muted">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setErrors({ ...errors, name: undefined }); }}
                      placeholder="John Doe"
                      className="mt-1 w-full bg-transparent text-[15px] text-text-primary placeholder:text-text-muted/50 focus:outline-none"
                    />
                    {errors.name && <p className="mt-1 text-[12px] text-accent-red">{errors.name}</p>}
                  </div>
                  <div className="border-b border-border-light py-4">
                    <label htmlFor="contact-email" className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-muted">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setErrors({ ...errors, email: undefined }); }}
                      placeholder="hello@etincelle.com"
                      className="mt-1 w-full bg-transparent text-[15px] text-text-primary placeholder:text-text-muted/50 focus:outline-none"
                    />
                    {errors.email && <p className="mt-1 text-[12px] text-accent-red">{errors.email}</p>}
                  </div>
                  <div className="border-b border-border-light py-4">
                    <label htmlFor="contact-company" className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-muted">
                      Company
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Etincelle"
                      className="mt-1 w-full bg-transparent text-[15px] text-text-primary placeholder:text-text-muted/50 focus:outline-none"
                    />
                  </div>
                  <div className="border-b border-border-light py-4">
                    <label htmlFor="contact-linkedin" className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-muted">
                      Linkedin Link
                    </label>
                    <input
                      id="contact-linkedin"
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      placeholder="https://www.linkedin.com/company/etincelle"
                      className="mt-1 w-full bg-transparent text-[15px] text-text-primary placeholder:text-text-muted/50 focus:outline-none"
                    />
                  </div>
                  <div className="border-b border-border-light py-4">
                    <label htmlFor="contact-message" className="text-[11px] font-medium uppercase tracking-[0.1em] text-text-muted">
                      Your message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={1}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your challenge or what you'd like to build..."
                      className="mt-1 w-full resize-none bg-transparent text-[15px] text-text-primary placeholder:text-text-muted/50 focus:outline-none"
                    />
                  </div>
                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={formState === "submitting"}
                      className="group flex items-center gap-3 border-l-2 border-text-primary py-3 pl-4 pr-6 text-[14px] font-semibold uppercase tracking-[0.05em] text-text-primary transition-colors hover:border-text-secondary hover:text-text-secondary disabled:opacity-50"
                    >
                      {formState === "submitting" ? "Sending…" : "Submit"}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {formState === "error" && (
                      <p className="mt-3 text-[13px] text-accent-red">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}
                    <p className="mt-4 text-[12px] text-text-muted">
                      Your info is safe with us.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </AnimateOnScroll>

        {/* AI Summary */}
        <div className="border-t border-border-light/60">
          <AISummary />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-border-light/60 py-6 text-[12px] text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <span>&copy; 2026 Etincelle Labs. All rights reserved.</span>
            <span className="text-[11px]">AI Operations Studio — Toronto</span>
          </div>

          <div className="flex items-center gap-5">
            <a href="/terms" className="transition-colors hover:text-text-primary">
              Terms of service
            </a>
            <a href="/privacy" className="transition-colors hover:text-text-primary">
              Privacy policy
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/bryannakache/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-text-primary" aria-label="Bryan Nakache on LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
