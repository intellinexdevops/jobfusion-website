import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";

const BusinessComponent = () => {
  return (
    <div className="container mx-auto mt-20 mb-16">
      {/* Hero Section */}
      <div className="w-full rounded-2xl bg-gradient-to-r from-primary/20 to-primary/50 flex flex-col md:flex-row items-center md:items-start px-16 mb-16 pt-16">
        <div className="flex-1">
          <h1 className="text-4xl leading-10 font-bold mb-4 text-neutral-800">
            Join thousands of professionals finding better careers.
          </h1>
          <p className="mb-6 text-gray-700">
            Join thousands of professionals finding better careers.
          </p>
          <Button size="lg">Join us Now</Button>
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

      {/* Waitlist Section */}
      <div className="w-full flex flex-col items-center mb-6">
        <div className="mb-10">
          <h2 className="text-xl md:text-2xl font-semibold text-neutral-800 text-center">
            Join business waitlist
          </h2>
          <div className="w-20 h-1 bg-primary mt-2 mx-auto" />
        </div>
        <div className="flex flex-col md:flex-row w-full gap-12 max-w-5xl mt-10">
          <div className="flex-1">
            <h3 className="text-3xl lg:text-4xl font-bold mb-2 text-neutral-900">
              Join thousands of professionals finding better careers.
            </h3>
            <p className="text-gray-600">
              Join thousands of professionals discovering better jobs, higher
              pay, and more fulfilling work. Get expert tools, career insights,
              and access to top opportunities — all in one place. Your next move
              starts here.
            </p>
          </div>
          <form className="flex-1 px-8 rounded-xl flex flex-col gap-4 min-w-[320px]">
            <Input type="text" placeholder="Business name *" required />
            <Input type="text" placeholder="Industry *" required />
            <Input type="text" placeholder="Register Number *" required />
            <Input type="text" placeholder="TAX ID *" required />
            <Button size="lg">Join business waitlist</Button>
            <span className="text-xs text-gray-500 mt-2 text-left">
              To create a free personal JobFusion profile.{" "}
              <a href="#" className="text-green-500 underline">
                Click here
              </a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessComponent;
