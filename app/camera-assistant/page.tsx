import type { Metadata } from "next";
import CameraAssistant from "./components/CameraAssistant";

export const metadata: Metadata = { title: "Camera Assistant", description: "Photograph your space and preview Premium Cabro paving patterns on your phone.", alternates: { canonical: "/camera-assistant" } };

export default function CameraAssistantPage() {
  return <><section className="bg-[#0D1B30] px-4 py-10 text-white sm:py-14"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FFC20E]">Premium Cabro visualiser</p><h1 className="mt-3 max-w-3xl text-3xl font-bold sm:text-5xl">See your space with Premium Cabro</h1><p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">Take or upload a photo, mark the paving area, and compare patterns before requesting a site-verified quotation.</p></div></section><CameraAssistant /></>;
}
