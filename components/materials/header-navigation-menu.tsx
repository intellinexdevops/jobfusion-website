"use client"
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const HeaderNavigationMenu = () => {
    return (
        <ul className='flex items-center gap-10'>
            <li>
                <Link href="/about-us" className='text-sm font-medium text-neutral-600 flex items-center gap-2'>
                    About us
                </Link>
            </li>
            <li>
                <Link href="/career" className='text-sm font-medium text-neutral-600 flex items-center gap-2'>
                    Find Jobs
                </Link>
            </li>
            <li>
                <Link href="/career" className='text-sm font-medium text-neutral-600 flex items-center gap-2'>
                    What&apos;s new?
                </Link>
            </li>
            <li>
                <Link href="/career" className='text-sm font-medium text-neutral-600 flex items-center gap-2'>
                    Recruiter
                </Link>
            </li>
        </ul>
    )
}

export default HeaderNavigationMenu