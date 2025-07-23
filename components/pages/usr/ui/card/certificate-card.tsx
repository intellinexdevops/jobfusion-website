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
import Link from "next/link";
import React from "react";

const CertificateMasonryCard = () => {
  return (
    <Link
      href="#"
      className="flex gap-x-4 transition-all duration-300 ease-in-out hover:scale-[1.01] group"
    >
      <div className="bg-holder">
        <Image
          src="/icons/verified.svg"
          alt="Experience Icon"
          className="w-11 h-11"
          width={44}
          height={44}
        />
      </div>
      <div>
        <p className="profile-title group-hover:text-education group-hover:underline transition-all duration-300">
          Computer Science
        </p>
        <p className="profile-subtitle">University of South-East Asia</p>
        <p className="profile-subtitle">Jan 2023 - Present</p>
      </div>
    </Link>
  );
};

export default CertificateMasonryCard;
