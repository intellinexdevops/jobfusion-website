// Copyright 2025 wolf
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { ClipboardCheck, Clock, MapPin, MoreVertical, Share2, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Job } from "@/types/job";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const FavouriteCampaignCard = ({ job }: { job: Job }) => {
  return (
    <div className="bg-50 p-6 rounded-lg border border-200 relative">
      {/* Popover Outside of Link to prevent click bubbling */}
      <div className="absolute top-4 right-4 z-10">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="link" size="icon" className="text-neutral-600">
              <MoreVertical size={14} />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="p-0 overflow-hidden"
            align="end"
            onClick={(e) => e.stopPropagation()} // stop click bubbling
          >
            <ul className="text-sm text-neutral-700">
              <Link
                href="/3492/apply"
                className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2"
                onClick={(e) => e.stopPropagation()} // also stop here
              >
                <ClipboardCheck size={16} /> Apply Now
              </Link>
              <Link
                href={"/903/share-campaign"}
                className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <Share2 size={16} /> Share
              </Link>
              <li
                className="px-4 py-2 text-error hover:bg-gray-50 cursor-pointer flex items-center gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <Trash2 size={16} /> Remove
              </li>
            </ul>
          </PopoverContent>
        </Popover>
      </div>

      {/* Wrapping the content with Link */}
      <Link href={`/campaign/${job._id}`} className="block">
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
            <p className="text-base font-medium text-900">Google Inc.</p>
            <div className="flex items-center space-x-3">
              <p className="text-xs text-500">Software Company</p>
              <div className="w-1 h-1 rounded-full bg-neutral-500" />
              <p className="text-xs text-500 flex-1 line-clamp-1">
                New York, USA
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-lg font-semibold text-neutral-800 dark:text-primary">
            {job.title}
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
        </div>
      </Link>
    </div>
  );
};

export default FavouriteCampaignCard;

