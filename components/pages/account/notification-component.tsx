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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SearchInput from "@/components/ui/search-input";
import { NotificationCard } from "./ui/notification-card";

export interface NotificationProps {
  icon: string;
  title: string;
  message: string;
  time: string;
  button?: string;
  read: boolean;
}

const notifications: NotificationProps[] = [
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

const personalnoti: NotificationProps[] = [
  {
    icon: "G",
    title: "Congratulations! You have successfully invited ...",
    message:
      "A problem isn't truly solved until it's solved for all. Googlers build products",
    time: "2 days ago",
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

const jobfusionnoti: NotificationProps[] = [
  {
    icon: "G",
    title: "Congratulations! You have successfully invited ...",
    message:
      "A problem isn't truly solved until it's solved for all. Googlers build products",
    time: "2 days ago",
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
];

const favouritenoti: NotificationProps[] = [
  {
    icon: "G",
    title: "Congratulations! You have successfully invited ...",
    message:
      "A problem isn't truly solved until it's solved for all. Googlers build products",
    time: "2 days ago",
    read: false,
  },
];

const NotificationComponent = () => {
  return (
    <div className="p-5 bg-white rounded-lg">
      <h2 className="text-xl font-semibold text-neutral-800">
        List Notification
      </h2>
      <p className="mb-4 text-sm text-muted-foreground">168 Notification</p>
      <div className="mb-4 relative w-full">
        <SearchInput />
      </div>
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
                <NotificationCard n={n} key={index} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="personal">
            <div className="space-y-3">
              {personalnoti.map((n, index) => (
                <NotificationCard n={n} key={index} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="jobfusion">
            <div className="space-y-3">
              {jobfusionnoti.map((n, index) => (
                <NotificationCard n={n} key={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="favourite">
            <div className="space-y-3">
              {favouritenoti.map((n, index) => (
                <NotificationCard n={n} key={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
export default NotificationComponent;
