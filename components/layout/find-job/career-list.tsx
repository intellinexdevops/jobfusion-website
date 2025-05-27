"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperButton from '../../ui/swiper-button';
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import React from "react";
import Image from "next/image";
import CareerItems from "@/components/layout/find-job/career-item";
import { Job } from "@/types/job";

export default function CareerList({ data }: { data: Job[] }) {

    const spotlight = [
        {
            id: 1,
            title: "Software Engineer",
            description: "Develop the products and tools for billions of users.",
        },
        {
            id: 2,
            title: "Network Engineer",
            description: "Develop the products and tools for billions of users.",
        },
        {
            id: 3,
            title: "Software Engineer",
            description: "Develop the products and tools for billions of users.",
        },
        {
            id: 4,
            title: "Software Engineer",
            description: "Develop the products and tools for billions of users.",
        },
        {
            id: 5,
            title: "Software Engineer",
            description: "Develop the products and tools for billions of users.",
        }
    ];

    return (<div className="mt-10">
        <p className="font-medium">SPOTLIGHT</p>
        <div className="mt-3">
            <Swiper
                pagination={{ type: "bullets", clickable: true, }}
                loop={true}
                modules={[Autoplay, Navigation, Pagination, A11y]}
                slidesPerView={2}
                spaceBetween={20}
                breakpoints={{
                    320: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 }
                }}
                speed={700}
                className='relative'
            >
                {spotlight.map((career) => (
                    <SwiperSlide key={career.id} className='mb-20'>
                        <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-gray-200 transition-all duration-200 ease-linear">
                            <div className="flex-1 h-40 relative">
                                <Image src="/images/placeholder-image.webp" alt="SpotLightImage" fill objectFit="cover"
                                    objectPosition="center" />
                            </div>
                            <div className="p-4">
                                <p className="mb-1">{career.title}</p>
                                <p className="text-sm text-gray-400">{career.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <SwiperButton />
            </Swiper>
        </div>


        <div className="mt-10">
            <p className="font-medium uppercase">Recent Job</p>

            <CareerItems data={data} />

        </div>


    </div>)
}