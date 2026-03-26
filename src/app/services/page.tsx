import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceCard from "@/components/services/ServiceCard";
import BrandButton from "@/components/ui/BrandButton";
import { services } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior design services including new construction, remodeling, and furnishing of spaces. Based in Texas, working across the US and internationally.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="text-xs tracking-widest uppercase text-taupe mb-4">What We Do</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal max-w-2xl leading-tight">
              Every project, personally crafted.
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 pb-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-sand">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs tracking-widest uppercase text-taupe mb-4">Our Process</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              How we work together
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Listen",
                desc: "Every project begins with a conversation. We learn who you are and how you live.",
              },
              {
                step: "02",
                title: "Envision",
                desc: "We develop a design direction rooted in your personality and the potential of your space.",
              },
              {
                step: "03",
                title: "Collaborate",
                desc: "We work alongside your architect, builder, and other specialists to bring the vision to life.",
              },
              {
                step: "04",
                title: "Deliver",
                desc: "We oversee every detail through installation, ensuring the result exceeds expectations.",
              },
            ].map(({ step, title, desc }, i) => (
              <AnimatedSection key={step} delay={i * 0.1}>
                <p className="font-serif text-5xl text-taupe/50 mb-4">{step}</p>
                <h3 className="font-serif text-xl text-charcoal mb-3">{title}</h3>
                <p className="text-sm text-charcoal/50 leading-relaxed">{desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <p className="text-xs tracking-widest uppercase text-taupe mb-4">The Shop</p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
              Bring the same intention home.
            </h2>
            <BrandButton href="/shop" variant="light">
              Browse the Collection
            </BrandButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
