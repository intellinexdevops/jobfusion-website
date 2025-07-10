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
import { usePathname } from "next/navigation";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

interface CustomEndPath {
  value?: string;
}

export default function HeaderBreadcrumb({ value }: CustomEndPath) {
  const pathname = usePathname();
  const pathParts = pathname?.split("/").filter((part) => part);

  return (
    <div className="container">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="text-gray-600" asChild>
              <Link href="/" replace className="flex items-center gap-2">
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {pathParts.map((path, idx) => {
            const isLast = idx === pathParts.length - 1;
            const href = `/${pathParts.slice(0, idx + 1).join("/")}`;

            const pageDisplay = isLast
              ? value || path.split("-").join(" ")
              : path.split("-").join(" ");

            return (
              <React.Fragment key={href}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage className="capitalize text-primary font-medium">
                      {pageDisplay}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink
                      asChild
                      className="capitalize text-gray-600 transition-colors hover:text-foreground"
                    >
                      <Link href={href}>{pageDisplay}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
