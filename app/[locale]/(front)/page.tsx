import Benefit from "@/components/layout/home/benefit";
import Discoverable from "@/components/layout/home/discoverable";
import Hero from "@/components/layout/home/Hero";
import JobOfTheDayCom from "@/components/layout/home/job-of-the-day-com";
import Portential from "@/components/layout/home/portential";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <div className="xl:max-w-7xl mx-auto">
        <Portential />
        <Discoverable />
        <JobOfTheDayCom />
        <Benefit />
        <Testimonials />
      </div>
    </main>
  );
}
