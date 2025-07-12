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
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, Trash2 } from "lucide-react";
import SearchInput from "@/components/ui/search-input";
import Image from "next/image";

const notifications = [
  {
    icon: "G",
    title: "Congratulations! You have successfully invited ...",
    message:
      "A problem isn't truly solved until it's solved for all. Googlers build products",
    time: "2 days ago",
    button: "View Jobs",
    read: true,
  },
  {
    icon: "G",
    title: "Congratulations! You have successfully invited ...",
    message:
      "A problem isn't truly solved until it's solved for all. Googlers build products",
    time: "2 days ago",
    read: false,
  },
  {
    icon: "G",
    title: "Congratulations! You have successfully invited ...",
    message:
      "A problem isn't truly solved until it's solved for all. Googlers build products",
    time: "2 days ago",
    button: "View Jobs",
    read: false,
  },
  {
    icon: "J",
    title: "Successfully paid for basic plans.",
    message:
      "A problem isn't truly solved until it's solved for all. Googlers build products",
    time: "2 days ago",
    button: "View Details",
    read: false,
  },
  {
    icon: "J",
    title: "Upgrade your account!",
    message:
      "A problem isn't truly solved until it's solved for all. Googlers build products",
    time: "2 days ago",
    button: "Upgrade",
    read: true,
  },
];

const NotificationComponent = () => {
  return (
    <div className="p-5 bg-white rounded-lg">
      <h2 className="text-xl font-semibold text-neutral-800">
        List Notification
      </h2>
      <p className="mb-4 text-sm text-muted-foreground">168 Notification</p>
      <div className="mb-6">
        <Tabs defaultValue="all" className="bg-transparent">
          <TabsList className="flex gap-4 justify-start bg-transparent border-none p-0 transition-all duration-300">
            <TabsTrigger
              value="all"
              className="flex items-center gap-1 rounded-full h-8 text-gray-700 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <span className="data-[state=active]:bg-transparent px-1.5 py-0.5 text-white bg-primary text-[10px] rounded-full">
                50
              </span>
              All
            </TabsTrigger>
            <TabsTrigger
              value="personal"
              className="flex items-center gap-1 rounded-full h-8 text-gray-700 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <span className="data-[state=active]:bg-transparent px-1.5 py-0.5 text-white bg-primary text-[10px] rounded-full">
                30
              </span>
              Personal
            </TabsTrigger>
            <TabsTrigger
              value="jobfusion"
              className="flex items-center gap-1 rounded-full h-8 text-gray-700 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <span className="data-[state=active]:bg-transparent px-1.5 py-0.5 text-white bg-primary text-[10px] rounded-full">
                30
              </span>
              JobFusion
            </TabsTrigger>
            <TabsTrigger
              value="favourite"
              className="flex items-center gap-1 rounded-full h-8 text-gray-700 data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              <span className="data-[state=active]:bg-transparent px-1.5 py-0.5 text-white bg-primary text-[10px] rounded-full">
                3
              </span>
              Favourite
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <div className="space-y-3">
              {notifications.map((n, index) => (
                <Card
                  key={index}
                  className={`flex items-center p-4 space-x-4 transition-colors duration-200 cursor-pointer ${
                    !n.read ? "bg-primary/10" : "bg-white"
                  } hover:bg-[rgba(0,191,99,0.1)] hover:text-black`}
                >
                  <CardContent className="p-0 flex-1 flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <div
                        className={`${
                          !n.read ? "border border-neutral-700" : ""
                        } w-2 h-2 rounded-full `}
                      />
                      <Star size={12} />
                    </div>
                    <div className="flex flex-1 items-start gap-3">
                      <div className="w-8 h-8 rounded-full relative flex items-center justify-center font-bold text-xl">
                        <Image src="/icons/google.svg" fill alt="Logo" />
                      </div>
                      <div className="flex w-full justify-between">
                        <div>
                          <p className="font-medium text-neutral-600 text-sm line-clamp-1">
                            {n.title}
                          </p>
                          <p className="text-xs text-muted-foreground line-clamp-1">
                            {n.message}{" "}
                            <span className="text-primary cursor-pointer">
                              Read more.
                            </span>
                          </p>
                          {n.button && (
                            <Button size="sm" className="mt-2">
                              {n.button}
                            </Button>
                          )}
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="text-xs text-muted-foreground">
                            {n.time}
                          </span>
                          <Trash2 size={16} className="text-error" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mb-4 relative w-full">
        <SearchInput />
      </div>
    </div>
  );
};

export default NotificationComponent;
