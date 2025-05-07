import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Home } from 'lucide-react'
export default function CareerHeaderBottom() {
    return (
        <div>
            <div className='' >
                <div className='mt-20 container pt-10'>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink className='text-gray-600' href="/">
                                    <Home size={14} />
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className='text-gray-600' />
                            <BreadcrumbItem>
                                <BreadcrumbLink className='text-gray-600 hover:text-gray-200 capitalize' href={`/careers`}>All Jobs</BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
            <div className='pb-6'>
                <div className='container pt-2'>
                    <p className='text-2xl text-gray-800 capitalize font-semibold'>
                        Jobs
                    </p>
                </div>
            </div>
        </div>
    )
}
