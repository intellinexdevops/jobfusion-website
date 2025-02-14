import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function MediaCard({ data }: { data: any }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/what-new/details/123")}
      className="border rounded-2xl overflow-hidden bg-footer hover:shadow-lg cursor-pointer transition-all duration-300 ease-linear"
    >
      <div className="h-[230px] relative">
        <Image
          src="/images/placeholder-image.webp"
          alt="image"
          fill
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="p-4">
        <p className="mb-3 ">{data?.category}</p>
        <p className="my-2 font-medium text-lg line-clamp-2">{data?.title}</p>
        <p className="mb-3 text-gray-500 line-clamp-2">{data?.description}</p>
        <div className="flex flex-row gap-2 items-center">
          <p className="rounded-full border w-10 h-10 ">{data?.image}</p>
          <div>
            <p className="text-sm font-medium">Author</p>
            <p className="text-xs font-light">23 Apr 2024 - 5:00 am </p>
          </div>
        </div>
      </div>
    </div>
  );
}
