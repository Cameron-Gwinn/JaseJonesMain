import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import BrandButton from "@/components/ui/BrandButton";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Jason Jones — interior designer, listener, and collaborator with over two decades of experience designing homes across the US and internationally.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <p className="text-xs tracking-widest uppercase text-taupe mb-4">About</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal max-w-3xl leading-tight">
              Design begins with a conversation.
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Story — Beat 1: Origin */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80"
                  alt="Jason Jones interior design studio"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <p className="text-xs tracking-widest uppercase text-taupe mb-6">The Beginning</p>
              <h2 className="font-serif text-3xl text-charcoal mb-6 leading-snug">
                By age three, he was laying out house plans with building blocks.
              </h2>
              <p className="text-charcoal/60 leading-relaxed mb-4">
                Jason Jones grew up watching his father build homes in Colorado. Long before he
                understood what interior design was, he understood space — how rooms felt, how
                light moved, how a well-arranged room could change how people treated each other.
              </p>
              <p className="text-charcoal/60 leading-relaxed mb-4">
                He studied design and architecture in college while working at a bank, learning
                early that beauty and practicality aren't at odds — they're the same thing, when
                done right.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-24 lg:py-32 bg-sand">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <span className="font-serif text-8xl text-taupe/40 block leading-none mb-6">"</span>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal leading-relaxed mb-8">
              Respecting client needs develops true friendships that last a lifetime.
            </blockquote>
            <p className="text-xs tracking-widest uppercase text-taupe">
              Tom Chandler — Mentor & Renowned Designer
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story — Beat 2: Approach */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-xs tracking-widest uppercase text-taupe mb-6">The Approach</p>
              <h2 className="font-serif text-3xl text-charcoal mb-6 leading-snug">
                Every project begins with truly listening.
              </h2>
              <p className="text-charcoal/60 leading-relaxed mb-4">
                Before recommending a single fabric or sketching a floor plan, Jason listens.
                He pays attention to conversations — not just the words, but the personality
                behind them. What does this family actually do? How do they move through their
                home? What makes them feel at ease?
              </p>
              <p className="text-charcoal/60 leading-relaxed mb-4">
                That philosophy — instilled by mentor Tom Chandler — keeps every project fresh
                and personal. The goal is never to impose a style but to excavate one that was
                already there, waiting to be expressed.
              </p>
              <p className="text-charcoal/60 leading-relaxed mb-10">
                Jason works collaboratively with architects, builders, lighting designers, landscape
                artists, and organizational specialists to ensure each home is as functional as
                it is beautiful.
              </p>
              <BrandButton href="/shop" variant="outline">
                Shop the Collection
              </BrandButton>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.15}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1615529328331-f8917597711f?w=900&q=80"
                  alt="Interior design detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Reach */}
      <section className="py-20 bg-sand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs tracking-widest uppercase text-taupe mb-4">Project Reach</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
              From Texas to the Turks & Caicos
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { label: "States", value: "8+" },
                { label: "Countries", value: "3" },
                { label: "Projects Completed", value: "100+" },
                { label: "Years of Experience", value: "20+" },
              ].map(({ label, value }) => (
                <div key={label} className="py-8 border border-sand">
                  <p className="font-serif text-4xl text-charcoal mb-2">{value}</p>
                  <p className="text-xs tracking-widest uppercase text-taupe">{label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
              The collection is an extension of the work.
            </h2>
            <p className="text-cream/50 mb-10 leading-relaxed">
              Every piece in the shop has been chosen with the same eye Jason brings to every
              project — beautiful things, honestly made, worth living with for a lifetime.
            </p>
            <BrandButton href="/shop" variant="light">
              Shop the Collection
            </BrandButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
