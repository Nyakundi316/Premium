"use client";

import { useMemo } from "react";
import { LocateFixed } from "lucide-react";
import type { Point } from "../lib/domain";

type Props = Readonly<{
  source: string;
  points: readonly Point[];
  distanceMetres: number | null;
  onPointsChange: (points: readonly Point[]) => void;
  onDistanceChange: (distance: number | null) => void;
}>;

export default function CalibrationEditor({ source, points, distanceMetres, onPointsChange, onDistanceChange }: Props) {
  const segment = useMemo(() => points.length === 2 ? points : null, [points]);

  const addPoint = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const point = { x: (event.clientX - rect.left) / rect.width, y: (event.clientY - rect.top) / rect.height };
    onPointsChange(points.length >= 2 ? [point] : [...points, point]);
  };

  return (
    <div className="space-y-5">
      <div className="rounded-xl bg-slate-100 p-3 text-sm font-semibold text-[#0D1B30]"><LocateFixed className="mr-2 inline h-4 w-4" />Known-distance calibration</div>
      <p className="text-sm leading-6 text-slate-600">Tap the two ends of one ground measurement, then enter its real length. Choose a line on the same paving plane.</p>
      <div onClick={addPoint} aria-label="Mark two endpoints of a known ground distance" className="relative cursor-crosshair overflow-hidden rounded-2xl border border-slate-200 bg-slate-950">
        {/* eslint-disable-next-line @next/next/no-img-element -- user-selected blob URLs are intentionally rendered locally */}
        <img src={source} alt="Mark a known ground measurement" className="block h-auto w-full select-none" draggable={false} />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {segment && <line x1={segment[0].x * 100} y1={segment[0].y * 100} x2={segment[1].x * 100} y2={segment[1].y * 100} stroke="#FFC20E" strokeWidth="0.8" strokeDasharray="2 1" />}
          {points.map((point, index) => <circle key={index} cx={point.x * 100} cy={point.y * 100} r="1.8" fill="#FFC20E" stroke="#0D1B30" strokeWidth="0.6" />)}
        </svg>
      </div>
      <label className="block text-sm font-semibold text-slate-800">Known distance in metres<input type="number" min="0.05" step="0.01" inputMode="decimal" value={distanceMetres ?? ""} onChange={(event) => onDistanceChange(event.target.value ? Number(event.target.value) : null)} placeholder="e.g. 2.50" className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base outline-none focus:border-[#FFC20E] focus:ring-2 focus:ring-[#FFC20E]/20" /></label>
      <p className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-slate-600">Printed-marker detection is not available yet. Known-distance calibration remains fully supported.</p>
    </div>
  );
}
