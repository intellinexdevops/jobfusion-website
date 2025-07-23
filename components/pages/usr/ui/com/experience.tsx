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

import { Briefcase } from "lucide-react";
import React from "react";
import ExperienceMasonryCard from "../card/experience-card";

const ExperienceMasonry = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center gap-2 bg-primary/15 w-fit px-3 py-1.5 rounded-lg">
        <Briefcase className="text-primary" size={14} />
        <span className="text-sm text-primary">Experience</span>
      </div>
      <div className="flex flex-col gap-y-5">
        {Array.from({ length: 2 }).map((_, index) => (
          <ExperienceMasonryCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceMasonry;
