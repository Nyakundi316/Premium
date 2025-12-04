"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Hammer,
  Layers,
  GalleryHorizontal,
  Info,
  HelpCircle,
  PhoneCall,
  SunMedium,
  MoonStar,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Links config (desktop + mobile)
  const navLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "Services", href: "/services", icon: Hammer },
    { label: "Patterns", href: "/patterns", icon: Layers },
    { label: "Projects", href: "/projects", icon: GalleryHorizontal },
    { label: "About", href: "/about", icon: Info },
    { label: "FAQ", href: "/faq", icon: HelpCircle },
  ];

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
        ? (stored as "light" | "dark")
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

  // Background + border based on scroll + theme
  const navClasses =
    theme === "dark"
      ? isScrolled
        ? "bg-[#020617]/95 text-white shadow-xl backdrop-blur-md border border-white/10"
        : "bg-[#020617]/40 text-white backdrop-blur-md border border-white/10"
      : isScrolled
      ? "bg-white/95 text-slate-900 shadow-xl backdrop-blur-md border border-slate-200"
      : "bg-white/80 text-slate-900 shadow-md backdrop-blur-md border border-slate-200";

  return (
    <nav
      className={`
        fixed z-50 top-3 left-1/2 -translate-x-1/2
        w-[94%] max-w-6xl
        transition-all duration-300
        ${isMenuOpen ? "rounded-3xl" : "rounded-full"}
        ${navClasses}
      `}
    >
      {/* Top row */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-2.5">
        {/* Logo + brand */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="relative h-9 w-16 sm:h-10 sm:w-20">
            <Image
              src="/images/PM logo.jpeg"
              alt="Premium Concrete PM logo"
              fill
              className="object-contain rounded-full"
            />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
         
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-5 text-sm font-medium">
          {navLinks.map(({ label, href, icon: Icon }) => {
            const isActive = href === "/"
              ? pathname === "/"
              : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={`
                  inline-flex items-center gap-1.5 px-2 py-1 rounded-full
                  transition-colors
                  ${
                    isActive
                      ? "text-[#D4A017] bg-[#D4A017]/10"
                      : "text-current hover:text-[#D4A017]"
                  }
                `}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            );
          })}
        </div>

        {/* Right actions: phone, theme, CTA, mobile menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* quick call icon (desktop only) */}
          <a
            href="tel:+254116724251"
            className="hidden lg:inline-flex items-center gap-1 text-xs font-medium hover:text-[#D4A017] transition-colors"
          >
            <PhoneCall className="h-4 w-4" />
            <span>Call us</span>
          </a>

          {/* theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full
                       border border-white/30 bg-black/20 hover:bg-black/40
                       dark:border-white/30 dark:bg-black/40 dark:hover:bg-black/60
                       text-xs transition-colors"
          >
            {theme === "dark" ? (
              <MoonStar className="h-4 w-4" />
            ) : (
              <SunMedium className="h-4 w-4" />
            )}
          </button>

          {/* desktop CTA */}
          <Link
            href="/quote"
            className="hidden sm:inline-flex items-center rounded-full bg-[#D4A017] 
                       px-4 py-2 text-xs font-semibold text-[#0A1A2F] shadow-md 
                       hover:shadow-lg hover:bg-[#c19113] transition-all"
          >
            Get a Quote
          </Link>

          {/* mobile menu toggle */}
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-current md:hidden"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 sm:px-6 pb-4 text-sm border-t border-white/10 dark:border-slate-800">
          <div className="flex flex-col gap-1.5 pt-2">
            {navLinks.map(({ label, href, icon: Icon }) => {
              const isActive = href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);

              return (
                <Link
                  key={href}
                  href={href}
                  className={`
                    flex items-center gap-2 rounded-xl px-2 py-2
                    transition-colors
                    ${
                      isActive
                        ? "bg-[#D4A017]/10 text-[#D4A017]"
                        : "hover:bg-black/5 dark:hover:bg-white/5"
                    }
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </Link>
              );
            })}

            <Link
              href="/quote"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A017] px-4 py-2 text-xs font-semibold text-[#0A1A2F] shadow-md hover:bg-[#c19113] transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              <PhoneCall className="h-4 w-4" />
              <span>Request a Quote</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
