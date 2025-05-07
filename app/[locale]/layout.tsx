import BreadcrumbCom from '@/components/materials/breadcrumb-com';
import Footer from '@/components/materials/footer';
import HeaderNav from '@/components/materials/header-nav';
import ScrollToTop from '@/components/ui/scroll-to-top';
import React, { ReactNode } from 'react';

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default async function PublicLayout({
    children,
    params
}: Readonly<{
    children: ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    return (
        <NextIntlClientProvider locale={locale}>
            <section>
                <HeaderNav />
                <BreadcrumbCom />
                {children}
                <Footer />
                <ScrollToTop />
            </section>
        </NextIntlClientProvider>
    )
}
