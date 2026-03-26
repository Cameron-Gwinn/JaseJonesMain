import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import BrandButton from "@/components/ui/BrandButton";

const previews = [
  { label: "Furniture", href: "/shop/furniture", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80" },
  { label: "Fabrics", href: "/shop/fabrics", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80" },
  { label: "Rugs", href: "/shop/rugs", image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&q=80" },
  { label: "Objects", href: "/shop/objects", image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80" },
];

export default function ShopTeaser() {
  return (
    <section className="bg-sand-dark py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — text */}
          <AnimatedSection direction="left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-taupe" />
              <span className="text-xs tracking-widest uppercase text-taupe">The Shop</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
              Curated goods
              <br />
              <em className="italic text-charcoal/40">worth living with.</em>
            </h2>

            <p className="text-charcoal/55 leading-relaxed mb-3 text-[15px]">
              Furniture, fabrics, rugs, and objects — each piece chosen with the same
              care and intention we bring to every design project.
            </p>
            <p className="text-charcoal/55 leading-relaxed mb-10 text-[15px]">
              No filler. No trends for trend's sake. Just beautiful things built to last.
            </p>

            <BrandButton href="/shop" variant="primary">
              Browse the Collection
            </BrandButton>
          </AnimatedSection>

          {/* Right — category grid */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="grid grid-cols-2 gap-3">
              {previews.map((item, i) => (
                <Link key={item.href} href={item.href} className="group block">
                  <div
                    className={`relative overflow-hidden ${
                      i === 0 ? "aspect-[3/4]" :
                      i === 1 ? "aspect-square" :
                      i === 2 ? "aspect-square" :
                      "aspect-[3/4]"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/5 transition-all duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-xs tracking-widest uppercase text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.label} →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
