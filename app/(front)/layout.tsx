import Footer from "@/components/com/footer";
import HeaderNav from "@/components/com/header-nav";
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
      <Footer />
      <ScrollToTop />
    </section>
  );
}
