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

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  {
    label: "Profile",
    href: "/account",
  },
  {
    label: "Analytics",
    href: "/analytics",
  },
  {
    label: "Notification",
    href: "/notification",
  },
  {
    label: "My Application",
    href: "/application",
  },
];

const NavSidebar = () => {
  const pathname = usePathname();
  const path = pathname.split("/").slice(3).at(0);
  console.log(path);
  return (
    <div className="bg-white py-5 mt-5 rounded-lg">
      <div className="px-5">
        <span className="s-label">Overview</span>
      </div>
      <div className="mt-4 flex flex-col gap-y-4">
        {navLinks.map((nav, i) => {
          const isActive = path === nav.href.slice(1);
          return (
            <Link
              href={`/usr/e987975/${nav.href}`}
              className="flex items-center gap-5"
              key={i}
            >
              <div
                className={`h-6 ${
                  isActive ? "bg-primary" : "bg-white"
                } w-[2.5px]`}
              />
              <span
                className={`${
                  isActive ? "text-primary font-medium" : "text-neutral-500"
                } text-sm`}
              >
                {nav.label}
              </span>
            </Link>
          );
        })}
        {/* <Link
          href={"/boards/3433/applications"}
          className="flex items-center justify-between pe-5"
          target="_blank"
        >
          <div className="flex items-center gap-5">
            <div className={`h-6 bg-white w-[2.5px]`} />
            <span
              className={`${
                path === "/applications"
                  ? "text-primary font-medium"
                  : "text-neutral-500"
              } text-sm`}
            >
              My Application
            </span>
          </div>
          <Image
            src="/icons/open-link.svg"
            alt="Open_Blank"
            width={14}
            height={14}
          />
        </Link> */}
      </div>

      <div className="mt-4 flex flex-col gap-y-4 border-t pt-4 border-t-neutral-100">
        <div className="px-5">
          <span className="s-label">Management</span>
        </div>
        <Link
          href={"/usr/2322434/campaign"}
          className="flex items-center justify-between pe-5"
        >
          <div className="flex items-center gap-5">
            <div
              className={`h-6 ${
                path === "campaign" ? "bg-primary" : "bg-white "
              } w-[2.5px]`}
            />
            <span
              className={`${
                path === "campaign"
                  ? "text-primary font-medium"
                  : "text-neutral-500"
              } text-sm`}
            >
              Jobs
            </span>
          </div>
        </Link>
        <Link
          href={"/usr/2322434/favorite"}
          className="flex items-center justify-between pe-5"
        >
          <div className="flex items-center gap-5">
            <div
              className={`h-6 ${
                path === "favorite" ? "bg-primary" : "bg-white "
              } w-[2.5px]`}
            />
            <span
              className={`${
                path === "favorite"
                  ? "text-primary font-medium"
                  : "text-neutral-500"
              } text-sm`}
            >
              Favourite Jobs
            </span>
          </div>
        </Link>
        <Link
          href={`/usr/2322434/organization`}
          className="flex items-center justify-between pe-5"
        >
          <div className="flex items-center gap-5">
            <div
              className={`h-6 ${
                path === "organization" ? "bg-primary" : "bg-white "
              } w-[2.5px]`}
            />
            <span
              className={`${
                path === "organization"
                  ? "text-primary font-medium"
                  : "text-neutral-500"
              } text-sm`}
            >
              Organizations
            </span>
          </div>
        </Link>
        <Link
          href={"/usr/2322434/applicants"}
          className="flex items-center justify-between pe-5"
        >
          <div className="flex items-center gap-5">
            <div
              className={`h-6 ${
                path === "applicants" ? "bg-primary" : "bg-white "
              } w-[2.5px]`}
            />
            <span
              className={`${
                path === "applicants"
                  ? "text-primary font-medium"
                  : "text-neutral-500"
              } text-sm`}
            >
              Applicants
            </span>
          </div>
        </Link>
      </div>

      <div className="mt-4 flex flex-col gap-y-4 border-t pt-4 border-t-neutral-100">
        <div className="px-5">
          <span className="s-label">Preference</span>
        </div>
        <Link
          href={`/usr/2322434/settings`}
          className="flex items-center justify-between pe-5"
        >
          <div className="flex items-center gap-5">
            <div
              className={`h-6 ${
                path === "settings" ? "bg-primary" : "bg-white "
              } w-[2.5px]`}
            />
            <span
              className={`${
                path === "settings"
                  ? "text-primary font-medium"
                  : "text-neutral-500"
              } text-sm`}
            >
              Settings
            </span>
          </div>
        </Link>

        <Link
          href={`/usr/2322434/help-center`}
          className="flex items-center justify-between pe-5"
        >
          <div className="flex items-center gap-5">
            <div
              className={`h-6 ${
                path === "help-center" ? "bg-primary" : "bg-white "
              } w-[2.5px]`}
            />
            <span
              className={`${
                path === "help-center"
                  ? "text-primary font-medium"
                  : "text-neutral-500"
              } text-sm`}
            >
              Account Preference
            </span>
          </div>
        </Link>
        <Link
          href={"/boards/3433/applicants"}
          className="flex items-center justify-between pe-5"
        >
          <div className="flex items-center gap-5">
            <div className={`h-6 bg-white w-[2.5px]`} />
            <span className={`text-red-500 text-sm`}>Logout</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavSidebar;
