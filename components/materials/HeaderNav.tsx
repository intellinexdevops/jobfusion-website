"use client"
import React from 'react'
import { HeaderNavigationMenu } from './_components/HeaderNavigationMenu'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

export default function HeaderNav() {
    const router = useRouter()
    const handleOnGetStarted = () => {
        router.push("/authentication/sign-in/")
    }
    return (
        <header className='fixed top-0 z-50 w-full bg-background' >
            <div className='container flex flex-row items-center justify-between py-4' >
                <HeaderNavigationMenu />
                <div className='flex flex-row items-center gap-x-4' >
                    <Button variant={'outline'} size={'lg'} onClick={handleOnGetStarted} >
                        Get Started
                    </Button>
                    <Button size={'lg'} >
                        Download App
                    </Button>
                </div>
            </div>
        </header>
    )
}
