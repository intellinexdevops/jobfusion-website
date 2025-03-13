"use client"
import { useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import CareerCard from "@/components/materials/CareerCard";


export default function CareerItems() {

    const data: { id: string, title: string }[] = [
        {
            id: "1",
            title: "Web Developer"
        },
        {
            id: "2",
            title: "Developer"
        },
        {
            id: "3",
            title: "Developer"
        },
        {
            id: "4",
            title: "Developer"
        },
        {
            id: "5",
            title: "Developer"
        },
        {
            id: "6",
            title: "Developer"
        },
        {
            id: "7",
            title: "Developer"
        },
        {
            id: "8",
            title: "Developer"
        },
        {
            id: "9",
            title: "Developer"
        },
        {
            id: "10",
            title: "Developer"
        },
        {
            id: "11",
            title: "Developer"
        },
        {
            id: "12",
            title: "Developer"
        },
        {
            id: "13",
            title: "Developer"
        },
        {
            id: "14",
            title: "Developer"
        }
    ]


    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const generatePagination = () => {
        let pages = [];

        if (totalPages <= 4) {
            pages = Array.from({ length: totalPages }, (_, i) => i + 1);
        } else {
            pages.push(1);
            if (currentPage > 3) pages.push("•••");

            const middlePages = [currentPage - 1, currentPage, currentPage + 1].filter(
                (p) => p > 1 && p < totalPages
            );
            pages.push(...middlePages);

            if (currentPage < totalPages - 2) pages.push("...");
            pages.push(totalPages);
        }
        return pages;
    };


    return (<div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-6">
            {currentItems.map((item, i) => (
                <CareerCard key={i} data={item} />
            ))}
        </div>

        <Pagination className="mt-6 mb-10">
            <PaginationContent>
                <PaginationItem>
                    <button disabled={currentPage === 1}
                        className={currentPage === 1 ? "cursor-not-allowed" : "cursor-pointer"}>
                        <PaginationPrevious onClick={() => setCurrentPage(currentPage - 1)} />
                    </button>
                </PaginationItem>

                {generatePagination().map((page, index) => (
                    <PaginationItem key={index}>
                        <PaginationLink
                            onClick={() => typeof page === "number" && setCurrentPage(page)}
                            isActive={currentPage === page}>
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                ))}


                <PaginationItem>
                    <button disabled={currentPage === totalPages}
                        className={currentPage === totalPages ? "cursor-not-allowed" : "cursor-pointer"}>
                        <PaginationNext onClick={() => setCurrentPage(currentPage + 1)} />
                    </button>
                </PaginationItem>

            </PaginationContent>
        </Pagination>

    </div>)
}