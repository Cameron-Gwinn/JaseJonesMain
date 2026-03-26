import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import BrandButton from "@/components/ui/BrandButton";
import { projects, getProjectBySlug } from "@/lib/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      {/* Hero image */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/30" />
        <div className="absolute bottom-12 left-0 right-0 max-w-7xl mx-auto px-6 lg:px-12">
          <p className="text-xs tracking-widest uppercase text-cream/70 mb-2">
            {project.region} · {project.year}
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-cream">{project.title}</h1>
        </div>
      </section>

      {/* Project info */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <AnimatedSection className="lg:col-span-2">
              <p className="text-xs tracking-widest uppercase text-taupe mb-4">About the Project</p>
              <p className="font-serif text-xl md:text-2xl text-charcoal/80 leading-relaxed">
                {project.description}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-xs tracking-widest uppercase text-taupe mb-1">Location</p>
                  <p className="text-charcoal/70">{project.location}</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-taupe mb-1">Year</p>
                  <p className="text-charcoal/70">{project.year}</p>
                </div>
                <div>
                  <p className="text-xs tracking-widest uppercase text-taupe mb-1">Studio</p>
                  <p className="text-charcoal/70">Jase Jones & Associates</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Image gallery */}
      <section className="pb-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.slice(1).map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={img}
                    alt={`${project.title} — image ${i + 2}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Nav — back + contact */}
      <section className="py-16 bg-sand border-t border-sand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href="/portfolio"
            className="text-xs tracking-widest uppercase text-charcoal/50 hover:text-charcoal transition-colors"
          >
            ← All Projects
          </Link>
          <BrandButton href="/contact" variant="primary">
            Start a Project
          </BrandButton>
        </div>
      </section>
    </>
  );
}
