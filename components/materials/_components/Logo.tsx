import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
export default function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={clsx(`font-bold text-primary text-lg ${className}`)} >
            <Image
                src="/images/logo.svg"
                alt='JobFusion Logo'
                width={150}
                height={30}
                loading='lazy'
            />
        </Link>
    )
}
