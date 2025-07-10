"use client";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Job } from "@/types/job";
import dynamic from "next/dynamic";

const CampaignCard = dynamic(() => import("@/components/card/campaign-card"), {
  ssr: false,
});

export default function CampaignItems({ data }: { data: Job[] }) {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  const generatePagination = () => {
    let pages = [];

    if (totalPages <= 4) {
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("•••");

      const middlePages = [
        currentPage - 1,
        currentPage,
        currentPage + 1,
      ].filter((p) => p > 1 && p < totalPages);
      pages.push(...middlePages);

      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div>
      <div className="flex flex-col gap-4">
        {data &&
          currentItems?.map((item, i) => <CampaignCard item={item} key={i} />)}
      </div>

      <Pagination className="mt-6 mb-10">
        <PaginationContent>
          <PaginationItem>
            <button
              disabled={currentPage === 1}
              className={
                currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"
              }
            >
              <PaginationPrevious
                onClick={() => setCurrentPage(currentPage - 1)}
              />
            </button>
          </PaginationItem>

          {generatePagination().map((page, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                onClick={() => typeof page === "number" && setCurrentPage(page)}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <button
              disabled={currentPage === totalPages}
              className={
                currentPage === totalPages
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              }
            >
              <PaginationNext onClick={() => setCurrentPage(currentPage + 1)} />
            </button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
