"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

// ServiceCard component
function ServiceCard({ title, description, icon, onClick }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center w-full max-w-xs">
      <div className=" p-4 rounded-full mb-4">
        <Image src={icon} alt={title} width={50} height={50} />
      </div>
      <h3 className="font-bold text-lg text-blue-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-6 text-center">{description}</p>
      <Button onClick={onClick}>Explore more</Button>
    </div>
  );
}

function ExploreComponent() {
  return (
    <div className="container mx-auto mt-20 mb-16">
      {/* Hero Section */}
      <div className="w-full rounded-2xl bg-gradient-to-r from-primary/20 to-primary/50 flex flex-col md:flex-row items-center md:items-start px-16 mb-16 pt-16">
        <div className="flex-1">
          <h1 className="text-4xl leading-10 font-bold mb-4 text-neutral-800">
            Exploring our services which help your work!
          </h1>
          <p className="mb-6 text-gray-700">
            Join thousands of professionals finding better careers.
          </p>
          <Button size="lg">Become a member</Button>
        </div>
        <div className="flex-1 flex justify-center md:justify-end mt-8 max-h-96 overflow-hidden md:mt-0">
          <Image
            src="/images/p1.png"
            alt="Professional"
            className="h-[540px] object-cover rounded-xl"
            width={512}
            height={512}
            loading="lazy"
          />
        </div>
      </div>

      {/* Most People Visit Section */}
      <div className="w-full flex flex-col items-center mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 text-center">
          Most People Visit
        </h2>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
        {[1, 2, 3, 4].map((i) => (
          <ServiceCard
            key={i}
            title="Resume Builder"
            description="Build your resume in a minute with our AI service."
            icon="/images/placeholder_image.png" // Make sure this icon exists in /public/images/
            onClick={() => alert("Explore more clicked!")}
          />
        ))}
      </div>
    </div>
  );
}

export default ExploreComponent;
