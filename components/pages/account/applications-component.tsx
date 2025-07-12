import BoardHeader from "@/components/base/board-header";
import { Button } from "@/components/ui/button";
import {
  Archive,
  RefreshCcw,
  Tag,
  Clock,
  MapPin,
  Star,
  ChevronDown,
  UserPlus2,
  ArrowRight,
} from "lucide-react";
import React from "react";

// Sample data arrays


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
];

const moreJobs = [
  {
    id: 1,
    company: "Google",
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
  },
  {
    id: 2,
    company: "Microsoft",
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
  },
];

const pages = [
  {
    id: 1,
    name: "Google",
    logo: "/icons/google_logo.svg",
    category: "Technology",
    location: "New York, USA",
  },
  {
    id: 2,
    name: "Google Play",
    logo: "/icons/google_logo.svg",
    category: "Technology",
    location: "New York, USA",
  },
  {
    id: 3,
    name: "Google Phone",
    logo: "/icons/google_logo.svg",
    category: "Technology",
    location: "New York, USA",
  },
];

const ApplicationComponent = () => {
  return (
    <div className="container mt-24">
      <BoardHeader title="My Applications">
        <div className="flex items-center gap-3 mt-5">
          <Button className="rounded-full">All</Button>
          <Button className="rounded-full" variant="outline">
            <Tag size={14} className="text-neutral-600" />
            Applied
          </Button>
          <Button className="rounded-full" variant="outline">
            <RefreshCcw size={14} className="text-neutral-600" />
            In Progress
          </Button>
          <Button className="rounded-full" variant="outline">
            <Archive size={14} className="text-neutral-600" />
            Archived
          </Button>
        </div>
      </BoardHeader>

      {/* HEADER ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mt-8 mb-4">
        <div className="text-sm text-neutral-600">
          Showing Results ({jobApplications.length})
        </div>
        <div className="flex justify-end">
          <Button
            variant="outline"
            className="rounded-full flex items-center gap-1 px-3 py-1 text-sm"
          >
            Sort: Newest
            <Star size={14} className="text-green-500" />
            <ChevronDown size={14} className="text-neutral-500" />
          </Button>
        </div>
        <div className="flex justify-start">
          <h2 className="text-xl font-semibold">More Jobs</h2>
        </div>
      </div>

      {/* CONTENT GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main list */}
        <div className="lg:col-span-2 space-y-6">
          {jobApplications.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm">
              {/* Company + status */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-8 h-8 rounded"
                  />
                  <div>
                    <div className="font-semibold">{job.company}</div>
                    <div className="text-sm text-neutral-500">
                      {job.category} • {job.location}
                    </div>
                  </div>
                </div>
                <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full">
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

              {/* Description and tags */}
              <p className="mt-4 text-neutral-600">{job.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-sm bg-gray-100 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Salary + link */}
              <div className="mt-6 flex justify-between items-center">
                <span className="text-lg font-semibold text-green-600">
                  {job.salary}
                </span>
                <a
                  href="#"
                  className="text-green-600 font-medium flex items-center gap-1"
                >
                  Learn more <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Improved More Jobs cards */}
          <div className="space-y-6">
            {moreJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-2xl shadow flex flex-col"
              >
                {/* Company & meta */}
                <div className="flex items-center gap-3">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-8 h-8 rounded"
                  />
                  <div>
                    <div className="font-semibold">{job.company}</div>
                    <div className="text-sm text-neutral-500">
                      {job.category} • {job.location}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold mt-4">{job.title}</h4>

                {/* Type & Mode */}
                <div className="flex items-center gap-4 text-sm text-neutral-500 mt-2">
                  <div className="flex items-center gap-1">
                    <Clock size={16} /> {job.type}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} /> {job.mode}
                  </div>
                </div>

                {/* Optional Description */}
                {job.description && (
                  <p className="mt-4 text-neutral-600 text-sm">
                    {job.description}
                  </p>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Salary & link */}
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-lg font-semibold text-green-600">
                    {job.salary}
                  </span>
                  <a
                    href="#"
                    className="text-green-600 font-medium flex items-center gap-1"
                  >
                    Learn more <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pages */}
          <div className="space-y-4">
            {pages.map((page) => (
              <div
                key={page.id}
                className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={page.logo}
                    alt={page.name}
                    className="w-8 h-8 rounded"
                  />
                  <div>
                    <div className="font-semibold">{page.name}</div>
                    <div className="text-sm text-neutral-500">
                      {page.category} • {page.location}
                    </div>
                  </div>
                </div>
                {/* Follow button with UserPlus2 icon */}
                <Button className="flex items-center gap-1">
                  <UserPlus2 size={16} />
                  Follow
                </Button>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ApplicationComponent;