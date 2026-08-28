"use client";

import { useMemo, useRef, useState } from "react";
import { Download, LocateFixed, ScanLine } from "lucide-react";
import type { Point } from "../lib/domain";

type Props = Readonly<{
  source: string;
  points: readonly Point[];
  distanceMetres: number | null;
  onPointsChange: (points: readonly Point[]) => void;
  onDistanceChange: (distance: number | null) => void;
}>;

export default function CalibrationEditor({ source, points, distanceMetres, onPointsChange, onDistanceChange }: Props) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [method, setMethod] = useState<"manual" | "marker">("manual");
  const [markerMessage, setMarkerMessage] = useState<string | null>(null);

  const segment = useMemo(() => points.length === 2 ? points : null, [points]);

  const addPoint = (event: React.MouseEvent<HTMLDivElement>) => {
    if (method !== "manual") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const point = {
      x: (event.clientX - rect.left) / rect.width,
      y: (event.clientY - rect.top) / rect.height,
    };
    onPointsChange(points.length >= 2 ? [point] : [...points, point]);
  };

  const detectMarker = async () => {
    setMarkerMessage("Checking for the 200 mm marker…");
    try {
      const response = await fetch("/api/camera-assistant/marker-capability", { method: "POST" });
      if (!response.ok) throw new Error();
      setMarkerMessage("Marker service is connected. Detection runs when the calibrated image is processed.");
    } catch {
      setMarkerMessage("Automatic marker detection is not configured on this deployment. Use the two-point measurement instead.");
      setMethod("manual");
    }
  };

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1">
        <button type="button" onClick={() => setMethod("manual")} className={`min-h-11 rounded-lg px-3 text-sm font-semibold ${method === "manual" ? "bg-white text-[#0D1B30] shadow-sm" : "text-slate-600"}`}><LocateFixed className="mr-2 inline h-4 w-4" />Two points</button>
        <button type="button" onClick={() => setMethod("marker")} className={`min-h-11 rounded-lg px-3 text-sm font-semibold ${method === "marker" ? "bg-white text-[#0D1B30] shadow-sm" : "text-slate-600"}`}><ScanLine className="mr-2 inline h-4 w-4" />200 mm marker</button>
      </div>

      {method === "manual" ? (
        <>
          <p className="text-sm leading-6 text-slate-600">Tap the two ends of one ground measurement, then enter its real length. Choose a line on the same paving plane.</p>
          <div onClick={addPoint} className="relative cursor-crosshair overflow-hidden rounded-2xl border border-slate-200 bg-slate-950">
            {/* eslint-disable-next-line @next/next/no-img-element -- user-selected blob URLs are intentionally rendered locally */}
            <img ref={imageRef} src={source} alt="Mark a known ground measurement" className="block h-auto w-full select-none" draggable={false} />
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              {segment && <line x1={segment[0].x * 100} y1={segment[0].y * 100} x2={segment[1].x * 100} y2={segment[1].y * 100} stroke="#FFC20E" strokeWidth="0.8" strokeDasharray="2 1" />}
              {points.map((point, index) => <circle key={index} cx={point.x * 100} cy={point.y * 100} r="1.8" fill="#FFC20E" stroke="#0D1B30" strokeWidth="0.6" />)}
            </svg>
          </div>
          <label className="block text-sm font-semibold text-slate-800">
            Known distance in metres
            <input type="number" min="0.05" step="0.01" inputMode="decimal" value={distanceMetres ?? ""} onChange={(event) => onDistanceChange(event.target.value ? Number(event.target.value) : null)} placeholder="e.g. 2.50" className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base outline-none focus:border-[#FFC20E] focus:ring-2 focus:ring-[#FFC20E]/20" />
          </label>
        </>
      ) : (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h3 className="font-bold text-slate-900">Print at 100% scale</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">The outer black marker square must measure 200 mm × 200 mm. Place it flat on the same ground plane, keep all four corners visible, then take the photograph.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="/camera-assistant/aruco-4x4-50-id0-200mm.svg" download className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#0D1B30] px-4 text-sm font-semibold text-white"><Download className="h-4 w-4" /> Download marker</a>
            <button type="button" onClick={detectMarker} className="inline-flex min-h-11 items-center gap-2 rounded-full border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-800"><ScanLine className="h-4 w-4" /> Detect marker</button>
          </div>
          {markerMessage && <p role="status" className="mt-3 text-xs leading-5 text-slate-600">{markerMessage}</p>}
        </div>
      )}
    </div>
  );
}
