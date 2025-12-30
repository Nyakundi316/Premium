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

  return (
    <nav
      className={`
        fixed z-50 top-0 left-0 w-full transition-all duration-300
        ${isScrolled
          ? "bg-[#0A1A2F]/95 backdrop-blur-md shadow-xl border-b border-white/10 py-2 sm:py-3"
          : "bg-transparent py-4 sm:py-6"
        }
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo + brand */}
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className={`relative transition-all duration-300 ${isScrolled ? 'h-10 w-10' : 'h-12 w-12'}`}>
              <Image
                src="/images/pm logo.png"
                alt="Premium Concrete PM logo"
                fill
                className="object-contain rounded-full shadow-lg" // Added shadow
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-oswald font-bold tracking-tight uppercase leading-none text-white ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
                Premium
              </span>
              <span className="font-oswald text-[#FFBF00] font-bold tracking-widest text-xs uppercase">
                Concrete PM
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => {
              const isActive = href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);

              return (
                <Link
                  key={href}
                  href={href}
                  className={`
                    px-4 py-2 font-oswald text-sm tracking-wide uppercase font-medium rounded-md
                    transition-all duration-200
                    ${isActive
                      ? "text-[#FFBF00] bg-white/5"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle - Simpler Industrial Style */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              {theme === "dark" ? <MoonStar size={18} /> : <SunMedium size={18} />}
            </button>

            {/* CTA Button */}
            <Link
              href="/quote"
              className={`
                hidden sm:inline-flex items-center gap-2 px-5 py-2.5 
                bg-[#FFBF00] text-[#0A1A2F] font-oswald font-bold uppercase tracking-wide text-sm
                rounded hover:bg-[#E6AC00] transition-all hover:shadow-[0_0_15px_rgba(255,191,0,0.4)]
                ${isScrolled ? '' : 'shadow-lg'}
              `}
            >
              <PhoneCall size={16} />
              <span>Get Quote</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          md:hidden fixed inset-x-0 top-[60px] bg-[#0A1A2F]/95 backdrop-blur-xl border-b border-white/10
          transition-all duration-300 origin-top
          ${isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 pointer-events-none"}
        `}
      >
        <div className="px-4 py-6 space-y-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map(({ label, href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg font-oswald uppercase tracking-wider
                  ${pathname === href ? "bg-[#FFBF00]/10 text-[#FFBF00]" : "text-gray-300 hover:bg-white/5"}
                `}
              >
                <Icon size={18} />
                {label}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10">
            <Link
              href="/quote"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#FFBF00] text-[#0A1A2F] font-oswald font-bold uppercase"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
