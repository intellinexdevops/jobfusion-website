"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import Image from "next/image";
import Link from "next/link";
import {
  Tag,
  Archive,
  Clock,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

// Sample data
const favouriteJobs = [
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
    status: "Published",
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
    status: "Closed",
  },
  // ...more
];

const filters = [
  { label: "All", value: "All" },
  { label: "Applied", value: "Applied", Icon: Tag },
  { label: "Published", value: "Published", Icon: Archive },
  { label: "Closed", value: "Closed", Icon: Clock },
];

const sorts = [
  { name: "Newest", value: "newest" },
  { name: "Oldest", value: "oldest" },
];

export default function FavouriteComponent() {
  const [filter, setFilter] = useState<string>("All");
  const [sort, setSort] = useState(sorts[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  // filtered and sorted list
  const visible = favouriteJobs
    .filter(job => filter === "All" || job.status === filter)
    .sort((a, b) => (sort.value === "newest" ? b.id - a.id : a.id - b.id));

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">My Favourite Jobs</h2>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-6">
        {filters.map(({ label, value, Icon }) => (
          <Button
            key={value}
            variant={filter === value ? "default" : "outline"}
            className="rounded-full flex items-center gap-1"
            onClick={() => setFilter(value)}
          >
            {Icon && <Icon size={14} className="text-neutral-600" />}
            {label}
          </Button>
        ))}
      </div>

      {/* Results & Sort Popover */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-neutral-600">
          Showing Results ({visible.length})
        </span>
        <div className="relative">
          <Popover open={menuOpen} onOpenChange={setMenuOpen}>
            <PopoverTrigger asChild>
              <button
                className="flex items-center gap-1 px-3 py-1 border border-gray-200 bg-white rounded text-sm"
              >
                <span>Sort: {sort.name}</span>
                <ChevronDown size={14} className="text-neutral-600" />
              </button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="w-40 p-0 mt-2 bg-white border border-neutral-100 rounded-md shadow-lg"
            >
              {sorts.map(option => (
                <div
                  key={option.value}
                  className="px-4 py-2 text-sm text-neutral-800 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setSort(option);
                    setMenuOpen(false);
                  }}
                >
                  {option.name}
                </div>
              ))}
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Job Cards: 1 col xs, 2 cols sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {visible.map(job => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
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
              {job.status === "Applied" && (
                <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                  Applied
                </span>
              )}
              {job.status === "Published" && (
                <Button size="sm">Apply</Button>
              )}
              {job.status === "Closed" && (
                <span className="px-3 py-1 bg-gray-100 text-gray-400 rounded-full text-sm">
                  Closed
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold mb-2">{job.title}</h3>
            <p className="text-sm text-neutral-600 mb-4">{job.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {job.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-gray-100 text-sm rounded">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-primary">
                {job.salary}
              </span>
              <Link href="#" className="flex items-center text-primary-600 font-medium">
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
