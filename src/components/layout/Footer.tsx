import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl text-cream mb-3">Jase Jones</p>
            <p className="text-sm leading-relaxed text-cream/50 max-w-xs">
              Simple Design with Passion and Respect to Personal Style.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs tracking-widest uppercase text-cream/40 mb-5">
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/shop", label: "Shop" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-cream/60 hover:text-cream transition-colors w-fit"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-widest uppercase text-cream/40 mb-5">
              Get in Touch
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@jasejones.com"
                className="text-sm text-cream/60 hover:text-cream transition-colors w-fit"
              >
                info@jasejones.com
              </a>
              <a
                href="tel:4694747022"
                className="text-sm text-cream/60 hover:text-cream transition-colors w-fit"
              >
                469.474.7022
              </a>
              <div className="flex gap-4 mt-2">
                <a
                  href="https://www.instagram.com/jasejonesandassociates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-widest uppercase text-cream/40 hover:text-cream transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-cream/30">
            © {new Date().getFullYear()} Jase Jones & Associates. All rights reserved.
          </p>
          <p className="text-xs text-cream/20">Dallas, Texas</p>
        </div>
      </div>
    </footer>
  );
}
