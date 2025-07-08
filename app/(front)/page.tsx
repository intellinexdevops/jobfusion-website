import Benefit from "@/components/com/home/benefit";
import BlogAndMedia from "@/components/com/home/blog-and-media";
import CallToAction from "@/components/com/home/call-to-action";
import Discoverable from "@/components/com/home/discoverable";
import Hero from "@/components/com/home/Hero";
import JobOfTheDayCom from "@/components/com/home/job-of-the-day-com";
import Newsletter from "@/components/com/home/newsletter";
import Portential from "@/components/com/home/portential";
import Testimonials from "@/components/com/home/testimonials";

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
