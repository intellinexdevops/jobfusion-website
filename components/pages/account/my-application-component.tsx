"use client";

import React, { useState, useRef, useEffect } from "react";
import BoardHeader from "@/components/base/board-header";
import { Button } from "@/components/ui/button";
import { Archive, RefreshCcw, Tag, ChevronDown } from "lucide-react";
import CampaignCard from "./ui/campaign-card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export interface CampaignType {
  id: number;
  company: string;
  logo: string;
  category: string;
  location: string;
  title: string;
  type: string;
  mode: string;
  description: string;
  tags: string[];
  salary: string;
  status: string;
}

// Sample data arrays
const jobApplications: CampaignType[] = [
  {
    id: 1,
    company: "Google Inc.",
    logo: "/icons/google_logo.svg",
    category: "Technology",
    location: "New York, USA",
    title: "Product Manager",
    type: "Full time",
    mode: "On-site",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae.",
    tags: ["Management", "Sales", "Marketing"],
    salary: "$2000/month",
    status: "Applied",
  },
  {
    id: 2,
    company: "Google Inc.",
    logo: "/icons/google_logo.svg",
    category: "Technology",
    location: "New York, USA",
    title: "Product Manager",
    type: "Full time",
    mode: "On-site",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae.",
    tags: ["Management", "Sales", "Marketing"],
    salary: "$2000/month",
    status: "Applied",
  },
  {
    id: 3,
    company: "Google Inc.",
    logo: "/icons/google_logo.svg",
    category: "Technology",
    location: "New York, USA",
    title: "Product Manager",
    type: "Full time",
    mode: "On-site",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur adipiscing elit quisque faucibus ex sapien vitae.",
    tags: ["Management", "Sales", "Marketing"],
    salary: "$2000/month",
    status: "Applied",
  },
];

type filterStatus = "All" | "Applied" | "In Progress" | "Archived";

export default function MyApplicationComponent() {
  const [filterStatus, setFilterStatus] = useState<filterStatus>("All");
  const [activeMenu, setActiveMenu] = useState<"sort" | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close sort menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
    <div className="p-5 bg-white rounded-lg">
      <BoardHeader title="Applications">
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mt-8 mb-4">
        <div className="text-sm text-neutral-600">
          Showing Results ({jobApplications.length})
        </div>
        <div className="flex justify-end relative lg:col-span-2">
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
          {activeMenu === "sort" && (
            <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-md z-10">
              {sorts.map((item) => (
                <div
                  key={item.value}
                  className="cursor-pointer hover:bg-gray-100 px-3 rounded py-2 text-xs"
                  onClick={() => handleOnChangeSort(item)}
                >
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Grid: 1 col on xs, 2 cols from sm */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {jobApplications.map((job: CampaignType, index: number) => (
          <CampaignCard job={job} key={index} />
        ))}
      </div>
    </div>
  );
}
