import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <div className="container mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-x-20 gap-y-6">
        {/* TEXT ON LEFT */}
        <div className="text-center md:text-left">
          <h2 className="font-bold text-3xl mb-2 text-neutral-700">
            Who We Are
          </h2>
          <p className="text-gray-600 mb-4">
            We are a digital job marketplace designed to connect top talent with
            great companies. Whether you&apos;re seeking a new opportunity or
            hiring the best, we make the process efficient, smart, and human.
          </p>
        </div>
        {/* IMAGE ON RIGHT */}
        <div className="flex justify-center">
          <div className="relative h-[320px] border-4 border-white flex-1 rounded-xl overflow-hidden bg-gray-200">
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
