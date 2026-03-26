"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  const dirMap = {
    up: { y: 24 },
    left: { x: -24 },
    right: { x: 24 },
    none: {},
  };

  const initial = reduced ? {} : { opacity: 0, ...dirMap[direction] };
  const animate = inView
    ? { opacity: 1, y: 0, x: 0 }
    : reduced
    ? { opacity: 1 }
    : { opacity: 0, ...dirMap[direction] };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
