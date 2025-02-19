"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export default function BreadcrumbCom() {
    const pathname = usePathname();
    const pathParts = pathname?.split('/')

    if (pathParts!.length >= 3 && pathParts![2] !== "details") {
        return (
            <div className='bg-primary' >
                <div className='mt-20 container pt-10'>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink className='text-white' href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            {pathParts!.slice(2).map((path, idx) => {
                                const pageDisplay = path.split('-').join(' ');
                                return (
                                    <div key={idx} className='flex flex-row items-center gap-2' >
                                        <BreadcrumbSeparator className='text-white' />
                                        <BreadcrumbItem>
                                            <BreadcrumbLink className='text-white hover:text-gray-200 capitalize' href={`${path}`}>{pageDisplay}</BreadcrumbLink>
                                        </BreadcrumbItem>
                                    </div>
                                )
                            })}
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
        )
    }
}
