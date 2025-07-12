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
"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import PersonalInformation from "./ui/personal-information";
import ContactInformation from "./ui/contact-information";
import Education from "./ui/education";
import Experience from "./ui/experience";
import Work from "./ui/work";
import Skill from "./ui/skill";
import Certificate from "./ui/certificate";
import Course from "./ui/course";
import EditProfileModal from "./modal/edit-profile-modal";
import SetProfileStatusPopover from "./popover/set-profile-status";

const AccountComponent = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  return (
    <div>
      <div className="p-5 bg-white rounded-lg">
        <div className="flex items-center justify-between">
          <span className="text-lg text-800 font-semibold">Profile</span>
          <Button onClick={() => setOpen(true)} variant="link">
            Edit Profile
          </Button>
        </div>
        <div className="mt-6">
          <div className="flex items-start gap-6">
            <Image
              src="/images/Avatar.png"
              alt="Avatar"
              width={120}
              height={120}
              className="rounded-sm"
            />
            <div className="flex flex-col">
              <p className="text-xl font-semibold text-800">Chenter PHAI</p>
              <p className="text-sm text-800 mb-2">Software Engineer</p>
              <SetProfileStatusPopover />
              <div className="mt-5 flex items-center gap-3">
                <div className={`bg-primary w-2 h-2 rounded-full`} />
                <span className="text-xs text-800">Online</span>
              </div>
            </div>
          </div>
        </div>
        <PersonalInformation />
        <ContactInformation />
      </div>
      <div className="p-5 bg-white rounded-lg mt-6 pb-8">
        <div className="flex items-center justify-between">
          <span className="text-lg text-800 font-semibold">Background</span>
          <Button variant="link">Edit Background</Button>
        </div>
        <Education />
        <Experience />
        <Work />
        <Skill />
        <Certificate />
        <Course />
      </div>
      <EditProfileModal open={open} onOpenChange={setOpen} />
    </div>
  );
};

export default AccountComponent;
