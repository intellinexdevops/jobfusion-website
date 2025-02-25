
import React, { Suspense } from 'react'
import Loading from './loading'

export default function AuthenticationLayout({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<Loading />}>
            {children}
        </Suspense>
    )
}
