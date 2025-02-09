import HeaderNav from '@/components/materials/HeaderNav';
import { Metadata } from 'next';
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
    title: "JobFusion - Home",
    description: "Create, Build, Achieve",
};

export default function PublicLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <section>
            <HeaderNav />
            {children}
        </section>
    )
}
