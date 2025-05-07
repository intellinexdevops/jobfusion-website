import CareerBodyComponent from '@/components/materials/career-body-component';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Freelance",
    description: "Helo"
}

export default async function CareesPage() {
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
        <div className=''>
            <div className='pb-6'>
                <div className='container pt-2'>
                    <p className='text-2xl text-gray-600 capitalize font-semibold'>
                        Freelance
                    </p>
                </div>
            </div>
            <CareerBodyComponent title="Freelance" data={await getCareer()} />
        </div>
    )
}
