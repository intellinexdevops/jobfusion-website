"use client";
import React from "react";
import Image from "next/image";
import { Eye, Share2, Pencil, Trash2, Plus, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

const organizations = [
  {
    name: "Apple",
    status: "In-Review",
    statusColor: "text-warning",
    icon: "/icons/apple.svg",
  },
  {
    name: "LinkedIn",
    status: "Approved",
    statusColor: "text-primary",
    icon: "/icons/linkedin.svg",
  },
  {
    name: "Google Inc.",
    status: "Declined",
    statusColor: "text-error",
    icon: "/icons/google.svg",
  },
];

function OrganizationComponent() {
  return (
    <div className="p-5 bg-white rounded-lg pb-5">
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold">Organizations</p>
        <Button className="bg-primary/10 text-primary rounded-full hover:bg-primary/20 flex items-center gap-2">
          <div className="w-4 h-4 flex items-center justify-center bg-primary rounded-full">
            <Plus className="text-white" />
          </div>
          <span className="text-primary font-medium">Create</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {organizations.map((org, index) => (
          <Card key={index} className="flex-1">
            <CardContent className="flex items-start p-4 gap-4 flex-1">
              <Image
                src={org.icon}
                alt="Organization Icon"
                width={32}
                height={32}
                className="w-9 h-9 rounded"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-neutral-800">
                  {org.name}
                </p>
                <p className="text-xs text-neutral-400">Technical & Business</p>
                <p className={`text-xs mt-1 font-medium ${org.statusColor}`}>
                  {org.status}
                </p>
              </div>
              <div className="relative">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="link"
                      size="icon"
                      className="text-neutral-600"
                    >
                      <MoreVertical size={14} />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 overflow-hidden" align="end">
                    <ul className="text-sm text-neutral-700">
                      <Link href="/boards/123/viewer/o" target="_blank" className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
                        <Eye size={16} /> View as
                      </Link>
                      <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
                        <Share2 size={16} /> Share
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer flex items-center gap-2">
                        <Pencil size={16} /> Edit
                      </li>
                      <li className="px-4 py-2 text-error hover:bg-gray-50 cursor-pointer flex items-center gap-2">
                        <Trash2 size={16} /> Delete
                      </li>
                    </ul>
                  </PopoverContent>
                </Popover>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default OrganizationComponent;
