"use client";
import React from "react";
// import { Button } from "../ui/button";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import SkewedBackground from "../../skewed-background";
import { Briefcase, Building2, ChevronDown, Search } from "lucide-react";
import AppleDownload from "@/public/icons/AppleDownload";
import AndroidDownload from "@/public/icons/AndroidDownload";

export default function Hero() {
  // const router = useRouter()
  return (
    <section className="relative">
      <SkewedBackground />
      <div className="md:h-[480px] flex flex-col justify-center container mx-auto max-w-7xl z-30">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center pt-14 container mx-auto">
          <div className="md:mt-0 mt-10">
            <h1 className="text-text font-bold lg:text-4xl text-4xl md:text-2xl">
              The <span className="text-primary">Easiest Way</span>
              <br />
              to Get Your New Job
            </h1>
            <p className="text-text font-normal lg:text-sm text-sm md:text-xs mt-3">
              Welcome to the ultimate Job Portal App, where job seekers and
              recruiters connect seamlessly. Explore a wide range of job
              opportunities and post openings effortlessly to find the perfect
              match.
            </p>

            <div className="flex mt-5">
              <div className="bg-white h-14 items-center rounded-md grid grid-cols-3">
                <div className="flex items-center gap-2 border-r border-neutral-100 justify-center px-5">
                  <div>
                    <Briefcase
                      size={14}
                      strokeWidth={1.4}
                      className="text-neutral-500"
                    />
                  </div>
                  <input
                    type="text"
                    className="text-sm text-neutral-500 outline-none w-full"
                    placeholder="Position"
                  />
                  <ChevronDown size={18} className="text-neutral-500" />
                </div>
                <div className="flex items-center gap-2 px-5">
                  <div>
                    <Building2
                      size={14}
                      strokeWidth={1.4}
                      className="text-neutral-500"
                    />
                  </div>
                  <input
                    type="text"
                    className="text-sm text-neutral-500 outline-none w-full"
                    placeholder="Location"
                  />
                  <ChevronDown size={18} className="text-neutral-500" />
                </div>
                <div className="ps-5 pe-2">
                  <button className="btn-inx w-full h-11 flex items-center justify-center gap-2">
                    <Search size={16} />
                    <span className="text-sm">Search</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-4">
              <AppleDownload />
              <AndroidDownload />
            </div>
          </div>
          <div className="relative lg:h-[360px] h-[300px] md:mt-0 mt-10">
            <Image src="../../images/hero.svg" fill alt="Hero" />
          </div>
        </div>
      </div>
      {/* <div className="bg-[#C5FFE4] w-[700px] rounded-3xl rotate-[60deg] h-[400px] absolute -top-96 -right-52 -z-10" /> */}
      {/* <div className="bg-[#D8FFED] w-[750px] rounded-3xl rotate-[60deg] h-[500px] absolute -top-96 -right-60 -z-20" /> */}
    </section>
  );
}
