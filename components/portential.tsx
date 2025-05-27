import Image from 'next/image'
import React from 'react'

export default function Portential() {
    return (
        <section className='mt-40 mb-24 container' >
            <p className='text-left title'>brwose by category</p>
            <p className='text-left text-xs md:text-sm mt-4'>
                Our Job Portal App simplifies the hiring process for recruiters and job seekers alike. Experience <br /> a user-friendly platform designed to meet your employment needs.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-20' >
                <div className='bg-white p-4 rounded-xl flex items-center gap-x-3'>
                    <div className='w-[40px] h-[40px] relative'>
                        <Image
                            src="/icons/software.svg"
                            fill
                            alt='Software Development'
                        />
                    </div>
                    <div>
                        <p className='text-sm text-neutral-700 font-semibold mb-1'>Software Development</p>
                        <p className='text-xs text-neutral-500'>100+ Jobs available</p>
                    </div>
                </div>

                <div className='bg-white p-4 rounded-xl flex items-center gap-x-3'>
                    <div className='w-[40px] h-[40px] relative'>
                        <Image
                            src="/icons/networking.svg"
                            fill
                            alt='Networking'
                        />
                    </div>
                    <div>
                        <p className='text-sm text-neutral-700 font-semibold mb-1'>Networking</p>
                        <p className='text-xs text-neutral-500'>100+ Jobs available</p>
                    </div>
                </div>

                <div className='bg-white p-4 rounded-xl flex items-center gap-x-3'>
                    <div className='w-[40px] h-[40px] relative'>
                        <Image
                            src="/icons/web-development.svg"
                            fill
                            alt='Web Development'
                        />
                    </div>
                    <div>
                        <p className='text-sm text-neutral-700 font-semibold mb-1'>Web Development</p>
                        <p className='text-xs text-neutral-500'>100+ Jobs available</p>
                    </div>
                </div>

                <div className='bg-white p-4 rounded-xl flex items-center gap-x-3'>
                    <div className='w-[40px] h-[40px] relative'>
                        <Image
                            src="/icons/mobile-development.svg"
                            fill
                            alt='Mobile Development'
                        />
                    </div>
                    <div>
                        <p className='text-sm text-neutral-700 font-semibold mb-1'>Mobile Development</p>
                        <p className='text-xs text-neutral-500'>100+ Jobs available</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
