"use client";
import React from "react";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { User } from "lucide-react";
import HeaderNavigationMenu from "./header-navigation-menu";
import Image from "next/image";

export default function HeaderCandidate() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white">
      <div className="container flex flex-row items-center justify-between py-4">
        <HeaderNavigationMenu />
        <div className="flex flex-row items-center gap-x-4 ">
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
              <div className="px-3 py-2.5 flex items-center justify-between border-t border-t-neutral-100">
                <span className="text-sm font-medium text-neutral-800">
                  View as
                </span>
                <Image
                  src="/icons/eye-solid.svg"
                  alt="Copy Icons"
                  width={12}
                  height={12}
                />
              </div>
              <div className="px-3 py-2.5 flex items-center justify-between border-t  border-t-neutral-100">
                <span className="text-sm font-medium text-neutral-800">
                  Help Center
                </span>
                <Image
                  src="/icons/help-center-solid.svg"
                  alt="Copy Icons"
                  width={12}
                  height={12}
                />
              </div>
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
