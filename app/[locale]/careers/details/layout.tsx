import BreadcrumbCareerCom from '@/components/breadcrumb-career-com'
import React, { PropsWithChildren } from 'react'

export default function CarerrDetailLayout({ children }: PropsWithChildren) {
    return (
        <div>
            <BreadcrumbCareerCom />
            {children}
        </div>
    )
}
