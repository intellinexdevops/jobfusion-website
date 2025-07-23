"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../logo";
import HeaderNavigationMenu from "./header-navigation-menu";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { LanguagesIcon } from "lucide-react";
import Image from "next/image";

export default function HeaderNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 left-0 right-0 bg-transparent transition-all duration-300 ease-linear ${
        scrolled ? " bg-white/80 backdrop-blur-md border-b border-gray-100" : ""
      }`}
    >
      <div className="container flex flex-row items-center justify-between py-4">
        <div className="flex-1">
          <Logo />
        </div>
        <HeaderNavigationMenu />
        <div className="flex-1 flex flex-row justify-end items-center gap-x-3 ">
          <Link href="/sign-in">
            <Button className="hidden md:flex" variant={"outline"} size={"default"}>
              Sign In
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button size={"default"}>Register</Button>
          </Link>
          <Popover>
            <PopoverTrigger>
              <LanguagesIcon className="text-neutral-500" />
            </PopoverTrigger>
            <PopoverContent align="end" className="border-0 mt-2 rounded-xl w-auto">
              <div className="flex flex-col gap-3">
                {languages.map((item, i) => (
                  <Link
                    href="/"
                    locale={item.value}
                    key={i}
                    className="flex items-center gap-2 hover:opacity-80 cursor-pointer"
                  >
                    <Image
                      src={`/icons/locales/${item.icon}`}
                      alt={item.label}
                      width={20}
                      height={20}
                    />
                    {item.label}
                  </Link>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}

const languages = [
  {
    label: "English",
    value: "en",
    icon: "english.svg",
  },
  {
    label: "Khmer",
    value: "kh",
    icon: "khmer.svg",
  },
  {
    label: "Chinese",
    value: "zh",
    icon: "chinese.svg",
  },
];
