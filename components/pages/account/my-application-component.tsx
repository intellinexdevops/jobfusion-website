"use client";

import React, { useState, useRef, useEffect } from "react";
import BoardHeader from "@/components/base/board-header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Archive,
  RefreshCcw,
  Tag,
  Clock,
  MapPin,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

// Sample data arrays
const jobApplications = [
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
  // …other entries…
];

const sorts = [
  { name: "Newest", value: "newest" },
  { name: "Oldest", value: "oldest" },
];

export default function MyApplicationComponent() {
  const [filterStatus, setFilterStatus] = useState<
    "All" | "Applied" | "In Progress" | "Archived"
  >("All");
  const [sort, setSort] = useState(sorts[0]);
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

  const handleOnChangeSort = (newSort: { name: string; value: string }) => {
    setSort(newSort);
    setActiveMenu(null);
  };

  // Filter & sort
  const visibleApps = jobApplications
    .filter((app) => filterStatus === "All" || app.status === filterStatus)
    .sort((a, b) => (sort.value === "newest" ? b.id - a.id : a.id - b.id));

  return (
    <div className="container p-6 bg-gray-50 min-h-screen">
      {/* Header with status filters */}
      <BoardHeader title="Applications">
        <div className="flex items-center gap-3 mt-5">
          {["All", "Applied", "In Progress", "Archived"].map((status) => (
            <Button
              key={status}
              variant={filterStatus === status ? "default" : "outline"}
              className="rounded-full flex items-center gap-1"
              onClick={() => setFilterStatus(status as any)}
            >
              {status === "Applied" && <Tag size={14} />}
              {status === "In Progress" && <RefreshCcw size={14} />}
              {status === "Archived" && <Archive size={14} />}
              {status}
            </Button>
          ))}
        </div>
      </BoardHeader>

      {/* Results count & sort */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mt-8 mb-4">
        <div className="text-sm text-neutral-600">
          Showing Results ({visibleApps.length})
        </div>
        <div className="flex justify-end relative lg:col-span-2">
          <div
            ref={menuRef}
            onClick={() => setActiveMenu((m) => (m === "sort" ? null : "sort"))}
            className="text-xs flex items-center px-3 border border-gray-200 rounded py-2 gap-2 cursor-pointer"
          >
            <span className="text-neutral-400">Sort by:</span>
            <span className="text-neutral-500">{sort.name}</span>
            <ChevronDown size={12} />
          </div>
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
        {visibleApps.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm">
            {/* Company + status */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Image
                  src={job.logo}
                  alt={job.company}
                  width={32}
                  height={32}
                  className="rounded"
                />
                <div>
                  <div className="font-semibold">{job.company}</div>
                  <div className="text-sm text-neutral-500">
                    {job.category} • {job.location}
                  </div>
                </div>
              </div>
              <span className="px-3 py-1 text-sm font-medium bg-primary-100 text-primary-700 rounded-full">
                {job.status}
              </span>
            </div>

            {/* Title + meta */}
            <h3 className="text-xl font-bold mt-4">{job.title}</h3>
            <div className="flex items-center gap-6 text-sm text-neutral-500 mt-2">
              <div className="flex items-center gap-1">
                <Clock size={16} /> {job.type}
              </div>
              <div className="flex items-center gap-1">
                <MapPin size={16} /> {job.mode}
              </div>
            </div>

            {/* Description & tags */}
            <p className="mt-4 text-neutral-600">{job.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {job.tags.map((t) => (
                <span key={t} className="px-2 py-1 text-sm bg-gray-100 rounded">
                  {t}
                </span>
              ))}
            </div>

            {/* Salary + link */}
            <div className="mt-6 flex justify-between items-center">
              <span className="text-lg font-semibold text-primary">
                {job.salary}
              </span>
              <a
                href="#"
                className="text-primary-600 font-medium flex items-center gap-1"
              >
                Learn more <ArrowRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
