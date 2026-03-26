import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products, categoryMeta, type Product } from "@/lib/data/products";
import ProductGallery from "@/components/shop/ProductGallery";
import ProductCard from "@/components/shop/ProductCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.description.slice(0, 160),
  };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

function getRelated(product: Product): Product[] {
  return products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 4);
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelated(product);
  const catMeta = categoryMeta[product.category];
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 pb-2 bg-cream border-b border-sand-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <nav className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-taupe">
            <Link href="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
            <span>/</span>
            <Link href={`/shop/${product.category}`} className="hover:text-charcoal transition-colors">
              {catMeta.label}
            </Link>
            <span>/</span>
            <span className="text-charcoal/50">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product */}
      <section className="bg-cream py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Gallery */}
            <ProductGallery images={product.images} name={product.name} />

            {/* Info */}
            <div className="lg:py-4">
              {/* Category + badges */}
              <div className="flex items-center gap-3 mb-4">
                <Link
                  href={`/shop/${product.category}`}
                  className="text-[9px] tracking-[0.3em] uppercase text-taupe hover:text-charcoal transition-colors"
                >
                  {catMeta.label}
                </Link>
                {product.isNew && (
                  <span className="text-[9px] tracking-[0.2em] uppercase bg-charcoal text-cream px-2 py-0.5">
                    New
                  </span>
                )}
                {hasDiscount && (
                  <span className="text-[9px] tracking-[0.2em] uppercase bg-taupe text-charcoal px-2 py-0.5">
                    Sale
                  </span>
                )}
              </div>

              <h1 className="font-serif text-3xl md:text-4xl text-charcoal leading-snug mb-4">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="font-serif text-2xl text-charcoal">
                  ${product.price.toLocaleString()}
                  {product.unit && (
                    <span className="text-charcoal/40 text-base ml-1 font-sans">{product.unit}</span>
                  )}
                </span>
                {hasDiscount && (
                  <span className="text-charcoal/40 text-base line-through">
                    ${product.originalPrice!.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-charcoal/60 leading-relaxed text-[15px] mb-8">
                {product.description}
              </p>

              {/* Colors */}
              {product.colors.length > 0 && (
                <div className="mb-6">
                  <p className="text-[9px] tracking-[0.3em] uppercase text-taupe mb-2">
                    Available In
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="text-xs text-charcoal/70 border border-sand-dark px-3 py-1.5"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Dimensions */}
              {product.dimensions && (
                <div className="mb-8">
                  <p className="text-[9px] tracking-[0.3em] uppercase text-taupe mb-1">Dimensions</p>
                  <p className="text-sm text-charcoal/70">{product.dimensions}</p>
                </div>
              )}

              {/* Add to cart / inquire */}
              <div className="space-y-3 mb-10">
                {product.inStock ? (
                  <button className="w-full bg-charcoal text-cream text-xs tracking-widest uppercase py-4 hover:bg-charcoal/85 transition-colors">
                    Add to Cart
                  </button>
                ) : (
                  <button
                    disabled
                    className="w-full bg-charcoal/20 text-charcoal/40 text-xs tracking-widest uppercase py-4 cursor-not-allowed"
                  >
                    Sold Out
                  </button>
                )}
                <Link
                  href="/contact"
                  className="block w-full border border-charcoal/20 text-charcoal text-xs tracking-widest uppercase py-4 text-center hover:border-charcoal transition-colors"
                >
                  Inquire About This Piece
                </Link>
              </div>

              {/* Details accordion */}
              <ProductDetails details={product.details} material={product.material} styles={product.styles} />
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="bg-sand py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-[9px] tracking-[0.3em] uppercase text-taupe mb-2">More From</p>
                <h2 className="font-serif text-2xl text-charcoal">{catMeta.label}</h2>
              </div>
              <Link
                href={`/shop/${product.category}`}
                className="text-[10px] tracking-[0.2em] uppercase text-charcoal/50 hover:text-charcoal transition-colors flex items-center gap-2"
              >
                View All <span>→</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

// Inline client-ish accordion (server-friendly using details/summary HTML)
function ProductDetails({
  details,
  material,
  styles,
}: {
  details: string[];
  material: string;
  styles: string[];
}) {
  return (
    <div className="border-t border-sand-dark">
      <details className="group border-b border-sand-dark" open>
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="text-[9px] tracking-[0.3em] uppercase text-charcoal/70">Details & Care</span>
          <span className="text-charcoal/40 group-open:rotate-45 transition-transform text-lg">+</span>
        </summary>
        <div className="pb-5">
          <ul className="space-y-1.5">
            {details.map((d) => (
              <li key={d} className="flex items-start gap-3 text-sm text-charcoal/60">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-taupe flex-shrink-0" />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </details>

      <details className="group border-b border-sand-dark">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="text-[9px] tracking-[0.3em] uppercase text-charcoal/70">Material & Style</span>
          <span className="text-charcoal/40 group-open:rotate-45 transition-transform text-lg">+</span>
        </summary>
        <div className="pb-5 space-y-3">
          <div>
            <p className="text-[9px] tracking-[0.2em] uppercase text-taupe mb-1">Material</p>
            <p className="text-sm text-charcoal/60">{material}</p>
          </div>
          <div>
            <p className="text-[9px] tracking-[0.2em] uppercase text-taupe mb-1">Style</p>
            <p className="text-sm text-charcoal/60">{styles.join(", ")}</p>
          </div>
        </div>
      </details>

      <details className="group border-b border-sand-dark">
        <summary className="flex items-center justify-between py-4 cursor-pointer list-none">
          <span className="text-[9px] tracking-[0.3em] uppercase text-charcoal/70">Shipping & Returns</span>
          <span className="text-charcoal/40 group-open:rotate-45 transition-transform text-lg">+</span>
        </summary>
        <div className="pb-5">
          <ul className="space-y-1.5">
            {[
              "White-glove delivery available on all furniture",
              "Standard shipping: 5–7 business days",
              "International shipping available — contact us",
              "Returns accepted within 14 days in original condition",
              "Custom and made-to-order pieces are non-returnable",
            ].map((line) => (
              <li key={line} className="flex items-start gap-3 text-sm text-charcoal/60">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-taupe flex-shrink-0" />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </details>
    </div>
  );
}
