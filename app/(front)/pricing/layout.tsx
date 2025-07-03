import Footer from '@/components/layout/footer'
import React, { PropsWithChildren } from 'react'

export default function PricingLayout({ children }: PropsWithChildren) {
    return (
        <div>
            {children}
            <Footer />
        </div>
    )
}
