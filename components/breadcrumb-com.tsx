"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home } from "lucide-react";

export default function BreadcrumbCom() {
  const pathname = usePathname();
  const pathParts = pathname?.split("/");

  if (pathParts!.length >= 3 && pathParts![2] !== "details") {
    return (
      <div className="py-5 mt-4">
        <div className="container">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-gray-600" href="/">
                  <Home size={14} />
                </BreadcrumbLink>
              </BreadcrumbItem>
              {pathParts!.slice(2).map((path, idx) => {
                const pageDisplay = path.split("-").join(" ");
                return (
                  <div key={idx} className="flex flex-row items-center gap-2">
                    <BreadcrumbSeparator className="text-gray-600" />
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        className="text-gray-600 hover:text-gray-200 capitalize"
                        href={`/${path}`}
                      >
                        {pageDisplay}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </div>
                );
              })}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    );
  }
}
