"use client";
import React from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LayoutGrid, Search } from "lucide-react";

import Image from "next/image";
import Logo from "../logo";
import Link from "next/link";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import AccountSidebar from "./account-sidebar";
import { usePathname } from "next/navigation";
import { managementLinks, navLinks } from "./nav-sidebar";

export default function HeaderCandidate() {
  const pathname = usePathname();
  const path = pathname.split("/").slice(3).at(0);
  return (
    <header className="fixed top-0 z-50 w-full bg-white">
      <div className="container flex flex-row items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <Logo />
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
        </div>

        <div className="flex flex-1 flex-row justify-end items-center gap-x-4 ">
          <div className="max-lg:hidden">
            <p className="text-neutral-800 font-semibold text-sm text-right">
              Chenter PAHI
            </p>
            <p className="text-xs leading-none text-right text-neutral-500">
              Software Engineer
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex md:hidden">
              <Button variant="outline" size="icon">
                <Search size={16} className="text-neutral-500" />
              </Button>
            </div>
            <div className="flex lg:hidden">
              <Drawer direction="left">
                <DrawerTrigger asChild>
                  <Button variant="outline" size="icon">
                    <LayoutGrid size={16} className="text-neutral-500" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="p-0">
                  <DrawerHeader>
                    <DrawerTitle></DrawerTitle>
                  </DrawerHeader>
                  <AccountSidebar />
                  <div className="bg-white py-5 mt-5 rounded-lg">
                    <div className="px-5">
                      <span className="s-label">Overview</span>
                    </div>
                    <div className="mt-4 flex flex-col gap-y-4">
                      {navLinks.map((nav, i) => {
                        const isActive = path === nav.href.slice(1);
                        return (
                          <DrawerClose key={i} asChild>
                            <Link
                              href={`/usr/e987975/${nav.href}`}
                              className="flex items-center gap-5"
                            >
                              <div
                                className={`h-6 ${
                                  isActive ? "bg-primary" : "bg-white"
                                } w-[2.5px]`}
                              />
                              <span
                                className={`${
                                  isActive
                                    ? "text-primary font-medium"
                                    : "text-neutral-500"
                                } text-sm`}
                              >
                                {nav.label}
                              </span>
                            </Link>
                          </DrawerClose>
                        );
                      })}
                    </div>

                    <div className="mt-4 flex flex-col gap-y-4 border-t pt-4 border-t-neutral-100">
                      <div className="px-5">
                        <span className="s-label">Management</span>
                      </div>
                      {managementLinks.map((nav, i) => {
                        const isActive = path === nav.href.slice(1);
                        return (
                          <DrawerClose key={i} asChild>
                            <Link
                              href={`/usr/e987975/${nav.href}`}
                              className="flex items-center gap-5"
                            >
                              <div
                                className={`h-6 ${
                                  isActive ? "bg-primary" : "bg-white"
                                } w-[2.5px]`}
                              />
                              <span
                                className={`${
                                  isActive
                                    ? "text-primary font-medium"
                                    : "text-neutral-500"
                                } text-sm`}
                              >
                                {nav.label}
                              </span>
                            </Link>
                          </DrawerClose>
                        );
                      })}
                    </div>

                    <div className="mt-4 flex flex-col gap-y-4 border-t pt-4 border-t-neutral-100">
                      <div className="px-5">
                        <span className="s-label">Preference</span>
                      </div>
                      <DrawerClose asChild>
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
                      </DrawerClose>

                      <DrawerClose asChild>
                        <Link
                          href={`/usr/2322434/help-center`}
                          className="flex items-center justify-between pe-5"
                        >
                          <div className="flex items-center gap-5">
                            <div
                              className={`h-6 ${
                                path === "help-center"
                                  ? "bg-primary"
                                  : "bg-white "
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
                      </DrawerClose>
                    </div>
                  </div>
                  <DrawerFooter>
                    <Button variant="destructive">Logout</Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  size={"icon"}
                  className="rounded-full relative overflow-hidden"
                >
                  <Image src="/images/Avatar.png" fill alt="Avatar" />
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
      </div>
    </header>
  );
}
