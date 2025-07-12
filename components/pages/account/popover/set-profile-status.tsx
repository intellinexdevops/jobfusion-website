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
import Image from "next/image";

export default function SetProfileStatusPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <span className="text-sm font-medium text-primary cursor-pointer">
          Set a status
        </span>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-52 border p-0 bg-white border-neutral-100"
      >
        <div className="px-3 py-2.5 flex items-center justify-between">
          <span className="text-sm font-medium text-neutral-800">Seeking</span>
          <Image
            src="/icons/eye-outline.svg"
            alt="Copy Icons"
            width={16}
            height={16}
          />
        </div>
        <div className="px-3 py-2.5 flex items-center justify-between border-t border-t-neutral-100">
          <span className="text-sm font-medium text-neutral-800">Hiring</span>
          <Image
            src="/icons/hiring.svg"
            alt="Copy Icons"
            width={16}
            height={16}
          />
        </div>
        <div className="px-3 py-2.5 flex items-center justify-between border-t  border-t-neutral-100">
          <span className="text-sm font-medium text-neutral-800">
            Unavailable
          </span>
          <Image
            src="/icons/unavailable.svg"
            alt="Copy Icons"
            width={16}
            height={16}
          />
        </div>
        <div className="px-3 py-2.5 flex items-center justify-between border-t  border-t-neutral-100">
          <span className="text-sm font-medium text-neutral-800">None</span>
        </div>
      </PopoverContent>
    </Popover>
  );
}
