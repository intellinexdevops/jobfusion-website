"use client";
import React from "react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardTeam from "./card-team";
import SwiperButton from "./ui/swiper-button";

export default function OurTeam() {
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
    },
  ];

  return (
    <div className="container mt-20" id="vision" >
      <div className="flex flex-col items-center ">
        <p className="font-semibold text-3xl my-3">Our team</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="my-20" >
        <Swiper
          pagination={{ type: "bullets", clickable: true }}
          autoplay={true}
          loop={true}
          modules={[Autoplay, Navigation, Pagination, A11y]}
          slidesPerView={2}
          spaceBetween={50}
          breakpoints={{
            320: { slidesPerView: 1 },
            680: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
          }}
          speed={700}
          className="relative"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="">
              <CardTeam data={testimonial} />
            </SwiperSlide>
          ))}
          <SwiperButton />
        </Swiper>
      </div>
    </div>
  );
}
