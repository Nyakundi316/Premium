import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-[#0A1A2F] to-black text-white overflow-hidden">
      {/* Geometric background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#D4A017]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-80 h-80 bg-[#D4A017]/10 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, #D4A01722 1px, transparent 1px),
                                linear-gradient(to bottom, #D4A01722 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-[#D4A017]/20 rounded-lg"
            style={{
              top: `${20 + i * 30}%`,
              left: `${10 + i * 25}%`,
              width: "40px",
              height: "40px",
              transform: `rotate(${45 + i * 15}deg)`,
              animation: `float ${6 + i * 2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-4 md:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4A017]/10 to-transparent border border-[#D4A017]/30 rounded-full px-4 py-2 backdrop-blur-sm">
              <div className="w-2 h-2 bg-[#D4A017] rounded-full animate-pulse" />
              <span className="text-sm font-medium tracking-widest text-[#D4A017]">
                PREMIUM PAVING SOLUTIONS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Spaces with{" "}
              <span className="relative">
                <span className="text-[#D4A017] relative">
                  Premium Paving
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    width="300"
                    height="12"
                    viewBox="0 0 300 12"
                    fill="none"
                  >
                    <path
                      d="M0,6 Q75,0 150,6 T300,6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeOpacity="0.3"
                      fill="none"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-300 leading-relaxed">
              Our expertly engineered concrete paving blocks offer unmatched
              durability, striking visual appeal, and exceptional performance
              across residential, commercial, and industrial projects — a
              cost-effective, elegant, and long-lasting choice for any exterior
              paving application.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 py-4">
              {[
                { icon: "✓", text: "Heavy-duty load bearing" },
                { icon: "✓", text: "Weather-resistant finish" },
                { icon: "✓", text: "Low maintenance cost" },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4A017]/20 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-[#D4A017] font-bold">
                      {feature.icon}
                    </span>
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Link
                href="/quote"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#D4A017] to-[#F0B429] text-[#0A1A2F] font-semibold rounded-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-[#D4A017]/30"
              >
                <span className="relative z-10">Get Free Quote & Design</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>

              <Link
                href="/projects"
                className="group px-8 py-4 border border-gray-700 rounded-lg font-semibold hover:border-[#D4A017]/50 hover:bg-[#D4A017]/5 transition-all"
              >
                <span className="flex items-center gap-2">
                  View Our Portfolio
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {[
                { value: "200+", label: "Projects Completed" },
                { value: "24/7", label: "Expert Support" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl border border-gray-800 bg-gradient-to-b from-gray-900/50 to-transparent"
                >
                  <div className="text-2xl font-bold text-[#D4A017]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
              {/* This would be replaced with actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#D4A017]/20 to-transparent flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-[#D4A017]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold text-white mb-2">
                    Premium Paving Installation
                  </p>
                  <p className="text-sm text-gray-400">
                    High-quality interlocking concrete blocks
                  </p>
                </div>

                {/* Pattern overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-4 shadow-2xl max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#0A1A2F]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Free Site Inspection</p>
                  <p className="text-sm text-gray-400">Get expert assessment</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-4 shadow-2xl max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4A017] to-[#F0B429] flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-[#0A1A2F]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Quick Installation</p>
                  <p className="text-sm text-gray-400">2-5 days completion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#D4A017] rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(var(--tw-rotate));
          }
          50% {
            transform: translateY(-20px) rotate(var(--tw-rotate));
          }
        }
      `}</style>
    </section>
  );
}
