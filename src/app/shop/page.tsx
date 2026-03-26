import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Curated furniture, fabrics, rugs, lighting, and home goods from Jase Jones & Associates.",
};

const categories = [
  {
    slug: "furniture",
    label: "Furniture",
    description: "Sofas, chairs, tables, and case goods — built to endure.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80",
    count: 24,
    span: "lg:col-span-2 lg:row-span-2",
    aspect: "aspect-[4/3] lg:aspect-auto lg:h-full",
  },
  {
    slug: "fabrics",
    label: "Fabrics & Textiles",
    description: "Hand-selected linens, velvets, and wovens.",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=80",
    count: 38,
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    slug: "rugs",
    label: "Rugs",
    description: "Flatweaves, knotted, and overdyed — every scale.",
    image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=900&q=80",
    count: 16,
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    slug: "lighting",
    label: "Lighting",
    description: "Pendants, sconces, and table lamps that set the mood.",
    image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=900&q=80",
    count: 19,
    span: "",
    aspect: "aspect-[4/3]",
  },
  {
    slug: "objects",
    label: "Objects & Art",
    description: "The details that make a house a home.",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900&q=80",
    count: 31,
    span: "",
    aspect: "aspect-[4/3]",
  },
];

export default function ShopPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-6 h-px bg-taupe" />
              <p className="text-xs tracking-widest uppercase text-taupe">The Collection</p>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal leading-tight">
                Shop
              </h1>
              <p className="text-charcoal/50 max-w-sm leading-relaxed text-[15px]">
                Every piece chosen with the same intention we bring to every project. No filler — only things worth living with.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Category grid */}
      <section className="pb-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Mobile: stacked. Desktop: editorial asymmetric grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:h-[780px]">
            {categories.map((cat, i) => (
              <AnimatedSection key={cat.slug} className={cat.span} delay={i * 0.07}>
                <Link href={`/shop/${cat.slug}`} className="group block h-full">
                  <div className={`relative overflow-hidden ${cat.aspect} h-full`}>
                    <Image
                      src={cat.image}
                      alt={cat.label}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={i === 0}
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/15 transition-all duration-500" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-[10px] tracking-[0.3em] uppercase text-cream/50 mb-1.5">
                            {cat.count} pieces
                          </p>
                          <h2 className={`font-serif text-cream leading-tight ${i === 0 ? "text-3xl lg:text-4xl" : "text-2xl"}`}>
                            {cat.label}
                          </h2>
                          {i === 0 && (
                            <p className="text-cream/60 text-sm mt-2 leading-relaxed max-w-xs">
                              {cat.description}
                            </p>
                          )}
                        </div>
                        <span className="text-cream opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-sm">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {/* View all strip */}
          <AnimatedSection delay={0.3}>
            <div className="mt-6 border border-sand-dark p-6 flex items-center justify-between group hover:border-taupe transition-colors">
              <div>
                <p className="text-xs tracking-widest uppercase text-taupe mb-1">Browse Everything</p>
                <p className="font-serif text-xl text-charcoal">View the full collection</p>
              </div>
              <Link
                href="/shop/all"
                className="text-xs tracking-widest uppercase text-charcoal/50 hover:text-charcoal transition-colors flex items-center gap-2"
              >
                Shop All <span>→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
