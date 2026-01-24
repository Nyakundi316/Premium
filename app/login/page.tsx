// app/login/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

const BRAND_GOLD = "#FFBF00";
const BRAND_GOLD_DARK = "#E6AC00";

// ✅ Same pattern as signup: env var with fallback
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://premiumback-end-1.onrender.com";

export default function LoginPage() {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [serverSuccess, setServerSuccess] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    setServerError(null);
    setServerSuccess(null);

    const formData = new FormData(e.currentTarget);
    const email = (formData.get("email") || "").toString().trim();
    const password = (formData.get("password") || "").toString();

    if (!email || !password) {
      setServerError("Email and password are required.");
      return;
    }

    try {
      setIsSubmitting(true);

      const res = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        // Backend uses bad_request("...") → { error: "message" }
        throw new Error(
          data.error ||
            data.message ||
            "Login failed. Please check your details and try again."
        );
      }

      // Expected backend shape:
      // {
      //   "message": "login ok",
      //   "data": {
      //     "access_token": "...",
      //     "refresh_token": "...",
      //     "user": { ... }
      //   }
      // }
      const payload = data.data || {};

      if (!payload.access_token || !payload.refresh_token) {
        throw new Error("Login succeeded but tokens are missing in response.");
      }

      // ✅ Store tokens + user – you can switch to cookies later if you want
      if (typeof window !== "undefined") {
        localStorage.setItem("pm_access_token", payload.access_token);
        localStorage.setItem("pm_refresh_token", payload.refresh_token);
        if (payload.user) {
          localStorage.setItem("pm_user", JSON.stringify(payload.user));
        }
      }

      setServerSuccess("Login successful ✅ Redirecting…");

      // Small delay so the user sees the message
      setTimeout(() => {
        router.push("/"); // change to "/dashboard" if you have one
      }, 800);
    } catch (err: any) {
      setServerError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-white shadow-[0_18px_60px_rgba(15,23,42,0.12)] rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-slate-200">
        {/* LEFT: Hero (same feeling as signup) */}
        <section className="relative hidden lg:block">
          <Image
            src="/images/auth/pm-hero.jpg" // 🔁 use same image as sign up or replace path
            alt="Premium Movers paving and construction"
            fill
            priority
            className="object-cover"
          />
          {/* dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10" />

          <div className="relative h-full flex flex-col justify-end p-8 sm:p-10 lg:p-12 text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-black/30 px-3 py-1 mb-4 text-xs font-medium">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: BRAND_GOLD }}
              />
              Secure login • Faster project follow-ups
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">
              Welcome back to your{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: `linear-gradient(90deg, ${BRAND_GOLD}, ${BRAND_GOLD_DARK})`,
                }}
              >
                PM account
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-100/90 max-w-md mb-5">
              Log in to view saved projects, approve quotes, and track cabro,
              culverts, kerbs and installations in one place.
            </p>

            <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs">
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/25">
                Project history
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/25">
                Quotes & follow-ups
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 border border-white/25">
                Delivery tracking
              </span>
            </div>

            <p className="mt-6 text-[11px] text-slate-100/80">
              Need help?{" "}
              <Link href="/contact" className="underline font-medium">
                Contact us
              </Link>
            </p>
          </div>
        </section>

        {/* RIGHT: Login form */}
        <section className="px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Log in
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-slate-900 hover:underline"
              >
                Create one
              </Link>
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 mb-4 sm:mb-6 max-w-md">
            Use your email and password to access your Premium Movers account.
          </p>

          {/* Server messages */}
          {serverError && (
            <p className="mb-4 text-xs sm:text-sm text-red-600">
              {serverError}
            </p>
          )}
          {serverSuccess && (
            <p className="mb-4 text-xs sm:text-sm text-green-600">
              {serverSuccess}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-medium text-slate-800"
              >
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-md border border-slate-300 bg-white px-9 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-400"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="text-xs font-medium text-slate-800"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  className="w-full rounded-md border border-slate-300 bg-white px-9 pr-9 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-400"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
              <label className="inline-flex items-center gap-2 text-slate-600">
                <input
                  type="checkbox"
                  name="remember"
                  className="h-3.5 w-3.5 rounded border-slate-300 text-slate-900 focus:ring-slate-400"
                />
                <span>Keep me signed in</span>
              </label>

              <button
                type="button"
                className="text-xs font-medium text-slate-700 hover:text-slate-900"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md border border-transparent px-4 py-2.5 text-sm font-semibold text-slate-900 shadow-sm disabled:opacity-80 disabled:cursor-not-allowed"
              style={{
                backgroundImage: `linear-gradient(90deg, ${BRAND_GOLD}, ${BRAND_GOLD_DARK})`,
              }}
            >
              {isSubmitting ? "Logging in..." : "Log in"}
              {!isSubmitting && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          <p className="mt-6 text-xs sm:text-sm text-slate-500">
            By logging in you agree to our{" "}
            <Link href="/terms" className="underline">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
            .
          </p>

          <p className="mt-3 text-xs text-slate-500">
            Need help?{" "}
            <Link href="/contact" className="font-medium text-slate-800">
              Contact us
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
