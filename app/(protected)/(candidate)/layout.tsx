import Footer from '@/components/materials/Footer'
import HeaderCandidate from '@/components/materials/HeaderCandidate'
import React from 'react'

export default function CandidateLayout({
    children
}: { children: React.ReactNode }) {
    return (
        <>
            <HeaderCandidate />
            {children}
            <Footer />
        </>
    )
}
