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
import { LanguagesIcon } from "lucide-react";
import { Chinese, English, Khmer } from "@/public/icons/locales";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const languageList = [
  { name: "English", level: "Fluent", icon: English },
  { name: "Khmer", level: "Native", icon: Khmer },
  { name: "Chinese", level: "Basic", icon: Chinese },
];

const LanguageMasonry = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center gap-2 bg-primary/15 w-fit px-3 py-1.5 rounded-lg">
        <LanguagesIcon className="text-primary" size={14} />
        <span className="text-sm text-primary">Language</span>
      </div>
      <div className="flex flex-wrap gap-3">
        {languageList.map(({ name, icon }, index) => (
          <Button variant="icon" key={index}>
            <Image src={icon} alt={name} width={14} height={14} />
            {name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default LanguageMasonry;
