"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Eye, Share2, Pencil, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const organizations = [
  {
    name: "Google Inc.",
    status: "In-Review",
    statusColor: "text-orange-500",
    icon: "/icons/building.svg",
  },
  {
    name: "Google Inc.",
    status: "Approved",
    statusColor: "text-green-600",
    icon: "/icons/building.svg",
  },
  {
    name: "Google Inc.",
    status: "Declined",
    statusColor: "text-red-500",
    icon: "/icons/building.svg",
  },
];

function OrganizationComponent() {
  const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setActiveMenuIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Organizations</h2>
        <Button className="bg-primary/10 text-primary rounded-full hover:bg-primary/20 flex items-center gap-1">
          <Plus size={14} />
          Create
        </Button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {organizations.map((org, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-neutral-200 px-4 py-3 flex justify-between items-center relative"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <Image
                src={org.icon}
                alt="Organization Icon"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div>
                <h3 className="text-sm font-semibold text-neutral-800">
                  {org.name}
                </h3>
                <p className="text-xs text-neutral-400">Technical & Business</p>
                <p className={`text-xs mt-1 font-medium ${org.statusColor}`}>
                  {org.status}
                </p>
              </div>
            </div>

            {/* Dot Menu */}
            <div className="relative" ref={menuRef}>
              <button
                onClick={() =>
                  setActiveMenuIndex(
                    activeMenuIndex === index ? null : index
                  )
                }
                className="flex flex-col gap-[2px] items-center justify-center w-6 h-6 cursor-pointer hover:bg-gray-100 rounded-full"
              >
                <span className="w-[4px] h-[4px] rounded-full bg-gray-400" />
                <span className="w-[4px] h-[4px] rounded-full bg-gray-400" />
                <span className="w-[4px] h-[4px] rounded-full bg-gray-400" />
              </button>

              {activeMenuIndex === index && (
                <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-xl shadow-md z-10">
                  <ul className="text-sm text-neutral-700">
                    <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
                      <Eye size={16} /> View as
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
                      <Share2 size={16} /> Share
                    </li>
                    <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
                      <Pencil size={16} /> Edit
                    </li>
                    <li className="px-4 py-2 text-red-500 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
                      <Trash2 size={16} /> Delete
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrganizationComponent;
