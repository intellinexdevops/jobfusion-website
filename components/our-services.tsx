import Image from "next/image";
import React from "react";

export default function OurSevices() {
  return (
    <div className="container my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-y-6 gap-x-20">
        {/* TEXT ON LEFT */}
        <div className="text-center md:text-left">
          <h2 className="font-bold text-3xl text-neutral-700 mb-2">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 mb-4">
            We are a digital job marketplace designed to connect top talent with
            great companies. Whether you&apos;re seeking a new opportunity or
            hiring the best, we make the process efficient, smart, and human.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative h-[320px] flex-1 border-4 border-white rounded-xl overflow-hidden bg-gray-200">
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
