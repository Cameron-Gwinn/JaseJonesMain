"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="group block h-full overflow-hidden">
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="h-full overflow-hidden"
      >
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority={priority}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/25 transition-all duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
            <span className="text-xs tracking-widest uppercase text-cream border-b border-cream pb-0.5">
              View Project →
            </span>
          </div>
        </div>
      </motion.div>
      <div className="pt-5">
        <p className="text-xs tracking-widest uppercase text-taupe mb-1.5">{project.region}</p>
        <h3 className="font-serif text-xl text-charcoal group-hover:text-charcoal/70 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-charcoal/40 mt-1">{project.location} · {project.year}</p>
      </div>
    </Link>
  );
}
