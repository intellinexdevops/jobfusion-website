import React from 'react'
import { HeaderNavigationMenu } from './_components/HeaderNavigationMenu'
import { Button } from '../ui/button'

export default function HeaderNav() {
    return (
        <header className='flex flex-row items-center justify-between w-full p-4' >
            <HeaderNavigationMenu />
            <div className='flex flex-row items-center gap-x-4' >
                <Button variant={'outline'} size={'lg'} >
                    Get Started
                </Button>
                <Button size={'lg'} >
                    Sign In
                </Button>
            </div>
        </header>
    )
}
