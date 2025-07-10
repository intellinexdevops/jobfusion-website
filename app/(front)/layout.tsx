import Footer from "@/components/base/footer";
import FooterCTA from "@/components/base/footer-cta";
import HeaderNav from "@/components/base/header-nav";
import ScrollToTop from "@/components/ui/scroll-to-top";
import React from "react";

export default async function FrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <HeaderNav />
      {children}
      <FooterCTA />
      <Footer />
      <ScrollToTop />
    </section>
  );
}
