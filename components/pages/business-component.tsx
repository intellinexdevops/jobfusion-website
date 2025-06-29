import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const BusinessComponent = () => {
  return (
    <div className="container mx-auto my-16">
      {/* Hero Section */}
      <div className="w-full rounded-2xl bg-gradient-to-r from-primary/30 to-primary/50 flex flex-col md:flex-row items-center md:items-start px-16 py-28 mb-16">
        <div className="flex-1">
          <h1 className="text-4xl leading-10 font-bold mb-4 text-gray-900">
            Join thousands of professionals finding better careers.
          </h1>
          <p className="mb-6 text-gray-700">
            Join thousands of professionals finding better careers.
          </p>
          <Button size="lg">Join us Now</Button>
        </div>
        <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src="https://scontent.fbkk36-1.fna.fbcdn.net/v/t39.30808-6/500230857_713133934700185_2066800212445173440_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeExba7PJ2fCLD5vrlSy9xHo7zTrJGUrMD7vNOskZSswPsOOOOGUFg3FBXX8P6_-jLBRj7ZbxC7IE2g4hnR9skKp&_nc_ohc=zFhGaBe621wQ7kNvwFMqD3q&_nc_oc=AdlU8UHPBIWtEgPqbjTC5i2ZQvxyZtl3PE57XkYKSZHGWxaK037Gs9S00P4uvqq_hos&_nc_zt=23&_nc_ht=scontent.fbkk36-1.fna&_nc_gid=bLj8fzQ5tjSQBpGCjXYPHg&oh=00_AfPtkfPeo1S6gfk87UXddFrcyG650KtMQHjZ9cktnbWtnQ&oe=6866E30E"
            alt="Professional"
            className="w-72 h-80 object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Waitlist Section */}
      <div className="w-full flex flex-col items-center mb-6">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-8 text-center">
          Join business waitlist
        </h2>
        <div className="flex flex-col md:flex-row w-full gap-12 max-w-5xl">
          {/* Left Text Block */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-2 text-gray-900">
              Join thousands of professionals finding better careers.
            </h3>
            <p className="text-gray-600">
              Join thousands of professionals discovering better jobs, higher
              pay, and more fulfilling work. Get expert tools, career insights,
              and access to top opportunities — all in one place. Your next move
              starts here.
            </p>
          </div>
          {/* Waitlist Form */}
          <form className="flex-1 bg-white p-8 rounded-xl flex flex-col gap-4 min-w-[320px]">
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
