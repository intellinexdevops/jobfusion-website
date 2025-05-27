import Image from 'next/image'
import React from 'react'

export default function Discoverable() {
    return (
        <section className='bg-white'>
            <div className='container py-32'>
                <div className='flex flex-col justify-start items-center'>
                    <p className='text-3xl text-center text-neutral-700 font-semibold' >How it work?</p>
                    <div className='w-20 h-1 bg-primary mt-3' />
                </div>

                <div className='grid lg:grid-cols-5 items-center justify-center mt-20'>
                    <div className='flex flex-col justify-center items-center p-4 gap-y-3 relative'>
                        <Image src="/icons/register.svg" width={60} height={60} alt='Register' />
                        <p className='text-sm text-neutral-700'>Register / Sign In</p>
                        <div className='w-5 h-5 bg-[#AF52DE] rounded-full flex justify-center items-center'>
                            <span className='text-xs text-white'>1</span>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center p-4 gap-y-3'>
                        <Image src="/icons/profile.svg" width={60} height={60} alt='Register' />
                        <p className='text-sm text-neutral-700'>Complete Your Profile</p>
                        <div className='w-5 h-5 bg-primary rounded-full flex justify-center items-center'>
                            <span className='text-xs text-white'>2</span>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center p-4 gap-y-3'>
                        <Image src="/icons/search.svg" width={60} height={60} alt='Register' />
                        <p className='text-sm text-neutral-700'>Browse Jobs</p>
                        <div className='w-5 h-5 bg-[#007AFF] rounded-full flex justify-center items-center'>
                            <span className='text-xs text-white'>3</span>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center p-4 gap-y-3'>
                        <Image src="/icons/success.svg" width={60} height={60} alt='Register' />
                        <p className='text-sm text-neutral-700'>Apply for a Job</p>
                        <div className='w-5 h-5 bg-[#32ADE6] rounded-full flex justify-center items-center'>
                            <span className='text-xs text-white'>4</span>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center p-4 gap-y-3'>
                        <Image src="/icons/notification.svg" width={60} height={60} alt='Register' />
                        <p className='text-sm text-neutral-700'>Wait for result</p>
                        <div className='w-5 h-5 bg-[#FFCC00] rounded-full flex justify-center items-center'>
                            <span className='text-xs text-white'>5</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
