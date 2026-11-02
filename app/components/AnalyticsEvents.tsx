"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// GA event -> Meta standard event, so Instagram/Facebook ads can count enquiries.
// quote_form_submit / quote_submission fire alongside generate_lead, so they're
// left out to avoid double-counting Leads.
const META_EVENTS: Record<string, [event: string, extra?: Record<string, unknown>]> = {
  whatsapp_click: ["Contact", { method: "whatsapp" }],
  phone_click: ["Contact", { method: "phone" }],
  generate_lead: ["Lead"],
};

export function trackEvent(name: string, parameters: Record<string, unknown> = {}) {
  window.gtag?.("event", name, parameters);

  const meta = META_EVENTS[name];
  if (meta) window.fbq?.("track", meta[0], { ...parameters, ...meta[1] });
}

export default function AnalyticsEvents() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { link_url: href, page_path: location.pathname });
      } else if (href.includes("wa.me/") || href.includes("whatsapp.com/")) {
        trackEvent("whatsapp_click", { link_url: href, page_path: location.pathname });
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
