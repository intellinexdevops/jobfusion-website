import Benefit from "@/components/benefit";
import Discoverable from "@/components/discoverable";
import Hero from "@/components/Hero";
import JobOfTheDayCom from "@/components/job-of-the-day-com";
import Portential from "@/components/portential";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main >
      <Hero />
      <Portential />
      <Discoverable />
      <JobOfTheDayCom />
      <Benefit />
      <Testimonials />
    </main>
  );
}
