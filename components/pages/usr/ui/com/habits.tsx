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

import React from "react";
import { PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";

const languageList = [
  { name: "Wake-up time", level: "Fluent", icon: "⏰" },
  { name: "Morning exercise", level: "Native", icon: "🤸‍♂️" },
  { name: "Meditate", level: "Basic", icon: "🧘" },
];

const HabitMasonry = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center gap-2 bg-habit/15 w-fit px-3 py-1.5 rounded-lg">
        <PawPrint className="text-habit" size={14} />
        <span className="text-sm text-habit">Habits</span>
      </div>
      <div className="flex flex-wrap gap-3">
        {languageList.map(({ name, icon }, index) => (
          <Button variant="icon" key={index}>
            {icon} &nbsp; {name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default HabitMasonry;
