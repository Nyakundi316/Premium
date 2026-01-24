// app/signup/page.tsx
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, EyeOff, ArrowRight, ShieldCheck } from "lucide-react";

const BRAND = "#FFBF00";

// ✅ Fallback so it still works even if the env var is missing
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://premiumback-end-1.onrender.com";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [serverSuccess, setServerSuccess] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: true,
  });

  const isValid = useMemo(() => {
    if (!form.name.trim()) return false;
    if (!form.phone.trim()) return false;
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return false;
    if (form.password.length < 8) return false;
    if (form.password !== form.confirmPassword) return false;
    if (!form.agree) return false;
    return true;
  }, [form]);

  const handleChange = (k: keyof typeof form, v: string | boolean) => {
    setForm((p) => ({ ...p, [k]: v }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid || loading) return;

    setServerError(null);
    setServerSuccess(null);

    try {
      setLoading(true);

      const payload = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        password: form.password,
      };

      const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          data.error ||
            data.message ||
            "Signup failed. Please check your details and try again."
        );
      }

      setServerSuccess("Account created successfully ✅ You can now log in.");

      // Optional: reset form
      setForm({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        agree: true,
      });
    } catch (err: any) {
      setServerError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-[#F9FAFB] text-[#0F172A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: visual */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden border border-gray-200 bg-white shadow-sm"
            style={{ borderRadius: "0px" }}
          >
            <div className="relative min-h-[420px] lg:min-h-[620px]">
              <Image
                src="/images/Construction.jpeg"
                alt="Premium Concrete PM — paving blocks & installation"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/45 to-black/20" />
              <div className="absolute inset-0" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="max-w-md">
                  <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 px-4 py-2 text-xs text-white">
                    <ShieldCheck size={16} style={{ color: BRAND }} />
                    Secure account • Faster quotes & follow-ups
                  </div>

                  <h1 className="mt-5 text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                    Create your PM account
                  </h1>
                  <p className="mt-3 text-white/80">
                    Save your project details, request quotes quickly, and track
                    follow-ups for cabro blocks, culverts, kerbs, and
                    installation.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 text-xs">
                    <span className="border border-white/20 bg-white/10 px-3 py-2 text-white">
                      Cabro 60mm / 80mm
                    </span>
                    <span className="border border-white/20 bg-white/10 px-3 py-2 text-white">
                      Delivery & installation
                    </span>
                    <span className="border border-white/20 bg-white/10 px-3 py-2 text-white">
                      Contractor support
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="border border-gray-200 bg-white shadow-sm"
            style={{ borderRadius: "0px" }}
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-extrabold">Sign up</h2>
                  <p className="mt-1 text-sm text-gray-600">
                    Use your details to create an account.
                  </p>
                </div>

                <Link
                  href="/login"
                  className="text-sm font-semibold underline underline-offset-4"
                  style={{ color: "#0F172A" }}
                >
                  Already have an account?
                </Link>
              </div>

              {/* Server messages */}
              {serverError && (
                <p className="mt-4 text-sm text-red-600">{serverError}</p>
              )}
              {serverSuccess && (
                <p className="mt-4 text-sm text-green-600">{serverSuccess}</p>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900">
                    Full Name
                  </label>
                  <input
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="e.g., Brian Nyakundi"
                    className="mt-2 w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900"
                    style={{ borderRadius: "0px" }}
                    autoComplete="name"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900">
                    Phone Number
                  </label>
                  <input
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="e.g., +254 7xx xxx xxx"
                    className="mt-2 w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900"
                    style={{ borderRadius: "0px" }}
                    inputMode="tel"
                    autoComplete="tel"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    We use this to confirm quotes & delivery details.
                  </p>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900">
                    Email Address
                  </label>
                  <input
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="you@email.com"
                    className="mt-2 w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-gray-900"
                    style={{ borderRadius: "0px" }}
                    autoComplete="email"
                    inputMode="email"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900">
                    Password
                  </label>
                  <div className="mt-2 relative">
                    <input
                      value={form.password}
                      onChange={(e) => handleChange("password", e.target.value)}
                      type={showPassword ? "text" : "password"}
                      placeholder="At least 8 characters"
                      className="w-full border border-gray-300 bg-white px-4 py-3 pr-12 text-sm outline-none focus:border-gray-900"
                      style={{ borderRadius: "0px" }}
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900">
                    Confirm Password
                  </label>
                  <div className="mt-2 relative">
                    <input
                      value={form.confirmPassword}
                      onChange={(e) =>
                        handleChange("confirmPassword", e.target.value)
                      }
                      type={showConfirm ? "text" : "password"}
                      placeholder="Repeat password"
                      className="w-full border border-gray-300 bg-white px-4 py-3 pr-12 text-sm outline-none focus:border-gray-900"
                      style={{ borderRadius: "0px" }}
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm((v) => !v)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900"
                      aria-label={
                        showConfirm ? "Hide confirm password" : "Show confirm password"
                      }
                    >
                      {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {form.confirmPassword.length > 0 &&
                    form.password !== form.confirmPassword && (
                      <p className="mt-2 text-xs text-red-600">
                        Passwords do not match.
                      </p>
                    )}
                </div>

                {/* Agree */}
                <label className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    checked={form.agree}
                    onChange={(e) => handleChange("agree", e.target.checked)}
                    className="mt-1 h-4 w-4"
                  />
                  <span className="text-sm text-gray-700">
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="font-semibold underline underline-offset-4"
                      style={{ color: "#0F172A" }}
                    >
                      Terms
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="font-semibold underline underline-offset-4"
                      style={{ color: "#0F172A" }}
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!isValid || loading}
                  className="group w-full px-6 py-4 font-extrabold transition disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{
                    backgroundImage: `linear-gradient(90deg, ${BRAND}, ${BRAND}CC)`,
                    color: "#111",
                    borderRadius: "0px",
                  }}
                >
                  <span className="inline-flex items-center justify-center gap-2">
                    {loading ? "Creating account..." : "Create Account"}
                    {!loading && (
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    )}
                  </span>
                </button>

                {/* Small helper */}
                <p className="text-xs text-gray-500">
                  Need help?{" "}
                  <Link
                    href="/contact"
                    className="font-semibold underline underline-offset-4"
                    style={{ color: "#0F172A" }}
                  >
                    Contact us
                  </Link>
                  .
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
