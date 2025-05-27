import React, { Suspense } from 'react'
import CareerBodyComponent from "@/components/pages/career-body-component";
import { Metadata } from 'next';
import { data } from '@/public/data/jobs';

export const metadata: Metadata = {
    title: "Jobs",
    description: "Find your dream jobs"
}

export default async function CareerPage() {

    return (
        <Suspense>
            <CareerBodyComponent title="" data={data} />
        </Suspense>
    )
}
