import Benefit from "@/components/materials/benefit";
import Discoverable from "@/components/materials/discoverable";
import Hero from "@/components/materials/Hero";
import Portential from "@/components/materials/portential";
import Testimonials from "@/components/materials/testimonials";

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
