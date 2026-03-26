import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "first-st-costa",
    title: "First St. Costa",
    location: "Costa Mesa, California",
    region: "California",
    coverImage:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
      "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80",
    ],
    description:
      "A coastal California residence where organic textures and natural light take center stage. The project balances casual California living with refined materials — bleached oak, woven linens, and hand-thrown ceramics create a home that feels effortlessly collected.",
    year: 2023,
  },
  {
    slug: "griffith-ave",
    title: "Griffith Ave",
    location: "Los Angeles, California",
    region: "California",
    coverImage:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=1200&q=80",
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1200&q=80",
      "https://images.unsplash.com/photo-1617104678098-de229db51175?w=1200&q=80",
    ],
    description:
      "An urban Los Angeles home reimagined for modern family life. Bold architectural moments — a double-height entry, custom millwork library, and bespoke kitchen — are grounded by a warm, livable palette of terracotta, aged brass, and soft linen upholstery.",
    year: 2022,
  },
  {
    slug: "southwestern",
    title: "Southwestern",
    location: "Santa Fe, New Mexico",
    region: "New Mexico",
    coverImage:
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=80",
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=1200&q=80",
      "https://images.unsplash.com/photo-1592170817672-23e01f49e5b2?w=1200&q=80",
      "https://images.unsplash.com/photo-1580237541049-2d715a09486e?w=1200&q=80",
    ],
    description:
      "A Santa Fe compound that honors the high desert landscape without resorting to cliché. Adobe walls and exposed vigas meet contemporary furnishings — each piece chosen for its connection to craft, material honesty, and the warmth of natural fibers.",
    year: 2022,
  },
  {
    slug: "vail",
    title: "Vail",
    location: "Vail, Colorado",
    region: "Colorado",
    coverImage:
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80",
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1200&q=80",
    ],
    description:
      "A mountain retreat designed for deep rest and gathering. Stone, reclaimed wood, and hand-stitched leather anchor the interior while panoramic mountain views remain the true focal point. Every detail — from the fireside seating arrangement to the chef's kitchen — was designed around how this family actually lives.",
    year: 2021,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
