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

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Archive,
  BookOpen,
  BriefcaseBusiness,
  FolderCheckIcon,
  Infinity,
  Verified,
} from "lucide-react";
import React from "react";
import EditEducation from "./edit-education";

interface DialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const EditBackgroundModal = ({ onOpenChange, open }: DialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        style={{ borderRadius: 20 }}
        className="w-full max-h-[90%] overflow-scroll"
      >
        <DialogTitle>Edit Background</DialogTitle>
        <div>
          <Tabs className="bg-transparent">
            <TabsList className="tabs-nx-list bg-white border-t-0 border-r-0 border-l-0 rounded-none w-full justify-start border-b gap-6 pb-0 px-0">
              <TabsTrigger
                value="education"
                className="tabs-nx-trigger data-[state=active]:text-primary border-b-2 border-b-white data-[state=active]:border-b-primary rounded-none px-0"
              >
                <BookOpen size={14} />
                <span>Education</span>
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="tabs-nx-trigger data-[state=active]:text-primary border-b-2 border-b-white data-[state=active]:border-b-primary rounded-none px-0"
              >
                <BriefcaseBusiness size={14} />
                <span className="">Experience</span>
              </TabsTrigger>

              <TabsTrigger
                value="work"
                className="tabs-nx-trigger data-[state=active]:text-primary border-b-2 border-b-white data-[state=active]:border-b-primary rounded-none px-0"
              >
                <Archive size={14} />
                <span className="">Work</span>
              </TabsTrigger>

              <TabsTrigger
                value="skill"
                className="tabs-nx-trigger data-[state=active]:text-primary border-b-2 border-b-white data-[state=active]:border-b-primary rounded-none px-0"
              >
                <Infinity size={14} />
                <span className="">Skill</span>
              </TabsTrigger>

              <TabsTrigger
                value="certificate"
                className="tabs-nx-trigger data-[state=active]:text-primary border-b-2 border-b-white data-[state=active]:border-b-primary rounded-none px-0"
              >
                <Verified size={14} />
                <span className="">Certificate</span>
              </TabsTrigger>

              <TabsTrigger
                value="course"
                className="tabs-nx-trigger data-[state=active]:text-primary border-b-2 border-b-white data-[state=active]:border-b-primary rounded-none px-0"
              >
                <BookOpen size={14} />
                <span className="">Course</span>
              </TabsTrigger>

              <TabsTrigger
                value="project"
                className="tabs-nx-trigger data-[state=active]:text-primary border-b-2 border-b-white data-[state=active]:border-b-primary rounded-none px-0"
              >
                <FolderCheckIcon size={14} />
                <span className="">Project</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="education">
              <EditEducation />
            </TabsContent>
            <TabsContent value="experience">Experience</TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditBackgroundModal;
