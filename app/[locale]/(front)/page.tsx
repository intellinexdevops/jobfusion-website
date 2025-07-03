import Benefit from "@/components/layout/home/benefit";
import BlogAndMedia from "@/components/layout/home/blog-and-media";
import CallToAction from "@/components/layout/home/call-to-action";
import Discoverable from "@/components/layout/home/discoverable";
import Hero from "@/components/layout/home/Hero";
import JobOfTheDayCom from "@/components/layout/home/job-of-the-day-com";
import Newsletter from "@/components/layout/home/newsletter";
import Portential from "@/components/layout/home/portential";
import Testimonials from "@/components/layout/home/testimonials";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <div className="xl:max-w-7xl mx-auto">
        <Portential />
        <Discoverable />
        <JobOfTheDayCom />
        <CallToAction />
        <Benefit />
        <Testimonials />
        <BlogAndMedia />
        <Newsletter />
      </div>
    </main>
  );
}
