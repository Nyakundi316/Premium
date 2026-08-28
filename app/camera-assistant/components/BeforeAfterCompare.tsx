"use client";

import { useState } from "react";

type Props = Readonly<{ original: string; preview: string; alt: string }>;

export default function BeforeAfterCompare({ original, preview, alt }: Props) {
  const [position, setPosition] = useState(50);
  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-950">
      {/* eslint-disable-next-line @next/next/no-img-element -- local blob and generated data URLs are not compatible with next/image */}
      <img src={preview} alt={alt} className="block h-auto w-full" />
      <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- local blob and generated data URLs are not compatible with next/image */}
        <img src={original} alt="Original space before cabro visualization" className="h-full max-w-none object-cover" style={{ width: `${10000 / Math.max(position, 1)}%` }} />
      </div>
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow" style={{ left: `${position}%` }} />
      <span className="absolute left-3 top-3 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold text-white">Original</span>
      <span className="absolute right-3 top-3 rounded-full bg-[#FFC20E] px-3 py-1 text-xs font-semibold text-[#0D1B30]">Preview</span>
      <label className="absolute inset-x-4 bottom-4">
        <span className="sr-only">Compare original and preview</span>
        <input type="range" min="0" max="100" value={position} onChange={(event) => setPosition(Number(event.target.value))} className="w-full accent-[#FFC20E]" />
      </label>
    </div>
  );
}
