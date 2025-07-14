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

import { Clock, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Job } from "@/types/job";

const FavouriteCampaignCard = ({ job }: { job: Job }) => {
  return (
    <Link href={`/campaign/${job._id}`}>
      <div className="bg-50 p-6 rounded-lg border border-200">
        <div className="flex justify-between items-center">
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
          {job.status === "Applied" && (
            <Button variant="ghost" size="sm" disabled>
              Applied
            </Button>
          )}
          {job.status === "Published" && (
            <Button className="rounded-md" size="sm">
              Apply
            </Button>
          )}
          {job.status === "Closed" && (
            <Button variant="ghost" size="sm" disabled>
              Closed
            </Button>
          )}
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
      </div>
    </Link>
  );
};

export default FavouriteCampaignCard;
