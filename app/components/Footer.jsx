import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#EFEDE4] text-slate-800 border-t border-slate-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand / About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-full bg-[#D4A017] flex items-center justify-center text-xs font-extrabold text-[#0A1A2F]">
                PM
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-900">
                  Premium Concrete
                </p>
                <p className="text-[11px] text-slate-600">Paving Blocks</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-700 max-w-md">
              Built to last — our concrete paving blocks deliver superior
              strength, neat finishes and long-term value for every project.
            </p>

            {/* Socials */}
            <div className="mt-4 flex items-center gap-3 text-xs text-slate-700">
              <span className="uppercase tracking-[0.18em] text-[10px] text-slate-600">
                Follow us
              </span>

              <div className="flex gap-2">
                {/* Instagram */}
                <Link
                  href="https://www.instagram.com/premium.movers"
                  target="_blank"
                  rel="noreferrer"
                  className="h-8 w-8 rounded-full border border-slate-300 flex items-center justify-center text-[11px] hover:border-[#D4A017] hover:text-[#D4A017] transition-colors"
                >
                  IG
                </Link>

                {/* Facebook */}
                <Link
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="h-8 w-8 rounded-full border border-slate-300 flex items-center justify-center text-[11px] hover:border-[#D4A017] hover:text-[#D4A017] transition-colors"
                >
                  FB
                </Link>

                {/* LinkedIn */}
                <Link
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="h-8 w-8 rounded-full border border-slate-300 flex items-center justify-center text-[11px] hover:border-[#D4A017] hover:text-[#D4A017] transition-colors"
                >
                  LN
                </Link>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">
              Quick links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#D4A017]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#D4A017]">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#D4A017]">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/applications" className="hover:text-[#D4A017]">
                  Applications
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#D4A017]">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#D4A017]">
                  Contact / Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-3">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>
                Phone / WhatsApp:{" "}
                <span className="text-slate-900 font-semibold">
                  +254 711 789438
                </span>
              </li>
              <li>
                Email:{" "}
                <span className="text-slate-900 font-semibold">
                  info@premiumconcretepm.co.ke
                </span>
              </li>
              <li>
                Location:{" "}
                <span className="text-slate-900 font-semibold">
                  Githunguri Road, Kiambu – Nairobi Region
                </span>
              </li>
            
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-4 border-t border-slate-300 flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-slate-600">
          <p>
            © {new Date().getFullYear()} Premium Concrete PM. All rights
            reserved.
          </p>
          <p>
            Quality paving solutions for driveways, compounds, parking areas &
            industrial yards.
          </p>
        </div>
      </div>
    </footer>
  );
}
