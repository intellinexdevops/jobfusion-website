import Benefit from "@/components/com/home/benefit";
import BlogAndMedia from "@/components/com/home/blog-and-media";
import CallToAction from "@/components/com/home/call-to-action";
import Discoverable from "@/components/com/home/discoverable";
import Hero from "@/components/com/home/Hero";
import CampaignOfTheDay from "@/components/com/home/campaign-of-the-day-com";
import Newsletter from "@/components/com/home/newsletter";
import Portential from "@/components/com/home/portential";
import Testimonials from "@/components/com/home/testimonials";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <div className="container mx-auto">
        <Portential />
        <Discoverable />
        <CampaignOfTheDay />
        <CallToAction />
        <Benefit />
        <Testimonials />
        <BlogAndMedia />
        <Newsletter />
      </div>
    </main>
  );
}
