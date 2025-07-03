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
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const CallToAction = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        `bg-[#66C798] p-12 md:px-10 lg:px-36 md:rounded-2xl relative overflow-hidden`,
        className
      )}
    >
      <Image
        src="/images/leaf-1.svg"
        alt="Left Leaf"
        width={504}
        height={300}
        className="absolute top-0 left-0 hidden md:flex"
      />
      <div className="flex flex-col space-y-4">
        <div className="text-3xl font-semibold text-white">
          Looking to Hire?
        </div>
        <p className="text-sm text-white max-w-[450px]">
          Are you here to looking for candidates? That&apos;s awesome, get
          started now by register as recruiter.
        </p>
        <div className="flex">
          <Button className="bg-white text-primary uppercase font-medium">
            get started
          </Button>
        </div>
      </div>
      <Image
        src="/images/leaf-2.svg"
        alt="Left Leaf"
        width={504}
        height={300}
        className="absolute top-0 right-0"
      />
    </div>
  );
};

export default CallToAction;
