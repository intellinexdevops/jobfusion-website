import React, { Suspense } from 'react'
import Loading from './loading'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Login",
    description: "Login to your JobFusion account",
}

export default function AuthenticationLayout({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<Loading />}>
            {children}
        </Suspense>
    )
}
