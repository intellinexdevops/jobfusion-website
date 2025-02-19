import BreadcrumbCom from '@/components/materials/BreadcrumbCom';
import Footer from '@/components/materials/Footer';
import HeaderNav from '@/components/materials/HeaderNav';
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
