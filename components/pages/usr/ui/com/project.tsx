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
import { ArchiveIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProjectMasonry = ({ isImage = true }: { isImage?: boolean }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center gap-2 bg-project/15 w-fit px-3 py-1.5 rounded-lg">
        <ArchiveIcon className="text-project" size={14} />
        <span className="text-sm text-project">Project</span>
      </div>
      {isImage && (
        <div className="bg-200 w-full h-80 rounded-lg flex items-center justify-center">
          <Image
            src="/icons/project.svg"
            alt="Project Icon"
            className="w-28 h-28"
            width={128}
            height={128}
          />
        </div>
      )}
      <div>
        <p className="profile-title">Vizzy.com</p>
        <p className="profile-subtitle">A platform for visualizing data</p>
        <div className="flex mt-2 gap-2 flex-wrap">
          <Button variant="icon">
            <Image loading="lazy" src={ExpressJS} alt="ExpressJS" width={14} height={14} />
            <span>ExpressJS</span>
          </Button>
          <Button variant="icon">
            <Image src={GitHub} alt="ExpressJS" width={14} height={14} />
            <span>GibHub</span>
          </Button>
          <Button variant="icon">
            <Image src={NextJS} alt="ExpressJS" width={14} height={14} />
            <span>NextJS</span>
          </Button>
          <Button variant="icon">
            <Image src={ReactJS} alt="ExpressJS" width={14} height={14} />
            <span>ReactJS</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectMasonry;
