"use client";
import { Contact2, Pencil, User2, UserPlus2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";

function MyProfileComponent() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="container mx-auto mt-20 mb-16 px-4">
      {/* Profile Header */}
      <div className="relative bg-gradient-to-r from-green-400 to-teal-400 rounded-xl h-40 mb-16">
        {/* Edit Cover Button */}
        <button className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100">
          <span role="img" aria-label="edit">
            <Pencil size={14} className="text-neutral-500" />
          </span>
        </button>
        {/* Avatar */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-16">
          <Image
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Avatar"
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
            width={256}
            height={256}
          />
          {/* Edit Avatar Button */}
          <button className="absolute bottom-2 right-2 bg-white rounded-full p-2 hover:bg-neutral-100">
            <span role="img" aria-label="edit">
              <Pencil size={14} className="text-neutral-500" />
            </span>
          </button>
        </div>
      </div>
      {/* Profile Info */}
      <div className="flex flex-col items-center mt-20 mb-4">
        <h1 className="text-2xl font-bold">William Adam</h1>
        <span className="text-neutral-500">2.4K followers • 0 following</span>
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

      {/* Tabs and Buttons */}
      <div className="flex justify-between items-center mb-6 mt-8">
        <div className="flex items-center gap-6">
          {/* Tabs (About | Background) */}
          <button
            className={`px-4 py-2 font-medium focus:outline-none ${
              activeTab === "about"
                ? "bg-primary px-3 py-2 rounded-full text-white"
                : "text-neutral-500"
            }`}
            onClick={() => setActiveTab("about")}
          >
            About
          </button>
          <button
            className={`px-4 py-2 font-medium focus:outline-none ${
              activeTab === "background"
                ? "bg-primary px-3 py-2 rounded-full text-white"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("background")}
          >
            Background
          </button>
        </div>
        <div className="flex gap-4">
          <button className="text-neutral-500 hover:text-neutral-700">
            Edit Section
          </button>
          <button className="text-neutral-500 hover:text-neutral-700">
            More
          </button>
        </div>
      </div>

      {/* Main Content */}
      {activeTab === "about" ? (
        // ----- About Tab -----
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column */}
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
                <div className="text-neutral-800 font-medium">Username</div>
                <div className="text-neutral-600 text-right">@william_adam</div>
                <div className="text-neutral-800 font-medium">First Name</div>
                <div className="text-neutral-600 text-right">Adman</div>
                <div className="text-neutral-800 font-medium">Last Name</div>
                <div className="text-neutral-600 text-right">William</div>
                <div className="text-neutral-800 font-medium">Gender</div>
                <div className="text-neutral-600 text-right">Male</div>
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
              <div className="grid grid-cols-2 gap-y-5 gap-x-4 text-gray-700 mt-10">
                <div className="text-neutral-800 font-medium">Address</div>
                <div className="text-neutral-600 text-right">
                  Siem Reap Provinces
                </div>
                <div className="text-neutral-800 font-medium">Phone</div>
                <div className="text-neutral-600 text-right">
                  (855) 964 903 404
                </div>
                <div className="text-neutral-800 font-medium">Email</div>
                <div className="text-neutral-600 text-right">
                  hellomotherfkr@gmail.com
                </div>
              </div>
            </div>
          </div>
          {/* Right Sidebar */}
          <div className="w-full md:w-[340px] flex flex-col gap-6">
            {/* Improve Skills */}
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
      ) : (
        // ----- Background Tab -----
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Experience */}
            <div className="bg-white rounded-xl shadow p-6 relative">
              <div className="flex items-center mb-4">
                <div className="bg-green-400 rounded-full p-2 text-white mr-2">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M7 6V5a5 5 0 0 1 10 0v1h3a1 1 0 0 1 1 1v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a1 1 0 0 1 1-1h3Zm2 0h6V5a3 3 0 1 0-6 0v1Z"
                    ></path>
                  </svg>
                </div>
                <h2 className="text-lg font-semibold">Experience</h2>
                <button className="ml-auto text-green-500 font-medium hover:underline">
                  Edit
                </button>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <div className="font-medium">Software Engineer</div>
                  <div className="text-gray-400 text-sm">
                    inlabtek — Full-time
                  </div>
                  <div className="text-gray-400 text-sm">
                    2023-05-01 – Present
                  </div>
                  <div className="text-gray-500 text-sm">New York, USA</div>
                </div>
                <div className="mt-3">
                  <div className="font-medium">Cloud Engineer</div>
                  <div className="text-gray-400 text-sm">
                    Google — Full-time
                  </div>
                  <div className="text-gray-400 text-sm">
                    2020-01-01 – 2023-01-01
                  </div>
                  <div className="text-gray-500 text-sm">
                    Mountain View, USA
                  </div>
                </div>
              </div>
            </div>
            {/* Education */}
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
                <div className="text-gray-400 text-sm">
                  2023-01-01 – Present
                </div>
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
                  <span className="font-medium">
                    Google Certified Professional
                  </span>
                  <span className="text-gray-400 text-xs mb-1">
                    Google Inc.
                  </span>
                  <span className="text-xs text-orange-500 font-medium bg-orange-50 w-fit px-2 py-0.5 rounded">
                    Verifying
                  </span>
                </div>
                <div className="w-1/2 bg-gray-100 rounded-lg p-3 flex flex-col">
                  <span className="font-medium">
                    Google Certified Professional
                  </span>
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
                <span className="text-gray-400 text-xs">
                  Amazon Web Services
                </span>
                <span className="text-gray-400 text-xs">Google Inc.</span>
              </div>
            </div>
          </div>
          {/* Right Sidebar */}
          <div className="w-full md:w-[340px] flex flex-col gap-6">
            {/* Improve Skills */}
            <div className="bg-white rounded-xl shadow p-6 mb-2">
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
              <button className="bg-green-400 text-white px-4 py-1 rounded hover:bg-green-500 text-sm">
                Explore
              </button>
            </div>
            {/* People You May Know */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold mb-4">People you may know</h3>
              <div className="flex flex-col gap-3">
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
                      <div className="font-medium">@william_adam</div>
                      <div className="text-xs text-gray-500">
                        UX/UI Designer
                      </div>
                    </div>
                    <button className="bg-green-400 hover:bg-green-500 text-white px-4 py-1 rounded">
                      + Follow
                    </button>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full text-gray-500 text-sm font-medium hover:underline">
                See all
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyProfileComponent;
