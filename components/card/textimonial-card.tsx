import { Building2, StarIcon } from 'lucide-react'
import React from 'react'

type TestmonialType = {
    name: string;
    position: string;
    review: string;
}

export default function TestimonialCard({ data }: { data: TestmonialType }) {
    return (
        <div className='rounded-md'>
            <div className='flex flex-row gap-2 mb-5'>
                {Array.from({ length: 5 }).map((_, idx) => (
                    <StarIcon fill='text-white' className='bg-primary p-1 text-white fill-white' key={idx} size={20} />
                ))}
            </div>
            <p className='text-sm md:text-base font-medium'>&quot;{data.review}&quot;</p>

            <div className='mt-3 flex flex-row gap-3 items-center' >
                <div className='h-12 w-12 rounded-full bg-gray-300' >

                </div>
                <div>
                    <p className='text-sm font-medium'>{data.name}</p>
                    <p className='text-xs text-gray-500'>{data.position}</p>
                </div>
                <div className='border-l-2 border-gray-600 flex flex-row gap-3 items-center ml-4 pl-4'>
                    <Building2 size={20} />
                    <p className='text-sm font-semibold' >ABA Bank</p>
                </div>
            </div>
        </div>
    )
}
