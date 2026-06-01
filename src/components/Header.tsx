"use client";

import { useState, useEffect } from "react";
import { navLinks, profile } from "@/data/portfolio";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const displayName = profile.name.split(" ").slice(0, 2).join(" ");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/10 bg-white/90 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white shadow-lg shadow-brand-600/30">
            {initials}
          </span>
          <span className="hidden font-semibold text-black sm:block">{displayName}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-black/70 transition-colors hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={profile.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 md:inline-flex"
        >
          Get in touch
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={`h-0.5 w-6 bg-black transition ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-black transition ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-black/10 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-black/70 hover:text-brand-600"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-brand-600 px-5 py-2 text-center text-sm font-semibold text-white"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
