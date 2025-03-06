import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Home } from 'lucide-react'
export default function CareerHeaderBottom() {
    return (
        <div>
            <div className='bg-primary dark:bg-primary/5' >
                <div className='mt-20 container pt-10'>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink className='text-white' href="/">
                                    <Home size={14} />
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className='text-white' />
                            <BreadcrumbItem>
                                <BreadcrumbLink className='text-white hover:text-gray-200 capitalize' href={`/careers`}>All Jobs</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
            <div className='bg-primary dark:bg-primary/5 pb-6'>
                <div className='container pt-2'>
                    <p className='text-2xl text-white capitalize font-semibold'>
                        Careers
                    </p>
                </div>
            </div>
        </div>
    )
}
