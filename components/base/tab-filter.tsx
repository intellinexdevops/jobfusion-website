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
"use client";

import { LayoutGridIcon, LucideIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export type TabFilterType = {
  label: string;
  value?: string;
  icon?: LucideIcon;
};

interface TabFilterProps {
  paths: TabFilterType[];
  default?: TabFilterType;
  endComponent?: () => React.ReactNode;
}

const TabFilter = ({ paths, default: path, endComponent }: TabFilterProps) => {
  const searchParams = useSearchParams();
  return (
    <div className="flex items-center border-b border-t border-b-100 border-t-100 py-2 px-5 justify-between">
      <div className="lg:hidden">
        <Popover>
          <PopoverTrigger className="flex items-center gap-1">
            <LayoutGridIcon size={13} className="text-neutral-600" />
            <span className="text-sm text-neutral-600 font-medium">Filter</span>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            className="p-0 overflow-hidden border shadow-none"
          >
            <Link
              className={`text-xs py-1.5 px-3 flex items-center gap-2 ${
                !searchParams.get("status") ||
                searchParams?.get("status") === "all"
                  ? "bg-primary/15 text-primary font-medium"
                  : "bg-transparent text-neutral-600"
              }`}
              href={`?status=all`}
            >
              {path?.icon && <path.icon size={13} />}
              {path ? path.label : "All"}
            </Link>
            {paths.map(({ label, value, icon: Icon }) => (
              <Link
                key={value}
                href={`?status=${value}`}
                className={`text-xs py-1.5 border-t border-t-200 px-3 flex items-center gap-2 ${
                  searchParams?.get("status") === value
                    ? "bg-primary/15 text-primary font-medium"
                    : "bg-transparent text-neutral-600"
                }`}
              >
                {Icon && <Icon size={13} />}
                {label}
              </Link>
            ))}
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex items-center gap-x-4 max-lg:hidden">
        <Link
          className={`text-xs rounded py-1.5 px-3 flex items-center gap-2 ${
            !searchParams.get("status") || searchParams?.get("status") === "all"
              ? "bg-primary/15 text-primary font-medium"
              : "bg-transparent text-neutral-600"
          }`}
          href={`?status=all`}
        >
          {path?.icon && <path.icon size={13} />}
          {path ? path.label : "All"}
        </Link>

        {paths.map(({ label, value, icon: Icon }) => (
          <Link
            key={value}
            href={`?status=${value}`}
            className={`text-xs py-1.5 rounded px-3 flex items-center gap-2 ${
              searchParams?.get("status") === value
                ? "bg-primary/15 text-primary font-medium"
                : "bg-transparent text-neutral-600"
            }`}
          >
            {Icon && <Icon size={13} />}
            {label}
          </Link>
        ))}
      </div>
      {endComponent && endComponent()}
    </div>
  );
};

export default TabFilter;
