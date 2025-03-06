import BreadcrumbCareerCom from '@/components/materials/BreadcrumbCareerCom'
import React, { PropsWithChildren } from 'react'

export default function CarerrDetailLayout({ children }: PropsWithChildren) {
    return (
        <div>
            <BreadcrumbCareerCom />
            {children}
        </div>
    )
}
