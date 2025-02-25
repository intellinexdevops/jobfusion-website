
import React from "react";
import ClientCard from "./ClientCard";

export default function OurClient() {
  const services = [
    {
      fullname: "Jonh Wick",
      jobname: "Managed IT",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      fullname: "Daniel Carter",
      jobname: "Project Manager",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      fullname: "Emma Thompson",
      jobname: "Data Analyst",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      fullname: "Michael Johnson",
      jobname: "IT Consultant",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      fullname: "Olivia Martinez",
      jobname: "Cybersecurity Specialist",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      fullname: "William Anderson",
      jobname: "UI/UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      fullname: "Ava Robinson",
      jobname: "Cloud Architect",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      fullname: "James Wilson",
      jobname: "Network Administrator",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];
  return (
    <div className="container mt-20">
      <div className="flex flex-col items-center">
        <p className="font-semibold text-3xl my-3">Our Client</p>
        <p>Lorem insum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 my-20 gap-10 ">
        {services.map((item, idx) => (
          <ClientCard item={item} key={idx} />
          
        ))}

      </div>
    </div>
  );
}
