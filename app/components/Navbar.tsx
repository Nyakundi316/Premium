"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Hammer,
  Layers,
  GalleryHorizontal,
  Info,
  PhoneCall,
  SunMedium,
  MoonStar,
  Menu,
  X,
  UserPlus,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const lastY = useRef(0);
  const ticking = useRef(false);

  const navLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "Services", href: "/services", icon: Hammer },
    { label: "Projects", href: "/projects", icon: GalleryHorizontal },
    { label: "About", href: "/about", icon: Info },
  ];

  // ✅ Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // ✅ Prevent body scroll when menu open
  useEffect(() => {
    if (typeof window === "undefined") return;
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // ✅ Scroll behavior: keep navbar visible on mobile for easy navigation
  useEffect(() => {
    lastY.current = typeof window !== "undefined" ? window.scrollY : 0;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;

        setIsScrolled(y > 12);

        // Hide only on desktop, keep visible on mobile
        const isDesktop = window.innerWidth >= 768;

        if (!isMenuOpen && isDesktop) {
          if (y > 160 && delta > 10) setIsHidden(true);
          if (delta < -10) setIsHidden(false);
        } else {
          setIsHidden(false);
        }

        lastY.current = y;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuOpen]);

  // Theme init
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

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
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  // ✅ Floating glass (no radial circle)
  const navGlassTop = `
    bg-black/20
    border border-white/10
    backdrop-blur-2xl
    shadow-[0_14px_60px_rgba(0,0,0,0.45)]
    text-white
  `;

  const navGlassScrolled = `
    bg-[#0A1A2F]/55
    border border-white/15
    backdrop-blur-2xl
    shadow-[0_18px_70px_rgba(0,0,0,0.60)]
    text-white
  `;

  const navClasses = isScrolled ? navGlassScrolled : navGlassTop;

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-transform duration-300
        ${isHidden ? "-translate-y-24 opacity-0 pointer-events-none" : "translate-y-0 opacity-100"}
      `}
    >
      <div className="mx-auto max-w-6xl px-3 sm:px-4 pt-3">
        <nav
          className={`
            w-full transition-all duration-300
            ${isMenuOpen ? "rounded-3xl" : "rounded-full"}
            ${navClasses}
            ${isMenuOpen ? "bg-[#0A1A2F]/95 backdrop-blur-none" : ""} 
          `}
        >
          {/* Top Row */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-2.5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-9 w-16 sm:h-10 sm:w-20">
                <Image
                  src="/images/pm logo.png"
                  alt="Premium Concrete Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-2 text-sm font-medium">
              {navLinks.map(({ label, href, icon: Icon }) => {
                const isActive =
                  href === "/" ? pathname === "/" : pathname.startsWith(href);

                return (
                  <Link
                    key={href}
                    href={href}
                    className={`
                      relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full
                      transition-colors
                      ${
                        isActive
                          ? "text-[#D4A017] bg-[#D4A017]/12"
                          : "text-white/90 hover:text-[#D4A017] hover:bg-white/10"
                      }
                    `}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-[#D4A017]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <a
                href="tel:+254116724251"
                className="hidden lg:inline-flex items-center gap-1 text-xs font-medium
                           text-white/90 hover:text-[#D4A017] transition-colors"
              >
                <PhoneCall className="h-4 w-4" />
                <span>Call us</span>
              </a>

    
            

              {/* Sign Up */}
              <Link
                href="/signup"
                className="hidden sm:inline-flex items-center gap-2 rounded-full
                           border border-white/18 bg-white/10 px-4 py-2 text-xs font-semibold text-white
                           hover:bg-white/15 hover:border-white/25 transition"
              >
                <UserPlus className="h-4 w-4 text-[#D4A017]" />
                <span>Sign Up</span>
              </Link>

              {/* CTA */}
              <Link
                href="/quote"
                className="hidden sm:inline-flex items-center rounded-full
                           bg-[#D4A017] px-4 py-2 text-xs font-semibold text-[#0A1A2F]
                           hover:brightness-95 transition shadow-md"
              >
                Get a Quote
              </Link>

              {/* Mobile menu toggle */}
              <button
                className="
                  md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full
                  border border-white/20 bg-white/10 hover:bg-white/15 transition
                "
                aria-label="Toggle menu"
                onClick={() => setIsMenuOpen((p) => !p)}
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden px-4 sm:px-6 pb-4 border-t border-white/10">
              <div className="flex flex-col gap-1.5 pt-3">
                {navLinks.map(({ label, href, icon: Icon }) => {
                  const isActive =
                    href === "/" ? pathname === "/" : pathname.startsWith(href);

                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`
                        flex items-center gap-2 rounded-xl px-3 py-2
                        transition-colors
                        ${
                          isActive
                            ? "bg-[#D4A017]/12 text-[#D4A017]"
                            : "text-white/90 hover:bg-white/10"
                        }
                      `}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{label}</span>
                    </Link>
                  );
                })}

                <Link
                  href="/signup"
                  className="
                    mt-2 inline-flex items-center justify-center gap-2 rounded-full
                    border border-white/18 bg-white/10 px-4 py-2 text-xs font-semibold text-white
                    hover:bg-white/15 transition
                  "
                >
                  <UserPlus className="h-4 w-4 text-[#D4A017]" />
                  <span>Sign Up</span>
                </Link>

                <Link
                  href="/quote"
                  className="
                    mt-2 inline-flex items-center justify-center gap-2 rounded-full
                    bg-[#D4A017] px-4 py-2 text-xs font-semibold text-[#0A1A2F]
                    shadow-md hover:brightness-95 transition
                  "
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Request a Quote</span>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
