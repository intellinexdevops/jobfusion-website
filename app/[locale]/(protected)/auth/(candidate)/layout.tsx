import Footer from '@/components/footer'
import HeaderCandidate from '@/components/header-candidate'
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
