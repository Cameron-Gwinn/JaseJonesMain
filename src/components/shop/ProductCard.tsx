"use client";

import Image from "next/image";
import Link from "next/link";
import { type Product } from "@/lib/data/products";

interface Props {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: Props) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;

  return (
    <Link href={`/shop/products/${product.slug}`} className="group block">
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-sand mb-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-all duration-500" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="bg-charcoal text-cream text-[9px] tracking-[0.2em] uppercase px-2.5 py-1">
              New
            </span>
          )}
          {hasDiscount && (
            <span className="bg-taupe text-charcoal text-[9px] tracking-[0.2em] uppercase px-2.5 py-1">
              Sale
            </span>
          )}
          {!product.inStock && (
            <span className="bg-charcoal/50 text-cream text-[9px] tracking-[0.2em] uppercase px-2.5 py-1">
              Sold Out
            </span>
          )}
        </div>

        {/* Quick-view hint */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-charcoal/80 backdrop-blur-sm p-3 text-center">
          <span className="text-cream text-[10px] tracking-[0.25em] uppercase">View Details</span>
        </div>
      </div>

      {/* Info */}
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-taupe mb-1">
          {product.category === "objects" ? "Objects & Art" :
           product.category === "fabrics" ? "Fabrics & Textiles" :
           product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        </p>
        <h3 className="font-serif text-charcoal text-base leading-snug mb-2 group-hover:text-charcoal/70 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-charcoal text-sm font-medium">
            ${product.price.toLocaleString()}
            {product.unit && (
              <span className="text-charcoal/40 font-normal text-xs ml-1">{product.unit}</span>
            )}
          </span>
          {hasDiscount && (
            <span className="text-charcoal/40 text-xs line-through">
              ${product.originalPrice!.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
