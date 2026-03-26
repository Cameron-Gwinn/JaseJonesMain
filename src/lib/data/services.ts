import { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "new-construction",
    title: "New Construction",
    icon: "construction",
    description:
      "From ground up, we collaborate with architects, builders, and lighting designers to create spaces that are as functional as they are beautiful — built with intention from the very first drawing.",
    details: [
      "Interior design detailing & finish selections",
      "Interior elevations & millwork design",
      "Coordination with architects & lighting designers",
      "AV and technology planning",
      "Furnishing plans & procurement",
      "Art, rug, and accessory curation",
    ],
  },
  {
    id: "remodeling",
    title: "Remodeling",
    icon: "remodel",
    description:
      "We transform existing spaces into refined environments that reflect who you are today. Whether a single room or a complete home renovation, every project begins with truly listening.",
    details: [
      "Full and partial renovation design",
      "Space planning & layout optimization",
      "Finish and material selections",
      "Kitchen & bath detailing",
      "Custom millwork & built-ins",
      "Contractor coordination & oversight",
    ],
  },
  {
    id: "furnishing",
    title: "Furnishing of Spaces",
    icon: "furnish",
    description:
      "Thoughtful furnishing transforms a house into a home. We source, select, and procure furniture, fabrics, rugs, lighting, and objects that reflect your personality and stand the test of time.",
    details: [
      "Full furnishing plans & specifications",
      "Custom furniture design & procurement",
      "Fabric & textile selection",
      "Decorative lighting curation",
      "Rug, art & objects d'art sourcing",
      "Window coverings & wall covering selection",
    ],
  },
];
