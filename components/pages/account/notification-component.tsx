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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "lucide-react";
import { Star } from "lucide-react";

const notifications = [
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
    read: false,
  },
];

const NotificationComponent = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-2">List Notification</h2>
      <p className="mb-4 text-muted-foreground">168 Notification</p>
      <div className="mb-6">
        <Tabs defaultValue="all" className="bg-transparent">
          <TabsList className="flex gap-4 justify-start bg-transparent border-none p-0">
            <TabsTrigger
              value="all"
              className="flex items-center gap-2 rounded-full px-4 py-1 border bg-green-500 text-white data-[state=inactive]:bg-green-100 data-[state=inactive]:text-gray-700"
            >
              <span className="bg-white text-green-600 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs">
                40
              </span>
              All
            </TabsTrigger>
            <TabsTrigger
              value="personal"
              className="flex items-center gap-2 rounded-full px-4 py-1 border bg-green-100 text-gray-700 data-[state=active]:bg-green-500 data-[state=active]:text-white"
            >
              <span className="bg-white text-green-600 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs">
                30
              </span>
              Personal
            </TabsTrigger>
            <TabsTrigger
              value="jobfusion"
              className="flex items-center gap-2 rounded-full px-4 py-1 border bg-green-100 text-gray-700 data-[state=active]:bg-green-500 data-[state=active]:text-white"
            >
              <span className="bg-white text-green-600 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs">
                10
              </span>
              JobFusion
            </TabsTrigger>
            <TabsTrigger
              value="favourite"
              className="flex items-center gap-2 rounded-full px-4 py-1 border bg-green-100 text-gray-700 data-[state=active]:bg-green-500 data-[state=active]:text-white"
            >
              <span className="bg-white text-green-600 font-bold rounded-full w-6 h-6 flex items-center justify-center text-xs">
                5
              </span>
              Favourite
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="mb-4 relative w-full">
        <Search className="absolute left-3 top-2.5 text-muted-foreground w-4 h-4" />
        <Input placeholder="Search something..." className="pl-10" />
      </div>

      <div className="space-y-3">
        {notifications.map((n, index) => (
          <Card
            key={index}
            className={`flex items-start p-4 space-x-4 transition-colors duration-200 cursor-pointer ${
              n.read ? "bg-green-50" : "bg-white"
            } hover:bg-[rgba(0,191,99,0.1)] hover:text-black`}
          >
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-xl">
              {n.icon}
            </div>
            <CardContent className="p-0 flex-1">
              <div className="flex justify-between">
                <h3 className="font-semibold text-sm line-clamp-1">
                  {n.title}
                </h3>
                <span className="text-xs text-muted-foreground">{n.time}</span>
              </div>
              <p className="text-xs text-muted-foreground line-clamp-1">
                {n.message}{" "}
                <span className="text-[#00BF63] cursor-pointer">
                  Read more.
                </span>
              </p>
              {n.button && (
                <Button size="sm" className="mt-2">
                  {n.button}
                </Button>
              )}
            </CardContent>
            <div className="flex flex-col items-center justify-between h-full">
              <Star className="w-4 h-4 text-muted-foreground mb-2 cursor-pointer" />
              <button className="text-muted-foreground text-xs">🗑</button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NotificationComponent;
