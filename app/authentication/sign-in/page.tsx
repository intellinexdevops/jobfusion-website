import LoginComponent from '@/components/pages/LoginComponent'
import React, { Suspense } from 'react'

export default function LoginPage() {
    return (
        <section>
            <Suspense fallback={<div>Loaiding...</div>} >
                <LoginComponent />
            </Suspense>
        </section>
    )
}
