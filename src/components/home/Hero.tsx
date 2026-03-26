"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BrandButton from "@/components/ui/BrandButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=85"
        alt="Luxury interior design"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-charcoal/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent" />

      {/* Top-right decorative label */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-24 right-8 lg:right-12 flex flex-col items-end gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-cream/40 writing-mode-vertical">
          Dallas · Texas
        </span>
        <div className="w-px h-16 bg-cream/20" />
      </motion.div>

      {/* Main content — bottom-left anchored */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
        <div className="max-w-4xl">
          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.05] mb-6"
          >
            Simple Design
            <br />
            <em className="not-italic text-taupe">with Passion</em>
            <br />
            & Personal Style
          </motion.h1>

          {/* Sub line + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-10"
          >
            <BrandButton href="/shop" variant="light">
              Shop the Collection
            </BrandButton>
            <BrandButton href="/portfolio" variant="ghost" className="text-cream/70 hover:text-cream">
              View Our Work →
            </BrandButton>
          </motion.div>
        </div>

        {/* Bottom row — scroll + tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex items-end justify-between mt-16 pt-8 border-t border-cream/10"
        >
          <p className="text-xs tracking-widest uppercase text-cream/30">
            Interior Design · Furnishings · Home Goods
          </p>
          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] tracking-widest uppercase text-cream/30">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-6 bg-cream/20"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
