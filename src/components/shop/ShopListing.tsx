"use client";

import { useState, useMemo } from "react";
import { SlidersHorizontal } from "lucide-react";
import { getProductsByCategory, priceRanges, type Product } from "@/lib/data/products";
import ShopSidebar, { type FilterState } from "./ShopSidebar";
import ProductCard from "./ProductCard";

interface Props {
  category: string;
  meta: { label: string; description: string };
}

function applyFilters(products: Product[], filters: FilterState): Product[] {
  let result = [...products];

  if (filters.inStockOnly) {
    result = result.filter((p) => p.inStock);
  }

  if (filters.priceRanges.length > 0) {
    result = result.filter((p) =>
      filters.priceRanges.some((label) => {
        const range = priceRanges.find((r) => r.label === label);
        return range && p.price >= range.min && p.price <= range.max;
      })
    );
  }

  if (filters.materials.length > 0) {
    result = result.filter((p) =>
      filters.materials.some((m) => p.material.includes(m))
    );
  }

  if (filters.styles.length > 0) {
    result = result.filter((p) =>
      filters.styles.some((s) => p.styles.includes(s))
    );
  }

  switch (filters.sort) {
    case "price-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "newest":
      result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
      break;
    default:
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }

  return result;
}

const defaultFilters: FilterState = {
  priceRanges: [],
  materials: [],
  styles: [],
  sort: "featured",
  inStockOnly: false,
};

export default function ShopListing({ category, meta }: Props) {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [mobileOpen, setMobileOpen] = useState(false);

  const allProducts = useMemo(() => getProductsByCategory(category), [category]);
  const filtered = useMemo(() => applyFilters(allProducts, filters), [allProducts, filters]);

  const activeFilterCount =
    filters.priceRanges.length +
    filters.materials.length +
    filters.styles.length +
    (filters.inStockOnly ? 1 : 0) +
    (filters.sort !== "featured" ? 1 : 0);

  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-10 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px bg-taupe" />
            <p className="text-xs tracking-widest uppercase text-taupe">The Collection</p>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="font-serif text-5xl md:text-6xl text-charcoal leading-tight">
              {meta.label}
            </h1>
            <p className="text-charcoal/45 max-w-xs leading-relaxed text-[14px]">
              {meta.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-cream pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Mobile filter bar */}
          <div className="lg:hidden flex items-center justify-between py-4 border-b border-sand-dark mb-8">
            <p className="text-xs text-charcoal/50">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </p>
            <button
              onClick={() => setMobileOpen(true)}
              className="flex items-center gap-2 text-xs tracking-widest uppercase text-charcoal/70 hover:text-charcoal transition-colors border border-charcoal/20 px-4 py-2"
            >
              <SlidersHorizontal size={13} />
              Filter &amp; Sort
              {activeFilterCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-charcoal text-cream text-[9px] flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>

          <div className="flex gap-8 lg:gap-10 items-start">
            {/* Sidebar */}
            <ShopSidebar
              filters={filters}
              onFilterChange={setFilters}
              activeCategory={category}
              totalCount={allProducts.length}
              filteredCount={filtered.length}
              mobileOpen={mobileOpen}
              onMobileClose={() => setMobileOpen(false)}
            />

            {/* Product grid */}
            <div className="flex-1 min-w-0">

              {/* Active filter chips */}
              {activeFilterCount > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {filters.inStockOnly && (
                    <FilterChip
                      label="In Stock"
                      onRemove={() => setFilters({ ...filters, inStockOnly: false })}
                    />
                  )}
                  {filters.priceRanges.map((r) => (
                    <FilterChip
                      key={r}
                      label={r}
                      onRemove={() =>
                        setFilters({ ...filters, priceRanges: filters.priceRanges.filter((x) => x !== r) })
                      }
                    />
                  ))}
                  {filters.materials.map((m) => (
                    <FilterChip
                      key={m}
                      label={m}
                      onRemove={() =>
                        setFilters({ ...filters, materials: filters.materials.filter((x) => x !== m) })
                      }
                    />
                  ))}
                  {filters.styles.map((s) => (
                    <FilterChip
                      key={s}
                      label={s}
                      onRemove={() =>
                        setFilters({ ...filters, styles: filters.styles.filter((x) => x !== s) })
                      }
                    />
                  ))}
                  <button
                    onClick={() => setFilters(defaultFilters)}
                    className="text-[10px] tracking-[0.15em] uppercase text-charcoal/40 hover:text-charcoal transition-colors self-center ml-1 underline underline-offset-2"
                  >
                    Clear all
                  </button>
                </div>
              )}

              {filtered.length === 0 ? (
                <div className="py-24 text-center">
                  <p className="font-serif text-2xl text-charcoal/30 mb-3">No results</p>
                  <p className="text-sm text-charcoal/40 mb-6">Try adjusting your filters.</p>
                  <button
                    onClick={() => setFilters(defaultFilters)}
                    className="text-xs tracking-widest uppercase text-charcoal/50 hover:text-charcoal transition-colors underline underline-offset-4"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                  {filtered.map((product, i) => (
                    <ProductCard key={product.slug} product={product} priority={i < 3} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FilterChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <button
      onClick={onRemove}
      className="flex items-center gap-1.5 text-[10px] tracking-[0.15em] uppercase text-charcoal/60 bg-sand border border-charcoal/15 px-3 py-1.5 hover:border-charcoal/40 hover:text-charcoal transition-colors"
    >
      {label}
      <span className="text-charcoal/30 text-sm leading-none">×</span>
    </button>
  );
}
