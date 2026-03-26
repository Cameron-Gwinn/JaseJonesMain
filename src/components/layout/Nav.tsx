"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          menuOpen
            ? "bg-charcoal border-b border-cream/10"
            : transparent
            ? "bg-transparent"
            : "bg-cream/95 backdrop-blur-sm border-b border-sand-dark"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className={`group flex flex-col transition-colors duration-300 ${
              menuOpen || transparent ? "text-cream" : "text-charcoal"
            }`}
          >
            <span className="font-serif text-lg lg:text-xl tracking-wide leading-tight">
              Jase Jones
            </span>
            <span className={`text-[9px] tracking-[0.25em] uppercase leading-none transition-colors duration-300 ${
              menuOpen ? "text-cream/40" : transparent ? "text-white/40" : "text-taupe"
            }`}>
              & Associates
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              const isShop = href === "/shop";
              return (
                <Link
                  key={href}
                  href={href}
                  className={`text-sm tracking-widest uppercase transition-all duration-200 relative group ${
                    isShop ? "italic" : ""
                  } ${
                    transparent
                      ? "text-white/80 hover:text-white"
                      : active
                      ? "text-charcoal"
                      : "text-charcoal/60 hover:text-charcoal"
                  }`}
                >
                  {isShop ? (
                    <span className={`px-3 py-1 text-xs tracking-widest not-italic transition-all duration-300 ${
                      transparent
                        ? "bg-cream/15 text-cream hover:bg-cream/25"
                        : "bg-charcoal text-cream hover:bg-charcoal/80"
                    }`}>
                      Shop
                    </span>
                  ) : (
                    <>
                      {label}
                      <span
                        className={`absolute -bottom-0.5 left-0 h-px bg-current transition-all duration-300 ${
                          active ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden flex flex-col gap-1.5 p-1 transition-colors ${
              menuOpen || transparent ? "text-cream" : "text-charcoal"
            }`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-current origin-center transition-colors"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-px bg-current"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-current origin-center"
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[55] bg-charcoal flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-10">
              {links.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <Link
                    href={href}
                    className={`font-serif text-3xl text-cream/80 hover:text-cream transition-colors ${
                      pathname === href ? "text-cream" : ""
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-12 text-cream/30 text-sm tracking-widest uppercase"
            >
              info@jasejones.com
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
