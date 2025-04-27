"use client"
import React from 'react'
import { HeaderNavigationMenu } from './_components/header-navigation-menu'
import { Button } from '../ui/button'
import Logo from './_components/logo'
import Link from 'next/link'


export default function HeaderNav() {
    return (
        <header className='fixed top-0 z-50 w-full bg-background' >
            <div className='container flex flex-row items-center justify-between py-4' >
                <div className='flex-1'>
                    <Logo />
                </div>
                <HeaderNavigationMenu />

                <div className='flex-1 flex flex-row justify-end items-center gap-x-4 ' >
                    <Link href="/sign-in">
                        <Button className='hidden md:flex' variant={'outline'} size={'default'}>
                            Sign In
                        </Button>
                    </Link>
                    <Link href="/sign-up">
                        <Button size={'default'}>
                            Register
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
