import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'
export default function Logo({ className }: { className?: string }) {
    return (
        <Link href="/" className={clsx(`font-bold text-primary text-lg ${className}`)} >JobFusion</Link>
    )
}
