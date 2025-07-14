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

const CourseCard = () => {
  return (
    <div className="flex items-start gap-4">
      <div>
        <p className="text-sm font-medium text-800">Information Technology </p>
        <div className="mt-2 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Image
              src="/images/placeholder-image.webp"
              alt="Placeholder"
              width={256}
              height={256}
              className="w-4 h-4 rounded"
            />
            <p className="text-xs text-500">University of South-East Asia</p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              src="/images/placeholder-image.webp"
              alt="Placeholder"
              width={256}
              height={256}
              className="w-4 h-4 rounded"
            />
            <p className="text-xs text-500">University of South-East Asia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
