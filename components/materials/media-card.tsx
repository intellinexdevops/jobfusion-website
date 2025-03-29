import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function MediaCard({ data }: { data: { title: string; category: string; description: string; } }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/what-new/details/123")}
      className="border border-gray-100 rounded-xl overflow-hidden bg-footer hover:shadow-lg cursor-pointer transition-all duration-300 ease-linear"
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
        <div className="flex mb-2">
          <div className="bg-primary/10 px-3 rounded-sm py-1 text-primary" >
            <p className="text-xs">{data?.category}</p>
          </div>
        </div>
        <div>
          <p className="text-[10px] text-gray-500 font-medium">23 Apr 2024 - 5:00 am </p>
        </div>
        <p className="my-2 font-semibold text-gray-70 dark:text-gray-100 line-clamp-2">{data?.title}</p>
        <p className="mb-3 text-xs text-gray-500 line-clamp-2 dark:text-gray-300">{data?.description}</p>
        <div className="flex flex-row gap-2 items-center">
          <div className="rounded-full border w-6 h-6"></div>
          <p className="text-xs text-gray-700 dark:text-gray-300 font-medium">Author</p>
        </div>
      </div>
    </div>
  );
}
