import CareerHeaderBottom from '@/components/career-header-bottom'
import React, { Suspense } from 'react'
import CareerBodyComponent from "@/components/career-body-component";
import Loading from '../loading';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Jobs",
    description: "Find your dream jobs"
}

export default async function CareerPage() {
    const getCareer = async () => {
        try {
            const response = await fetch("http://localhost:3000/data/jobs.json");
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data.data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <Suspense fallback={<Loading />} >
            <CareerHeaderBottom />
            <CareerBodyComponent title="" data={await getCareer()} />
        </Suspense>
    )
}
