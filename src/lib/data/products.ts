export interface Product {
  slug: string;
  name: string;
  category: "furniture" | "fabrics" | "rugs" | "lighting" | "objects";
  price: number;
  originalPrice?: number;
  unit?: string; // e.g. "per yard" for fabrics
  images: string[];
  description: string;
  details: string[];
  dimensions?: string;
  material: string;
  colors: string[];
  styles: string[];
  inStock: boolean;
  featured?: boolean;
  isNew?: boolean;
}

export const products: Product[] = [
  // ─── FURNITURE ───────────────────────────────────────────────
  {
    slug: "linen-slope-arm-sofa",
    name: "Linen Slope Arm Sofa",
    category: "furniture",
    price: 4200,
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=900&q=80",
    ],
    description:
      "A quietly commanding sofa with a low, sloped arm profile and deep-seated cushions. Upholstered in a heavy Belgian linen that softens beautifully with time. Built on a solid kiln-dried hardwood frame — the kind that outlasts the trends.",
    details: [
      "Kiln-dried hardwood frame",
      "Belgian linen upholstery — Oat",
      "Down-wrapped foam cushions",
      "Available in custom fabrics",
      "Ships in 8–10 weeks",
    ],
    dimensions: "96\"W × 38\"D × 32\"H — Seat Height: 17\"",
    material: "Wood, Fabric",
    colors: ["Oat", "Ivory", "Charcoal"],
    styles: ["Transitional", "Organic"],
    inStock: true,
    featured: true,
  },
  {
    slug: "burnished-oak-coffee-table",
    name: "Burnished Oak Coffee Table",
    category: "furniture",
    price: 1850,
    images: [
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
    ],
    description:
      "Solid white oak, lightly burnished to reveal its natural grain. A simple slab form elevated by hand-finished edges and a matte oil finish. Low-profile and long.",
    details: [
      "Solid white oak",
      "Hand-applied burnished finish",
      "Matte oil topcoat",
      "Ships in 4–6 weeks",
    ],
    dimensions: "60\"W × 24\"D × 15\"H",
    material: "Wood",
    colors: ["Natural Oak", "Dark Walnut"],
    styles: ["Minimal", "Organic", "Modern"],
    inStock: true,
    featured: true,
  },
  {
    slug: "channel-back-lounge-chair",
    name: "Channel Back Lounge Chair",
    category: "furniture",
    price: 2400,
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80",
    ],
    description:
      "Deep channel tufting, a generous seat, and solid brass legs. The kind of chair you spend an entire Sunday in. Available in bouclé, linen, or velvet.",
    details: [
      "Solid hardwood frame",
      "Channel-tufted back",
      "Brushed brass legs",
      "Down-blend seat cushion",
      "Ships in 6–8 weeks",
    ],
    dimensions: "30\"W × 32\"D × 34\"H — Seat Height: 16\"",
    material: "Wood, Fabric, Metal",
    colors: ["Ivory Bouclé", "Oat Linen", "Forest Velvet"],
    styles: ["Modern", "Transitional"],
    inStock: true,
    isNew: true,
  },
  {
    slug: "woven-rush-dining-chair",
    name: "Woven Rush Dining Chair",
    category: "furniture",
    price: 680,
    unit: "set of 2",
    images: [
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=900&q=80",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=900&q=80",
    ],
    description:
      "Hand-woven rush seat on a solid ash frame. A natural material mix that brings warmth and texture to any dining space. Sold in pairs.",
    details: [
      "Solid ash frame",
      "Hand-woven rush seat",
      "Natural matte finish",
      "Sold in sets of 2",
      "Ships in 3–5 weeks",
    ],
    dimensions: "18\"W × 20\"D × 34\"H — Seat Height: 18\"",
    material: "Wood, Natural Fiber",
    colors: ["Ash / Natural"],
    styles: ["Organic", "Traditional", "Transitional"],
    inStock: true,
  },
  {
    slug: "solid-walnut-dining-table",
    name: "Solid Walnut Dining Table",
    category: "furniture",
    price: 6400,
    images: [
      "https://images.unsplash.com/photo-1617104678098-de229db51175?w=900&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80",
    ],
    description:
      "A single live-edge walnut slab on a hand-forged steel base. No two are alike — each table arrives with its own grain character, filled knots, and natural edge. Made to order.",
    details: [
      "Single walnut slab — live edge",
      "Hand-forged steel base — blackened",
      "Natural oil + wax finish",
      "Made to order — dimensions customizable",
      "Ships in 12–14 weeks",
    ],
    dimensions: "84\"W × 42\"D × 30\"H (standard) — Custom available",
    material: "Wood, Metal",
    colors: ["Walnut / Blackened Steel"],
    styles: ["Organic", "Modern", "Transitional"],
    inStock: true,
    featured: true,
  },
  {
    slug: "fluted-plaster-side-table",
    name: "Fluted Plaster Side Table",
    category: "furniture",
    price: 920,
    images: [
      "https://images.unsplash.com/photo-1592170817672-23e01f49e5b2?w=900&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&q=80",
    ],
    description:
      "Cast plaster over a steel armature, hand-finished with a matte chalky surface. The fluted column form is architectural but not cold — it softens beautifully with a lamp or stack of books on top.",
    details: [
      "Cast plaster over steel armature",
      "Hand-applied matte finish",
      "Sealed for durability",
      "Ships in 4–5 weeks",
    ],
    dimensions: "14\" dia × 24\"H",
    material: "Stone, Metal",
    colors: ["Plaster White", "Warm Greige"],
    styles: ["Minimal", "Modern", "Organic"],
    inStock: true,
    isNew: true,
  },
  {
    slug: "cane-back-settee",
    name: "Cane Back Settee",
    category: "furniture",
    price: 3100,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80",
    ],
    description:
      "Hand-caned back panel, cushioned seat in a heavyweight linen, and solid cherry legs. A settee with the quiet confidence of something that belongs in any room — forever.",
    details: [
      "Solid cherry frame",
      "Hand-caned back panel",
      "Linen cushion — removable cover",
      "Ships in 6–8 weeks",
    ],
    dimensions: "52\"W × 28\"D × 34\"H",
    material: "Wood, Natural Fiber, Fabric",
    colors: ["Cherry / Sand Linen"],
    styles: ["Traditional", "Transitional"],
    inStock: false,
  },
  {
    slug: "marble-top-nightstand",
    name: "Marble Top Nightstand",
    category: "furniture",
    price: 1240,
    images: [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&q=80",
      "https://images.unsplash.com/photo-1580237541049-2d715a09486e?w=900&q=80",
    ],
    description:
      "Honed Carrara marble top on a solid oak body with a single drawer and cane front. Simple proportions, serious materials.",
    details: [
      "Honed Carrara marble top",
      "Solid white oak case",
      "Hand-cane drawer front",
      "Brushed brass pull",
      "Ships in 5–7 weeks",
    ],
    dimensions: "20\"W × 18\"D × 24\"H",
    material: "Stone, Wood, Natural Fiber",
    colors: ["Marble / Natural Oak"],
    styles: ["Modern", "Transitional", "Minimal"],
    inStock: true,
    isNew: true,
  },

  // ─── FABRICS ─────────────────────────────────────────────────
  {
    slug: "belgian-linen-oat",
    name: "Belgian Linen — Oat",
    category: "fabrics",
    price: 48,
    unit: "per yard",
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=80",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=900&q=80",
    ],
    description:
      "A mid-weight Belgian linen in a warm oat tone. Tight, even weave with a slightly textured hand. Appropriate for upholstery, drapery, and pillows. Softens beautifully with washing.",
    details: [
      "100% Belgian linen",
      "Weight: 7.5 oz/yd²",
      "Width: 56\"",
      "Dry clean or cold machine wash",
      "Minimum 2 yards",
    ],
    material: "Fabric",
    colors: ["Oat"],
    styles: ["Transitional", "Organic", "Minimal"],
    inStock: true,
    featured: true,
  },
  {
    slug: "boucle-wool-ivory",
    name: "Bouclé Wool — Ivory",
    category: "fabrics",
    price: 92,
    unit: "per yard",
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=80",
    ],
    description:
      "A looped bouclé in a warm ivory. Soft, textural, and forgiving — ideal for upholstery and accent pillows. The looped surface hides wear and adds visual depth.",
    details: [
      "80% wool, 20% polyamide",
      "Weight: 12 oz/yd²",
      "Width: 54\"",
      "Dry clean only",
      "Minimum 2 yards",
    ],
    material: "Fabric",
    colors: ["Ivory"],
    styles: ["Modern", "Minimal", "Transitional"],
    inStock: true,
    featured: true,
    isNew: true,
  },
  {
    slug: "velvet-forest",
    name: "Cotton Velvet — Forest",
    category: "fabrics",
    price: 74,
    unit: "per yard",
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=80",
    ],
    description:
      "A rich, tone-on-tone velvet in deep forest green. Cotton-backed for durability, with a consistent pile height. Gorgeous for drapery, accent chairs, and headboards.",
    details: [
      "100% cotton velvet",
      "Width: 54\"",
      "Dry clean only",
      "Rub count: 30,000+",
      "Minimum 2 yards",
    ],
    material: "Fabric",
    colors: ["Forest"],
    styles: ["Traditional", "Modern", "Transitional"],
    inStock: true,
  },
  {
    slug: "heavyweight-linen-charcoal",
    name: "Heavyweight Linen — Charcoal",
    category: "fabrics",
    price: 62,
    unit: "per yard",
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=80",
    ],
    description:
      "A structured, heavyweight linen in deep charcoal. The heft makes it ideal for upholstery and Roman shades. Holds its shape without stiffness.",
    details: [
      "100% European linen",
      "Weight: 10 oz/yd²",
      "Width: 56\"",
      "Dry clean or hand wash cold",
      "Minimum 2 yards",
    ],
    material: "Fabric",
    colors: ["Charcoal"],
    styles: ["Minimal", "Modern", "Transitional"],
    inStock: true,
  },
  {
    slug: "mohair-blend-blush",
    name: "Mohair Blend — Blush",
    category: "fabrics",
    price: 118,
    unit: "per yard",
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=80",
    ],
    description:
      "A lustrous mohair blend in a pale blush. Exceptionally soft hand, subtle sheen. Best used as an accent — pillows, a single chair, a bedroom bench. A little goes a long way.",
    details: [
      "60% mohair, 30% wool, 10% nylon",
      "Width: 54\"",
      "Dry clean only",
      "Minimum 2 yards",
    ],
    material: "Fabric",
    colors: ["Blush"],
    styles: ["Transitional", "Traditional"],
    inStock: true,
    isNew: true,
  },
  {
    slug: "cotton-slub-sand",
    name: "Cotton Slub — Sand",
    category: "fabrics",
    price: 36,
    unit: "per yard",
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=80",
    ],
    description:
      "A relaxed, slubby cotton weave in warm sand. The irregular texture gives it life and movement. Great for drapery, bed skirts, and loose-cover furniture.",
    details: [
      "100% cotton",
      "Weight: 5 oz/yd²",
      "Width: 56\"",
      "Machine wash cold",
      "Minimum 2 yards",
    ],
    material: "Fabric",
    colors: ["Sand"],
    styles: ["Organic", "Transitional"],
    inStock: true,
  },

  // ─── RUGS ─────────────────────────────────────────────────────
  {
    slug: "handwoven-jute-natural",
    name: "Handwoven Jute — Natural",
    category: "rugs",
    price: 890,
    images: [
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=900&q=80",
      "https://images.unsplash.com/photo-1517315003714-a071486bd9ea?w=900&q=80",
    ],
    description:
      "Tightly handwoven natural jute in a simple flat weave. The kind of rug that grounds a room without demanding attention. Pairs with everything.",
    details: [
      "100% natural jute",
      "Handwoven flat weave",
      "Rug pad recommended",
      "Spot clean only",
      "Available in multiple sizes",
    ],
    dimensions: "Available: 5×8, 6×9, 8×10, 9×12",
    material: "Natural Fiber",
    colors: ["Natural"],
    styles: ["Organic", "Minimal", "Transitional"],
    inStock: true,
    featured: true,
  },
  {
    slug: "overdyed-persian-indigo",
    name: "Overdyed Persian — Indigo",
    category: "rugs",
    price: 2400,
    originalPrice: 3200,
    images: [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&q=80",
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=900&q=80",
    ],
    description:
      "A vintage Persian rug, overdyed in deep indigo to create a painterly, tonal effect. Each piece is unique — the original pattern shows through as a ghosted texture beneath the dye.",
    details: [
      "Vintage Persian base — 100% wool",
      "Overdyed in indigo",
      "Hand-knotted",
      "Professional cleaning recommended",
      "One of a kind",
    ],
    dimensions: "8'2\" × 10'4\"",
    material: "Fabric",
    colors: ["Indigo"],
    styles: ["Modern", "Traditional", "Transitional"],
    inStock: true,
    featured: true,
    isNew: false,
  },
  {
    slug: "moroccan-berber-ivory",
    name: "Moroccan Berber — Ivory",
    category: "rugs",
    price: 1800,
    images: [
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=900&q=80",
    ],
    description:
      "Handwoven by Berber artisans in the Atlas Mountains. Thick, high-pile wool in natural ivory with subtle geometric motifs woven in. Plush underfoot and deeply textural.",
    details: [
      "100% virgin wool — naturally undyed",
      "High-pile hand weave",
      "Spot clean or professional cleaning",
      "Rug pad recommended",
    ],
    dimensions: "5×8 shown — Available: 6×9, 8×10",
    material: "Fabric",
    colors: ["Ivory", "Natural"],
    styles: ["Organic", "Traditional", "Transitional"],
    inStock: true,
  },
  {
    slug: "flatweave-cotton-sand",
    name: "Flatweave Cotton — Sand / White",
    category: "rugs",
    price: 620,
    images: [
      "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=900&q=80",
    ],
    description:
      "A clean, graphic flatweave in natural cotton. The two-tone stripe is woven in, not printed — so it holds up beautifully over time and is fully reversible.",
    details: [
      "100% cotton",
      "Flatweave — reversible",
      "Machine wash cold on gentle",
      "Rug pad recommended",
    ],
    dimensions: "Available: 4×6, 5×8, 8×10",
    material: "Fabric, Natural Fiber",
    colors: ["Sand / White"],
    styles: ["Minimal", "Modern", "Organic"],
    inStock: true,
    isNew: true,
  },
  {
    slug: "hand-knotted-wool-camel",
    name: "Hand-Knotted Wool — Camel",
    category: "rugs",
    price: 3200,
    images: [
      "https://images.unsplash.com/photo-1580237541049-2d715a09486e?w=900&q=80",
    ],
    description:
      "A dense, hand-knotted rug in warm camel — one of those pieces that anchors an entire room. Made in Nepal by artisan weavers; each 8×10 takes approximately 4 months to complete.",
    details: [
      "100% hand-spun New Zealand wool",
      "Hand-knotted in Nepal",
      "200 KPSI",
      "Professional cleaning recommended",
      "Ships in 8–10 weeks",
    ],
    dimensions: "Available: 6×9, 8×10, 9×12",
    material: "Fabric",
    colors: ["Camel"],
    styles: ["Transitional", "Organic", "Traditional"],
    inStock: true,
    featured: true,
  },

  // ─── LIGHTING ─────────────────────────────────────────────────
  {
    slug: "rattan-pendant-natural",
    name: "Rattan Pendant — Natural",
    category: "lighting",
    price: 480,
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a40176a63?w=900&q=80",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=900&q=80",
    ],
    description:
      "Hand-woven rattan shade on a brushed brass fitting. The weave casts warm, dappled light in every direction. Works beautifully in groups of three over a dining table.",
    details: [
      "Hand-woven natural rattan shade",
      "Brushed brass canopy and hardware",
      "E26 socket — 60W max",
      "Cord length: 72\" (adjustable)",
      "UL listed",
    ],
    dimensions: "14\" dia × 12\"H",
    material: "Natural Fiber, Metal",
    colors: ["Natural / Brass"],
    styles: ["Organic", "Transitional"],
    inStock: true,
    featured: true,
    isNew: true,
  },
  {
    slug: "alabaster-table-lamp",
    name: "Alabaster Table Lamp",
    category: "lighting",
    price: 680,
    images: [
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=900&q=80",
    ],
    description:
      "A carved alabaster shade on a solid brass base. When lit, the stone glows from within — every vein and inclusion becomes part of the composition. No two are identical.",
    details: [
      "Carved natural alabaster shade",
      "Solid brass base — antique finish",
      "E26 socket — 40W max",
      "White linen shade included",
      "UL listed",
    ],
    dimensions: "8\" dia × 26\"H (with shade)",
    material: "Stone, Metal",
    colors: ["Alabaster / Antique Brass"],
    styles: ["Traditional", "Transitional", "Modern"],
    inStock: true,
    featured: true,
  },
  {
    slug: "brass-arc-floor-lamp",
    name: "Brass Arc Floor Lamp",
    category: "lighting",
    price: 890,
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a40176a63?w=900&q=80",
    ],
    description:
      "A minimal arc floor lamp in hand-finished brass. The shade pivots for directional reading light; the base is a weighted marble disc. Classic proportions, no excess.",
    details: [
      "Spun brass arm and hardware",
      "Carrara marble base",
      "Articulating shade pivot",
      "E26 socket — 75W max / LED compatible",
      "UL listed",
    ],
    dimensions: "Base: 10\" dia — Arc height: 72\"",
    material: "Metal, Stone",
    colors: ["Polished Brass / White Marble"],
    styles: ["Modern", "Minimal", "Transitional"],
    inStock: true,
  },
  {
    slug: "ceramic-column-lamp",
    name: "Ceramic Column Lamp",
    category: "lighting",
    price: 340,
    images: [
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=900&q=80",
    ],
    description:
      "A wheel-thrown ceramic base in a warm sand glaze, with a linen shade. The form is simple — a cylinder with a slight taper — but the glaze work gives it genuine depth and character.",
    details: [
      "Wheel-thrown ceramic base",
      "Sand glaze — hand-applied",
      "Natural linen shade",
      "E26 socket — 60W max",
      "UL listed",
    ],
    dimensions: "6\" dia × 28\"H (with shade)",
    material: "Ceramic, Fabric",
    colors: ["Sand", "Ivory", "Sage"],
    styles: ["Organic", "Minimal", "Transitional"],
    inStock: true,
    isNew: true,
  },
  {
    slug: "industrial-wall-sconce-pair",
    name: "Articulating Wall Sconce — Pair",
    category: "lighting",
    price: 420,
    unit: "set of 2",
    images: [
      "https://images.unsplash.com/photo-1513506003901-1e6a40176a63?w=900&q=80",
    ],
    description:
      "A reading sconce with an articulating arm and a deep cone shade in matte black. Hardwired or plug-in. Perfect flanking a bed or desk. Sold as a pair.",
    details: [
      "Steel arm — matte black powder coat",
      "Articulating pivot — 180° range",
      "Available hardwired or plug-in",
      "E26 socket — 40W max",
      "Sold as a set of 2",
    ],
    dimensions: "Arm extends to 18\" — Shade: 6\" dia",
    material: "Metal",
    colors: ["Matte Black"],
    styles: ["Modern", "Minimal"],
    inStock: true,
  },

  // ─── OBJECTS & ART ─────────────────────────────────────────────
  {
    slug: "hand-thrown-ceramic-vessel",
    name: "Hand-Thrown Ceramic Vessel",
    category: "objects",
    price: 180,
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900&q=80",
      "https://images.unsplash.com/photo-1592170817672-23e01f49e5b2?w=900&q=80",
    ],
    description:
      "Each vessel is thrown on the wheel, trimmed, and fired to cone 10. A thick-walled, slightly irregular form in a matte ash glaze. Intended for dry botanicals, stems, or simply standing alone.",
    details: [
      "Wheel-thrown stoneware",
      "Ash glaze — matte finish",
      "Cone 10 reduction fired",
      "One of a kind — slight variations",
      "Not food-safe",
    ],
    dimensions: "Approx. 5–7\" H (varies)",
    material: "Ceramic",
    colors: ["Ash", "Sand", "Warm White"],
    styles: ["Organic", "Minimal", "Modern"],
    inStock: true,
    featured: true,
    isNew: true,
  },
  {
    slug: "travertine-tray",
    name: "Honed Travertine Tray",
    category: "objects",
    price: 220,
    images: [
      "https://images.unsplash.com/photo-1592170817672-23e01f49e5b2?w=900&q=80",
    ],
    description:
      "A solid travertine tray with chamfered edges and a honed finish. Heavy, grounding, and naturally beautiful. Use it on a coffee table, vanity, or kitchen counter.",
    details: [
      "Honed travertine — natural stone",
      "Chamfered edges",
      "Sealed for daily use",
      "Each piece varies in veining",
    ],
    dimensions: "12\" × 8\" × 1.5\"H",
    material: "Stone",
    colors: ["Travertine"],
    styles: ["Minimal", "Organic", "Modern"],
    inStock: true,
    featured: true,
  },
  {
    slug: "woven-linen-throw",
    name: "Woven Linen Throw — Oat",
    category: "objects",
    price: 290,
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=80",
    ],
    description:
      "A heavy, open-weave throw in 100% washed linen. Gets softer with every wash. The kind of thing you throw over a sofa arm and never move.",
    details: [
      "100% washed European linen",
      "Open plain weave",
      "Fringe ends — hand-knotted",
      "Machine wash cold, tumble dry low",
    ],
    dimensions: "50\" × 70\"",
    material: "Fabric, Natural Fiber",
    colors: ["Oat", "Ivory", "Charcoal"],
    styles: ["Organic", "Minimal", "Transitional"],
    inStock: true,
  },
  {
    slug: "teak-bowl-carved",
    name: "Carved Teak Bowl",
    category: "objects",
    price: 145,
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900&q=80",
    ],
    description:
      "Hand-carved from a single block of reclaimed teak. A simple, deep bowl with a smooth interior and slightly textured exterior. Beautiful grouped in threes.",
    details: [
      "Carved reclaimed teak",
      "Food-safe natural oil finish",
      "Hand wash only",
      "Each piece varies in grain",
    ],
    dimensions: "10\" dia × 4\"H",
    material: "Wood",
    colors: ["Teak"],
    styles: ["Organic", "Transitional"],
    inStock: true,
  },
  {
    slug: "brass-candleholder-sculptural",
    name: "Sculptural Brass Candleholder",
    category: "objects",
    price: 320,
    images: [
      "https://images.unsplash.com/photo-1592170817672-23e01f49e5b2?w=900&q=80",
    ],
    description:
      "Cast brass in an asymmetric sculptural form — somewhere between a found object and fine art. Taper candle holder at the top. Gets better as it develops a natural patina.",
    details: [
      "Cast solid brass",
      "Antique-finish patina — natural aging",
      "Fits standard taper candles",
      "Heavy base — very stable",
    ],
    dimensions: "4\" base × 14\"H",
    material: "Metal",
    colors: ["Antique Brass"],
    styles: ["Modern", "Minimal", "Organic"],
    inStock: true,
    isNew: true,
  },
  {
    slug: "linen-cushion-cover",
    name: "Linen Cushion Cover",
    category: "objects",
    price: 85,
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=900&q=80",
    ],
    description:
      "A simple knife-edge cushion cover in washed linen. Zipper closure, slightly loose weave. Available in five colorways — mix and stack.",
    details: [
      "100% washed linen",
      "Knife-edge seaming",
      "Concealed zipper — back",
      "Insert not included",
      "Machine wash cold",
    ],
    dimensions: "Available: 18×18, 20×20, 22×22",
    material: "Fabric",
    colors: ["Oat", "Ivory", "Sand", "Charcoal", "Blush"],
    styles: ["Minimal", "Organic", "Transitional"],
    inStock: true,
  },
  {
    slug: "bleached-wood-sculpture",
    name: "Bleached Driftwood Sculpture",
    category: "objects",
    price: 580,
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900&q=80",
    ],
    description:
      "A section of found driftwood, bleached and sealed. No two are the same. Some have knots, some have voids, some curve unexpectedly. That's the point.",
    details: [
      "Found + bleached driftwood",
      "UV-sealed matte finish",
      "Mounts on a steel base — hidden hardware",
      "One of a kind",
    ],
    dimensions: "Approx. 18–24\"H (varies)",
    material: "Wood, Metal",
    colors: ["Bleached White"],
    styles: ["Organic", "Minimal"],
    inStock: true,
    featured: true,
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export const categoryMeta: Record<string, { label: string; description: string }> = {
  all: {
    label: "All Products",
    description: "The full collection — furniture, fabrics, rugs, lighting, and objects.",
  },
  furniture: {
    label: "Furniture",
    description: "Sofas, chairs, tables, and case goods built to endure.",
  },
  fabrics: {
    label: "Fabrics & Textiles",
    description: "Hand-selected linens, bouclés, velvets, and wovens.",
  },
  rugs: {
    label: "Rugs",
    description: "Flatweaves, knotted, and overdyed — every scale and style.",
  },
  lighting: {
    label: "Lighting",
    description: "Pendants, sconces, and table lamps that set the mood.",
  },
  objects: {
    label: "Objects & Art",
    description: "The details that make a house a home.",
  },
};

export const allMaterials = ["Wood", "Fabric", "Metal", "Stone", "Ceramic", "Natural Fiber"];
export const allStyles = ["Modern", "Minimal", "Transitional", "Organic", "Traditional"];
export const priceRanges = [
  { label: "Under $500", min: 0, max: 500 },
  { label: "$500 – $1,000", min: 500, max: 1000 },
  { label: "$1,000 – $3,000", min: 1000, max: 3000 },
  { label: "$3,000+", min: 3000, max: Infinity },
];
