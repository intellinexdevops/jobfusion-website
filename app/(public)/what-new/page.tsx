"use client";
import React, { useState } from "react";
import MediaCard from "@/components/materials/MediaCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import clsx from "clsx";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = {
  label: string;
  value: string;
};

// the place logic besinis
export default function WhatNew() {
  // aray static
  const categories: Category[] = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "AI",
      value: "ai",
    },
    {
      label: "Cybersecurity",
      value: "cybersecurity",
    },
    {
      label: "Data Science",
      value: "data-science",
    },
  ];

  // state manager ment
  const [selectedCategory, setSelectedCategory] = useState<any>(
    categories[0].value
  );
  // aray static
  const data = [
    {
      category: "category 1",
      title: "Title 1",
      description: "sdvdvbvuvyf",
    },
    {
      category: "category 2",
      title: "Title 2",
      description: "sdvdvbvuvyf",
    },
    {
      category: "category 3",
      title: "Title 3",
      description: "sdvdvbvuvyf",
    },
    {
      category: "category 4",
      title: "Title 4",
      description: "sdvdvbvuvyf",
    },
    {
      category: "category 5",
      title: "Title 5",
      description: "sdvdvbvuvyf",
    },
    {
      category: "category 6",
      title: "Title 6",
      description: "sdvdvbvuvyf",
    },
  ];

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  // Dispay Ui and data
  return (
    <section className="mt-20">
      <div className="container">
        {/* header */}
        <div className="flex flex-col items-center">
          <p className="font-medium mt-20">What’s new?</p>
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold my-4">
            Short heading goes here
          </h1>
          <p className="text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
        </div>

        {/* categories */}

        <div className="flex flex-row items-center justify-center gap-6 my-20 flex-wrap">
          <div>
            <label
              htmlFor={categories[0].value}
              className={clsx(
                selectedCategory === categories[0].value
                  ? "text-primary font-medium bg-primary/5 "
                  : "text-gray-600",
                "cursor-pointer text-sm hover:bg-primary/5  py-2 px-4 rounded-lg transition-all duration-200 ease-linear"
              )}
            >
              {categories[0].label}
            </label>
            <input
              value={selectedCategory}
              onChange={() => setSelectedCategory(categories[0].value)}
              type="radio"
              name="category"
              hidden
              id={categories[0].value}
            />
          </div>
          {categories.slice(1).map((cat, idx) => (
            <div className="lg:flex hidden" key={idx}>
              <label
                htmlFor={cat.value}
                className={clsx(
                  selectedCategory === cat.value
                    ? "text-primary font-medium bg-primary/5 "
                    : "text-gray-600",
                  "cursor-pointer text-sm hover:bg-primary/5  py-2 px-4 rounded-lg transition-all duration-200 ease-linear"
                )}
              >
                {cat.label}
              </label>
              <input
                value={selectedCategory}
                onChange={() => setSelectedCategory(cat.value)}
                type="radio"
                name="category"
                hidden
                id={cat.value}
              />
            </div>
          ))}

          <div className="lg:hidden">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  role="combobox"
                  aria-expanded={open}
                  className="w-[200px] justify-between"
                >
                  {value
                    ? categories.find((framework) => framework.value === value)
                        ?.label
                    : "Select Categories..."}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search framework..." />
                  <CommandList>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {categories.slice(1).map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(
                              currentValue === value ? "" : currentValue
                            );
                            setOpen(false);
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              value === framework.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* items */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mb-5">
          {data.map((item, idx) => (
            <MediaCard data={item} key={idx} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mb-10">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </section>
  );
}
