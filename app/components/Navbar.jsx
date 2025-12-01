"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed z-50 top-4 left-1/2 -translate-x-1/2
        w-[92%] max-w-5xl
        transition-all duration-300
        ${isScrolled
          ? "bg-[#0A1A2F]/95 text-white shadow-xl backdrop-blur-md border border-white/10"
          : "bg-white/5 text-white backdrop-blur-sm border border-white/20"
        }
        rounded-full
      `}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-[#D4A017] flex items-center justify-center text-xs font-extrabold text-[#0A1A2F]">
            PM
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold uppercase tracking-[0.18em]">
              Premium Concrete
            </p>
            <p className="text-[11px] opacity-80">Paving Blocks</p>
          </div>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#services" className="hover:text-[#D4A017] transition-colors">
            Services
          </Link>
          <Link href="#patterns" className="hover:text-[#D4A017] transition-colors">
            Patterns
          </Link>
          <Link href="#projects" className="hover:text-[#D4A017] transition-colors">
            Projects
          </Link>
          <Link href="#about" className="hover:text-[#D4A017] transition-colors">
            About
          </Link>
          <Link href="#faq" className="hover:text-[#D4A017] transition-colors">
            FAQ
          </Link>
        </div>

        {/* CTA + Mobile menu icon placeholder */}
        <div className="flex items-center gap-3">
          <Link
            href="#quote"
            className="hidden sm:inline-flex items-center rounded-full bg-[#D4A017] px-4 py-2 text-xs font-semibold text-[#0A1A2F] shadow-md hover:shadow-lg hover:bg-[#c19113] transition-all"
          >
            Get a Quote
          </Link>

          {/* Mobile menu icon – you can hook this up later */}
          <button
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 md:hidden"
            aria-label="Open menu"
          >
            <span className="block h-[2px] w-4 bg-white mb-[3px]" />
            <span className="block h-[2px] w-4 bg-white mb-[3px]" />
            <span className="block h-[2px] w-4 bg-white" />
          </button>
        </div>
      </div>
    </nav>
  );
}
