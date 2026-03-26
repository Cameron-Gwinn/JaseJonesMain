import Hero from "@/components/home/Hero";
import AboutTeaser from "@/components/home/AboutTeaser";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import ShopTeaser from "@/components/home/ShopTeaser";
import ContactCTA from "@/components/home/ContactCTA";
import Marquee from "@/components/ui/Marquee";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <AboutTeaser />
      <FeaturedProjects />
      <Testimonials />
      <ShopTeaser />
      <ContactCTA />
    </>
  );
}
