import { Job } from "@/types/job";
import { Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const JobCard = ({ item }: { item: Job }) => {
  return (
    <Link href={`/campaign/${item?._id}`}>
      <div className="bg-white rounded-lg p-5 border border-neutral-100">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10">
            <Image
              src="/icons/google.svg"
              width={256}
              height={256}
              loading="lazy"
              className="w-full h-full"
              alt="Brand logo"
            />
          </div>
          <div>
            <p className="text-base font-medium text-neutral-900">
              Google Inc.
            </p>
            <div className="flex items-center space-x-3">
              <p className="text-xs text-neutral-500">Software Company</p>
              <div className="w-1 h-1 rounded-full bg-neutral-500" />
              <p className="text-xs text-neutral-500 flex-1 line-clamp-1">
                New York, USA
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-lg font-semibold text-neutral-800 dark:text-primary">
            {item.title}
          </p>
          <div className="flex items-center space-x-6 mt-2">
            <div className="flex items-center space-x-2">
              <Clock size={14} color="#737373" />
              <p className="text-neutral-500 text-xs">Full time</p>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} color="#737373" />
              <p className="text-neutral-500 text-xs">On-site</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-neutral-600 text-xs leading-6 line-clamp-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              repellendus, explicabo quisquam cum temporibus rerum doloremque,
              itaque ex repudiandae veritatis reiciendis libero? Perspiciatis
              sunt magnam voluptas saepe maxime? Error, sit!
            </p>
          </div>
          <div className="flex items-center gap-3 mt-3 flex-wrap">
            <div className="px-3 py-2 rounded-md flex items-center justify-center bg-neutral-100">
              <p className="text-xs text-neutral-500">Problem Solve</p>
            </div>
            <div className="px-3 py-2 rounded-md flex items-center justify-center bg-neutral-100">
              <p className="text-xs text-neutral-500">Web Development</p>
            </div>
            <div className="px-3 py-2 rounded-md flex items-center justify-center bg-neutral-100">
              <p className="text-xs text-neutral-500">Docker</p>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-base font-semibold text-primary">
              $2000.00{" "}
              <span className="text-xs text-neutral-500 font-normal">
                /month
              </span>
            </p>

            <div className="flex items-center space-x-1">
              <p className="text-xs text-primary font-medium">23 applicants</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
