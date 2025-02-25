"use client"
import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
export default function LoadingComponent() {
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <DotLottieReact
                src='/loading_anim.json'
                loop
                autoplay
                className='w-72'
            />
        </div>
    )
}
