import BreadcrumbCom from '@/components/breadcrumb-com';
import Footer from '@/components/footer';
import HeaderNav from '@/components/header-nav';
import ScrollToTop from '@/components/ui/scroll-to-top';
import React, { ReactNode } from 'react';

import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default async function PublicLayout({
    children,
    modal,
    params
}: Readonly<{
    children: ReactNode;
    modal: ReactNode;
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
                {modal}
                <Footer />
                <ScrollToTop />
            </section>
        </NextIntlClientProvider>
    )
}
