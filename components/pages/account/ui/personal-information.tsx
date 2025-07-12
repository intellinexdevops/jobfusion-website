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
import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";

const PersonalInformation = () => {
  return (
    <div className="mt-8">
      <p className="text-700 font-medium">Personal Information</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center bg-100 rounded-lg w-8 h-8">
            <Link size={16} className="text-600" />
          </div>
          <div>
            <p className="text-500 text-xs font-light">
              Profile URL <span className="text-600">(Click to Copy)</span>
            </p>
            <p className="text-sm text-primary">
              https://job.intellinex.dev/@chenterphai
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center bg-100 rounded-lg w-8 h-8">
            <Image
              src="/icons/at.svg"
              width={256}
              height={256}
              className="w-4 h-4"
              alt="Mail"
            />
          </div>
          <div>
            <p className="text-500 font-light text-xs">Username</p>
            <p className="text-sm text-700">chenterphai</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center bg-100 rounded-lg w-8 h-8">
            <Image
              src="/icons/mappin.svg"
              width={256}
              height={256}
              className="w-4 h-4"
              alt="Mail"
            />
          </div>
          <div>
            <p className="text-500 font-light text-xs">Physical Address</p>
            <p className="text-sm text-700">Siem Reap, Cambodia</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center bg-100 rounded-lg w-8 h-8">
            <Image
              src="/icons/briefcase-outline.svg"
              width={256}
              height={256}
              className="w-4 h-4"
              alt="Mail"
            />
          </div>
          <div>
            <p className="text-500 font-light text-xs">Title</p>
            <p className="text-sm text-700">Software Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
