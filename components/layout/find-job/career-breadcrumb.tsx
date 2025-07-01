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

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Briefcase, MapPin, SearchIcon } from "lucide-react";
import React from "react";

const CareerBreadCrumb = () => {
  const [role, setRole] = React.useState<string>("Software Developer");
  const [isRoleOpen, setIsRoleOpen] = React.useState<boolean>(false);
  const [location, setLocation] = React.useState<string | null>(null);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [searchLocation, setSearchLocation] = React.useState<string | null>(
    location
  );

  const handleOnChangeRole = (role: string) => {
    setRole(role);
    setIsRoleOpen(false);
  };

  const handleOnChangeLocation = (location: string) => {
    setLocation(location);
    setIsOpen(false);
  };

  const locations = [
    "Siem Reap",
    "Phnom Penh",
    "Kampong Thom",
    "Svar Reing",
    "Battambang",
  ];
  return (
    <div className="pt-28 pb-16 bg-gradient-to-br from-primary/10 to-primary/30 flex flex-col items-center">
      <p className="md:text-4xl text-2xl font-bold text-center leading-tight">
        Connecting Talent with Opportunity, <br /> Every Day.
      </p>
      <p className="text-center mt-4 text-neutral-500">
        Browse thousands of job listings and connect with top employers in
        minutes.
      </p>
      <div className="flex items-center gap-x-5 mt-10 bg-white p-2.5 rounded-2xl">
        <Popover
          modal
          onOpenChange={() => setIsRoleOpen(!isRoleOpen)}
          open={isRoleOpen}
        >
          <PopoverTrigger asChild onClick={() => setIsRoleOpen(true)}>
            <div className="h-10 dark:border-gray-800 text-sm flex flex-row px-3 border-r border-neutral-200 items-center gap-2 md:w-48">
              <Briefcase size={14} className="text-gray-400" />
              <p className={location ? "" : "text-gray-400"}>
                {location ?? "Role/Position"}
              </p>
            </div>
          </PopoverTrigger>
          <PopoverContent align="center">
            <div className="border rounded-lg h-10 flex flex-row items-center gap-2 px-3 mb-1">
              <div>
                <SearchIcon size={14} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchLocation ?? ""}
                onChange={(text) => setSearchLocation(text.target.value)}
                placeholder="Type a role/position"
                className="outline-none bg-transparent text-sm"
              />
            </div>

            {locations.map((location) => (
              <div
                key={location}
                className="py-2 px-4 cursor-pointer text-xs hover:bg-gray-100 rounded transition-all duration-150 ease-linear"
                onClick={() => handleOnChangeRole(location)}
              >
                {role}
              </div>
            ))}
          </PopoverContent>
        </Popover>

        <Popover modal onOpenChange={() => setIsOpen(!isOpen)} open={isOpen}>
          <PopoverTrigger asChild onClick={() => setIsOpen(true)}>
            <div className="h-10 dark:border-gray-800 text-sm flex flex-row px-3 border-r border-neutral-200 items-center gap-2 md:w-48">
              <MapPin size={14} className="text-gray-400" />
              <p className={location ? "" : "text-gray-400"}>
                {location ?? "Where ?"}
              </p>
            </div>
          </PopoverTrigger>
          <PopoverContent align="center">
            <div className="border rounded-lg h-10 flex flex-row items-center gap-2 px-3 mb-1">
              <div>
                <SearchIcon size={14} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={searchLocation ?? ""}
                onChange={(text) => setSearchLocation(text.target.value)}
                placeholder="Type a location"
                className="outline-none bg-transparent text-sm"
              />
            </div>

            {locations.map((location) => (
              <div
                key={location}
                className="py-2 px-4 cursor-pointer text-xs hover:bg-gray-100 rounded transition-all duration-150 ease-linear"
                onClick={() => handleOnChangeLocation(location)}
              >
                {location}
              </div>
            ))}
          </PopoverContent>
        </Popover>

        <Button className="h-10 rounded-xl text-sm px-5 justify-center flex flex-row items-center gap-2 dark:bg-primary/10">
          <SearchIcon size={14} className="text-white dark:text-primary" />
          <span className="text-white dark:text-primary">Search</span>
        </Button>
      </div>
    </div>
  );
};

export default CareerBreadCrumb;
