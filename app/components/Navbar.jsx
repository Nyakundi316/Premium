"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme init
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme =
      stored === "light" || stored === "dark"
        ? stored
        : prefersDark
        ? "dark"
        : "light";

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);

    if (typeof window !== "undefined") {
      document.documentElement.classList.toggle("dark", next === "dark");
      window.localStorage.setItem("theme", next);
    }
  };

  // 🔹 Transparent at top, pill with background only after scroll
  const navClasses =
    theme === "dark"
      ? isScrolled
        ? "bg-[#0A1A2F]/95 text-white shadow-xl backdrop-blur-md border border-white/10"
        : "bg-transparent text-white border border-transparent"
      : isScrolled
      ? "bg-white/95 text-slate-900 shadow-xl backdrop-blur-md border border-slate-200"
      : "bg-transparent text-slate-900 border border-transparent";

  return (
    <nav
      className={`
        fixed z-50 top-4 left-1/2 -translate-x-1/2
        w-[92%] max-w-5xl
        transition-all duration-300
        ${isMenuOpen ? "rounded-3xl" : "rounded-full"}
        ${navClasses}
      `}
    >
      {/* Top row */}
      <div className="flex items-center justify-between px-8 py-3">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="h-10 w-20 relative">
            <Image
              src="/images/PM logo.jpeg"
              alt="Premium Concrete Logo"
              fill
              className="object-contain rounded-full"
              sizes="40px"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/services" className="hover:text-[#D4A017] transition-colors">
            Services
          </Link>
          <Link href="/patterns" className="hover:text-[#D4A017] transition-colors">
            Patterns
          </Link>
          <Link href="/projects" className="hover:text-[#D4A017] transition-colors">
            Projects
          </Link>
          <Link href="/about" className="hover:text-[#D4A017] transition-colors">
            About
          </Link>
          <Link href="/faq" className="hover:text-[#D4A017] transition-colors">
            FAQ
          </Link>
        </div>

        {/* CTA + Theme toggle + Mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full
                       border border-white/30 bg-black/20 hover:bg-black/40
                       dark:border-white/30 dark:bg-black/40 dark:hover:bg-black/60
                       transition-colors"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          <Link
            href="/quote"
            className="hidden sm:inline-flex items-center rounded-full bg-[#D4A017] 
                       px-4 py-2 text-xs font-semibold text-[#0A1A2F] shadow-md 
                       hover:shadow-lg hover:bg-[#c19113] transition-all"
          >
            Get a Quote
          </Link>

          {/* Mobile menu toggle */}
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-current md:hidden"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span
              className={`block h-[2px] w-4 bg-current rounded-full transition-all ${
                isMenuOpen ? "translate-y-[2px] rotate-45" : "mb-[3px]"
              }`}
            />
            <span
              className={`block h-[2px] w-4 bg-current rounded-full transition-all ${
                isMenuOpen ? "opacity-0" : "mb-[3px]"
              }`}
            />
            <span
              className={`block h-[2px] w-4 bg-current rounded-full transition-all ${
                isMenuOpen ? "-translate-y-[2px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden px-8 pb-4 pt-0 text-sm">
          <div className="flex flex-col gap-2">
            <Link
              href="/services"
              className="py-1 hover:text-[#D4A017] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/patterns"
              className="py-1 hover:text-[#D4A017] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Patterns
            </Link>
            <Link
              href="/projects"
              className="py-1 hover:text-[#D4A017] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="py-1 hover:text-[#D4A017] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/faq"
              className="py-1 hover:text-[#D4A017] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              href="/quote"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[#D4A017] px-4 py-2 text-xs font-semibold text-[#0A1A2F] shadow-md hover:bg-[#c19113] transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
