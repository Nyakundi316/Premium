"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Hammer,
  Boxes,
  GalleryHorizontal,
  Info,
  PhoneCall,
  Mail,
  SunMedium,
  MoonStar,
  Menu,
  X,
} from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const lastY = useRef(0);
  const ticking = useRef(false);

  const applyTheme = (nextTheme: "light" | "dark") => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(nextTheme);
    document.documentElement.style.colorScheme = nextTheme;
  };

  const navLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "Services", href: "/services", icon: Hammer },
    { label: "Products", href: "/products", icon: Boxes },
    { label: "Projects", href: "/projects", icon: GalleryHorizontal },
    { label: "About", href: "/about", icon: Info },
    { label: "Contact", href: "/contact", icon: Mail },
  ];

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu open
  useEffect(() => {
    if (typeof window === "undefined") return;
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Scroll behavior: hide on desktop scroll down, always visible on mobile
  useEffect(() => {
    lastY.current = typeof window !== "undefined" ? window.scrollY : 0;

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;

        setIsScrolled(y > 12);

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

  // Theme init from localStorage / system preference
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
    applyTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    localStorage.setItem("theme", next);
  };

  const navGlassTop = `
    bg-black/20
    border border-white/10
    backdrop-blur-2xl
    shadow-[0_14px_60px_rgba(0,0,0,0.45)]
    text-white
  `;

  const navGlassScrolled = `
    bg-[#0D1B30]/92
    border border-white/10
    backdrop-blur-md
    shadow-[0_4px_30px_rgba(0,0,0,0.25)]
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
            ${isMenuOpen ? "bg-[#0D1B30]/95 backdrop-blur-none" : ""}
          `}
        >
          {/* ── TOP ROW ── */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-2.5">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="relative h-9 w-16 sm:h-10 sm:w-20">
                <Image
                  src="/images/pm logo.png"
                  alt="Premium Cabro Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1 text-sm font-medium">
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
                          ? "text-[#FFC20E] bg-[#FFC20E]/12"
                          : "text-white/90 hover:text-[#FFC20E] hover:bg-white/10"
                      }
                    `}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{label}</span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-[#FFC20E]" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full
                           border border-white/18 bg-white/10 hover:bg-white/15 transition text-white/80"
              >
                {theme === "dark"
                  ? <SunMedium className="h-4 w-4" />
                  : <MoonStar className="h-4 w-4" />
                }
              </button>

              {/* Get a Quote — primary CTA */}
              <Link
                href="/quote"
                className="hidden sm:inline-flex items-center rounded-full
                           bg-[#FFC20E] px-5 py-2 text-xs font-bold text-[#0D1B30]
                           hover:brightness-95 active:scale-95 transition shadow-md"
              >
                Get a Quote
              </Link>

              {/* Mobile: quote CTA (compact) */}
              <Link
                href="/quote"
                className="sm:hidden inline-flex items-center rounded-full
                           bg-[#FFC20E] px-3 py-1.5 text-xs font-bold text-[#0D1B30]
                           hover:brightness-95 transition shadow-md"
              >
                Quote
              </Link>

              {/* Mobile hamburger */}
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

          {/* ── MOBILE MENU ── */}
          <AnimatePresence initial={false}>
            {isMenuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="md:hidden overflow-hidden"
              >
                <div className="px-4 sm:px-6 pb-5 border-t border-white/10">
                  <motion.div
                    className="flex flex-col gap-1.5 pt-3"
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
                    }}
                  >
                    {navLinks.map(({ label, href, icon: Icon }) => {
                      const isActive =
                        href === "/" ? pathname === "/" : pathname.startsWith(href);

                      return (
                        <motion.div
                          key={href}
                          variants={{
                            hidden: { opacity: 0, x: -8 },
                            show: { opacity: 1, x: 0, transition: { duration: 0.22 } },
                          }}
                        >
                          <Link
                            href={href}
                            className={`
                              flex items-center gap-2 rounded-xl px-3 py-2.5
                              transition-colors text-sm font-medium
                              ${
                                isActive
                                  ? "bg-[#FFC20E]/12 text-[#FFC20E]"
                                  : "text-white/90 hover:bg-white/10"
                              }
                            `}
                          >
                            <Icon className="h-4 w-4" />
                            <span>{label}</span>
                          </Link>
                        </motion.div>
                      );
                    })}

                    {/* Divider */}
                    <div className="my-2 border-t border-white/10" />

                    {/* Theme toggle in mobile menu */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: -8 },
                        show: { opacity: 1, x: 0, transition: { duration: 0.22 } },
                      }}
                    >
                      <button
                        onClick={toggleTheme}
                        className="flex w-full items-center gap-2 rounded-xl px-3 py-2.5
                                   text-sm font-medium text-white/90 hover:bg-white/10 transition"
                      >
                        {theme === "dark"
                          ? <SunMedium className="h-4 w-4 text-[#FFC20E]" />
                          : <MoonStar className="h-4 w-4 text-[#FFC20E]" />
                        }
                        <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                      </button>
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: -8 },
                        show: { opacity: 1, x: 0, transition: { duration: 0.22 } },
                      }}
                    >
                      <a
                        href="tel:+254711789438"
                        className="flex items-center gap-2 rounded-xl px-3 py-2.5
                                   text-sm font-medium text-white/80 hover:bg-white/10 transition"
                      >
                        <PhoneCall className="h-4 w-4 text-[#FFC20E]" />
                        <span>Call: 0711 789 438</span>
                      </a>
                    </motion.div>

                    {/* Primary CTA */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 6 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.25 } },
                      }}
                    >
                      <Link
                        href="/quote"
                        className="
                          mt-1 inline-flex items-center justify-center gap-2 rounded-full
                          bg-[#FFC20E] px-4 py-2.5 text-sm font-bold text-[#0D1B30]
                          shadow-md hover:brightness-95 active:scale-95 transition w-full
                        "
                      >
                        <PhoneCall className="h-4 w-4" />
                        <span>Get a Free Quote</span>
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
