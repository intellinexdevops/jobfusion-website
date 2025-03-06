"use client"
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter()
  return (
    <section className="container" >
      <div className="flex flex-col w-full h-[300px] md:h-[480px] items-center justify-center relative mt-20">
        <h1 className="lg:text-5xl md:text-4xl text-3xl  text-center font-semibold leading-snug">
          Find Your Dream Job or Ideal <br /> Candidate
        </h1>
        <p className="text-sm mt-3 text-center text-gray-600">
          Welcome to the ultimate Job Portal App, where job seekers and
          recruiters connect seamlessly. <br />
          Explore a wide range of job opportunities and post openings
          effortlessly to find the perfect match.
        </p>
        <div className="flex flex-row gap-4 mt-5">
          <Button onClick={() => router.push("/channel/987989/dashboard")} size="lg">Get Started</Button>
          <Button variant={"outline"} size={"lg"}>
            Sign Up
          </Button>
        </div>

        {/* Canvas */}
        <div className="absolute border-b top-0 md:top-20 border-line border-dashed left-0 right-0 animate-pulse" />
        <div className="absolute border-b bottom-0 md:bottom-20 border-line border-dashed left-0 right-0 animate-pulse" />
        <div className="absolute border-r border-line top-5 -z-10 bottom-5 md:flex hidden right-40 border-dashed animate-pulse" />
        <div className="absolute border-l border-line top-5 -z-10 bottom-5 md:flex hidden  left-40 border-dashed animate-pulse" />
        <div className="absolute border-r border-line top-5 h-28 md:flex hidden -z-10 border-dashed animate-pulse" />
      </div>
      <div className="flex items-center justify-center">
        <div className="relative md:w-[900px] md:h-[400px] md:-mt-16 w-[400px] h-[200px]">
          <Image
            src="/images/dashboard.png"
            fill
            alt="Image on dashboard"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
      </div>
    </section>
  );
}
