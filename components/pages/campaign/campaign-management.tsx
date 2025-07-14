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
import BoardHeader from "@/components/base/board-header";
import { Button } from "@/components/ui/button";
import { Archive, Ban, Earth, Folder } from "lucide-react";
import React from "react";

type filterStatus = "All" | "Live" | "Closed" | "Draft" | "Archived";

const CampaignManagement = () => {
  const [filterStatus, setFilterStatus] = React.useState<filterStatus>("All");
  return (
    <div className="p-5 bg-white rounded-lg">
      <BoardHeader title="Jobs">
        <div className="flex items-center gap-3 mt-5">
          {["All", "Live", "Closed", "Draft", "Archived"].map((status) => (
            <Button
              key={status}
              variant={filterStatus === status ? "default" : "outline"}
              className="rounded-full flex items-center gap-1"
              onClick={() => setFilterStatus(status as filterStatus)}
            >
              {status === "Live" && <Earth size={14} />}
              {status === "Closed" && <Ban size={14} />}
              {status === "Draft" && <Folder size={14} />}
              {status === "Archived" && <Archive size={14} />}
              {status}
            </Button>
          ))}
        </div>
      </BoardHeader>
    </div>
  );
};

export default CampaignManagement;
