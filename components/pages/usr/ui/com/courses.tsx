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

import { BookOpen } from "lucide-react";
import Link from "next/link";
import React from "react";
import CourseMasonryCard from "../card/course-card";

const CourseMasonry = () => {
  return (
    <div className="flex flex-col gap-y-4 group relative">
      <div className="flex items-center gap-2 bg-course/15 w-fit px-3 py-1.5 rounded-lg">
        <BookOpen
          className="text-course group-hover:-rotate-12 group-hover:animate-pulse transition-all duration-200 ease-linear"
          size={16}
        />
        <span className="text-sm text-course">Courses</span>
      </div>
      <div className="flex flex-col gap-y-5">
        {Array.from({ length: 2 }).map((_, index) => (
          <CourseMasonryCard key={index} />
        ))}
      </div>
      <Link
        href="#"
        className="group-hover:opacity-100 opacity-0 right-2 absolute transition-all duration-300 text-xs text-course hover:underline"
      >
        <span>See all</span>
      </Link>
    </div>
  );
};

export default CourseMasonry;
