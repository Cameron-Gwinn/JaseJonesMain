export interface Project {
  slug: string;
  title: string;
  location: string;
  region: string;
  coverImage: string;
  images: string[];
  description: string;
  year: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: "construction" | "remodel" | "furnish";
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location: string;
}
