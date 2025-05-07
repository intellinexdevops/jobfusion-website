"use client"
import React from "react";
// import { Button } from "../ui/button";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import SkewedBackground from "./skewed-background";


export default function Hero() {
  // const router = useRouter()
  return (
    <section className="">
      <SkewedBackground />
      <div className="h-[300px] md:h-[480px] absolute top-0 left-0 right-0 flex flex-col justify-center container">
        <div className="grid grid-cols-2 items-center">
          <div>
            <h1 className="text-text font-bold text-4xl">The <span className="text-primary">Easiest Way</span>
              <br />to Get Your New Job</h1>
            <p className="text-text font-normal text-sm mt-3">
              Welcome to the ultimate Job Portal App, where job seekers and recruiters connect seamlessly. Explore a wide range of job opportunities and post openings effortlessly to find the perfect match.
            </p>
          </div>
          <div className="relative h-[300px]">
            <Image
              src="../../images/hero.svg"
              fill
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
