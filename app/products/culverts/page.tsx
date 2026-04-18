"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Ruler,
  Truck,
  Waves,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  MessageSquare,
  Boxes,
  Droplets,
  Construction,
} from "lucide-react";

// ── Brand tokens ──────────────────────────────────────────────────
const AMBER = "#FFC20E";
const AMBER_DARK = "#B8860B";
const DARK = "#0F172A";
const DARK_SOFT = "#111827";
const MUTED = "#475569";
const LIGHT_BG = "#F6F8FB";
const SURFACE = "#FFFFFF";
const BORDER = "rgba(15,23,42,0.08)";

// ── Images ────────────────────────────────────────────────────────
const HERO_IMAGE = "/images/products/culverts/250mm culvert.jpg";
const STACKED_IMAGE = "/images/products/culverts/culverts.jpg";
const INSTALLATION_IMAGE = "/images/products/culverts/Culverts under the road.jpg";

// ── Animation variants ────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.56, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -22 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.56, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 22 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.56, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

// ── Global font injection ─────────────────────────────────────────
const FONT_STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

  .culvert-display { font-family: 'Barlow Condensed', sans-serif; }
  .culvert-body { font-family: 'DM Sans', sans-serif; }

  .section-shell {
    position: relative;
  }

  .amber-chip {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid ${AMBER_DARK}2A;
    color: ${AMBER_DARK};
    background: linear-gradient(180deg, ${AMBER_DARK}12 0%, ${AMBER_DARK}08 100%);
    border-radius: 999px;
    padding: 7px 14px;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.03em;
    font-family: 'DM Sans', sans-serif;
  }

  .btn-amber-solid {
    background: linear-gradient(135deg, ${AMBER_DARK} 0%, ${AMBER} 100%);
    color: #0b0b0b;
    border-radius: 14px;
    transition: transform 0.2s ease, filter 0.2s ease, box-shadow 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 24px;
    font-size: 0.92rem;
    font-weight: 700;
    font-family: 'DM Sans', sans-serif;
    box-shadow: 0 10px 24px rgba(184,134,11,0.24);
  }

  .btn-amber-solid:hover {
    transform: translateY(-2px);
    filter: brightness(1.02);
  }

  .btn-dark-outline {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.14);
    color: #fff;
    border-radius: 14px;
    transition: background 0.2s ease, transform 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 24px;
    font-size: 0.92rem;
    font-weight: 600;
    font-family: 'DM Sans', sans-serif;
    backdrop-filter: blur(10px);
  }

  .btn-dark-outline:hover {
    background: rgba(255,255,255,0.09);
    transform: translateY(-2px);
  }

  .btn-light-outline {
    background: transparent;
    border: 1px solid ${BORDER};
    color: ${DARK};
    border-radius: 14px;
    transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 13px 22px;
    font-size: 0.92rem;
    font-weight: 700;
    font-family: 'DM Sans', sans-serif;
  }

  .btn-light-outline:hover {
    background: ${LIGHT_BG};
    transform: translateY(-2px);
    border-color: rgba(15,23,42,0.14);
  }

  .light-card {
    background: ${SURFACE};
    border: 1px solid ${BORDER};
    border-radius: 24px;
    box-shadow: 0 14px 40px rgba(15,23,42,0.06);
  }

  .soft-panel {
    background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
    border: 1px solid ${BORDER};
    border-radius: 24px;
    box-shadow: 0 16px 40px rgba(15,23,42,0.05);
  }

  .hero-grid-line {
    background-image:
      linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
    background-size: 36px 36px;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,0.7), transparent);
  }

  .metric-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 18px;
    backdrop-filter: blur(10px);
  }

  .size-card {
    position: relative;
    overflow: hidden;
    border-radius: 24px;
    border: 1px solid ${BORDER};
    background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
    box-shadow: 0 14px 38px rgba(15,23,42,0.06);
  }

  .size-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top right, ${AMBER_DARK}14, transparent 32%);
    pointer-events: none;
  }

  .number-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 70px;
    height: 70px;
    border-radius: 18px;
    background: linear-gradient(135deg, ${AMBER_DARK} 0%, ${AMBER} 100%);
    color: ${DARK};
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 1.7rem;
    font-weight: 800;
    box-shadow: 0 12px 26px rgba(184,134,11,0.25);
  }

  .spec-strip {
    background: linear-gradient(90deg, rgba(184,134,11,0.08), rgba(184,134,11,0.02));
    border: 1px solid ${AMBER_DARK}20;
    color: ${DARK};
    border-radius: 16px;
    padding: 14px 16px;
  }

  .image-frame {
    position: relative;
    overflow: hidden;
    border-radius: 28px;
    border: 1px solid ${BORDER};
    box-shadow: 0 22px 50px rgba(15,23,42,0.12);
  }
`;

// ── Reusable section tag ──────────────────────────────────────────
function SectionTag({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div
        className="h-px w-10"
        style={{
          background: dark
            ? `linear-gradient(90deg, ${AMBER}, transparent)`
            : `linear-gradient(90deg, ${AMBER_DARK}, transparent)`,
        }}
      />
      <span
        className="culvert-body text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase"
        style={{ color: dark ? AMBER : AMBER_DARK }}
      >
        {children}
      </span>
    </div>
  );
}

// ── Hero stat card ────────────────────────────────────────────────
function MetricCard({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="metric-card p-4">
      <div className="flex items-start gap-3">
        <div
          className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
          style={{
            background: "rgba(255,191,0,0.12)",
            color: AMBER,
            border: "1px solid rgba(255,191,0,0.18)",
          }}
        >
          {icon}
        </div>
        <div>
          <p
            className="culvert-body text-[11px] uppercase tracking-[0.18em]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            {label}
          </p>
          <p className="culvert-display text-2xl font-bold text-white leading-none mt-1">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── HERO ──────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: DARK }}>
      <style>{FONT_STYLE}</style>

      <div className="absolute inset-0 hero-grid-line pointer-events-none opacity-40" />
      <div
        className="absolute -top-20 left-0 w-[560px] h-[340px] pointer-events-none"
        style={{
          background: `radial-gradient(circle at 10% 0%, rgba(255,191,0,0.15) 0%, transparent 65%)`,
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[540px] h-[340px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 100% 100%, rgba(51,65,85,0.45) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-5 sm:px-8 lg:px-12 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp}>
              <SectionTag dark>Precast Culvert Solutions</SectionTag>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="culvert-display text-white font-extrabold leading-[0.92]"
              style={{
                fontSize: "clamp(3rem, 7vw, 5.6rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Strong concrete culverts for
              <br />
              <span style={{ color: AMBER }}>roads, drainage & access works</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="culvert-body mt-5 text-sm sm:text-base leading-relaxed max-w-[58ch]"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              Reinforced culverts designed for dependable water flow, site access,
              road crossings, and drainage infrastructure. Built for practical use,
              clean installation, and long-term performance.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link href="/contact" className="btn-amber-solid">
                <MessageSquare className="w-4 h-4" />
                Request a Quote
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link href="/contact" className="btn-dark-outline">
                Ask About Sizes
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              <MetricCard
                icon={<Ruler size={18} />}
                label="Sizes"
                value="300 / 450 / 600"
              />
              <MetricCard
                icon={<ShieldCheck size={18} />}
                label="Material"
                value="Reinforced"
              />
              <MetricCard
                icon={<Truck size={18} />}
                label="Supply"
                value="Delivery"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <div className="image-frame">
              <div className="relative h-[360px] sm:h-[430px] lg:h-[520px]">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/25 to-transparent" />

                <Image
                  src={HERO_IMAGE}
                  alt="Concrete culverts stacked and ready for supply"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />

                <div className="absolute top-5 left-5 z-20">
                  <div
                    className="culvert-body inline-flex items-center gap-2 rounded-full px-3 py-2 text-[11px] font-semibold"
                    style={{
                      background: "rgba(10,10,10,0.78)",
                      border: "1px solid rgba(255,191,0,0.22)",
                      color: AMBER,
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <CheckCircle2 size={13} />
                    Reinforced precast concrete
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5 z-20">
                  <div
                    className="rounded-2xl p-4 sm:p-5"
                    style={{
                      background: "rgba(8,15,28,0.68)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <p className="culvert-display text-white text-xl sm:text-2xl font-bold leading-none">
                      Reliable culverts for real project conditions
                    </p>
                    <p
                      className="culvert-body mt-2 text-xs sm:text-sm"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      Built for site drainage, access crossings, compound entries,
                      and infrastructure works.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="hidden lg:block absolute -bottom-6 -left-8 light-card p-4 max-w-[220px]"
              style={{ background: "rgba(255,255,255,0.98)" }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="h-11 w-11 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: `${AMBER_DARK}18`, color: AMBER_DARK }}
                >
                  <Droplets size={18} />
                </div>
                <div>
                  <p
                    className="culvert-body text-[11px] uppercase tracking-[0.18em]"
                    style={{ color: MUTED }}
                  >
                    Best use
                  </p>
                  <p
                    className="culvert-display text-xl font-bold leading-none mt-1"
                    style={{ color: DARK }}
                  >
                    Drainage flow
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── SPEC STRIP ────────────────────────────────────────────────────
function SpecsBar() {
  const items = [
    "300mm available",
    "450mm available",
    "600mm available",
    "Reinforced concrete",
    "Delivery support",
  ];

  return (
    <section
      style={{
        background: SURFACE,
        borderTop: `1px solid ${BORDER}`,
        borderBottom: `1px solid ${BORDER}`,
      }}
    >
      <div className="container mx-auto px-5 sm:px-8 lg:px-12 py-5">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {items.map((item) => (
            <div key={item} className="spec-strip culvert-body text-sm font-semibold">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── OVERVIEW ──────────────────────────────────────────────────────
function ProductOverview() {
  const points = [
    "Suitable for stormwater and drainage channels",
    "Reinforced for stronger long-term use",
    "Clean finish for easier handling and placement",
    "Practical sizes for common site requirements",
  ];

  return (
    <section className="section-shell py-16 sm:py-20 lg:py-24" style={{ background: LIGHT_BG }}>
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="image-frame">
              <div className="relative h-[300px] sm:h-[380px] lg:h-[460px]">
                <Image
                  src={STACKED_IMAGE}
                  alt="Stacked reinforced concrete culverts"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp}>
              <SectionTag>Product Overview</SectionTag>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="culvert-display font-extrabold leading-[0.94]"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                letterSpacing: "-0.02em",
                color: DARK,
              }}
            >
              Made for drainage performance,
              <br />
              <span style={{ color: AMBER_DARK }}>site access and durable installation</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="culvert-body mt-5 text-sm sm:text-base leading-relaxed max-w-[56ch]"
              style={{ color: MUTED }}
            >
              These culverts are built for residential, commercial, agricultural,
              and infrastructure works where controlled water movement and reliable
              structural support are needed beneath roads, entrances, and drainage lines.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7 grid gap-3 sm:grid-cols-2"
            >
              {points.map((item) => (
                <div key={item} className="light-card p-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="h-9 w-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `${AMBER_DARK}16`,
                        color: AMBER_DARK,
                      }}
                    >
                      <CheckCircle2 size={16} />
                    </div>
                    <p
                      className="culvert-body text-sm leading-relaxed"
                      style={{ color: MUTED }}
                    >
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-7">
              <Link href="/contact" className="btn-light-outline">
                Talk to Us About Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── AVAILABLE SIZES ───────────────────────────────────────────────
function AvailableSizes() {
  const sizes = [
    {
      size: "300mm",
      title: "Small Drainage Culvert",
      desc: "Good for lighter drainage channels, smaller residential access points, and compact water-flow paths.",
      use: "Light drainage",
    },
    {
      size: "450mm",
      title: "Medium Drainage Culvert",
      desc: "A balanced option for farm roads, compound entries, moderate drainage lines, and everyday site access.",
      use: "General projects",
    },
    {
      size: "600mm",
      title: "Large Drainage Culvert",
      desc: "Designed for stronger drainage demand, road crossings, and projects needing higher water passage capacity.",
      use: "Heavier flow",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ background: SURFACE }}>
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeUp}>
            <SectionTag>Available Sizes</SectionTag>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between mb-10"
          >
            <div className="max-w-2xl">
              <h2
                className="culvert-display font-extrabold leading-[0.94]"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 4rem)",
                  letterSpacing: "-0.02em",
                  color: DARK,
                }}
              >
                Sizes currently
                <br />
                <span style={{ color: AMBER_DARK }}>ready for supply</span>
              </h2>
            </div>

            <p
              className="culvert-body text-sm sm:text-base max-w-[34rem] leading-relaxed"
              style={{ color: MUTED }}
            >
              Choose the culvert size based on drainage demand, site conditions,
              and the level of access or crossing support your project requires.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {sizes.map((item) => (
              <motion.div key={item.size} variants={fadeUp} className="size-card p-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="number-badge">{item.size.replace("mm", "")}</div>
                  <span className="amber-chip">
                    <Boxes size={14} />
                    {item.use}
                  </span>
                </div>

                <h3
                  className="culvert-display font-bold mt-6"
                  style={{
                    fontSize: "clamp(1.35rem, 2.5vw, 1.7rem)",
                    color: DARK,
                    lineHeight: 1,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="culvert-body mt-3 text-sm leading-relaxed"
                  style={{ color: MUTED }}
                >
                  {item.desc}
                </p>

                <div
                  className="mt-6 pt-5 flex items-center justify-between border-t"
                  style={{ borderColor: "rgba(15,23,42,0.08)" }}
                >
                  <p
                    className="culvert-body text-xs uppercase tracking-[0.18em] font-semibold"
                    style={{ color: MUTED }}
                  >
                    Diameter
                  </p>
                  <p className="culvert-display text-2xl font-bold" style={{ color: AMBER_DARK }}>
                    {item.size}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── USE CASES / INSTALLATION ──────────────────────────────────────
function InstallationAndUse() {
  const uses = [
    {
      icon: <Waves size={17} />,
      title: "Stormwater drainage",
      desc: "Allows water to move through site drainage channels, road edges, and runoff pathways with better control.",
    },
    {
      icon: <Truck size={17} />,
      title: "Driveway and road crossings",
      desc: "Installed beneath access points so vehicles can pass above while water continues flowing below.",
    },
    {
      icon: <Construction size={17} />,
      title: "Compound and project entrances",
      desc: "Useful in developments, farm access points, residential compounds, and construction-related site works.",
    },
    {
      icon: <Ruler size={17} />,
      title: "Correct size planning",
      desc: "The right culvert depends on expected flow volume, project layout, and the loading conditions at the crossing point.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24" style={{ background: LIGHT_BG }}>
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5"
          >
            <div className="image-frame">
              <div className="relative h-[310px] sm:h-[400px] lg:h-[500px]">
                <Image
                  src={INSTALLATION_IMAGE}
                  alt="Concrete culvert installed for drainage under access road"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="soft-panel p-5 sm:p-6">
              <div className="flex items-start gap-4">
                <div
                  className="h-12 w-12 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ background: `${AMBER_DARK}16`, color: AMBER_DARK }}
                >
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3
                    className="culvert-display text-2xl font-bold leading-none"
                    style={{ color: DARK }}
                  >
                    Built for dependable field use
                  </h3>
                  <p
                    className="culvert-body mt-2 text-sm leading-relaxed"
                    style={{ color: MUTED }}
                  >
                    Reinforced concrete helps maintain durability and stability in
                    drainage and crossing installations across different project environments.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp}>
              <SectionTag>Installation & Use</SectionTag>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="culvert-display font-extrabold leading-[0.94]"
              style={{
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                letterSpacing: "-0.02em",
                color: DARK,
              }}
            >
              Where these culverts
              <br />
              <span style={{ color: AMBER_DARK }}>work best in practice</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="culvert-body mt-5 text-sm sm:text-base leading-relaxed max-w-[55ch]"
              style={{ color: MUTED }}
            >
              From under-road drainage to entrance crossings and project water
              management, these culverts are designed for use cases where water flow
              and site access must work together safely and efficiently.
            </motion.p>

            <div className="mt-8 space-y-4">
              {uses.map((item) => (
                <motion.div key={item.title} variants={fadeUp} className="light-card p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="h-11 w-11 rounded-2xl flex items-center justify-center text-white shrink-0"
                      style={{ background: AMBER_DARK }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3
                        className="culvert-display text-xl font-bold leading-none"
                        style={{ color: DARK }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="culvert-body mt-2 text-sm leading-relaxed"
                        style={{ color: MUTED }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── CTA ───────────────────────────────────────────────────────────
function CTA() {
  return (
    <section style={{ background: DARK_SOFT }} className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative overflow-hidden rounded-[28px] p-7 sm:p-10 lg:p-12"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
          }}
        >
          <div
            className="absolute top-0 left-0 w-[420px] h-[220px] pointer-events-none"
            style={{
              background: `radial-gradient(circle at 0% 0%, rgba(255,191,0,0.14) 0%, transparent 70%)`,
            }}
          />
          <div
            className="absolute bottom-0 right-0 w-[320px] h-[180px] pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.06) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <SectionTag dark>Ready to Order?</SectionTag>

              <h2
                className="culvert-display text-white font-extrabold leading-[0.94]"
                style={{
                  fontSize: "clamp(2.2rem, 5vw, 4rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Request pricing for
                <br />
                <span style={{ color: AMBER }}>300mm, 450mm and 600mm culverts</span>
              </h2>

              <p
                className="culvert-body mt-4 text-sm sm:text-base leading-relaxed max-w-[56ch]"
                style={{ color: "rgba(255,255,255,0.62)" }}
              >
                Talk to us about quantities, recommended sizing, delivery options,
                and the best culvert fit for your road, drainage, or access project.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/contact" className="btn-amber-solid">
                <MessageSquare className="w-4 h-4" />
                Request a Quote
              </Link>

              <Link href="/products" className="btn-dark-outline">
                View More Products
                <ArrowRight className="w-4 h-4" style={{ color: AMBER }} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────
export default function CulvertPage() {
  return (
    <main className="overflow-x-hidden antialiased" style={{ background: SURFACE }}>
      <Hero />
      <SpecsBar />
      <ProductOverview />
      <AvailableSizes />
      <InstallationAndUse />
      <CTA />
    </main>
  );
}