"use client";
import React from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Search, User } from "lucide-react";

import Image from "next/image";
import Logo from "../logo";
import HeaderBreadcrumb from "./header-breadcrumb";
import Link from "next/link";

export default function HeaderCandidate() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white">
      <div className="container flex flex-row items-center justify-between py-4">
        <div className="flex items-center gap-10">
          <Logo />
          <HeaderBreadcrumb />
        </div>

        <div className="flex flex-1 flex-row justify-end items-center gap-x-4 ">
          <div className="md:flex hidden">
            <div className="h-9 px-3 gap-x-2 border bg-neutral-50 flex items-center rounded-md">
              <Search size={16} className="text-neutral-500" />
              <input
                type="text"
                placeholder="Search something..."
                className="h-full text-neutral-700 flex-1 text-xs bg-transparent outline-none"
              />
            </div>
          </div>
          <div className="flex md:hidden">
            <Button variant="outline" size="icon">
              <Search size={16} className="text-neutral-500" />
            </Button>
          </div>
          <div>
            <p className="text-neutral-800 font-semibold text-sm text-right">
              Chenter PAHI
            </p>
            <p className="text-xs leading-none text-right text-neutral-500">
              Software Engineer
            </p>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button size={"icon"} className="rounded-full">
                <User />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="w-52 border p-0 mt-2 bg-white border-neutral-100"
            >
              <div className="px-3 py-2.5 flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-800">
                  Copy Profile URL
                </span>
                <Image
                  src="/icons/copy-solid.svg"
                  alt="Copy Icons"
                  width={12}
                  height={12}
                />
              </div>
              <Link
                href="/boards/384685/viewer"
                className="px-3 py-2.5 flex items-center justify-between border-t border-t-neutral-100"
                target="_blank"
              >
                <span className="text-sm font-medium text-neutral-800">
                  View as
                </span>
                <Image
                  src="/icons/eye-solid.svg"
                  alt="Copy Icons"
                  width={12}
                  height={12}
                />
              </Link>
              <Link
                href="/boards/23433434/help-center"
                className="px-3 py-2.5 flex items-center justify-between border-t  border-t-neutral-100"
                target="_blank"
              >
                <span className="text-sm font-medium text-neutral-800">
                  Help Center
                </span>
                <Image
                  src="/icons/help-center-solid.svg"
                  alt="Copy Icons"
                  width={12}
                  height={12}
                />
              </Link>
              <div className="px-3 py-2.5 flex items-center justify-between border-t  border-t-neutral-100">
                <span className="text-sm font-medium text-error">Logout</span>
                <Image
                  src="/icons/logout-solid.svg"
                  alt="Copy Icons"
                  width={12}
                  height={12}
                />
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
