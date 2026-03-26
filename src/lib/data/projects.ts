import { Project } from "@/lib/types";

const SQ = "https://images.squarespace-cdn.com/content/v1/63a4d059ad2f131e74945b9c";

export const projects: Project[] = [
  {
    slug: "first-st-costa",
    title: "First St. Costa",
    location: "Costa Mesa, California",
    region: "California",
    coverImage: `${SQ}/1673891690407-5URRSXRBIXHEF861HMUK/603+First+St-4-2.jpg`,
    images: [
      `${SQ}/1673891690407-5URRSXRBIXHEF861HMUK/603+First+St-4-2.jpg`,
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
    coverImage: `${SQ}/1673892232015-E2C8WJXDLPMR7ZVEM25B/408+Griffith+Ave-16.jpg`,
    images: [
      `${SQ}/1673892232015-E2C8WJXDLPMR7ZVEM25B/408+Griffith+Ave-16.jpg`,
      `${SQ}/82dfddbf-d527-44f6-b44e-47ed9d82ef32/408+Griffith+Ave-11.jpg`,
      `${SQ}/b8b94e61-6dd5-4476-892b-5869dc8c2139/408+Griffith+Ave-13.jpg`,
      `${SQ}/cbedd92f-931f-48b1-85a8-0d0c0f6ca8f4/408+Griffith+Ave-17.jpg`,
      `${SQ}/48e043cf-f94b-4088-8024-bb4fc5e9bb6d/408+Griffith+Ave-8.jpg`,
      `${SQ}/4864053a-2f05-4ad6-9cff-74b721832f1a/408+Griffith+Ave-10.jpg`,
      `${SQ}/40981c93-b27d-49f0-a832-f3ef9b42aaf6/408+Griffith+Ave-14.jpg`,
      `${SQ}/666724ee-fe3e-4cad-8e59-7b738d8dcaa7/408+Griffith+Ave-9.jpg`,
      `${SQ}/d0a19358-d5b4-4b91-a6f8-d373fd0c7530/408+Griffith+Ave-12.jpg`,
      `${SQ}/ccb6aaf6-5c8a-4c4d-97d7-c357098d2eaf/408+Griffith+Ave-7.jpg`,
      `${SQ}/a740fabf-65d4-48ba-9be8-34767a84bcf1/408+Griffith+Ave-15.jpg`,
      `${SQ}/a7939706-5cfc-4a73-b087-d5f1b8acaa6b/408+Griffith+Ave-5.jpg`,
      `${SQ}/5b773043-9a92-4fd3-8bf7-f900889707a6/408+Griffith+Ave-2.jpg`,
      `${SQ}/bd747555-bfe1-4852-91b7-2284bf141987/408+Griffith+Ave-4.jpg`,
      `${SQ}/35c54351-c57d-45d0-ba90-33e127cb4276/408+Griffith+Ave-18.jpg`,
      `${SQ}/7e10dd06-4756-4ac2-a763-164faee9d368/408+Griffith+Ave-19.jpg`,
      `${SQ}/5137df4a-1a39-43a8-9ed4-d68ca89c7e4a/408+Griffith+Ave-3.jpg`,
      `${SQ}/25a3aa21-8a36-4a8f-bd84-0907ff507585/408+Griffith+Ave-6.jpg`,
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
    coverImage: `${SQ}/1673892497080-45BA161C6EAS6UM4VZHP/3909+Southwestern-12.jpg`,
    images: [
      `${SQ}/1636cebf-e498-423a-9e80-f80c3f1f3223/3909+Southwestern-8-2.jpg`,
      `${SQ}/1673892497080-45BA161C6EAS6UM4VZHP/3909+Southwestern-12.jpg`,
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
    coverImage: `${SQ}/1673892667751-5448K9AYUFXTUSIRL90R/Vail+2021-5.jpg`,
    images: [
      `${SQ}/1673892667751-5448K9AYUFXTUSIRL90R/Vail+2021-5.jpg`,
    ],
    description:
      "A mountain retreat designed for deep rest and gathering. Stone, reclaimed wood, and hand-stitched leather anchor the interior while panoramic mountain views remain the true focal point. Every detail — from the fireside seating arrangement to the chef's kitchen — was designed around how this family actually lives.",
    year: 2021,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
