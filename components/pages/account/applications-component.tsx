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
import BoardHeader from "@/components/base/board-header";
import { Button } from "@/components/ui/button";
import { Archive, RefreshCcw, Tag } from "lucide-react";
import React from "react";

const ApplicationComponent = () => {
  return (
    <div className="container mt-24">
      <BoardHeader title="My Applications">
        <div className="flex items-center gap-3 mt-5">
          <Button className="rounded-full">All</Button>
          <Button className="rounded-full" variant="outline">
            <Tag size={14} className="text-neutral-600" />
            Applied
          </Button>
          <Button className="rounded-full" variant="outline">
            <RefreshCcw size={14} className="text-neutral-600" />
            In Progress
          </Button>
          <Button className="rounded-full" variant="outline">
            <Archive size={14} className="text-neutral-600" />
            Archived
          </Button>
        </div>
      </BoardHeader>

      {/* CONENT HERE */}
    </div>
  );
};

export default ApplicationComponent;
