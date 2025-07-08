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
import { Contact2, User2 } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="flex-1 flex flex-col gap-6">
      {/* Personal Info */}
      <div className="bg-white rounded-xl p-6 relative">
        <div className="flex items-center mb-4">
          <div className="bg-primary rounded w-7 h-7 flex items-center justify-center mr-3">
            <User2 size={18} className="text-white" />
          </div>
          <p className="text-lg text-neutral-800 font-semibold">
            Personal Info
          </p>
          <button className="ml-auto text-primary font-medium hover:underline">
            Edit
          </button>
        </div>
        <div className="grid grid-cols-2 gap-y-5 gap-x-4 text-neutral-700 mt-10">
          <div className="profile-label font-medium">Username</div>
          <div className="text-neutral-600 text-sm text-right">
            @william_adam
          </div>
          <div className="profile-label font-medium">First Name</div>
          <div className="text-neutral-600 text-sm text-right">Adman</div>
          <div className="profile-label font-medium">Last Name</div>
          <div className="text-neutral-600 text-sm text-right">William</div>
          <div className="profile-label font-medium">Gender</div>
          <div className="text-neutral-600 profile-label text-right">Male</div>
        </div>
      </div>
      {/* Contact Info */}
      <div className="bg-white rounded-xl p-6 relative">
        <div className="flex items-center mb-4">
          <div className="bg-primary rounded w-7 h-7 flex items-center justify-center mr-3">
            <Contact2 size={18} className="text-white" />
          </div>
          <p className="text-lg text-neutral-800 font-semibold">
            Contact Info.
          </p>
          <button className="ml-auto text-primary font-medium hover:underline">
            Edit
          </button>
        </div>
        <div className="grid grid-cols-2 gap-y-5 gap-x-4 text-gray-700 mt-5">
          <div className="text-neutral-800 text-sm font-medium">Address</div>
          <div className="text-neutral-600 text-sm text-right">
            Siem Reap Provinces
          </div>
          <div className="text-neutral-800 text-sm font-medium">Phone</div>
          <div className="text-neutral-600 text-sm text-right">
            (855) 964 903 404
          </div>
          <div className="text-neutral-800 text-sm font-medium">Email</div>
          <div className="text-neutral-600 text-sm text-right">
            hellomotherfkr@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
