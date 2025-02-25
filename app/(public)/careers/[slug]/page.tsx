import CareerBodyComponent from '@/components/materials/CareerBodyComponent';
import React from 'react'

export default async function CareesPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    const title = slug.split('-').join(' ');
    return (
        <div className='h-[2000px]'>
            <div className='bg-primary pb-6'>
                <div className='container pt-2'>
                    <p className='text-2xl text-white capitalize font-semibold'>
                        {title}
                    </p>
                </div>
            </div>
            <CareerBodyComponent title={title} />
        </div>
    )
}
