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
import BoardHeader from "@/components/base/board-header";
import TabFilter, { TabFilterType } from "@/components/base/tab-filter";
import { Button } from "@/components/ui/button";
import {
  Archive,
  Ban,
  ChevronDown,
  EarthIcon,
  Folder,
  LayoutList,
  Send,
} from "lucide-react";
import React from "react";
import CampaignList from "./ui/campaign-list";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { data } from "@/public/data/jobs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const campaignFilterApi: TabFilterType[] = [
  {
    label: "Live",
    value: "live",
    icon: EarthIcon,
  },
  {
    label: "Closed",
    value: "closed",
    icon: Ban,
  },
  {
    label: "Draft",
    value: "draft",
    icon: Folder,
  },
  {
    label: "Archived",
    value: "archived",
    icon: Archive,
  },
];

const CampaignManagement = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [sort, setSort] = React.useState<{ name: string; value: string }>({
    name: "Most Recent",
    value: "most-recent",
  });
  const sorts = [
    {
      name: "Most Recent",
      value: "most-recent",
    },
    {
      name: "Most Popular",
      value: "most-popular",
    },
    {
      name: "Highest Salary 🤩",
      value: "highest-salary",
    },
    {
      name: "Lowest Salary",
      value: "lowest-salary",
    },
  ];
  const handleOnChangeSort = (sort: { name: string; value: string }) => {
    setIsOpen(false);
    setSort(sort);
  };
  return (
    <div className="bg-bg">
      <div className="bg-white rounded-lg">
        <BoardHeader title="Jobs">
          <TabFilter
            default={{ icon: LayoutList, label: "All" }}
            paths={campaignFilterApi}
            endComponent={() => (
              <Button>
                <Send size={13} color="#fff" />
                <span>Post Job</span>
              </Button>
            )}
          />
        </BoardHeader>
        <div className="pb-10">
          <div className="flex justify-between items-center px-5 mt-4">
            <span className="text-sm text-neutral-600">
              Showing Results ({data.length})
            </span>
            <div className="relative">
              <Popover
                modal
                onOpenChange={() => setIsOpen(!isOpen)}
                open={isOpen}
              >
                <PopoverTrigger asChild onClick={() => setIsOpen(true)}>
                  <div className="dark:border-gray-800 text-xs flex flex-row px-3 border border-gray-200 items-center rounded py-2 gap-2">
                    <p className="text-neutral-400">Sort by: </p>
                    <span className="text-neutral-500">{sort.name}</span>
                    <ChevronDown size={12} className="text-neutral-400" />
                  </div>
                </PopoverTrigger>
                <PopoverContent align="end" className="p-0 py-1">
                  {sorts.map((item, index) => (
                    <div
                      key={index}
                      className="cursor-pointer hover:bg-gray-100 px-3 rounded transition-all py-2 text-xs duration-150 ease-linear"
                      onClick={() => handleOnChangeSort(item)}
                    >
                      {item.name}
                    </div>
                  ))}
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <CampaignList />
          <Pagination className="mt-4">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default CampaignManagement;
