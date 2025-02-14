import Image from "next/image";
import React from "react";

export default function MediaCard({ data }: { data: any }) {
  return (
    <div className="border rounded-2xl bg-white">
      <div className="h-[300px] relative">
        <Image
          src="/images/placeholder-image.webp"
          alt="image"
          fill
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <p>{data?.category}</p>
      <p>{data?.title}</p>
      <p>{data?.description}</p>
    </div>
  );
}
