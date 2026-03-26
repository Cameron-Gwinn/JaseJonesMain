"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown } from "lucide-react";
import { allMaterials, allStyles, priceRanges, categoryMeta } from "@/lib/data/products";

export interface FilterState {
  priceRanges: string[];
  materials: string[];
  styles: string[];
  sort: string;
  inStockOnly: boolean;
}

interface Props {
  filters: FilterState;
  onFilterChange: (next: FilterState) => void;
  activeCategory: string;
  totalCount: number;
  filteredCount: number;
  mobileOpen: boolean;
  onMobileClose: () => void;
}

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
];

const CATEGORIES = [
  { slug: "all", label: "All Products" },
  { slug: "furniture", label: "Furniture" },
  { slug: "fabrics", label: "Fabrics & Textiles" },
  { slug: "rugs", label: "Rugs" },
  { slug: "lighting", label: "Lighting" },
  { slug: "objects", label: "Objects & Art" },
];

function FilterSection({
  title,
  count,
  defaultOpen = true,
  children,
}: {
  title: string;
  count?: number;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-charcoal/10">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-charcoal">
            {title}
          </span>
          {count !== undefined && count > 0 && (
            <span className="w-5 h-5 rounded-full bg-charcoal text-cream text-[9px] flex items-center justify-center font-bold">
              {count}
            </span>
          )}
        </div>
        <ChevronDown
          size={14}
          className={`text-charcoal/40 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="px-5 pb-4">{children}</div>}
    </div>
  );
}

function CheckRow({
  label,
  sublabel,
  checked,
  onChange,
}: {
  label: string;
  sublabel?: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      onClick={onChange}
      className="flex items-center gap-3 w-full text-left py-1.5 group"
    >
      <span
        className={`w-4 h-4 border flex-shrink-0 flex items-center justify-center transition-all ${
          checked
            ? "border-charcoal bg-charcoal"
            : "border-charcoal/25 group-hover:border-charcoal/60 bg-white"
        }`}
      >
        {checked && (
          <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
            <path d="M1 3L3 5L7 1" stroke="#FAF8F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <div className="flex-1 min-w-0">
        <span className={`text-sm transition-colors ${checked ? "text-charcoal font-medium" : "text-charcoal/65 group-hover:text-charcoal"}`}>
          {label}
        </span>
        {sublabel && (
          <span className="text-xs text-charcoal/35 ml-1">{sublabel}</span>
        )}
      </div>
    </button>
  );
}

function SidebarContent({
  filters,
  onFilterChange,
  activeCategory,
  totalCount,
  filteredCount,
}: Omit<Props, "mobileOpen" | "onMobileClose">) {
  const hasActiveFilters =
    filters.priceRanges.length > 0 ||
    filters.materials.length > 0 ||
    filters.styles.length > 0 ||
    filters.inStockOnly ||
    filters.sort !== "featured";

  function toggleArr<K extends "priceRanges" | "materials" | "styles">(key: K, value: string) {
    const arr = filters[key];
    const next = arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
    onFilterChange({ ...filters, [key]: next });
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-5 py-4 border-b border-charcoal/10 flex items-center justify-between">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-charcoal">
            Filter &amp; Sort
          </p>
          <p className="text-xs text-charcoal/40 mt-0.5">
            {filteredCount} of {totalCount} pieces
          </p>
        </div>
        {hasActiveFilters && (
          <button
            onClick={() => onFilterChange({ priceRanges: [], materials: [], styles: [], sort: "featured", inStockOnly: false })}
            className="text-[10px] tracking-[0.1em] uppercase text-taupe hover:text-charcoal transition-colors underline underline-offset-2"
          >
            Reset All
          </button>
        )}
      </div>

      {/* Scrollable filters */}
      <div className="flex-1 overflow-y-auto">

        {/* Category */}
        <FilterSection title="Category">
          <div className="space-y-0.5">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.slug;
              return (
                <Link
                  key={cat.slug}
                  href={`/shop/${cat.slug}`}
                  className={`flex items-center gap-3 py-1.5 text-sm transition-colors ${
                    isActive ? "text-charcoal font-medium" : "text-charcoal/55 hover:text-charcoal"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${isActive ? "bg-charcoal" : "bg-transparent"}`} />
                  {cat.label}
                </Link>
              );
            })}
          </div>
        </FilterSection>

        {/* Sort */}
        <FilterSection title="Sort By">
          <div className="space-y-0.5">
            {SORT_OPTIONS.map((opt) => {
              const active = filters.sort === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => onFilterChange({ ...filters, sort: opt.value })}
                  className={`flex items-center gap-3 w-full text-left py-1.5 text-sm transition-colors ${
                    active ? "text-charcoal font-medium" : "text-charcoal/55 hover:text-charcoal"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${active ? "bg-charcoal" : "bg-transparent"}`} />
                  {opt.label}
                </button>
              );
            })}
          </div>
        </FilterSection>

        {/* Availability */}
        <FilterSection title="Availability">
          <CheckRow
            label="In Stock Only"
            checked={filters.inStockOnly}
            onChange={() => onFilterChange({ ...filters, inStockOnly: !filters.inStockOnly })}
          />
        </FilterSection>

        {/* Price */}
        <FilterSection title="Price Range" count={filters.priceRanges.length}>
          <div className="space-y-0.5">
            {priceRanges.map((range) => (
              <CheckRow
                key={range.label}
                label={range.label}
                checked={filters.priceRanges.includes(range.label)}
                onChange={() => toggleArr("priceRanges", range.label)}
              />
            ))}
          </div>
        </FilterSection>

        {/* Material */}
        <FilterSection title="Material" count={filters.materials.length}>
          <div className="space-y-0.5">
            {allMaterials.map((m) => (
              <CheckRow
                key={m}
                label={m}
                checked={filters.materials.includes(m)}
                onChange={() => toggleArr("materials", m)}
              />
            ))}
          </div>
        </FilterSection>

        {/* Style */}
        <FilterSection title="Style" count={filters.styles.length} defaultOpen={false}>
          <div className="space-y-0.5">
            {allStyles.map((s) => (
              <CheckRow
                key={s}
                label={s}
                checked={filters.styles.includes(s)}
                onChange={() => toggleArr("styles", s)}
              />
            ))}
          </div>
        </FilterSection>

      </div>
    </div>
  );
}

export default function ShopSidebar(props: Props) {
  const { mobileOpen, onMobileClose, ...rest } = props;

  return (
    <>
      {/* Desktop sidebar — solid panel */}
      <aside className="hidden lg:flex flex-col w-64 flex-shrink-0 bg-sand border border-charcoal/10 self-start sticky top-20 max-h-[calc(100vh-6rem)] overflow-hidden">
        <SidebarContent {...rest} />
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm"
            onClick={onMobileClose}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-sand flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-5 py-4 border-b border-charcoal/10">
              <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-charcoal">
                Filter &amp; Sort
              </p>
              <button onClick={onMobileClose} className="text-charcoal/40 hover:text-charcoal transition-colors">
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <SidebarContent {...rest} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
