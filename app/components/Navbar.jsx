// app/components/Navbar.jsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navClasses =
    theme === "dark"
      ? isScrolled
        ? "bg-[#0A1A2F]/95 text-white shadow-xl backdrop-blur-md border border-white/10"
        : "bg-white/5 text-white backdrop-blur-sm border border-white/20"
      : isScrolled
      ? "bg-white/95 text-slate-900 shadow-xl backdrop-blur-md border border-slate-200"
      : "bg-white/80 text-slate-900 backdrop-blur-sm border border-slate-200";

  return (
    <nav
      className={`
        fixed z-50 top-4 left-1/2 -translate-x-1/2
        w-[92%] max-w-5xl
        rounded-full
        transition-all duration-300
        ${navClasses}
      `}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-[#D4A017] flex items-center justify-center text-xs font-extrabold text-[#0A1A2F]">
            PM
          </div>
          <div className="leading-tight">
     
          </div>
        </Link>

        {/* Links */}
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

        {/* CTA + Theme toggle + Mobile menu */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 hover:bg-black/40 text-sm transition-colors dark:border-white/30 dark:bg-black/40 dark:hover:bg-black/60"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          <Link
            href="/quote"
            className="hidden sm:inline-flex items-center rounded-full bg-[#D4A017] px-4 py-2 text-xs font-semibold text-[#0A1A2F] shadow-md hover:shadow-lg hover:bg-[#c19113] transition-all"
          >
            Get a Quote
          </Link>

          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 md:hidden"
            aria-label="Open menu"
          >
            <span className="block h-[2px] w-4 bg-current mb-[3px]" />
            <span className="block h-[2px] w-4 bg-current mb-[3px]" />
            <span className="block h-[2px] w-4 bg-current" />
          </button>
        </div>
      </div>
    </nav>
  );
}
