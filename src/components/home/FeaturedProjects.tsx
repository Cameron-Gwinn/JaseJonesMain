import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import BrandButton from "@/components/ui/BrandButton";
import { projects } from "@/lib/data/projects";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-24 lg:py-36 bg-sand overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header row */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-taupe" />
              <p className="text-xs tracking-widest uppercase text-taupe">Selected Work</p>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight">
              Projects that
              <br />
              <em className="italic text-charcoal/40">speak for themselves</em>
            </h2>
          </div>
          <BrandButton href="/portfolio" variant="outline">
            Full Portfolio →
          </BrandButton>
        </AnimatedSection>

        {/* Featured large card */}
        <AnimatedSection className="mb-6" delay={0.05}>
          <Link href={`/portfolio/${featured[0].slug}`} className="group block">
            <div className="relative overflow-hidden aspect-[16/7]">
              <Image
                src={featured[0].coverImage}
                alt={featured[0].title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/10 transition-colors duration-500" />

              {/* Overlay details */}
              <div className="absolute inset-0 flex items-end justify-between p-8 lg:p-12">
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-cream/50 mb-2">
                    {featured[0].region} · {featured[0].year}
                  </p>
                  <h3 className="font-serif text-3xl lg:text-5xl text-cream">
                    {featured[0].title}
                  </h3>
                </div>
                <div className="hidden lg:flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <span className="text-xs tracking-widest uppercase text-cream border-b border-cream pb-px">
                    View Project
                  </span>
                  <span className="text-cream">→</span>
                </div>
              </div>

              {/* Large number watermark */}
              <span className="absolute top-6 right-8 font-serif text-[120px] lg:text-[180px] leading-none text-cream/5 select-none pointer-events-none">
                01
              </span>
            </div>
          </Link>
        </AnimatedSection>

        {/* Two smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.slice(1).map((project, i) => (
            <AnimatedSection key={project.slug} delay={0.1 + i * 0.1}>
              <Link href={`/portfolio/${project.slug}`} className="group block">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-charcoal/25 group-hover:bg-charcoal/10 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-end p-6">
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-cream/50 mb-1">
                        {project.region}
                      </p>
                      <h3 className="font-serif text-2xl text-cream">{project.title}</h3>
                    </div>
                  </div>
                  <span className="absolute top-4 right-5 font-serif text-7xl leading-none text-cream/8 select-none pointer-events-none">
                    0{i + 2}
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
