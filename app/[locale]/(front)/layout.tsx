import BreadcrumbCom from "@/components/breadcrumb-com";
import Footer from "@/components/layout/footer";
import HeaderNav from "@/components/layout/header-nav";
import ScrollToTop from "@/components/ui/scroll-to-top";
import React from "react";


export default function FrontLayout({
    children
}: {
    children: React.ReactNode
}) {
    return <section>
        <HeaderNav />
        <BreadcrumbCom />
        {children}
        <Footer />
        <ScrollToTop />
    </section>
}