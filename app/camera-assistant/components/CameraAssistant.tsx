"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Camera,
  Check,
  CheckCircle2,
  ChevronRight,
  Download,
  Expand,
  Info,
  LoaderCircle,
  MapPin,
  MessageCircle,
  Pencil,
  RefreshCcw,
  Ruler,
  Save,
  ScanLine,
  Share2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  SwatchBook,
  Upload,
  X,
} from "lucide-react";
import { SITE } from "../../lib/site";
import {
  CAMERA_PRODUCTS,
  hasVerifiedQuantityData,
  type LayingPattern,
} from "../lib/catalogue";
import { analysePhotoQuality, type PhotoQualityResult } from "../lib/quality";
import { DEFAULT_MASK, cloneMask, type MaskSnapshot } from "../lib/mask";
import type { MeasurementMode, Point } from "../lib/domain";
import { MEASUREMENT_CONFIDENCE } from "../lib/domain";
import { calibratedAreaFromReference, calculateMaterials } from "../lib/calculations";
import { computeHomography, projectPoint, projectPolygon } from "../lib/projection";
import { buildWhatsAppQuote, createDesignReference, ESTIMATE_DISCLAIMER } from "../lib/quote";
import CalibrationEditor from "./CalibrationEditor";
import PavingPreview from "./PavingPreview";
import BeforeAfterCompare from "./BeforeAfterCompare";

const MaskEditor = dynamic(() => import("./MaskEditor"), {
  ssr: false,
  loading: () => <div className="grid min-h-72 place-items-center rounded-2xl bg-slate-100 text-sm text-slate-500"><LoaderCircle className="mr-2 inline h-5 w-5 animate-spin" /> Loading surface editor…</div>,
});

type CustomerMode = Exclude<MeasurementMode, "site-verified">;
type Step = "mode" | "photo" | "quality" | "surface" | "calibration" | "product" | "preview";

const STEPS: readonly Step[] = ["mode", "photo", "quality", "surface", "calibration", "product", "preview"];
const STEP_LABEL: Record<Step, string> = {
  mode: "Mode",
  photo: "Photo",
  quality: "Quality",
  surface: "Surface",
  calibration: "Measure",
  product: "Cabro",
  preview: "Preview",
};

const PATTERN_LABELS: Record<LayingPattern, string> = {
  "product-specific": "Product-specific",
  stretcher: "Stretcher bond",
  herringbone: "Herringbone",
  "basket-weave": "Basket weave",
  diagonal: "Diagonal",
};

const VISUAL_PATTERNS: readonly LayingPattern[] = ["product-specific", "stretcher", "herringbone", "basket-weave", "diagonal"];

const MODE_CONTENT: ReadonlyArray<{
  id: CustomerMode;
  title: string;
  badge: string;
  description: string;
  Icon: typeof Camera;
  bullets: readonly string[];
}> = [
  {
    id: "quick-preview",
    title: "Quick Preview",
    badge: "Fastest",
    description: "Use one photo to explore a visual cabro treatment without claiming measured quantities.",
    Icon: Sparkles,
    bullets: ["One photo", "Editable paving area", "Visual preview only"],
  },
  {
    id: "calibrated-photo",
    title: "Calibrated Photo",
    badge: "Recommended",
    description: "Mark one known ground distance or use the printable 200 mm ArUco marker.",
    Icon: Ruler,
    bullets: ["Perspective-aware plane", "Measured area estimate", "Calibrated estimate"],
  },
  {
    id: "live-ar",
    title: "Live AR Scan",
    badge: "Experimental",
    description: "Live AR boundary capture is coming soon. For now, this option continues with the working calibrated-photo workflow.",
    Icon: ScanLine,
    bullets: ["No WebXR required", "Known-distance calibration", "Working photo fallback"],
  },
];

const PHOTO_GUIDE = [
  "Clean the camera lens before you start.",
  "Photograph in daylight, without extreme darkness or heavy rain.",
  "Stand where the full paving area and its boundaries are visible.",
  "Hold the phone about 30–60° toward the ground.",
  "Avoid blur and objects covering most of the surface.",
  "For calibration, place the marker flat on the same ground plane.",
];

function estimateRectifiedArea(mask: MaskSnapshot, calibrationPoints: readonly Point[], distanceMetres: number | null): number | null {
  const primary = mask.polygons[0];
  if (!primary || primary.length !== 4 || calibrationPoints.length !== 2 || !distanceMetres || distanceMetres <= 0) return null;
  try {
    const top = Math.hypot(primary[1].x - primary[0].x, primary[1].y - primary[0].y);
    const bottom = Math.hypot(primary[2].x - primary[3].x, primary[2].y - primary[3].y);
    const left = Math.hypot(primary[3].x - primary[0].x, primary[3].y - primary[0].y);
    const right = Math.hypot(primary[2].x - primary[1].x, primary[2].y - primary[1].y);
    const destinationWidth = 1000;
    const destinationHeight = Math.max(250, Math.min(2400, destinationWidth * ((left + right) / Math.max(top + bottom, 0.01))));
    const homography = computeHomography(primary, [
      { x: 0, y: 0 },
      { x: destinationWidth, y: 0 },
      { x: destinationWidth, y: destinationHeight },
      { x: 0, y: destinationHeight },
    ]);
    const projectedReference = calibrationPoints.map((point) => projectPoint(homography, point));
    return mask.polygons.reduce((total, polygon) => total + calibratedAreaFromReference(
      projectPolygon(homography, polygon),
      { start: projectedReference[0], end: projectedReference[1], distanceMetres },
    ), 0);
  } catch {
    return null;
  }
}

function modeStepList(mode: CustomerMode | null): readonly Step[] {
  return mode === "calibrated-photo"
    ? STEPS
    : STEPS.filter((step) => step !== "calibration");
}

export default function CameraAssistant() {
  const uploadInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const permissionDeniedRef = useRef(false);
  const [step, setStep] = useState<Step>("mode");
  const [mode, setMode] = useState<CustomerMode | null>(null);
  const [arNotice, setArNotice] = useState<string | null>(null);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [photoName, setPhotoName] = useState("");
  const [quality, setQuality] = useState<PhotoQualityResult | null>(null);
  const [qualityError, setQualityError] = useState<string | null>(null);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [cameraStarting, setCameraStarting] = useState(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [cameraFacing, setCameraFacing] = useState<"environment" | "user">("environment");
  const [analysing, setAnalysing] = useState(false);
  const [mask, setMask] = useState<MaskSnapshot>(() => cloneMask(DEFAULT_MASK));
  const [surfaceApproved, setSurfaceApproved] = useState(false);
  const [calibrationPoints, setCalibrationPoints] = useState<readonly Point[]>([]);
  const [distanceMetres, setDistanceMetres] = useState<number | null>(null);
  const [selectedProductId, setSelectedProductId] = useState(CAMERA_PRODUCTS[0].id);
  const [pattern, setPattern] = useState<LayingPattern>("product-specific");
  const [rotation, setRotation] = useState(0);
  const [density, setDensity] = useState(12);
  const [suppliedArea, setSuppliedArea] = useState<number | null>(null);
  const [wastage, setWastage] = useState(5);
  const [preview, setPreview] = useState<string | null>(null);
  const [fullScreen, setFullScreen] = useState(false);
  const [saveConsent, setSaveConsent] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);
  const [reference, setReference] = useState("PCCA-PENDING");
  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    location: "",
    mapPin: "",
    projectType: "Residential driveway",
    preferredDate: "",
    service: "Delivery and installation",
  });

  useEffect(() => setReference(createDesignReference()), []);
  useEffect(() => () => { if (photoUrl?.startsWith("blob:")) URL.revokeObjectURL(photoUrl); }, [photoUrl]);

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
    if (videoRef.current) videoRef.current.srcObject = null;
    setCameraOpen(false);
    setCameraStarting(false);
  }, []);

  useEffect(() => () => stopCamera(), [stopCamera]);
  useEffect(() => { if (step !== "photo") stopCamera(); }, [step, stopCamera]);
  useEffect(() => {
    if (!cameraOpen || !videoRef.current || !streamRef.current) return;
    videoRef.current.srcObject = streamRef.current;
    void videoRef.current.play().catch(() => {
      setCameraError("The camera preview could not start. Close it and upload a photo instead.");
      stopCamera();
    });
  }, [cameraOpen, stopCamera]);

  const selectedProduct = useMemo(
    () => CAMERA_PRODUCTS.find((product) => product.id === selectedProductId) ?? CAMERA_PRODUCTS[0],
    [selectedProductId],
  );
  const steps = modeStepList(mode);
  const currentStepIndex = Math.max(0, steps.indexOf(step));
  const calibratedArea = useMemo(
    () => mode === "calibrated-photo" ? estimateRectifiedArea(mask, calibrationPoints, distanceMetres) : null,
    [calibrationPoints, distanceMetres, mask, mode],
  );
  const measurementArea = calibratedArea ?? suppliedArea;
  const confidence = mode ? MEASUREMENT_CONFIDENCE[mode] : MEASUREMENT_CONFIDENCE["quick-preview"];
  const thickness = selectedProduct.thicknessOptionsMm[0];
  const colour = selectedProduct.colours[0];

  const materials = useMemo(() => {
    if (!measurementArea || !hasVerifiedQuantityData(selectedProduct)) return null;
    return calculateMaterials({
      measurementMode: mode ?? "quick-preview",
      grossAreaSquareMetres: measurementArea,
      wastagePercentage: wastage,
      product: {
        id: selectedProduct.id,
        sku: selectedProduct.sku!,
        name: selectedProduct.name,
        topFaceLengthMm: selectedProduct.topFaceLengthMm!,
        topFaceWidthMm: selectedProduct.topFaceWidthMm!,
        thicknessMm: thickness,
        jointWidthMm: selectedProduct.jointWidthMm!,
        piecesPerSquareMetre: selectedProduct.piecesPerSquareMetre!,
        piecesPerPack: selectedProduct.piecesPerPack!,
        squareMetresPerPack: selectedProduct.squareMetresPerPack!,
        pricePerSquareMetre: selectedProduct.pricePerSquareMetreKes,
      },
    });
  }, [measurementArea, mode, selectedProduct, thickness, wastage]);

  const selectMode = async (nextMode: CustomerMode) => {
    setArNotice(null);
    if (nextMode === "live-ar") {
      let supported = false;
      try {
        const xr = (navigator as Navigator & { xr?: { isSessionSupported: (mode: string) => Promise<boolean> } }).xr;
        supported = Boolean(xr && await xr.isSessionSupported("immersive-ar"));
      } catch {
        supported = false;
      }
      setMode("calibrated-photo");
      setArNotice(supported
        ? "This browser reports immersive AR support. Live boundary capture is phase two, so this design continues with Calibrated Photo without losing catalogue or quote data."
        : "Live AR or depth is not supported in this browser. You have been moved to the working Calibrated Photo mode.");
      setStep("photo");
      return;
    }
    setMode(nextMode);
    setStep("photo");
  };

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    setQualityError(null);
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      setQualityError("Use a JPG, PNG or WebP photograph.");
      return;
    }
    if (file.size > 15 * 1024 * 1024) {
      setQualityError("The photograph is larger than 15 MB. Choose a smaller original image.");
      return;
    }
    if (photoUrl?.startsWith("blob:")) URL.revokeObjectURL(photoUrl);
    const nextUrl = URL.createObjectURL(file);
    setPhotoUrl(nextUrl);
    setPhotoName(file.name);
    setAnalysing(true);
    setQuality(null);
    setStep("quality");
    try {
      setQuality(await analysePhotoQuality(nextUrl));
    } catch (caught) {
      setQualityError(caught instanceof Error ? caught.message : "The photograph could not be checked.");
    } finally {
      setAnalysing(false);
    }
  };

  const openCamera = async (facing: "environment" | "user" = cameraFacing) => {
    setCameraError(null);
    if (permissionDeniedRef.current) {
      setCameraError("Camera permission was denied. Allow camera access in browser settings, reload the page, or upload a photo.");
      return;
    }
    if (!window.isSecureContext) {
      setCameraError("Camera access needs a secure HTTPS page. Open the secure site or upload a photo.");
      return;
    }
    if (!navigator.mediaDevices?.getUserMedia) {
      setCameraError("This browser cannot open the camera here. Take a photo with your camera app, then upload it.");
      return;
    }
    stopCamera();
    setCameraStarting(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: { ideal: facing }, width: { ideal: 1920 }, height: { ideal: 1080 } } });
      streamRef.current = stream;
      setCameraFacing(facing);
      setCameraOpen(true);
      setCameraStarting(false);
    } catch (error) {
      stopCamera();
      const name = error instanceof DOMException ? error.name : "";
      if (name === "NotAllowedError" || name === "SecurityError") {
        permissionDeniedRef.current = true;
        setCameraError("Camera permission was denied. Allow it in browser settings and reload, or upload a photo.");
      } else if (name === "NotFoundError" || name === "OverconstrainedError") {
        setCameraError("No usable camera was found. Upload an existing JPG, PNG, or WebP photo instead.");
      } else if (name === "NotReadableError" || name === "AbortError") {
        setCameraError("The camera is busy in another app. Close that app and try again, or upload a photo.");
      } else {
        setCameraError("The camera could not start. Try again or upload a photo instead.");
      }
    }
  };

  const switchCamera = async () => {
    const nextFacing = cameraFacing === "environment" ? "user" : "environment";
    stopCamera();
    await openCamera(nextFacing);
  };

  const capturePhoto = async () => {
    const video = videoRef.current;
    if (!video || video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) {
      setCameraError("The camera is still starting. Wait a moment and try again.");
      return;
    }
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    if (!context) {
      setCameraError("This browser could not capture the photo. Upload a photo instead.");
      stopCamera();
      return;
    }
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, "image/jpeg", 0.92));
    stopCamera();
    if (!blob) {
      setCameraError("The photo could not be saved. Please try again or upload a photo.");
      return;
    }
    await handleFile(new File([blob], `premium-cabro-${Date.now()}.jpg`, { type: "image/jpeg" }));
  };

  const startAgain = () => {
    stopCamera();
    if (photoUrl?.startsWith("blob:")) URL.revokeObjectURL(photoUrl);
    setPhotoUrl(null);
    setPhotoName("");
    setMode(null);
    setStep("mode");
    setQuality(null);
    setMask(cloneMask(DEFAULT_MASK));
    setSurfaceApproved(false);
    setCalibrationPoints([]);
    setDistanceMetres(null);
    setSuppliedArea(null);
    setPreview(null);
    setReference(createDesignReference());
    setSaveMessage(null);
  };

  const handleRendered = useCallback((dataUrl: string) => setPreview(dataUrl), []);

  const downloadPreview = () => {
    if (!preview) return;
    const link = document.createElement("a");
    link.href = preview;
    link.download = `${reference}-premium-cabro-preview.jpg`;
    link.click();
  };

  const sharePreview = async () => {
    if (!preview) return;
    try {
      const blob = await (await fetch(preview)).blob();
      const file = new File([blob], `${reference}.jpg`, { type: "image/jpeg" });
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ title: "Premium Cabro Camera Assistant", text: `My Premium Cabro design ${reference}`, files: [file] });
      } else {
        downloadPreview();
        setSaveMessage("Sharing files is unavailable here, so the branded preview was downloaded.");
      }
    } catch {
      setSaveMessage("Sharing was cancelled or is unavailable on this device.");
    }
  };

  const saveProject = () => {
    if (!saveConsent) {
      setSaveMessage("Consent is required before this browser stores the design.");
      return;
    }
    try {
      localStorage.setItem(`premium-cabro-design:${reference}`, JSON.stringify({
        reference,
        createdAt: new Date().toISOString(),
        mode,
        measurementMethod: mode,
        confidence,
        productId: selectedProduct.id,
        thickness,
        colour,
        pattern,
        rotation,
        areaSquareMetres: measurementArea,
        wastage,
        photoName,
        mask,
      }));
      setSaveMessage("Design details saved on this device. The photograph was not permanently uploaded or stored.");
    } catch {
      setSaveMessage("This browser could not save the design. Download the preview instead.");
    }
  };

  const openWhatsApp = (message: string) => {
    window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const submitQuote = () => {
    openWhatsApp(buildWhatsAppQuote({
      reference,
      customerName: customer.name,
      telephone: customer.phone,
      location: customer.location,
      mapPin: customer.mapPin,
      projectType: customer.projectType,
      product: selectedProduct,
      thicknessMm: thickness,
      colour,
      pattern: PATTERN_LABELS[pattern],
      estimatedArea: measurementArea,
      estimatedBlocks: materials?.blocksRequired ?? null,
      estimatedPacks: materials?.packsRequired ?? null,
      confidence,
      wastagePercentage: wastage,
      previewUrl: null,
      preferredDate: customer.preferredDate,
      service: customer.service,
    }));
  };

  const goBack = () => {
    const index = steps.indexOf(step);
    if (index > 0) setStep(steps[index - 1]);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      {mode && (
        <div className="sticky top-20 z-30 -mx-4 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-2xl sm:border">
          <div className="flex items-center gap-2 overflow-x-auto" aria-label="Camera Assistant progress">
            {steps.map((item, index) => (
              <div key={item} className="flex shrink-0 items-center gap-2">
                <span className={`grid h-7 w-7 place-items-center rounded-full text-xs font-bold ${index <= currentStepIndex ? "bg-[#FFC20E] text-[#0D1B30]" : "bg-slate-100 text-slate-400"}`}>{index < currentStepIndex ? <Check className="h-4 w-4" /> : index + 1}</span>
                <span className={`text-xs font-semibold ${item === step ? "text-slate-900" : "text-slate-500"}`}>{STEP_LABEL[item]}</span>
                {index < steps.length - 1 && <ChevronRight className="h-4 w-4 text-slate-300" />}
              </div>
            ))}
          </div>
        </div>
      )}

      {arNotice && <div role="status" className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-slate-700"><Info className="mr-2 inline h-5 w-5 text-amber-700" />{arNotice}</div>}

      {step === "mode" && (
        <section className="py-8 sm:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FFC20E]/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#8A6500]"><Camera className="h-4 w-4" /> Choose accuracy mode</span>
            <h2 className="mt-5 text-3xl font-bold text-slate-950 sm:text-4xl">How would you like to preview your space?</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">All modes preserve the original scene outside the paving mask. Measurement confidence is always shown with the result.</p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {MODE_CONTENT.map(({ id, title, badge, description, Icon, bullets }) => (
              <button key={id} type="button" onClick={() => void selectMode(id)} className="group min-h-72 rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-[#FFC20E] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#FFC20E]/25">
                <div className="flex items-start justify-between gap-3">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0D1B30] text-[#FFC20E]"><Icon className="h-6 w-6" /></span>
                  <span className="rounded-full bg-[#FFC20E]/15 px-3 py-1 text-[11px] font-bold text-[#8A6500]">{badge}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                <ul className="mt-5 space-y-2">
                  {bullets.map((bullet) => <li key={bullet} className="flex items-center gap-2 text-sm text-slate-700"><CheckCircle2 className="h-4 w-4 text-[#B8860B]" />{bullet}</li>)}
                </ul>
              </button>
            ))}
          </div>
        </section>
      )}

      {step === "photo" && (
        <section className="py-8">
          <div className="grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A7100]">Step 2 · Photograph</span>
              <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">Show us the full paving area</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">Camera access is requested only after you press “Open camera.” Your photo stays on this device during preview unless you separately consent to save or upload it.</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <button type="button" onClick={() => void openCamera("environment")} disabled={cameraStarting || cameraOpen} aria-label="Open rear camera" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#FFC20E] px-6 text-sm font-bold text-[#0D1B30] transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC20E]/40 disabled:opacity-50"><Camera className="h-5 w-5" /> {cameraStarting ? "Starting camera…" : "Open camera"}</button>
                <button type="button" onClick={() => uploadInputRef.current?.click()} aria-label="Upload an existing photo" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-slate-300 bg-white px-6 text-sm font-bold text-slate-800 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC20E]/40"><Upload className="h-5 w-5" /> Upload a photo</button>
                <input ref={uploadInputRef} type="file" accept="image/jpeg,image/png,image/webp" onChange={(event) => void handleFile(event.target.files?.[0])} className="sr-only" />
              </div>
              {cameraOpen && (
                <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950">
                  <video ref={videoRef} autoPlay muted playsInline aria-label="Live rear camera preview" className="aspect-[3/4] w-full object-cover sm:aspect-video" />
                  <div className="grid grid-cols-2 gap-3 bg-slate-950 p-3 sm:flex sm:justify-center">
                    <button type="button" onClick={() => void capturePhoto()} aria-label="Capture current camera frame" className="min-h-12 rounded-full bg-[#FFC20E] px-5 text-sm font-bold text-[#0D1B30] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70"><Camera className="mr-2 inline h-5 w-5" />Take photo</button>
                    <button type="button" onClick={() => void switchCamera()} aria-label={`Switch to ${cameraFacing === "environment" ? "front" : "rear"} camera`} className="min-h-12 rounded-full border border-white/40 px-5 text-sm font-bold text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70"><RefreshCcw className="mr-2 inline h-5 w-5" />Switch</button>
                    <button type="button" onClick={stopCamera} aria-label="Close camera" className="min-h-12 rounded-full border border-white/40 px-5 text-sm font-bold text-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/70"><X className="mr-2 inline h-5 w-5" />Close</button>
                  </div>
                </div>
              )}
              {cameraError && <div role="alert" className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-slate-700"><p>{cameraError}</p>{!permissionDeniedRef.current && <button type="button" onClick={() => void openCamera(cameraFacing)} className="mt-2 font-bold text-[#765800] underline decoration-2 underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC20E]">Try camera again</button>}</div>}
              <p className="mt-4 flex items-start gap-2 text-xs leading-5 text-slate-500"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />Privacy: camera frames and captured photos stay in this browser unless you explicitly share or submit them.</p>
              {qualityError && <p role="alert" className="mt-4 rounded-xl bg-red-50 p-3 text-sm text-red-700">{qualityError}</p>}
              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#8A6500]" />
                <p className="text-xs leading-5 text-slate-600">No permanent storage by default. Generated previews are re-encoded without the original EXIF metadata. Photos are never used for model training without separate explicit consent.</p>
              </div>
            </div>
            <aside className="rounded-3xl bg-[#0D1B30] p-5 text-white sm:p-8">
              <div className="flex items-center gap-3"><Smartphone className="h-6 w-6 text-[#FFC20E]" /><h3 className="text-lg font-bold">Camera guide</h3></div>
              <ul className="mt-5 space-y-4">
                {PHOTO_GUIDE.map((item, index) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/80"><span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-bold text-[#FFC20E]">{index + 1}</span>{item}</li>)}
              </ul>
            </aside>
          </div>
        </section>
      )}

      {step === "quality" && photoUrl && (
        <section className="py-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950">
              {/* eslint-disable-next-line @next/next/no-img-element -- the photo is a local blob URL */}
              <img src={photoUrl} alt="Customer paving area awaiting quality approval" className="h-auto w-full" />
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A7100]">Photo quality</span>
              <h2 className="mt-3 text-2xl font-bold text-slate-950">Is this photo suitable?</h2>
              {analysing && <div className="mt-8 flex items-center gap-3 text-sm text-slate-600"><LoaderCircle className="h-5 w-5 animate-spin text-[#B8860B]" />Checking sharpness, brightness, frame coverage and perspective…</div>}
              {quality && <div className="mt-5 space-y-3">{quality.checks.map((check) => (
                <div key={check.id} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-semibold text-slate-900">{check.label}</span>
                    <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold uppercase ${check.status === "pass" ? "bg-emerald-100 text-emerald-800" : check.status === "fail" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-800"}`}>{check.status}</span>
                  </div>
                  <p className="mt-1 text-xs font-medium text-slate-500">{check.value}</p>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{check.guidance}</p>
                </div>
              ))}</div>}
              {qualityError && <p role="alert" className="mt-4 text-sm text-red-700">{qualityError}</p>}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={() => setStep("photo")} className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-slate-300 px-5 text-sm font-bold text-slate-800"><RefreshCcw className="h-4 w-4" /> Retake</button>
                <button type="button" disabled={analysing || !quality} onClick={() => setStep("surface")} className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#FFC20E] px-5 text-sm font-bold text-[#0D1B30] disabled:opacity-50">Review surface <ArrowRight className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        </section>
      )}

      {step === "surface" && photoUrl && (
        <section className="py-8">
          <div className="mb-5 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A7100]">Surface selection</span>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">Approve only the ground that should be paved</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">The yellow trapezoid is a conservative local starting mask. When the configured vision service is available, its SAM-compatible suggestion replaces this default. The final mask always remains editable.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-sm sm:p-6">
            <MaskEditor source={photoUrl} value={mask} onChange={(next) => { setMask(next); setSurfaceApproved(false); }} />
            <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <input type="checkbox" checked={surfaceApproved} onChange={(event) => setSurfaceApproved(event.target.checked)} className="mt-1 h-5 w-5 accent-[#FFC20E]" />
              <span><strong className="block text-sm text-slate-900">I approve the highlighted paving surface</strong><span className="mt-1 block text-xs leading-5 text-slate-600">I have removed buildings, gates, vehicles, vegetation, people, drains and other foreground objects from the yellow mask.</span></span>
            </label>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-between">
              <button type="button" onClick={goBack} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 px-5 text-sm font-bold"><ArrowLeft className="h-4 w-4" /> Back</button>
              <button type="button" disabled={!surfaceApproved} onClick={() => setStep(mode === "calibrated-photo" ? "calibration" : "product")} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#FFC20E] px-6 text-sm font-bold text-[#0D1B30] disabled:opacity-40">Approve surface <ArrowRight className="h-4 w-4" /></button>
            </div>
          </div>
        </section>
      )}

      {step === "calibration" && photoUrl && (
        <section className="py-8">
          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A7100]">Calibrated Photo</span>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">Add one known ground measurement</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">The selected four-point ground plane is rectified before this scale reference is applied. Split sloped or separate planes into different areas and treat the result as a calibrated estimate.</p>
            <div className="mt-6"><CalibrationEditor source={photoUrl} points={calibrationPoints} distanceMetres={distanceMetres} onPointsChange={setCalibrationPoints} onDistanceChange={setDistanceMetres} /></div>
            {calibratedArea != null && <div className="mt-5 rounded-2xl bg-[#0D1B30] p-4 text-white"><span className="text-xs uppercase tracking-[0.14em] text-white/60">Calibrated estimate</span><p className="mt-1 text-2xl font-bold">{calibratedArea.toFixed(2)} m²</p><p className="mt-1 text-xs text-white/60">Pending product coverage verification and physical site review.</p></div>}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
              <button type="button" onClick={goBack} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 px-5 text-sm font-bold"><ArrowLeft className="h-4 w-4" /> Back</button>
              <button type="button" disabled={calibrationPoints.length !== 2 || !distanceMetres || calibratedArea == null} onClick={() => setStep("product")} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#FFC20E] px-6 text-sm font-bold text-[#0D1B30] disabled:opacity-40">Use calibration <ArrowRight className="h-4 w-4" /></button>
            </div>
          </div>
        </section>
      )}

      {step === "product" && (
        <section className="py-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A7100]">Product catalogue</span>
            <h2 className="mt-3 text-2xl font-bold text-slate-950 sm:text-3xl">Choose a published Premium Cabro visual</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">These phase-one records reuse existing website names and imagery. Every missing physical or commercial value is withheld until staff verifies it in the admin catalogue.</p>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CAMERA_PRODUCTS.map((product) => (
              <button key={product.id} type="button" onClick={() => { setSelectedProductId(product.id); setPattern(product.suitablePatterns[0]); }} className={`overflow-hidden rounded-2xl border bg-white text-left transition ${selectedProductId === product.id ? "border-[#FFC20E] ring-4 ring-[#FFC20E]/20" : "border-slate-200 hover:border-slate-400"}`}>
                <div className="relative aspect-[4/3]"><Image src={product.productPhoto} alt={`${product.name} catalogue photograph`} fill className="object-cover" sizes="(max-width: 640px) 50vw, 25vw" /></div>
                <div className="p-4"><div className="flex items-start justify-between gap-2"><h3 className="font-bold text-slate-950">{product.name}</h3>{selectedProductId === product.id && <BadgeCheck className="h-5 w-5 shrink-0 text-[#B8860B]" />}</div><p className="mt-1 text-xs text-slate-500">{product.thicknessOptionsMm.join(" / ")} mm thickness</p><span className="mt-3 inline-flex rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-bold uppercase text-amber-800">Visual only · data review</span></div>
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:grid-cols-3">
            <label className="text-sm font-semibold text-slate-800">Laying pattern<select value={pattern} onChange={(event) => setPattern(event.target.value as LayingPattern)} className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm">{VISUAL_PATTERNS.map((item) => <option key={item} value={item}>{PATTERN_LABELS[item]}</option>)}</select><span className="mt-1 block text-[11px] font-normal leading-4 text-slate-500">Visual direction only; staff must confirm product suitability.</span></label>
            <label className="text-sm font-semibold text-slate-800">Pattern direction · {rotation}°<input type="range" min="0" max="315" step="45" value={rotation} onChange={(event) => setRotation(Number(event.target.value))} className="mt-4 w-full accent-[#FFC20E]" /></label>
            <label className="text-sm font-semibold text-slate-800">Visual repeat density · {density}<input type="range" min="6" max="24" value={density} onChange={(event) => setDensity(Number(event.target.value))} className="mt-4 w-full accent-[#FFC20E]" /><span className="mt-1 block text-[11px] font-normal leading-4 text-slate-500">Not a physical scale until top-face dimensions are verified.</span></label>
            <label className="text-sm font-semibold text-slate-800">Colour<select value={colour} disabled className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 text-sm"><option>{colour}</option></select><span className="mt-1 block text-[11px] font-normal leading-4 text-slate-500">No unverified colour variants are generated.</span></label>
            <label className="text-sm font-semibold text-slate-800">Thickness<select value={thickness} disabled className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 text-sm"><option>{thickness} mm</option></select><span className="mt-1 block text-[11px] font-normal leading-4 text-slate-500">Thickness is separate from visible top-face dimensions.</span></label>
            <label className="text-sm font-semibold text-slate-800">Border product<select disabled className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-slate-50 px-3 text-sm"><option>No verified border loaded</option></select><span className="mt-1 block text-[11px] font-normal leading-4 text-slate-500">Contrasting borders unlock only with a verified border SKU and width.</span></label>
          </div>

          {mode === "quick-preview" && <label className="mt-5 block max-w-md rounded-2xl border border-slate-200 bg-white p-4 text-sm font-semibold text-slate-800">Optional customer-supplied area (m²)<input type="number" min="0.1" step="0.1" inputMode="decimal" value={suppliedArea ?? ""} onChange={(event) => setSuppliedArea(event.target.value ? Number(event.target.value) : null)} placeholder="Leave blank for visual preview only" className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 px-4" /><span className="mt-2 block text-xs font-normal leading-5 text-slate-500">This does not become a calibrated measurement; it records an area supplied by the customer.</span></label>}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
            <button type="button" onClick={goBack} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-300 px-5 text-sm font-bold"><ArrowLeft className="h-4 w-4" /> Back</button>
            <button type="button" onClick={() => { setPreview(null); setStep("preview"); }} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#FFC20E] px-6 text-sm font-bold text-[#0D1B30]">Generate preview <Sparkles className="h-4 w-4" /></button>
          </div>
        </section>
      )}

      {step === "preview" && photoUrl && (
        <section className="py-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div><span className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A7100]">Design {reference}</span><h2 className="mt-2 text-2xl font-bold text-slate-950 sm:text-3xl">Your Premium Cabro preview</h2></div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0D1B30] px-4 py-2 text-xs font-bold text-white"><ShieldCheck className="h-4 w-4 text-[#FFC20E]" />{confidence}</span>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[1.25fr_.75fr]">
            <div className="space-y-4">
              <PavingPreview source={photoUrl} mask={mask} product={selectedProduct} pattern={pattern} rotationDegrees={rotation} density={density} onRendered={handleRendered} />
              {preview && <BeforeAfterCompare original={photoUrl} preview={preview} alt={`${selectedProduct.name} finished appearance preview`} />}
              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap">
                <button type="button" onClick={() => setFullScreen(true)} disabled={!preview} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-300 px-4 text-xs font-bold disabled:opacity-40"><Expand className="h-4 w-4" /> Full screen</button>
                <button type="button" onClick={() => setStep("product")} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-300 px-4 text-xs font-bold"><SwatchBook className="h-4 w-4" /> Change cabro</button>
                <button type="button" onClick={() => setRotation((value) => (value + 45) % 360)} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-300 px-4 text-xs font-bold"><RefreshCcw className="h-4 w-4" /> Rotate pattern</button>
                <button type="button" onClick={() => setStep("surface")} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-300 px-4 text-xs font-bold"><Pencil className="h-4 w-4" /> Edit area</button>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-xs leading-5 text-slate-700"><strong>Colour notice:</strong> Colours shown on a phone or computer may vary because of lighting, camera processing, screen settings and natural product variation. Please confirm your final colour using a physical cabro sample.</div>
            </div>

            <aside className="space-y-4">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-slate-950">Area & materials</h3>
                <dl className="mt-4 divide-y divide-slate-100 text-sm">
                  <div className="flex justify-between gap-3 py-3"><dt className="text-slate-500">Method</dt><dd className="text-right font-semibold text-slate-900">{mode === "calibrated-photo" ? "Known ground reference" : suppliedArea ? "Customer-supplied area" : "Visual only"}</dd></div>
                  <div className="flex justify-between gap-3 py-3"><dt className="text-slate-500">Net area</dt><dd className="font-semibold text-slate-900">{measurementArea ? `${measurementArea.toFixed(2)} m²` : "Not calculated"}</dd></div>
                  <div className="flex items-center justify-between gap-3 py-3"><dt className="text-slate-500">Wastage</dt><dd><input type="number" min="0" max="25" value={wastage} onChange={(event) => setWastage(Number(event.target.value))} className="w-20 rounded-lg border border-slate-300 px-2 py-1 text-right font-semibold" aria-label="Wastage percentage" />%</dd></div>
                  <div className="flex justify-between gap-3 py-3"><dt className="text-slate-500">Order area</dt><dd className="font-semibold text-slate-900">{measurementArea ? `${(measurementArea * (1 + wastage / 100)).toFixed(2)} m²` : "Not calculated"}</dd></div>
                  <div className="flex justify-between gap-3 py-3"><dt className="text-slate-500">Blocks</dt><dd className="text-right font-semibold text-slate-900">{materials?.blocksRequired ?? "Pending verified coverage"}</dd></div>
                  <div className="flex justify-between gap-3 py-3"><dt className="text-slate-500">Full packs</dt><dd className="text-right font-semibold text-slate-900">{materials?.packsRequired ?? "Pending pack data"}</dd></div>
                  <div className="flex justify-between gap-3 py-3"><dt className="text-slate-500">Material estimate</dt><dd className="text-right font-semibold text-slate-900">{materials?.estimatedMaterialCost != null ? `KSh ${materials.estimatedMaterialCost.toLocaleString()}` : "Quote required"}</dd></div>
                </dl>
                {!hasVerifiedQuantityData(selectedProduct) && <p className="mt-4 rounded-xl bg-amber-50 p-3 text-xs leading-5 text-amber-900">Quantities are withheld because this product does not yet have staff-verified footprint, pieces/m² and full-pack coverage. Thickness is never used as block length or width.</p>}
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-slate-950">Save or share</h3>
                <label className="mt-4 flex items-start gap-3 text-xs leading-5 text-slate-600"><input type="checkbox" checked={saveConsent} onChange={(event) => setSaveConsent(event.target.checked)} className="mt-1 h-4 w-4 accent-[#FFC20E]" />I consent to storing this design’s details on this device. My photograph is not uploaded by this action.</label>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button type="button" onClick={saveProject} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-300 text-xs font-bold"><Save className="h-4 w-4" /> Save project</button>
                  <button type="button" onClick={downloadPreview} disabled={!preview} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-300 text-xs font-bold disabled:opacity-40"><Download className="h-4 w-4" /> Download</button>
                  <button type="button" onClick={() => void sharePreview()} disabled={!preview} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-300 text-xs font-bold disabled:opacity-40"><Share2 className="h-4 w-4" /> Share</button>
                  <button type="button" onClick={startAgain} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-300 text-xs font-bold"><RefreshCcw className="h-4 w-4" /> Start again</button>
                </div>
                {saveMessage && <p role="status" className="mt-3 text-xs leading-5 text-slate-600">{saveMessage}</p>}
              </div>
            </aside>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
            <div className="rounded-3xl bg-[#0D1B30] p-6 text-white">
              <h3 className="text-xl font-bold">Need confirmation first?</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">Ask Premium Cabro to confirm the physical colour, inspect the site or measure the paving area.</p>
              <div className="mt-5 space-y-3">
                <button type="button" onClick={() => openWhatsApp(`Hello Premium Cabro, I would like a physical sample for design ${reference}, product ${selectedProduct.name}.`)} className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/20 px-4 text-sm font-semibold hover:bg-white/10"><SwatchBook className="h-4 w-4" /> Request physical sample</button>
                <button type="button" onClick={() => openWhatsApp(`Hello Premium Cabro, I would like a physical site measurement for design ${reference}. My location is ____.`)} className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/20 px-4 text-sm font-semibold hover:bg-white/10"><MapPin className="h-4 w-4" /> Request site measurement</button>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3"><MessageCircle className="h-6 w-6 text-[#B8860B]" /><h3 className="text-xl font-bold text-slate-950">Request quote on WhatsApp</h3></div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <input value={customer.name} onChange={(event) => setCustomer({ ...customer, name: event.target.value })} placeholder="Customer name" aria-label="Customer name" className="min-h-12 rounded-xl border border-slate-300 px-4 text-sm" />
                <input value={customer.phone} onChange={(event) => setCustomer({ ...customer, phone: event.target.value })} placeholder="Telephone number" aria-label="Telephone number" inputMode="tel" className="min-h-12 rounded-xl border border-slate-300 px-4 text-sm" />
                <input value={customer.location} onChange={(event) => setCustomer({ ...customer, location: event.target.value })} placeholder="Project location" aria-label="Project location" className="min-h-12 rounded-xl border border-slate-300 px-4 text-sm" />
                <input value={customer.mapPin} onChange={(event) => setCustomer({ ...customer, mapPin: event.target.value })} placeholder="Shared map pin or URL" aria-label="Shared map pin" className="min-h-12 rounded-xl border border-slate-300 px-4 text-sm" />
                <select value={customer.projectType} onChange={(event) => setCustomer({ ...customer, projectType: event.target.value })} aria-label="Project type" className="min-h-12 rounded-xl border border-slate-300 bg-white px-4 text-sm"><option>Residential driveway</option><option>Commercial parking</option><option>Walkway</option><option>Patio</option><option>Compound</option><option>Other</option></select>
                <input type="date" value={customer.preferredDate} onChange={(event) => setCustomer({ ...customer, preferredDate: event.target.value })} aria-label="Preferred installation date" className="min-h-12 rounded-xl border border-slate-300 px-4 text-sm" />
                <select value={customer.service} onChange={(event) => setCustomer({ ...customer, service: event.target.value })} aria-label="Service required" className="min-h-12 rounded-xl border border-slate-300 bg-white px-4 text-sm sm:col-span-2"><option>Delivery and installation</option><option>Delivery only</option><option>Installation only</option><option>Advice first</option></select>
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-500">{ESTIMATE_DISCLAIMER}</p>
              <button type="button" onClick={submitQuote} className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#FFC20E] px-6 text-sm font-bold text-[#0D1B30] transition hover:brightness-95"><MessageCircle className="h-5 w-5" /> Prepare WhatsApp quotation</button>
              <p className="mt-3 text-center text-[11px] leading-4 text-slate-500">WhatsApp text links cannot attach a local image automatically. Download or share the preview image into the same conversation.</p>
            </div>
          </div>
        </section>
      )}

      {mode && step !== "mode" && step !== "preview" && <button type="button" onClick={startAgain} className="mt-2 inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900"><X className="h-4 w-4" /> Exit and start again</button>}

      {fullScreen && preview && (
        <div role="dialog" aria-modal="true" aria-label="Full-screen cabro preview" className="fixed inset-0 z-[100] grid place-items-center bg-black/95 p-3 sm:p-8">
          <button type="button" onClick={() => setFullScreen(false)} className="absolute right-4 top-4 z-10 grid h-12 w-12 place-items-center rounded-full bg-white text-slate-950" aria-label="Close full-screen preview"><X className="h-5 w-5" /></button>
          {/* eslint-disable-next-line @next/next/no-img-element -- generated local preview */}
          <img src={preview} alt={`${selectedProduct.name} full-screen preview`} className="max-h-full max-w-full object-contain" />
        </div>
      )}
    </div>
  );
}
