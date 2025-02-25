import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function AboutUs() {
  return (
    <div className="container mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center md:pe-10">
          <p className="font-medium">Who we are?</p>
          <h1 className="font-semibold text-3xl my-3">
            Medium length section <br /> heading goes here
          </h1>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.{" "}
          </p>
          <div className="flex mt-5">
            <Button>Get In Touch</Button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 md:mt-0">
          <div className="relative w-[400px] h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/placeholder-image.webp"
              alt="about"
              fill
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
