import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import BrandButton from "@/components/ui/BrandButton";

export default function AboutTeaser() {
  return (
    <section className="py-24 lg:py-36 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">

          {/* Image col — bleeds right into text */}
          <AnimatedSection className="lg:col-span-7 relative" direction="left">
            <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80"
                alt="Jase Jones interior design"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              {/* Pull quote overlaid on image bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-charcoal/80 to-transparent">
                <p className="font-serif text-xl lg:text-2xl italic text-cream/90 leading-snug max-w-xs">
                  "Respecting client needs develops true friendships that last a lifetime."
                </p>
                <p className="text-xs tracking-widest uppercase text-taupe mt-3">
                  — Tom Chandler, Mentor
                </p>
              </div>
            </div>

            {/* Decorative year stamp */}
            <div className="absolute -bottom-6 -right-6 lg:-right-10 w-24 h-24 bg-taupe flex items-center justify-center z-10">
              <div className="text-center">
                <p className="font-serif text-2xl text-charcoal leading-none">Est.</p>
                <p className="font-serif text-lg text-charcoal leading-none">2005</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Text col */}
          <AnimatedSection className="lg:col-span-5 lg:pl-16 xl:pl-20 pt-16 lg:pt-0" delay={0.2}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-taupe" />
              <p className="text-xs tracking-widest uppercase text-taupe">The Design Studio</p>
            </div>

            <h2 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-charcoal leading-tight mb-6">
              Designed around
              <br />
              <em className="font-serif italic text-charcoal/50">who you are</em>
              <br />
              — not who we think
              <br />
              you should be.
            </h2>

            <p className="text-charcoal/55 leading-relaxed mb-4 text-[15px]">
              Jason Jones has spent his career doing one thing above all else: listening. Every
              project begins with a conversation — often several — before a single swatch is
              pulled or a floor plan is drawn.
            </p>
            <p className="text-charcoal/55 leading-relaxed mb-10 text-[15px]">
              The result is work that feels personal, collected, and genuinely yours.
            </p>

            <div className="flex items-center gap-6">
              <BrandButton href="/shop" variant="primary">
                Shop the Collection
              </BrandButton>
              <BrandButton href="/about" variant="ghost">
                Our Story →
              </BrandButton>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-14 pt-10 border-t border-sand-dark">
              {[
                { n: "20+", label: "Years" },
                { n: "100+", label: "Projects" },
                { n: "8", label: "States" },
              ].map(({ n, label }) => (
                <div key={label}>
                  <p className="font-serif text-3xl text-charcoal leading-none">{n}</p>
                  <p className="text-xs tracking-widest uppercase text-taupe mt-1">{label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
