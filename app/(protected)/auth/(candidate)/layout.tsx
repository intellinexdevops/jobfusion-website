import Footer from '@/components/materials/footer'
import HeaderCandidate from '@/components/materials/header-candidate'
import React, { Suspense } from 'react'

export default function CandidateLayout({
    children
}: { children: React.ReactNode }) {
    return (
        <Suspense>
            <HeaderCandidate />
            {children}
            <Footer />
        </Suspense>
    )
}
