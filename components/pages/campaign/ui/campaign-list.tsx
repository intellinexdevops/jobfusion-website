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
import { data } from "@/public/data/jobs";
import CampaignCard from "./campaign-card";

const CampaignList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
      {data.slice(data.length - 6).map((campaign, index) => (
        <CampaignCard data={campaign} key={index} />
      ))}
    </div>
  );
};

export default CampaignList;
