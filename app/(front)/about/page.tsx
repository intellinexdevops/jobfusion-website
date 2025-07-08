import AboutUs from "@/components/com/abous-us/about-us";
import OurTeam from "@/components/our-team";
import OurSevices from "@/components/our-services";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import BreadcrumbCom from "@/components/breadcrumb-com";
export default function AboutPage() {
  return (
    <div className="">
      <div className="flex flex-col bg-gradient-to-r from-primary/25 via-primary/10 to-primary/25 py-10">
        <div className="container grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col flex-1 justify-center py-16 lg:py-0">
            <h1 className="md:text-3xl text-2xl font-bold">
              Your Bridge to Better Careers <br />
              and Smarter Hiring
            </h1>
            <p className="text-sm mt-4">
              Connecting great talent with great opportunities—whether
              you&apos;re hiring or job hunting, we make it simple.
            </p>
            <div className="flex mt-4">
              <Button className="rounded-full bg-transparent text-neutral-900 border border-primary hover:text-white">
                Become a Recruiter
              </Button>
            </div>
          </div>
          <div className="lg:flex hidden flex-1 items-center justify-center">
            <div className="rounded-full bg-primary/5 p-10 flex items-center justify-center animate-pulse">
              <div className="rounded-full bg-primary/10 p-10 flex items-center justify-center relative">
                <div className="rounded-full bg-primary/10 p-10 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <Image
                      src={"/icons/briefcase.svg"}
                      width={24}
                      height={24}
                      alt="Briefcase"
                    />
                  </div>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center absolute bottom-6 right-6">
                    <Image
                      src={"/icons/document.svg"}
                      width={24}
                      height={24}
                      alt="Briefcase"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BreadcrumbCom />
      <AboutUs />
      <OurTeam />
      <OurSevices />
    </div>
  );
}
