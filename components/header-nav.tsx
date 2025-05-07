"use client"
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import Logo from './logo'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import HeaderNavigationMenu from './header-navigation-menu'


export default function HeaderNav() {
    const t = useTranslations()
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`fixed top-0 z-50 w-full bg-transparent transition-all duration-300 ease-linear ${scrolled ? ' bg-white/80 backdrop-blur-md border-b border-gray-100' : ''}`} >
            <div className='container flex flex-row items-center justify-between py-4' >
                <div className='flex-1'>
                    <Logo />
                </div>
                <HeaderNavigationMenu />

                <div className='flex-1 flex flex-row justify-end items-center gap-x-4 ' >
                    <Link href="/sign-in">
                        <Button className='hidden md:flex' variant={'outline'} size={'default'}>
                            {t("signin")}
                        </Button>
                    </Link>
                    <Link href="/sign-up">
                        <Button size={'default'}>
                            {t("register")}
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
