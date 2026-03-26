"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/lib/data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-charcoal py-28 lg:py-40 overflow-hidden">
      {/* Large decorative background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-serif text-[20vw] text-cream/[0.025] leading-none whitespace-nowrap">
          &ldquo;
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">

        {/* Top label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="w-6 h-px bg-taupe" />
          <p className="text-xs tracking-widest uppercase text-taupe/70">Client Stories</p>
        </div>

        {/* Quote */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.2] mb-12 max-w-4xl">
              <em className="not-italic">"{testimonials[current].quote}"</em>
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-taupe" />
              <div>
                <p className="text-sm text-cream/80 tracking-wide">
                  {testimonials[current].author}
                </p>
                <p className="text-xs tracking-widest uppercase text-taupe/60 mt-0.5">
                  {testimonials[current].location}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots + counter */}
        <div className="flex items-center justify-between mt-16 pt-8 border-t border-cream/10">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-400 rounded-full ${
                  i === current
                    ? "w-8 h-1.5 bg-taupe"
                    : "w-1.5 h-1.5 bg-cream/20 hover:bg-cream/40"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
          <p className="font-serif text-sm text-cream/20 italic">
            {String(current + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </section>
  );
}
