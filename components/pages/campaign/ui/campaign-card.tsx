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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Job } from "@/types/job";
import clsx from "clsx";
import { Clipboard, Eye, MoreVertical, PenTool, UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CampaignCard = ({
  data,
  className,
}: {
  data: Job;
  className?: string;
}) => {
  return (
    <div className={clsx("p-5 bg-50 border border-200 rounded-md", className)}>
      <div className="flex items-center justify-between">
        <p className="text-base font-medium text-800">{data.title}</p>
        <Popover>
          <PopoverTrigger>
            <MoreVertical size={16} className="text-700" />
          </PopoverTrigger>
          <PopoverContent align="end" className="p-0 w-48">
            <div className="px-3 py-2.5 flex items-center justify-between">
              <span className="text-sm font-medium text-neutral-800">
                Copy Job URL
              </span>
              <Clipboard size={16} />
            </div>
            <Link
              href="/boards/384685/viewer"
              className="px-3 py-2.5 flex items-center justify-between border-t border-t-neutral-100"
              target="_blank"
            >
              <span className="text-sm font-medium text-neutral-800">
                Preview
              </span>
              <Eye size={16} />
            </Link>
            <Link
              href="/boards/384685/viewer"
              className="px-3 py-2.5 flex items-center justify-between border-t border-t-neutral-100"
              target="_blank"
            >
              <span className="text-sm font-medium text-neutral-800">Edit</span>
              <PenTool size={16} />
            </Link>
          </PopoverContent>
        </Popover>
      </div>
      <p className="text-xs text-500">{data.location}</p>

      <div className="mt-2 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <p className="text-xs font-medium text-700 capitalize">
            {data.status}
          </p>
          <div className="w-1 h-1 rounded-full bg-500" />
          <p className="text-xs font-medium text-700">{data.created_at}</p>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-1">
            <UserIcon size={12} className="text-700" />
            <p className="text-xs text-700">122</p>
          </div>
          <div className="flex items-center gap-1">
            <Eye size={12} className="text-700" />
            <p className="text-xs text-700">2323</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
