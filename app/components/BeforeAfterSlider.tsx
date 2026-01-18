"use client";

import Image from "next/image";
import { useState } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  altBefore?: string;
  altAfter?: string;
  labelBefore?: string;
  labelAfter?: string;
};

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  altBefore = "Before",
  altAfter = "After",
  labelBefore = "Before",
  labelAfter = "After",
}: BeforeAfterSliderProps) {
  const [value, setValue] = useState(50);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow-lg bg-slate-200">
        {/* BEFORE image */}
        <Image
          src={beforeSrc}
          alt={altBefore}
          fill
          className="object-cover"
        />

        {/* AFTER image, clipped */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${value}%` }}
        >
          <Image
            src={afterSrc}
            alt={altAfter}
            fill
            className="object-cover"
          />
        </div>

        {/* Center divider line */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-white/80"
          style={{ left: `${value}%` }}
        />

        {/* Labels */}
        <div className="absolute top-3 left-3 rounded-full bg-black/50 text-xs text-white px-3 py-1">
          {labelBefore}
        </div>
        <div className="absolute top-3 right-3 rounded-full bg-black/50 text-xs text-white px-3 py-1">
          {labelAfter}
        </div>
      </div>

      {/* Slider control */}
      <div className="mt-4 flex items-center gap-3">
        <span className="text-xs text-slate-500">Before</span>
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="flex-1 accent-[#D4A017]"
        />
        <span className="text-xs text-slate-500">After</span>
      </div>
    </div>
  );
}
