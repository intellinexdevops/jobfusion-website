"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Logo from "../logo";
import HeaderNavigationMenu from "../header-navigation-menu";
import { Button } from "../ui/button";

export default function HeaderNav() {
  const t = useTranslations();
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
      <div className="container mx-auto max-w-7xl">
        <div className="container mx-auto flex flex-row items-center justify-between py-4">
          <div className="flex-1">
            <Logo />
          </div>
          <HeaderNavigationMenu />

          <div className="flex-1 flex flex-row justify-end items-center gap-x-3 ">
            <Link href="/sign-in">
              <Button
                className="hidden md:flex"
                variant={"outline"}
                size={"default"}
              >
                {t("signin")}
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button size={"default"}>{t("register")}</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
