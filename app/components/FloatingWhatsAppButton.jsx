"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

const BRAND = {
  mustard: "#D4A017",
  navy: "#0A1A2F",
};

const WHATSAPP_NUMBER = "254711789438";

// Business hours (Nairobi time):
// Mon–Sat: 8:00–18:00, Sun: closed
function getNairobiBusinessStatus(now = new Date()) {
  // Get Nairobi parts reliably using Intl
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Nairobi",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(now);

  const weekday = parts.find((p) => p.type === "weekday")?.value; // Mon, Tue...
  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? 0);

  const minutesNow = hour * 60 + minute;

  // Sun closed
  if (weekday === "Sun") return { isOpen: false, label: "Closed now" };

  // Open window 08:00–18:00
  const openMins = 8 * 60;
  const closeMins = 18 * 60;
  const isOpen = minutesNow >= openMins && minutesNow < closeMins;

  return { isOpen, label: isOpen ? "Online now" : "Closed now" };
}

function buildMessageForPath(pathname) {
  const base =
    "Hello Premium Concrete, I’d like a quotation for paving blocks / installation.";

  if (!pathname) return base;

  if (pathname.startsWith("/products")) {
    return (
      "Hello Premium Concrete, I’m viewing your Products page. Please share prices and availability (60mm/80mm), colours, and delivery options."
    );
  }

  if (pathname.startsWith("/projects")) {
    return (
      "Hello Premium Concrete, I’m viewing your Projects page. I’d like a quotation and a site visit assessment for my project location."
    );
  }

  if (pathname.startsWith("/contact")) {
    return (
      "Hello Premium Concrete, I’m on the Contact/Quote page. Please help me with a quotation. My location is ____ and size is ____ m²."
    );
  }

  return base;
}

export default function FloatingWhatsAppButton() {
  const pathname = usePathname();

  // show/hide on scroll
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  // bounce once for first-time visitor
  const [shouldBounce, setShouldBounce] = useState(false);

  // opening hours
  const [status, setStatus] = useState(() => getNairobiBusinessStatus());

  // Build WhatsApp URL based on page
  const whatsappUrl = useMemo(() => {
    const msg = buildMessageForPath(pathname);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }, [pathname]);

  // Auto-hide on scroll down / show on scroll up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;

      // Always show near top
      if (y < 80) {
        setIsVisible(true);
        lastScrollY.current = y;
        return;
      }

      // scrolling down => hide, up => show
      if (y > lastScrollY.current + 10) setIsVisible(false);
      if (y < lastScrollY.current - 10) setIsVisible(true);

      lastScrollY.current = y;
    };

    lastScrollY.current = window.scrollY || 0;
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Opening hours logic: update every minute
  useEffect(() => {
    const tick = () => setStatus(getNairobiBusinessStatus());
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  // Bounce once after 5 seconds (first-time visitors)
  useEffect(() => {
    const key = "pm_whatsapp_bounced_once";
    const already = typeof window !== "undefined" && localStorage.getItem(key);

    if (already) return;

    const t = setTimeout(() => {
      setShouldBounce(true);
      localStorage.setItem(key, "1");

      // stop bounce after a short moment
      setTimeout(() => setShouldBounce(false), 1200);
    }, 5000);

    return () => clearTimeout(t);
  }, []);

  const onlineDotClass = status.isOpen ? "bg-green-500" : "bg-slate-400";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className={[
        "fixed bottom-5 right-5 z-50 group",
        "transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none",
      ].join(" ")}
    >
      {/* Soft glow ring */}
      <span
        className={[
          "absolute inset-0 rounded-full blur-md",
          status.isOpen ? "animate-pulse" : "",
        ].join(" ")}
        style={{ backgroundColor: `${BRAND.mustard}55` }}
      />

      <div
        className={[
          "relative flex items-center gap-3 rounded-full px-4 py-3 text-white shadow-xl",
          "transition-all group-hover:shadow-2xl group-hover:-translate-y-0.5 active:scale-[0.98]",
          shouldBounce ? "animate-bounce" : "",
        ].join(" ")}
        style={{ backgroundColor: BRAND.navy }}
      >
        {/* Icon */}
        <span
          className="relative flex h-10 w-10 items-center justify-center rounded-full"
          style={{ backgroundColor: BRAND.mustard }}
        >
          <MessageCircle className="h-5 w-5" style={{ color: BRAND.navy }} />

          {/* Online dot (green=open, gray=closed) */}
          <span
            className={[
              "absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full ring-2 ring-white",
              onlineDotClass,
            ].join(" ")}
            title={status.label}
          />
        </span>

        {/* Text */}
        <div className="hidden sm:block leading-tight">
          <p className="text-sm font-semibold">WhatsApp Us</p>
          <p className="text-xs text-white/80 mt-1">{status.label}</p>
        </div>
      </div>
    </a>
  );
}
