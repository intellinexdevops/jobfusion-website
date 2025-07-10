"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderNavigationMenu = () => {
  const pathname = usePathname();
  return (
    <ul className="lg:flex items-center gap-10 hidden">
      <li>
        <Link
          href="/about"
          className={`nav-link ${pathname === "/about" ? "c_active" : ""}`}
        >
          About us
        </Link>
      </li>
      <li>
        <Link
          href="/campaign"
          className={`nav-link ${
            pathname.startsWith("/campaign") ? "c_active" : ""
          }`}
        >
          Find Jobs
        </Link>
      </li>
      <li>
        <Link
          href="/what-new"
          className={`nav-link ${
            pathname.startsWith("/what-new") ? "c_active" : ""
          }`}
        >
          What&apos;s new?
        </Link>
      </li>
      <li>
        <Link
          href="/business"
          className={`nav-link ${pathname === "/business" ? "c_active" : ""}`}
        >
          Business
        </Link>
      </li>
      <li>
        <Link
          href="/explore"
          className={`nav-link ${pathname === "/explore" ? "c_active" : ""}`}
        >
          Explore
        </Link>
      </li>
    </ul>
  );
};

export default HeaderNavigationMenu;
