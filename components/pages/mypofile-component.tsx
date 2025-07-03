"use client";
import { Component, MoreHorizontal, Pencil, UserPlus2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import About from "@/components/layout/profile/about";
import ProfileBackground from "@/components/layout/profile/background";

function MyProfileComponent() {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <div>
      <div className="bg-white pt-20 pb-16">
        <div className="container mx-auto">
          <div className="relative bg-gradient-to-r from-green-400 to-teal-400 rounded-xl h-48 mb-16">
            <button className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100">
              <span role="img" aria-label="edit">
                <Pencil size={14} className="text-neutral-500" />
              </span>
            </button>
            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
              <Image
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Avatar"
                className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
                width={256}
                height={256}
              />
              <button className="absolute bottom-2 right-2 bg-white rounded-full p-2 hover:bg-neutral-100">
                <span role="img" aria-label="edit">
                  <Pencil size={14} className="text-neutral-500" />
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center mt-20 mb-4">
            <h1 className="text-2xl font-bold">William Adam</h1>
            <span className="text-neutral-500">
              2.4K followers • 0 following
            </span>
            <div className="flex items-center gap-2 mt-2">
              <Image
                src="/icons/linkedin.svg"
                alt="LinkedIn Link"
                width={256}
                height={256}
                className="w-4 h-4"
              />
              <Link
                href="https://www.linkedin.com/"
                className="text-sky-700 font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn Link
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-16">
        <div className="flex justify-between items-center mb-6 mt-8">
          <div className="flex items-center gap-4">
            <button
              className={`px-4 py-2 text-sm font-medium focus:outline-none ${
                activeTab === "about"
                  ? "bg-primary px-3 py-2 rounded-lg text-white"
                  : "text-neutral-500"
              }`}
              onClick={() => setActiveTab("about")}
            >
              About
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium focus:outline-none ${
                activeTab === "background"
                  ? "bg-primary px-3 py-2 rounded-lg text-white"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("background")}
            >
              Background
            </button>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="text-neutral-700 text-sm">
              <Component size={14} />
              Edit Section
            </Button>
            <Button variant="outline" className="text-neutral-700 text-sm">
              <MoreHorizontal size={14} />
              More
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {activeTab === "about" ? <About /> : <ProfileBackground />}

          <div className="w-full md:w-[340px] flex flex-col gap-6 sticky">
            <div className="bg-white rounded-xl p-6 mb-2">
              <div className="flex items-center mb-2">
                <div className="bg-blue-100 p-2 rounded-full mr-2">
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5Zm2 0v14h12V5H6Zm3 6h6v2H9v-2Z"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-700 font-semibold text-sm">
                  Improve skills
                </span>
                <button className="ml-auto text-gray-400 hover:text-gray-600">
                  ✕
                </button>
              </div>
              <div className="text-gray-600 text-sm mb-2">
                We are suggesting you to figure out more about{" "}
                <b>Back-end Development</b> according we analyze ...
              </div>
              <Button size="sm">Explore</Button>
            </div>
            {/* People You May Know */}
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-medium mb-4">People you may know</h3>
              <div className="flex flex-col gap-3 gap-y-6">
                {[1, 2, 3, 4].map((v) => (
                  <div key={v} className="flex items-center gap-2">
                    <Image
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      alt="Avatar"
                      className="w-10 h-10 rounded-full object-cover"
                      width={256}
                      height={256}
                    />
                    <div className="flex-1">
                      <div className="font-medium text-sm">@william_adam</div>
                      <div className="text-xs text-gray-500">
                        UX/UI Designer
                      </div>
                    </div>
                    <Button className="rounded-full" size="sm">
                      <UserPlus2 size={13} /> Follow
                    </Button>
                  </div>
                ))}
              </div>
              <button className="mt-6 pt-4 border-t border-t-neutral-200 w-full text-neutral-500 text-sm font-medium hover:underline">
                See all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfileComponent;
