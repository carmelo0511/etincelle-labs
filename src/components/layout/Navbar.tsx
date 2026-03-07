"use client";

import { useState, useEffect, useCallback } from "react";
import { navLinks } from "@/lib/constants";
import { motion, AnimatePresence } from "framer-motion";
import { WaveformIcon } from "@/components/ui/WaveformIcon";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [onDark, setOnDark] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [pathname, setPathname] = useState("");

  // Track current pathname for page-link active states
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  // Scroll spy + dark section detection
  const handleScroll = useCallback(() => {
    const sections = navLinks
      .map((link) => {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        return el ? { id, top: el.getBoundingClientRect().top } : null;
      })
      .filter(Boolean) as { id: string; top: number }[];

    const offset = 200;
    let current = "";
    for (const section of sections) {
      if (section.top <= offset) {
        current = section.id;
      }
    }

    // Bridge the gap between "pricing" and "contact": when the user has
    // scrolled past the pricing section and is approaching the footer,
    // switch the active indicator to "contact" early so it doesn't stay
    // stuck on "pricing" through 3 untracked sections (steps, news, FAQ).
    const contactEl = document.getElementById("contact");
    if (contactEl && current !== "contact") {
      const contactRect = contactEl.getBoundingClientRect();
      // Activate "contact" once it enters the bottom third of the viewport
      if (contactRect.top <= window.innerHeight * 0.75) {
        current = "contact";
      }
    }

    setActiveSection(current);

    // Detect if navbar overlaps a dark-bg section
    // Check which section is at the vertical center of the viewport
    let isDark = false;
    const midY = window.innerHeight * 0.4;
    const allSections = document.querySelectorAll("section");
    allSections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      // Section must contain the viewport's vertical midpoint
      if (rect.top < midY && rect.bottom > midY) {
        if (
          sec.classList.contains("bg-navy") ||
          sec.classList.contains("bg-charcoal") ||
          sec.classList.contains("bg-navy-light")
        ) {
          isDark = true;
        }
      }
    });
    setOnDark(isDark);

    // Hide navbar throughout entire Why Us section (not just pinned phase)
    const isLateral = document.documentElement.hasAttribute("data-lateral-scroll");
    const whyUsEl = document.getElementById("why-us");
    let inWhyUs = false;
    if (whyUsEl) {
      const whyUsRect = whyUsEl.getBoundingClientRect();
      // Hidden while section covers viewport — until News section appears
      inWhyUs = whyUsRect.top <= 0 && whyUsRect.bottom > window.innerHeight * 0.5;
    }
    setHidden(isLateral || inWhyUs);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Observe lateral scroll attribute changes for navbar hide/show
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isLateral = document.documentElement.hasAttribute("data-lateral-scroll");
      const whyUsEl = document.getElementById("why-us");
      let inWhyUs = false;
      if (whyUsEl) {
        const whyUsRect = whyUsEl.getBoundingClientRect();
        inWhyUs = whyUsRect.top <= 0 && whyUsRect.bottom > window.innerHeight * 0.5;
      }
      setHidden(isLateral || inWhyUs);
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-lateral-scroll"] });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Smooth scroll to section on click — navigate home first if on another page
  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      // On a sub-page — navigate to homepage with the hash
      window.location.href = "/" + href;
      return;
    }
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", href);
    }
  }, []);

  // Color classes based on dark/light section
  const logoColor = onDark ? "text-text-inverse" : "text-text-primary";
  const activeColor = onDark ? "font-medium text-text-inverse" : "font-medium text-text-primary";
  const inactiveColor = onDark
    ? "font-normal text-text-inverse/40 hover:text-text-inverse/70"
    : "font-normal text-text-muted hover:text-text-secondary";
  const indicatorBg = onDark ? "bg-text-inverse" : "bg-text-primary";

  return (
    <>
      {/* Desktop sidebar nav — transparent, hides during lateral scroll */}
      <nav
        className="fixed left-0 top-0 z-50 hidden h-screen w-[200px] flex-col px-7 py-8 transition-opacity duration-500 ease-out lg:flex"
        style={{
          opacity: hidden ? 0 : 1,
          pointerEvents: hidden ? "none" : "auto",
        }}
      >
        {/* Logo — scrolls to hero */}
        <a href="#hero" onClick={(e) => scrollToSection(e, "#hero")} className="flex items-center gap-2.5">
          <WaveformIcon className={`${logoColor} transition-colors duration-500`} />
          <span className={`text-[17px] font-semibold tracking-[-0.02em] ${logoColor} transition-colors duration-500`}>
            Etincelle
          </span>
        </a>

        {/* Vertical nav links with continuous line + active indicator */}
        <div className="relative mt-14 flex flex-col pl-4">
          {/* Continuous thin vertical line */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-px transition-colors duration-500 ${
              onDark ? "bg-text-inverse/10" : "bg-text-muted/15"
            }`}
          />
          {navLinks.map((link) => {
            const isPage = link.href.startsWith("/");
            const sectionId = link.href.replace("#", "");
            const isActive = isPage
              ? pathname === link.href
              : activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={isPage ? undefined : (e) => scrollToSection(e, link.href)}
                className="relative flex items-center"
              >
                {/* Active indicator — slim bar over the thin line */}
                <div
                  className={`absolute left-[-16px] top-[4px] bottom-[4px] w-[2px] rounded-full transition-all duration-300 ${
                    isActive
                      ? `${indicatorBg} opacity-100`
                      : "bg-transparent opacity-0"
                  }`}
                />
                <span
                  className={`py-[7px] text-[16px] transition-all duration-300 ${
                    isActive ? activeColor : inactiveColor
                  }`}
                >
                  {link.label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Mobile top bar */}
      <nav
        className="sticky top-0 z-50 border-b border-border-light/60 bg-cream/95 backdrop-blur-md lg:hidden"
      >
        <div className="flex items-center justify-between px-5 py-4">
          <a href="#hero" onClick={(e) => { scrollToSection(e, "#hero"); setMobileOpen(false); }} className="flex items-center gap-2.5">
            <WaveformIcon className="text-text-primary" />
            <span className="text-[17px] font-semibold tracking-[-0.02em] text-text-primary">
              Etincelle
            </span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <div className="flex w-[18px] flex-col items-end gap-[5px]">
              <span
                className={`block h-[1.5px] bg-text-primary transition-all duration-300 ease-out ${
                  mobileOpen
                    ? "w-[18px] translate-y-[6.5px] rotate-45"
                    : "w-[18px]"
                }`}
              />
              <span
                className={`block h-[1.5px] bg-text-primary transition-all duration-300 ease-out ${
                  mobileOpen ? "w-0 opacity-0" : "w-[12px]"
                }`}
              />
              <span
                className={`block h-[1.5px] bg-text-primary transition-all duration-300 ease-out ${
                  mobileOpen
                    ? "w-[18px] -translate-y-[6.5px] -rotate-45"
                    : "w-[16px]"
                }`}
              />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden border-t border-border-light/40"
            >
              <div className="flex flex-col gap-1 px-5 pb-6 pt-3">
                {navLinks.map((link, i) => {
                  const isPage = link.href.startsWith("/");
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      onClick={isPage ? () => setMobileOpen(false) : (e) => { scrollToSection(e, link.href); setMobileOpen(false); }}
                      className="py-2.5 text-[14px] font-normal text-text-muted transition-colors hover:text-text-primary"
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
