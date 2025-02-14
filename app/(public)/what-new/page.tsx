"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

export default function WhatNew() {
  function onClick() {
    alert("Hello World");
  }

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  console.log(date);

  return (
    <div className="h-[700px] flex items-center justify-centert">
      Hello World
      <div className="relative md:w-[900px] md:h-[400px] md:-mt-16 w-[400px] h-[200px]">
        {/* <Image
          src="/images/dashboard.png"
          fill
          alt="Image on dashboard"
          objectFit="cover"
          objectPosition="top"
        /> */}
      </div>
      <Button onClick={() => onClick()} variant="outline">
        Click
      </Button>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      />
    </div>
  );
}
