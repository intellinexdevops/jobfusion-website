import { MoreHorizontalIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function PersonalInforMenu() {
    return (
        <div className='p-6 bg-white rounded-md' >
            <p className='text-base font-semibold text-gray-600'>Personal Information</p>
            <div className='border-b my-4 border-gray-100' />
            <div>
                <span className='text-sm text-gray-500 lg:hidden flex mb-3'>Profile</span>
                <div className='grid grid-cols-2 lg:grid-cols-3 items-center'>
                    <span className='text-sm text-gray-500 hidden lg:flex'>Profile</span>
                    <div className='flex flex-row items-center gap-3' >
                        <Image
                            src="/images/placeholder-image.webp"
                            alt="ProfileImage"
                            width={150}
                            height={150}
                            objectFit='cover'
                            objectPosition='center'
                            className='rounded-full w-12 h-12'
                        />
                        <span className='text-sm font-medium text-gray-500' >Chenter PHAI</span>
                    </div>
                    <div className='flex justify-end' >
                        <button className='text-sm text-primary font-medium' >
                            Upload Profile
                        </button>
                    </div>
                </div>
            </div>
            <div className='border-b my-4 border-gray-100' />
            <div>
                <span className='text-sm text-gray-500 lg:hidden flex mb-3'>Email Address</span>
                <div className='grid grid-cols-2 lg:grid-cols-3 items-center'>
                    <span className='text-sm text-gray-500 hidden lg:flex'>Email Address</span>
                    <div className='flex flex-row items-center gap-3' >
                        <span className='text-sm font-medium text-gray-500' >chenterphai61@gmail.com</span>
                    </div>
                    <div className='flex justify-end' >
                        <button className='text-sm' >
                            <MoreHorizontalIcon size={14} className='text-gray-500' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
