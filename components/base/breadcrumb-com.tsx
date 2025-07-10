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
import { Home } from "lucide-react";
import Link from "next/link";

interface CustomEndPath {
  value?: string;
}

export default function BreadcrumbCom({ value }: CustomEndPath) {
  const pathname = usePathname();
  const pathParts = pathname?.split("/").filter((part) => part);

  return (
    <div className="mt-5">
      <div className="container">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-gray-600" asChild>
                <Link href="/" replace className="flex items-center gap-2">
                  <div className="w-6 h-6 flex items-center justify-center bg-primary/10 rounded">
                    <Home size={14} className="text-primary" />
                  </div>
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
    </div>
  );
}
