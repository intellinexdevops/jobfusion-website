import Benefit from "@/components/benefit";
import Discoverable from "@/components/discoverable";
import Hero from "@/components/Hero";
import Portential from "@/components/portential";
import Testimonials from "@/components/testimonials";

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
