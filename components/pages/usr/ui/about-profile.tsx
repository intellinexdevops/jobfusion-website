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
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Share2Icon, UserPlus2 } from "lucide-react";

const AboutProfile = () => {
  return (
    <div className="bg-white h-fit rounded-lg col-span-12 md:col-span-4 lg:col-span-3 overflow-hidden md:sticky top-24">
      <div>
        <Image
          src="/images/Avatar.png"
          alt="Avatar"
          className="w-full h-full object-cover"
          width={256}
          height={256}
        />
      </div>
      <div className="p-[20px] border-b-[0.8px] border-200">
        <p className="lg:text-2xl max-md:text-2xl text-xl font-semibold text-800">Chenter PHAI</p>
        <p className="lg:text-base max-md:text-base text-sm font-medium text-800">
          Software Engineer
        </p>
        <div className="flex items-center gap-4 mt-1">
          <p className="text-600 text-xs lg:text-sm max-md:text-sm">2.4K Followers</p>
          <div className="w-1 h-1 rounded-full bg-600" />
          <p className="text-600 text-xs lg:text-sm max-md:text-sm">1.2K Following</p>
        </div>
        <div className="flex items-center gap-x-2 mt-4">
          <Image
            src="/icons/linkedin.svg"
            alt="LinkedIn"
            className="lg:w-4 lg:h-4 w-3 h-3 max-md:w-4 max-md:h-4"
            width={24}
            height={24}
          />
          <p className="text-[#0A66C2] text-xs lg:text-sm max-md:text-base font-medium">LinkedIn</p>
        </div>
      </div>
      <div className="p-[20px] flex flex-col gap-y-4 border-b-[0.8px] border-200">
        <div className="flex items-center gap-x-2">
          <Image
            src="/icons/mappin.svg"
            alt="Location"
            className="lg:w-4 lg:h-4 w-3 h-3 max-md:w-4 max-md:h-4"
            width={24}
            height={24}
          />
          <p className="text-600 text-xs lg:text-sm max-md:text-sm">Phnom Penh, Cambodia</p>
        </div>
        <div className="flex items-center gap-x-2">
          <Image
            src="/icons/mail.svg"
            alt="Location"
            className="lg:w-4 lg:h-4 w-3 h-3 max-md:w-4 max-md:h-4"
            width={24}
            height={24}
          />
          <p className="text-600 text-xs lg:text-sm max-md:text-sm">chenterphai61@gmail.com</p>
        </div>
        <div className="flex items-center gap-x-2">
          <Image
            src="/icons/phone-outline.svg"
            alt="Location"
            className="lg:w-4 lg:h-4 w-3 h-3 max-md:w-4 max-md:h-4"
            width={24}
            height={24}
          />
          <p className="text-600 text-xs lg:text-sm max-md:text-sm">(855) 964 903 404</p>
        </div>
      </div>
      <div className="p-[20px] flex items-center gap-4">
        <Button variant="outline" className="bg-transparent border-primary flex-1">
          <UserPlus2 className="text-xs lg:text-sm max-md:text-sm text-primary" />
          <span className="text-xs lg:text-sm max-md:text-sm text-primary">Follow</span>
        </Button>
        <Button className="flex-1">
          <Share2Icon className="text-xs lg:text-sm max-md:text-sm" />
          <span className="text-xs lg:text-sm max-md:text-sm">Share</span>
        </Button>
      </div>
    </div>
  );
};

export default AboutProfile;
