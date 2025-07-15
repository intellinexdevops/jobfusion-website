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

import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ChevronsDownUp, Link2, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AccountSidebar = () => {
  return (
    <Popover>
      <PopoverTrigger className="w-full">
        <div className="bg-white rounded-lg py-4 px-5 gap-x-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden">
              <Image src="/images/placeholder-image.webp" fill alt="Logo" />
            </div>
            <div>
              <p className="text-sm text-neutral-600 font-semibold">
                Chenter PHAI
              </p>
              <Link
                href="/"
                className="text-xs text-primary flex items-center gap-2"
              >
                <span className="line-clamp-1 text-left">Share profile</span>
                <Link2 size={12} />
              </Link>
            </div>
          </div>
          <ChevronsDownUp size={15} className="text-neutral-700" />
        </div>
      </PopoverTrigger>
      <PopoverContent align="start" className="p-0 w-full">
        <Link href="#">
          <div className="p-3 hover:bg-neutral-100 flex items-center gap-2">
            <Image src="/icons/google.svg" alt="Logo" width={16} height={16} />
            <span className="text-sm leading-none text-neutral-700 font-medium">
              Google Inc.
            </span>
          </div>
        </Link>
        <Link href="#">
          <div className="flex items-center gap-2 p-3 border-t border-t-neutral-100 hover:bg-neutral-50 transition-all duration-200 ease-linear">
            <Plus size={14} />
            <span className="text-xs">Create new Organization</span>
          </div>
        </Link>
      </PopoverContent>
    </Popover>
  );
};

export default AccountSidebar;
