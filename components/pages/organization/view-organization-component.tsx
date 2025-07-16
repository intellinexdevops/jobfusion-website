"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  CheckCircle,
  Star,
  MessageSquare,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

export default function CompanyProfilePage() {
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const tabs = ["Home", "About", "Jobs", "Employee"];
  const [activeTab, setActiveTab] = useState("Home");
  const avatars = [
    "/avatars/u1.jpg",
    "/avatars/u2.jpg",
    "/avatars/u3.jpg",
    "/avatars/u4.jpg",
  ];
  const peopleAlsoFollow = Array(4).fill({
    name: "Mobile App Developer",
    subtitle: "Siem Reap, Cambodia",
  });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Banner */}
      <div className="relative">
        <div className="w-full h-56 bg-gray-200 rounded-t-xl overflow-hidden">
          <Image
            src="/images/company-banner.jpg"
            alt="Banner"
            fill
            className="object-cover"
          />
        </div>
        {/* Profile icon overlapping */}
        <div className="absolute left-1/2 top-40 transform -translate-x-1/2">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Building2 size={48} className="text-green-500" />
          </div>
        </div>
      </div>

      {/* Header content */}
      <div className="mt-12 bg-white rounded-b-xl shadow p-6 text-center space-y-4">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">Google Inc.</h1>
            <CheckCircle size={20} className="text-green-500" />
          </div>
          <p className="text-sm text-neutral-600">
            IT Services and IT Consulting
          </p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-500" />
            ))}
            <span className="ml-2 text-sm font-medium">4.8</span>
            <span className="text-xs text-neutral-500 ml-1">(1,243)</span>
          </div>
        </div>
        {/* Metrics */}
        <div className="flex items-center justify-center gap-12 pt-4 border-t border-neutral-200">
          <div className="text-center">
            <div className="text-xl font-bold">23</div>
            <div className="text-sm text-neutral-500">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold">3</div>
            <div className="text-sm text-neutral-500">Following</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold">2–10</div>
            <div className="text-sm text-neutral-500">Employees</div>
          </div>
        </div>
        {/* Actions */}
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button variant="default" className="flex items-center gap-2">
            <MessageSquare size={16} /> Message
          </Button>
          <Button variant="outline">Follow</Button>
          <div ref={moreRef}>
            <Popover open={moreOpen} onOpenChange={setMoreOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="p-2">
                  <MoreHorizontal size={16} />
                </Button>
              </PopoverTrigger>
              <PopoverContent
                align="end"
                className="w-40 bg-white border border-neutral-200 rounded-md shadow-lg"
              >
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-neutral-800 hover:bg-gray-100"
                >
                  Share Profile
                </Link>
                <Link
                  href="#"
                  className="block px-4 py-2 text-sm text-neutral-800 hover:bg-gray-100"
                >
                  Report
                </Link>
                <div className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 cursor-pointer">
                  Block
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        {/* LinkedIn */}
        <div className="text-center pt-2">
          <Link
            href="https://linkedin.com/company/google"
            target="_blank"
            className="inline-flex items-center text-sm text-blue-600"
          >
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              width={16}
              height={16}
            />
            <span className="ml-1">LinkedIn Link</span>
          </Link>
        </div>
      </div>

      {/* Tabs */}
      <nav className="flex gap-8 justify-center border-b border-neutral-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-medium ${tab === activeTab
                ? "text-green-500 border-b-2 border-green-500"
                : "text-neutral-600 hover:text-neutral-900"
              }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Overview */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-2">Overview</h2>
            <p className="text-sm text-neutral-500">
              Bring your ideas to the world.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-50 rounded">
                  <Building2 size={20} className="text-green-500" />
                </div>
                <div>
                  <div className="font-medium">Mobile App Developer</div>
                  <div className="text-sm text-neutral-500">
                    Siem Reap, Cambodia
                  </div>
                </div>
              </div>
              <Link
                href="#"
                className="text-sm font-medium text-green-500 hover:underline"
              >
                See all
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Analytic</h2>
            <h3 className="font-medium">
              Insights on Amazon Web Services (AWS)
            </h3>
            <p className="text-sm text-neutral-500 mb-4">
              181 recent senior management hires
            </p>
            <div className="flex items-center gap-12 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-bold">6%</span>
                <span className="text-neutral-500">
                  Total headcount growth (6m)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">3.4 yrs</span>
                <span className="text-neutral-500">Median tenure</span>
              </div>
            </div>
            <div className="mt-4 flex -space-x-2">
              {avatars.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt="avatar"
                  width={32}
                  height={32}
                  className="rounded-full border-2 border-white"
                />
              ))}
              <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full text-xs text-neutral-600">
                +99
              </div>
            </div>
          </div>
        </div>

        {/* People also follow */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">People also follow</h2>
            <ul className="space-y-4">
              {peopleAlsoFollow.map((p, i) => (
                <li key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Building2 size={24} className="text-green-500" />
                    <div>
                      <div className="font-medium">{p.name}</div>
                      <div className="text-sm text-neutral-500">{p.subtitle}</div>
                    </div>
                  </div>
                  <Button size="sm">Follow</Button>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-center">
              <Link
                href="#"
                className="text-sm text-green-500 font-medium hover:underline"
              >
                See all
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
