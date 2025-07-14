"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Tag, Archive, ChevronDown, RefreshCcw } from "lucide-react";
import FavouriteCampaignCard from "./ui/favourite-campaign-card";
import BoardHeader from "@/components/base/board-header";
import { data } from "@/public/data/jobs";

type filterStatus = "All" | "Applied" | "In Progress" | "Archived";

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
    <div className="p-5 rounded-lg bg-white">
      <BoardHeader title="Favourite Jobs">
        <div className="flex items-center gap-3 mt-5">
          {["All", "Applied", "In Progress", "Archived"].map((status) => (
            <Button
              key={status}
              variant={filterStatus === status ? "default" : "outline"}
              className="rounded-full flex items-center gap-1"
              onClick={() => setFilterStatus(status as filterStatus)}
            >
              {status === "Applied" && <Tag size={14} />}
              {status === "In Progress" && <RefreshCcw size={14} />}
              {status === "Archived" && <Archive size={14} />}
              {status}
            </Button>
          ))}
        </div>
      </BoardHeader>

      <div className="flex justify-between items-center mb-4 mt-8">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {data.slice(data.length - 2).map((job, index) => (
          <FavouriteCampaignCard job={job} key={index} />
        ))}
      </div>
    </div>
  );
}
