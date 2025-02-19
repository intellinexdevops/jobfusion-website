import Benefit from "@/components/materials/Benefit";
import Discoverable from "@/components/materials/Discoverable";
import Hero from "@/components/materials/Hero";
import Portential from "@/components/materials/Portential";
import Testimonials from "@/components/materials/Testimonials";

export default function Home() {
  return (
    <main >
      <Hero />
      <Portential />
      <Benefit />
      <Discoverable />
      <Testimonials />
    </main>
  );
}
