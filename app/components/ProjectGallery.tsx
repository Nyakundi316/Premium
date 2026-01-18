"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export default function ProductGallery({ images }: { images: string[] }) {
  const safeImages = useMemo(
    () => (Array.isArray(images) && images.length ? images : ["/images/placeholder.jpg"]),
    [images]
  );
  const [active, setActive] = useState(safeImages[0]);

  return (
    <div>
      {/* Main image */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
        <Image
          src={active}
          alt="Product image"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      {/* Thumbnails */}
      {safeImages.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {safeImages.map((img) => (
            <button
              key={img}
              onClick={() => setActive(img)}
              className={`relative h-20 w-24 rounded-lg overflow-hidden border bg-white
                ${active === img ? "ring-2 ring-[#D4A017] border-transparent" : "border-slate-200"}
              `}
              aria-label="Select image"
              type="button"
            >
              <Image src={img} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
