import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-gray-300 border-t border-white/10 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand / About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-[#D4A017] flex items-center justify-center text-xs font-extrabold text-[#0A1A2F]">
                PM
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  Premium Concrete
                </p>
                <p className="text-[11px] text-gray-400">Paving Blocks</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-400 max-w-md">
              Built to last — our concrete paving blocks deliver superior
              strength, perfect finishes and long-term value for every project
            </p>

            {/* Socials */}
            <div className="mt-4 flex items-center gap-3 text-xs text-gray-400">
              <span className="uppercase tracking-[0.18em] text-[10px] text-gray-500">
                Follow us
              </span>
              <div className="flex gap-2">
                <button className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-[11px] hover:border-white/40 hover:text-white transition-colors">
                  IG
                </button>
                <button className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-[11px] hover:border-white/40 hover:text-white transition-colors">
                  FB
                </button>
                <button className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center text-[11px] hover:border-white/40 hover:text-white transition-colors">
                  LN
                </button>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">
              Quick links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#D4A017] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#D4A017] transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-[#D4A017] transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/applications"
                  className="hover:text-[#D4A017] transition-colors"
                >
                  Applications
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#D4A017] transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#D4A017] transition-colors"
                >
                  Contact / Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                Phone / WhatsApp:{" "}
                <span className="text-gray-200">+254 721 150 988</span>
              </li>
              <li>
                Email:{" "}
                <span className="text-gray-200">
                  info@premiumconcretepm.co.ke
                </span>
              </li>
              <li>
                Location:{" "}
                <span className="text-gray-200">
                  [Githugori / Kiambu, Kenya]
                </span>
              </li>
              <li className="text-xs text-gray-500 mt-2">
                Mon – Sat: 8:00am – 5:00pm
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-4 border-t border-white/10 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Premium Concrete PM. All rights
            reserved.
          </p>
          <p className="text-gray-500">
            Quality paving solutions for driveways, parking areas and industrial
            yards.
          </p>
        </div>
      </div>
    </footer>
  );
}
