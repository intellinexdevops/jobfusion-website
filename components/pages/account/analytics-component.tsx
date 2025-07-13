"use client";

import React, { useEffect, useRef, useState } from "react";
import { Pencil, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function AnalyticsComponent() {
  // Analytics data
  const analytics = [
    {
      value: 450,
      label: "Post impressions",
      detail: "0% past 7 days",
      detailColor: "text-green-500",
    },
    {
      value: 13,
      label: "Followers",
      detail: "348.9% past 7 days",
      detailColor: "text-blue-500",
    },
    {
      value: 13,
      label: "Profile viewers",
      detail: "Past 90 days",
      detailColor: "text-neutral-500",
    },
    {
      value: 450,
      label: "Search appearances",
      detail: "Previous week",
      detailColor: "text-neutral-500",
    },
  ];

  // Weekly sharing tracker data
  const shareTracker = {
    period: "Jun 30–Jul 6",
    done: 0,
    goal: 3,
    prompt: "No actions yet. Take 3 actions to achieve the weekly sharing goal.",
  };

  // Actions cards data
  const actions = [
    {
      label: "posts",
      count: 0,
      description:
        "Members who post one per week on average see up to 4× more profile views.",
      linkText: "Start a post",
      linkHref: "#",
      Icon: Pencil,
    },
    {
      label: "comments",
      count: 0,
      description:
        "Members who comment one per week on average see up to 3× more profile views.",
      linkText: "Comment on feed",
      linkHref: "#",
      Icon: MessageCircle,
    },
  ];

  return (
    <div className=" min-h-screen space-y-8">
      {/* Header with profile image */}
      <div className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-4">
        <Image
          src="/images/Avatar.png"
          alt="Profile"
          width={52}
          height={52}
          className="rounded-full w-10 h-10 object-cover"
        />
        <div>
          <p className="text-lg font-semibold">Analytics &amp; tools</p>
          <span className="text-xs text-neutral-500">Saturday, July 5</span>
        </div>
      </div>

      {/* Analytic Cards */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-sm font-medium text-neutral-700 mb-4">Analytic</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {analytics.map((item) => (
            <div
              key={item.label}
              className="border border-gray-200 rounded-lg p-4 flex flex-col"
            >
              <span className="text-2xl font-bold">{item.value}</span>
              <span className="text-sm text-neutral-600 mt-1">{item.label}</span>
              <span
                className={`text-xs mt-2 font-medium ${item.detailColor}`}
              >
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Sharing Tracker */}
      <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
        <div className="flex items-center gap-4">
          <div className="bg-green-100 p-2 rounded">
            <Pencil size={20} className="text-green-500" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Weekly sharing tracker</h3>
            <p className="text-sm text-neutral-500">
              Increase your visibility by posting or commenting. We suggest
              tasking 3 actions every week
            </p>
          </div>
        </div>

        {/* Progress Card */}
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-neutral-600">{shareTracker.period}</span>
            <span className="text-sm font-medium">
              {shareTracker.done} of {shareTracker.goal} actions
            </span>
          </div>
          <p className="text-sm text-neutral-500 mt-2">{shareTracker.prompt}</p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {actions.map(({ label, count, description, linkText, linkHref, Icon }) => (
            <div
              key={label}
              className="border border-gray-200 rounded-lg p-4 flex flex-col justify-between"
            >
              <div>
                <h4 className="text-xl font-bold">
                  {count} {label}
                </h4>
                <p className="text-sm text-neutral-500 mt-2">{description}</p>
              </div>
              <a href={linkHref} className="mt-4 text-primary-600 font-medium">
                {linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
