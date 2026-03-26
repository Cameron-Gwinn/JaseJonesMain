import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

const quickLinks = [
  { label: "Furniture", href: "/shop/furniture" },
  { label: "Fabrics & Textiles", href: "/shop/fabrics" },
  { label: "Rugs", href: "/shop/rugs" },
  { label: "Lighting", href: "/shop/lighting" },
  { label: "Objects & Art", href: "/shop/objects" },
];

export default function ContactCTA() {
  return (
    <section className="bg-charcoal py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-cream/10 mb-10">
            <div>
              <p className="text-xs tracking-widest uppercase text-taupe mb-3">Shop by Category</p>
              <h2 className="font-serif text-3xl lg:text-4xl text-cream leading-tight">
                Find what you're
                <br />
                <em className="italic text-cream/40">looking for.</em>
              </h2>
            </div>
            <Link
              href="/shop"
              className="self-start md:self-auto inline-flex items-center gap-3 border border-cream/20 text-cream/70 hover:border-cream/50 hover:text-cream px-8 py-3.5 text-xs tracking-widest uppercase transition-all duration-300"
            >
              Browse All →
            </Link>
          </div>

          {/* Quick category links */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {quickLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center justify-between border border-cream/10 hover:border-taupe px-5 py-4 transition-all duration-300"
              >
                <span className="text-sm text-cream/60 group-hover:text-cream transition-colors">
                  {label}
                </span>
                <span className="text-cream/20 group-hover:text-taupe transition-colors text-xs">→</span>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
