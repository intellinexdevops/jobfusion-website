import Image from 'next/image'
import React from 'react'

interface Step {
    id: number;
    title: string;
    icon: string;
    bgColor: string;
}

export default function Discoverable() {
    const steps: Step[] = [
        {
            id: 1,
            title: "Register / Sign In",
            icon: "/icons/register.svg",
            bgColor: "bg-[#AF52DE]"
        },
        {
            id: 2,
            title: "Complete Your Profile",
            icon: "/icons/profile.svg",
            bgColor: "bg-primary"
        },
        {
            id: 3,
            title: "Browse Jobs",
            icon: "/icons/search.svg",
            bgColor: "bg-[#007AFF]"
        },
        {
            id: 4,
            title: "Apply for a Job",
            icon: "/icons/success.svg",
            bgColor: "bg-[#32ADE6]"
        },
        {
            id: 5,
            title: "Wait for result",
            icon: "/icons/notification.svg",
            bgColor: "bg-[#FFCC00]"
        }
    ];
    return (
        <section className="bg-white py-16 px-8 xl:rounded-xl">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="title relative inline-block">
                        How You Work?
                        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-green-500 to-green-400 rounded-full animate-pulse"></span>
                    </h2>
                </div>

                {/* Steps Container */}
                <div className="grid lg:grid-cols-5 grid-cols-1 gap-y-6 items-center justify-center mt-20 relative">

                    <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-primary/20 z-0 animate-pulse"
                        style={{
                            left: 'calc(10% + 30px)',
                            right: 'calc(10% + 30px)',
                        }}>
                    </div>

                    {steps.map((step) => (
                        <div key={step.id} className="flex flex-col justify-center items-center p-4 gap-y-3 relative z-10">
                            {/* Icon with background circle */}
                            <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center shadow-md">
                                <Image src={step.icon} width={60} height={60} alt={step.title} />
                            </div>

                            {/* Title */}
                            <p className="text-sm text-neutral-700 text-center">
                                {step.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
