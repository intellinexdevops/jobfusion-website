import BreadcrumbCom from '@/components/materials/breadcrumb-com';
import Footer from '@/components/materials/footer';
import HeaderNav from '@/components/materials/header-nav';
import ScrollToTop from '@/components/ui/scroll-to-top';
import React, { ReactNode } from 'react'

export default function PublicLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <section>
            <HeaderNav />
            <BreadcrumbCom />
            {children}
            <Footer />
            <ScrollToTop />
        </section>
    )
}
