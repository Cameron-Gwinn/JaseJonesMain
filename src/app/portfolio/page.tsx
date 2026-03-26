import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected interior design projects by Jase Jones & Associates — residential work across California, Colorado, New Mexico, and beyond.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="text-xs tracking-widest uppercase text-taupe mb-4">Our Work</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal leading-tight">
              Selected Projects
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Asymmetric grid */}
      <section className="pb-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Row 1: large left + small right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <AnimatedSection className="lg:col-span-2">
              <div className="aspect-[4/3]">
                <ProjectCard project={projects[0]} priority />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="aspect-[3/4]">
                <ProjectCard project={projects[1]} />
              </div>
            </AnimatedSection>
          </div>

          {/* Row 2: small left + large right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.05}>
              <div className="aspect-[3/4]">
                <ProjectCard project={projects[2]} />
              </div>
            </AnimatedSection>
            <AnimatedSection className="lg:col-span-2" delay={0.15}>
              <div className="aspect-[4/3]">
                <ProjectCard project={projects[3]} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
