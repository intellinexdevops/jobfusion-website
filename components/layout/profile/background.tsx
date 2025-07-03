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

import { Briefcase } from "lucide-react";
import React from "react";

const ProfileBackground = () => {
  return (
    <div className="flex-1 flex flex-col gap-6">
      <div className="bg-white rounded-xl p-6 relative">
        <div className="flex items-center mb-4">
          <div className="bg-primary rounded-full p-2 text-white mr-2">
            <Briefcase size={18} />
          </div>
          <h2 className="text-lg font-semibold">Experience</h2>
          <button className="ml-auto text-green-500 font-medium hover:underline">
            Edit
          </button>
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
          <div className="bg-green-400 rounded-full p-2 text-white mr-2">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 3a9 9 0 0 1 9 9c0 4.5-3.5 8.2-8 8.9-4.5-.7-8-4.4-8-8.9a9 9 0 0 1 9-9Z"
              ></path>
            </svg>
          </div>
          <h2 className="text-lg font-semibold">Education</h2>
          <button className="ml-auto text-green-500 font-medium hover:underline">
            Edit
          </button>
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
          <div className="bg-gray-200 rounded-full p-2 text-green-400 mr-2">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M21 19V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2Z"
              ></path>
            </svg>
          </div>
          <h2 className="text-lg font-semibold">Works</h2>
          <button className="ml-auto text-green-500 font-medium hover:underline">
            Edit
          </button>
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
          <div className="bg-gray-200 rounded-full p-2 text-green-400 mr-2">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 5v14m7-7H5"></path>
            </svg>
          </div>
          <h2 className="text-lg font-semibold">Skills</h2>
          <button className="ml-auto text-green-500 font-medium hover:underline">
            Edit
          </button>
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
          <div className="bg-gray-200 rounded-full p-2 text-green-400 mr-2">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12A10 10 0 0 1 12 2Zm1 10v4h-2v-4H9l3-3 3 3h-2Z"
              ></path>
            </svg>
          </div>
          <h2 className="text-lg font-semibold">Certification</h2>
          <button className="ml-auto text-green-500 font-medium hover:underline">
            Edit
          </button>
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
          <div className="bg-green-400 rounded-full p-2 text-white mr-2">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M6 2a1 1 0 0 1 1 1v1h10V3a1 1 0 1 1 2 0v18a1 1 0 1 1-2 0v-1H7v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm1 3v14h10V5H7Zm2 3h6v2H9V8Zm0 4h4v2H9v-2Z"
              ></path>
            </svg>
          </div>
          <h2 className="text-lg font-semibold">Course</h2>
          <button className="ml-auto text-green-500 font-medium hover:underline">
            Edit
          </button>
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
    </div>
  );
};

export default ProfileBackground;
