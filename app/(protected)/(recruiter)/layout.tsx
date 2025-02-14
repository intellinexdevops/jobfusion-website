import HeaderRecruiter from '@/components/materials/HeaderRecruiter'
import React from 'react'

export default function RecruiterLayout({
    children
}: { children: React.ReactNode }) {
    return (
        <>
            <HeaderRecruiter />
            {children}
        </>
    )
}
