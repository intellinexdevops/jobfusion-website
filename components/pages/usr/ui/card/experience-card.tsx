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

import Image from "next/image";
import React from "react";

const ExperienceMasonryCard = () => {
  return (
    <div className="flex gap-x-4">
      <div className="bg-holder">
        <Image
          src="/icons/briefcase-solid.svg"
          alt="Experience Icon"
          className="w-11 h-11"
          width={44}
          height={44}
        />
      </div>
      <div>
        <p className="profile-title">Software Engineer</p>
        <div className="flex items-center gap-x-2">
          <p className="profile-subtitle">Google Inc.</p>
          <div className="w-1 h-1 bg-500 rounded-full" />
          <p className="profile-subtitle">Full-time</p>
        </div>
        <p className="profile-subtitle">Jan 2023 - Present</p>
      </div>
    </div>
  );
};

export default ExperienceMasonryCard;
