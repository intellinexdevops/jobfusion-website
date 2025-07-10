import React from "react";
import CampaignItems from "@/components/com/campaign/campaign-item";
import { Job } from "@/types/job";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function CareerList({ data }: { data: Job[] }) {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [sort, setSort] = React.useState<{ name: string; value: string }>({
    name: "Most Recent",
    value: "most-recent",
  });
  const sorts = [
    {
      name: "Most Recent",
      value: "most-recent",
    },
    {
      name: "Most Popular",
      value: "most-popular",
    },
    {
      name: "Highest Salary 🤩",
      value: "highest-salary",
    },
    {
      name: "Lowest Salary",
      value: "lowest-salary",
    },
  ];
  const handleOnChangeSort = (sort: { name: string; value: string }) => {
    setIsOpen(false);
    setSort(sort);
  };
  return (
    <div>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex items-center justify-between col-span-2">
          <p className="text-sm text-neutral-500">
            Found{" "}
            <span className="text-neutral-900 font-medium">{data?.length}</span>{" "}
            available jobs
          </p>
          <Popover modal onOpenChange={() => setIsOpen(!isOpen)} open={isOpen}>
            <PopoverTrigger asChild onClick={() => setIsOpen(true)}>
              <div className="dark:border-gray-800 text-xs flex flex-row px-3 border border-gray-200 items-center rounded py-2 gap-2">
                <p className="text-neutral-400">Sort by: </p>
                <span className="text-neutral-500">{sort.name}</span>
                <ChevronDown size={12} className="text-neutral-400" />
              </div>
            </PopoverTrigger>
            <PopoverContent align="end" className="p-0 py-1">
              {sorts.map((item, index) => (
                <div
                  key={index}
                  className="cursor-pointer hover:bg-gray-100 px-3 rounded transition-all py-2 text-xs duration-150 ease-linear"
                  onClick={() => handleOnChangeSort(item)}
                >
                  {item.name}
                </div>
              ))}
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mt-5">
        <div className="col-span-2">
          <CampaignItems data={data} />
        </div>
        <div className="flex flex-col">
          <div className="bg-white rounded-md border border-neutral-100 p-6">
            <div className="flex items-center justify-between">
              <p className="text-base text-neutral-800 font-medium">Filter</p>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <label
                className="text-xs font-medium text-neutral-900"
                htmlFor="category"
              >
                Category
              </label>
              <Input placeholder="Select category" />
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <label
                className="text-xs font-medium text-neutral-900"
                htmlFor="category"
              >
                Experience
              </label>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox />
                    <label className="text-sm text-neutral-600 ml-2">
                      Entry Level
                    </label>
                  </div>
                  <div className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded-sm">
                    120
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox />
                    <label className="text-sm text-neutral-600 ml-2">
                      Mid Level
                    </label>
                  </div>
                  <div className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded-sm">
                    120
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox />
                    <label className="text-sm text-neutral-600 ml-2">
                      Senior Level
                    </label>
                  </div>
                  <div className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded-sm">
                    120
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <label
                className="text-xs font-medium text-neutral-900"
                htmlFor="category"
              >
                Job Type
              </label>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox />
                    <label className="text-sm text-neutral-600 ml-2">
                      Full Time
                    </label>
                  </div>
                  <div className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded-sm">
                    120
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox />
                    <label className="text-sm text-neutral-600 ml-2">
                      Part Time
                    </label>
                  </div>
                  <div className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded-sm">
                    120
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox />
                    <label className="text-sm text-neutral-600 ml-2">
                      Contract
                    </label>
                  </div>
                  <div className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded-sm">
                    120
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <label
                className="text-xs font-medium text-neutral-900"
                htmlFor="category"
              >
                Workspace
              </label>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox />
                    <label className="text-sm text-neutral-600 ml-2">
                      Remote
                    </label>
                  </div>
                  <div className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded-sm">
                    120
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox />
                    <label className="text-sm text-neutral-600 ml-2">
                      Onsite
                    </label>
                  </div>
                  <div className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded-sm">
                    120
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox />
                    <label className="text-sm text-neutral-600 ml-2">
                      Hybrid
                    </label>
                  </div>
                  <div className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded-sm">
                    120
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <label
                className="text-xs font-medium text-neutral-900"
                htmlFor="category"
              >
                Salary Range
              </label>
              <div className="flex items-center justify-between gap-2">
                <Input placeholder="Min" className="w-1/2" />
                <Input placeholder="Max" className="w-1/2" />
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <label
                className="text-xs font-medium text-neutral-900"
                htmlFor="category"
              >
                Location
              </label>
              <Input placeholder="Select location" />
            </div>
            <div className="mt-6">
              <Button>Apply Filter</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
