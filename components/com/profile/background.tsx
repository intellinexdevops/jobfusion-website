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

import { Archive, Book, Briefcase, GraduationCap, Infinity, Languages, Verified } from "lucide-react";
import React from "react";

const ProfileBackground = () => {
  return (
    <div className="flex-1 flex flex-col gap-6">
      <div className="bg-white rounded-xl p-6 relative">
        <div className="flex items-center mb-4">
          <div className="bg-primary rounded w-7 h-7 flex items-center justify-center mr-3">
            <Briefcase size={18} className="text-white" />
          </div>
          <h2 className="text-lg font-semibold">Experience</h2>

        </div>
        <div className="flex flex-col gap-2">
          <div>
            <div className="font-medium">Software Engineer</div>
            <div className="text-gray-400 text-sm">inlabtek — Full-time</div>
            <div className="text-gray-400 text-sm">2023-05-01 - Present</div>
            <div className="text-gray-500 text-sm">New York, USA</div>
          </div>
          <div className="mt-3">
            <div className="font-medium">Cloud Engineer</div>
            <div className="text-gray-400 text-sm">Google — Full-time</div>
            <div className="text-gray-400 text-sm">2020-01-01 - 2023-01-01</div>
            <div className="text-gray-500 text-sm">Mountain View, USA</div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6 relative">
        <div className="flex items-center mb-4">
          <div className="bg-primary rounded w-7 h-7 flex items-center justify-center mr-3">
            <GraduationCap size={18} className="text-white" />
          </div>
          <h2 className="text-lg font-semibold">Education</h2>
        </div>
        <div>
          <div className="font-medium">Information Technology</div>
          <div className="text-gray-400 text-sm">
            University of South-East Asia
          </div>
          <div className="text-gray-400 text-sm">2023-01-01 – Present</div>
        </div>
      </div>
      {/* Works */}
      <div className="bg-white rounded-xl shadow p-6 relative">
        <div className="flex items-center mb-4">
          <div className="bg-primary rounded w-7 h-7 flex items-center justify-center mr-3">
            <Archive size={18} className="text-white" />
          </div>
          <h2 className="text-lg font-semibold">Works</h2>
        </div>
        <div className="flex gap-4">
          <div className="w-1/2 h-24 bg-gray-100 rounded-lg flex flex-col items-center justify-center">
            <span className="font-medium">STC Vender App</span>
            <span className="text-gray-400 text-xs">2023-01-01</span>
          </div>
          <div className="w-1/2 h-24 bg-gray-100 rounded-lg flex flex-col items-center justify-center">
            <span className="font-medium">Siem Reap Wonder</span>
            <span className="text-gray-400 text-xs">2023-01-01</span>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className="bg-white rounded-xl shadow p-6 relative">
        <div className="flex items-center mb-4">
          <div className="bg-primary rounded w-7 h-7 flex items-center justify-center mr-3">
            <Infinity size={18} className="text-white" />
          </div>
          <h2 className="text-lg font-semibold">Skills</h2>
        </div>
        <div>
          <div className="font-medium">Mobile Development</div>
          <div className="text-gray-400 text-sm">STC Vender App</div>
          <div className="text-gray-400 text-sm mb-2">
            University of South-East Asia
          </div>
          <div className="font-medium">Back-End Development</div>
          <div className="text-gray-400 text-sm">STC Vender App</div>
          <div className="text-gray-400 text-sm">
            University of South-East Asia
          </div>
        </div>
      </div>
      {/* Certification */}
      <div className="bg-white rounded-xl shadow p-6 relative">
        <div className="flex items-center mb-4">
          <div className="bg-primary rounded w-7 h-7 flex items-center justify-center mr-3">
            <Verified size={18} className="text-white" />
          </div>
          <h2 className="text-lg font-semibold">Certification</h2>
        </div>
        <div className="flex gap-4">
          <div className="w-1/2 bg-gray-100 rounded-lg p-3 flex flex-col">
            <span className="font-medium">Google Certified Professional</span>
            <span className="text-gray-400 text-xs mb-1">Google Inc.</span>
            <span className="text-xs text-orange-500 font-medium bg-orange-50 w-fit px-2 py-0.5 rounded">
              Verifying
            </span>
          </div>
          <div className="w-1/2 bg-gray-100 rounded-lg p-3 flex flex-col">
            <span className="font-medium">Google Certified Professional</span>
            <span className="text-gray-400 text-xs mb-1">
              Microsoft Corporation
            </span>
            <span className="text-xs text-green-500 font-medium bg-green-50 w-fit px-2 py-0.5 rounded">
              Verified
            </span>
          </div>
        </div>
      </div>
      {/* Course */}
      <div className="bg-white rounded-xl shadow p-6 relative">
        <div className="flex items-center mb-4">
          <div className="bg-primary rounded w-7 h-7 flex items-center justify-center mr-3">
            <Book size={18} className="text-white" />
          </div>
          <h2 className="text-lg font-semibold">Course</h2>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="font-medium">
              Introduction to Computer Science
            </span>
            <span className="text-xs text-orange-500 font-medium bg-orange-50 px-2 py-0.5 rounded">
              Verifying
            </span>
          </div>
          <span className="text-gray-400 text-xs mb-1">
            Amazon Web Services
          </span>
          <div className="flex items-center gap-2">
            <span className="font-medium">Advanced Programming</span>
            <span className="text-xs text-green-500 font-medium bg-green-50 px-2 py-0.5 rounded">
              Verified
            </span>
          </div>
          <span className="text-gray-400 text-xs">Amazon Web Services</span>
          <span className="text-gray-400 text-xs">Google Inc.</span>
        </div>
      </div>

      {/* Language */}
      <div className="bg-white rounded-xl shadow p-6 relative">
        <div className="flex items-center mb-4">
          <div className="bg-primary rounded w-7 h-7 flex items-center justify-center mr-3">
            <Languages size={18} className="text-white" />
          </div>
          <h2 className="text-lg font-semibold">Languages</h2>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="font-medium">
              Khmer
            </span>

          </div>
          <span className="text-gray-400 text-xs mb-1">
            Native
          </span>
          <div className="flex items-center gap-2">
            <span className="font-medium">English</span>

          </div>
          <span className="text-gray-400 text-xs">Intermediate</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileBackground;
