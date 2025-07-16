"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Tag, Archive, ChevronDown, RefreshCcw, LayoutList, RefreshCw, Send } from "lucide-react";
import FavouriteCampaignCard from "./ui/favourite-campaign-card";
import BoardHeader from "@/components/base/board-header";
import { data } from "@/public/data/jobs";
import TabFilter, { TabFilterType } from "@/components/base/tab-filter";
import Link from "next/link";

const campaignFilterApi: TabFilterType[] = [
  {
    label: "Applied",
    value: "applied",
    icon: Tag,
  },
  {
    label: "InProgress",
    value: "inprogress",
    icon: RefreshCw,
  },
  {
    label: "Archived",
    value: "archived",
    icon: Archive,
  },
];

export default function FavouriteComponent() {
  const [filterStatus, setFilterStatus] = useState<string>("All");
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
    <div className="rounded-lg bg-white">
      <BoardHeader title="Favourite Jobs">
        <TabFilter
          default={{ icon: LayoutList, label: "All" }}
          paths={campaignFilterApi}
          endComponent={() => (
            <Link href={"/campaign"} target="_blank">
              <Button>
                <Send size={13} color="#fff" />
                <span>Find More</span>
              </Button>
            </Link>
          )}
        />
      </BoardHeader>

      <div className="px-5 flex justify-between items-center mb-4 mt-8">
        <span className="text-sm text-neutral-600">
          Showing Results ({data.length})
        </span>
        <div className="relative">
          <Popover modal onOpenChange={() => setIsOpen(!isOpen)} open={isOpen}>
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

      {/* Job Cards: 1 col xs, 2 cols sm+ */}
      <div className="p-5 pt-0 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.slice(data.length - 2).map((job, index) => (
          <FavouriteCampaignCard job={job} key={index} />
        ))}
      </div>
    </div>
  );
}
