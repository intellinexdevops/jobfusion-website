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
import React from "react";
import EducationCard from "./education-card";

const Education = () => {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-2">
        <BookOpen size={16} className="text-700" />
        <span className="text-700 font-medium">Education</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
        <EducationCard />
      </div>
    </div>
  );
};

export default Education;
