import Footer from '@/components/materials/footer'
import React, { PropsWithChildren } from 'react'

export default function PricingLayout({ children }: PropsWithChildren) {
    return (
        <div>
            {children}
            <Footer />
        </div>
    )
}
