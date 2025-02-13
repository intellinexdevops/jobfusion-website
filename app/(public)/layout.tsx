import HeaderNav from '@/components/materials/HeaderNav';
import React, { ReactNode } from 'react'

export default function PublicLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <section>
            <HeaderNav />
            {children}
        </section>
    )
}
