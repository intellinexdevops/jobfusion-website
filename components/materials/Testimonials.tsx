"use client";
import React from 'react'
import TestimonialCard from './textimonial-card'
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperButton from '../ui/swiper-button';

export default function Testimonials() {

    const testimonials = [
        {
            id: 1,
            name: "Alice Johnson",
            position: "HR Manager, TechCorp",
            review: "Finding the right candidates has never been easier!",
            image: "/avatar1.png", // Replace with actual image path
            company: "Webflow",
        },
        {
            id: 2,
            name: "Mark Smith",
            position: "CEO, StartUpX",
            review: "The Job Portal App helped us find top talent quickly!",
            image: "/avatar2.png",
            company: "Webflow",
        },
        {
            id: 3,
            name: "Emily Davis",
            position: "Software Engineer, MyCompany",
            review: "The Job Portal App has made our job search process easier!",
            image: "/avatar3.png",
            company: "Webflow",
        },
        {
            id: 4,
            name: "Jane Brown",
            position: "Product Manager, MyCompany",
            review: "The Job Portal App has helped us expand our team!",
            image: "/avatar4.png",
            company: "Webflow",
        }
    ];

    return (
        <section className='container py-24'>
            <p className='text-center font-medium'>Testimonials</p>
            <p className='text-center text-3xl font-semibold mt-3'>Customer&apos;s Testimonials</p>
            <div className="mt-20 mb-10">
                <Swiper
                    pagination={{ type: "bullets", clickable: true, }}
                    autoplay={true}
                    loop={true}
                    modules={[Autoplay, Navigation, Pagination, A11y]}
                    slidesPerView={2}
                    spaceBetween={1}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                    }}
                    speed={700}
                    className='relative'
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id} className='mb-20' >
                            <TestimonialCard data={testimonial} />
                        </SwiperSlide>
                    ))}
                    <SwiperButton />
                </Swiper>
            </div>
        </section>
    )
}
