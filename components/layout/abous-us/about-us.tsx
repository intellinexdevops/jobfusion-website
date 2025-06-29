import Image from "next/image";
import React from "react";
import { Button } from "../../ui/button";

export default function AboutUs() {
  return (
    <div className="container my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        {/* TEXT ON LEFT */}
        <div className="text-center md:text-left">
          <h2 className="font-bold text-2xl mb-2">What We Offer</h2>
          <p className="text-gray-600 mb-4">
            We are a digital job marketplace designed to connect top talent with
            great companies. Whether you’re seeking a new opportunity or hiring
            the best, we make the process efficient, smart, and human.
          </p>
          <div className="flex mt-5 md:justify-start justify-center">
            <Button>Get In Touch</Button>
          </div>
        </div>
        {/* IMAGE ON RIGHT */}
        <div className="flex justify-center">
          <div className="relative w-[400px] h-[220px] md:w-[400px] md:h-[280px] rounded-xl overflow-hidden bg-gray-200">
            <Image
              src="/images/placeholder-image.webp"
              alt="about"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
