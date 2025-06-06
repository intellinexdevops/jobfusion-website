import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
export default function OurSevices() {
  const services = [
    {
      title: "Managed IT",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, repellendus.",
    },
    {
      title: "Cloud Solutions",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, repellendus.",
    },
    {
      title: "Cybersecurity Services",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, repellendus.",
    },
    {
      title: "IT Consulting",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, repellendus.",
    },
    {
      title: "Web and App",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, repellendus.",
    },

  ];

  return (
    <div className="container mt-20">
      <div className="flex flex-col items-center">
        <p className="font-semibold text-3xl my-3">Our Services</p>
        <p>Lorem insum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-10">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((item, idx) => (
              <div className="flex flex-col " key={idx}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 49 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M41.6048 14.2338L41.3248 13.7338C40.9636 13.1292 40.4542 12.6266 39.8448 12.2738L26.4248 4.53377C25.8172 4.18127 25.1274 3.99501 24.4248 3.99377H23.8448C23.1422 3.99501 22.4524 4.18127 21.8448 4.53377L8.42484 12.2938C7.81878 12.6443 7.31536 13.1477 6.96484 13.7538L6.68484 14.2538C6.33234 14.8615 6.14608 15.5513 6.14484 16.2538V31.7538C6.14608 32.4564 6.33234 33.1462 6.68484 33.7538L6.96484 34.2538C7.32442 34.8528 7.82582 35.3542 8.42484 35.7138L21.8648 43.4538C22.4694 43.8136 23.1612 44.0004 23.8648 43.9938H24.4248C25.1274 43.9926 25.8172 43.8064 26.4248 43.4538L39.8448 35.6938C40.4568 35.3512 40.9622 34.8458 41.3048 34.2338L41.6048 33.7338C41.953 33.1244 42.139 32.4358 42.1448 31.7338V16.2338C42.1436 15.5313 41.9574 14.8415 41.6048 14.2338ZM23.8448 7.99377H24.4248L36.1448 14.7538L24.1448 21.6738L12.1448 14.7538L23.8448 7.99377ZM26.1448 38.9938L37.8448 32.2338L38.1448 31.7338V18.2138L26.1448 25.1538V38.9938Z"
                    fill="black"
                  />
                </svg>
                <p className="text-lg font-semibold my-3">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          <Button className="mt-10">Contact Us</Button>
        </div>
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
  );
}
