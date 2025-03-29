import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function SidebarBreadcrumb() {
    const pathname = usePathname();
    const pathParts = pathname!.split('/');
    const breadcrumbItems = pathParts.slice(3).map((part, index) => {
        return (
            <div key={index} className='flex flex-row items-center gap-3' >
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink className='capitalize' href={`/channel/${part}`}>{part.split('-').join(' ')}</BreadcrumbLink>
                </BreadcrumbItem>
            </div>
        )
    })

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="#">
                        <Home size={14} />
                    </BreadcrumbLink>
                </BreadcrumbItem>
                {breadcrumbItems}
            </BreadcrumbList>
        </Breadcrumb>
    )
}
