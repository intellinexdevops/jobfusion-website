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
import { ExpressJS, GitHub, NextJS, ReactJS } from "@/public/icons/technologies";
import { AtomIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const skillList = [
  { name: "ReactJS", icon: ReactJS },
  { name: "ExpressJS", icon: ExpressJS },
  { name: "NextJS", icon: NextJS },
  { name: "GitHub", icon: GitHub },
];

const Skill = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center gap-2 bg-skill/15 w-fit px-3 py-1.5 rounded-lg">
        <AtomIcon className="text-skill" size={16} />
        <span className="text-sm text-skill">Skill</span>
      </div>
      <div className="flex gap-3 flex-wrap">
        {skillList.map(({ icon, name }, index) => (
          <Button variant="icon" key={index}>
            <Image src={icon} width={14} height={14} alt="React" />
            <span>{name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Skill;
