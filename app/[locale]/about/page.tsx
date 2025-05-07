import AboutUs from '@/components/about-us'
import OurTeam from '@/components/our-team'
import OurSevices from '@/components/our-services'
import React from 'react'
import OurClient from '@/components/our-client'
export default function AboutPage() {
    return (
        <div className='mt-20' >
            <div className="flex flex-col items-center">
                <p className="font-medium mt-20">About Us</p>
                <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold my-4">
                    Getting to know who we are?
                </h1>
                <p className="text-sm ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
            </div>
            <AboutUs />
            <OurTeam />
            <OurSevices />
            <OurClient />
        </div>
    )
}
