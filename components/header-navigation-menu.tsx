"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const HeaderNavigationMenu = () => {
    const pathname = usePathname().slice(3)
    return (
      <ul className="flex items-center gap-10">
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
            href="/careers"
            className={`nav-link ${pathname === "/careers" ? "c_active" : ""}`}
          >
            Find Jobs
          </Link>
        </li>
        <li>
          <Link
            href="/what-new"
            className={`nav-link ${pathname === "/what-new" ? "c_active" : ""}`}
          >
            What&apos;s new?
          </Link>
        </li>
        <li>
          <Link
            href="/recruiter"
            className={`nav-link ${
              pathname === "/recruiter" ? "c_active" : ""
            }`}
          >
            Recruiter
          </Link>
        </li>
      </ul>
    );
}

export default HeaderNavigationMenu