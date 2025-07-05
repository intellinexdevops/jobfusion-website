"use client";
import {
  Bookmark,
  Building,
  ChevronDown,
  ChevronRight,
  DownloadIcon,
  EarthIcon,
  LinkIcon,
  MailIcon,
  MessageCircleMore,
  PhoneIcon,
  StarIcon,
  UserCircleIcon,
  UserSquareIcon,
  Verified,
} from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

import QRCode from "react-qr-code";
import { Job } from "@/types/job";
import dynamic from "next/dynamic";
import BreadcrumbCom from "../breadcrumb-com";
import { toast } from "sonner";
import JobCard from "../card/job-card";
// import CareerBreadCrumb from "../layout/find-job/career-breadcrumb";

const CareerBreadCrumb = dynamic(
  () => import("../layout/find-job/career-breadcrumb")
);

export default function CareerDetailComponrnt({ data }: { data: Job }) {
  const [expend, setExpend] = useState(false);
  const router = useRouter();
  const handleApply = () => {
    router.push("/apply");
  };
  const url = "http://localhost";

  const handleAddToFavourite = () => {
    // Logic to add the job to the user's favourites
    toast.success("Job added to favourites!");
  };
  return (
    <div>
      <CareerBreadCrumb />
      <BreadcrumbCom />
      <div className="container grid grid-cols-1 lg:grid-cols-12 mb-10 mt-5">
        <div className="col-span-8">
          <p className="text-3xl font-semibold">{data.title}</p>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-3 mt-4">
              <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center">
                <Building className="text-primary" />
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <p className="text-lg font-medium">{data.company.name}</p>
                  <p className="text-xs text-gray-500">4 days ago</p>
                </div>

                <div className="h-auto w-[1px] bg-gray-300 mx-10 my-2" />

                <div className="flex flex-col gap-1">
                  <div className="flex flex-row items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon
                        fill="#FD9426"
                        key={i}
                        size={14}
                        className="text-[#FD9426]"
                      />
                    ))}
                    <p className="text-sm font-medium">
                      4.9{" "}
                      <span className="text-gray-500 font-normal">(59406)</span>
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-1">
                    <Verified size={15} className="text-primary" />
                    <p className="text-xs text-primary font-medium">Verified</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center gap-3">
              <Button onClick={handleApply}>Apply Now</Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleAddToFavourite}
              >
                <Bookmark className="text-gray-500" />
              </Button>
            </div>
          </div>

          <div className="mt-5">
            <div className="grid grid-cols-4">
              <div>
                <p className="text-sm font-medium">Job Type</p>
                <p className="text-xs text-gray-500">Full-Time</p>
              </div>
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-xs text-gray-500">Siem Reap</p>
              </div>
              <div>
                <p className="text-sm font-medium">Salary</p>
                <p className="text-xs text-gray-500">$250 - $500</p>
              </div>
              <div>
                <p className="text-sm font-medium">Deadline</p>
                <p className="text-xs text-gray-500">23 Apr 2024</p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <button
              className="flex flex-row items-center gap-5"
              onClick={() => setExpend(!expend)}
            >
              <p className="text-xs font-medium">Additional</p>
              {expend ? <ChevronDown size={12} /> : <ChevronRight size={14} />}
            </button>
            {expend && (
              <div className="grid grid-cols-4 mt-4">
                <div>
                  <p className="text-sm font-medium">Workspace</p>
                  <p className="text-xs text-gray-500">On-site</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Experience Level</p>
                  <p className="text-xs text-gray-500">Intermediate</p>
                </div>
                {/* <div>
                                <p className='text-sm font-medium' >Salary</p>
                                <p className='text-xs text-gray-500' >$250 - $500</p>
                                </div>
                                <div>
                                <p className='text-sm font-medium' >Deadline</p>
                                <p className='text-xs text-gray-500' >23 Apr 2024</p>
                                </div> */}
              </div>
            )}
          </div>

          <div className="mt-10">
            <p className="font-semibold">Description</p>
            <p className="text-xs leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Suspendisse varius
              enim in eros elementum tristique.
            </p>
          </div>

          <div className="w-full h-[1px] bg-gray-100 dark:bg-white/10 mt-6" />

          <div className="mt-5">
            <p className="font-semibold">Requirement</p>
            <ul className="list-disc leading-6 pl-5 text-xs mt-3">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                enim in eros elementum tristique.
              </li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati, saepe!
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <p className="font-semibold">Benefits</p>
            <ul className="list-disc leading-6 pl-5 text-xs mt-3">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus laboriosam ab quibusdam magnam optio ipsam
                voluptatibus!
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-4 lg:ms-10 pt-6 lg:pt-0">
          <div className="bg-white dark:bg-primary/5 p-5 rounded-lg">
            <div>
              <p className="font-medium text-gray-500 text-xs">
                About Recruiter
              </p>
              <div className="flex flex-row items-center justify-between">
                <div className="mt-4 flex flex-row items-center gap-3">
                  <div className="bg-primary/10 w-8 h-8 flex items-center justify-center rounded-md">
                    <UserSquareIcon size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium">John Doe</p>
                    <p className="text-xs text-gray-500">Human Resource</p>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <button className="w-6 h-6 bg-primary/10 flex items-center justify-center rounded">
                    <MessageCircleMore size={16} className="text-primary" />
                  </button>
                  <button className="w-6 h-6 bg-primary/10 flex items-center justify-center rounded">
                    <UserCircleIcon size={16} className="text-primary" />
                  </button>
                </div>
              </div>
              <div className="mt-5">
                <p className="font-medium text-xs text-gray-500">
                  Company Description
                </p>
                <p className="text-sm leading-5 mt-1 line-clamp-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="mt-5">
                <p className="text-xs text-gray-500 font-medium">More</p>
                <div className="mt-1">
                  <p className="text-sm font-medium">20 Job Posts</p>
                  <p className="text-xs text-gray-400">95% hired rate</p>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-medium">Follower</p>
                  <p className="text-xs text-gray-400">2054 followers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-primary/5 p-5 rounded-lg mt-3">
            <p className="font-medium text-gray-500 text-xs">Contact Info</p>
            <div className="mt-3">
              <div className="flex flex-row items-center gap-2">
                <div className="bg-primary/10 w-6 h-6 flex items-center justify-center rounded-md">
                  <PhoneIcon size={14} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium">+84 123 456 7890</p>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex flex-row items-center gap-2">
                <div className="bg-primary/10 w-6 h-6 flex items-center justify-center rounded-md">
                  <MailIcon size={14} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium">cohndoe@example.com</p>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="flex flex-row items-center gap-2">
                <div className="bg-primary/10 w-6 h-6 flex items-center justify-center rounded-md">
                  <EarthIcon size={14} className="text-primary" />
                </div>
                <div>
                  <Link
                    href="#"
                    className="text-xs font-medium underline text-blue-500"
                  >
                    http://www.google.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-primary/5 p-5 rounded-lg mt-3">
            <p className="font-medium text-gray-500 text-xs">Share this job</p>
            <div className="flex flex-row items-center gap-3 mt-3">
              <div className="border w-14 p-1">
                <QRCode
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={url}
                  viewBox={`0 0 256 256`}
                />
              </div>
              <div>
                <div className="flex flex-row items-center gap-2">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.4781 13.1861C22.4781 7.62951 18.001 3.125 12.4781 3.125C6.9553 3.125 2.47815 7.62951 2.47815 13.1861C2.47815 18.2078 6.13499 22.3702 10.9156 23.125V16.0944H8.37659V13.1861H10.9156V10.9695C10.9156 8.44796 12.4086 7.05512 14.6927 7.05512C15.7869 7.05512 16.9312 7.25163 16.9312 7.25163V9.72761H15.6703C14.4281 9.72761 14.0406 10.5032 14.0406 11.2989V13.1861H16.814L16.3707 16.0944H14.0406V23.125C18.8214 22.3702 22.4781 18.208 22.4781 13.1861Z"
                      fill="hsl(var(--foreground))"
                    />
                  </svg>
                  <span className="text-xs">Facebook</span>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.4781 4.125H8.47815C5.71673 4.125 3.47815 6.36358 3.47815 9.125V17.125C3.47815 19.8864 5.71673 22.125 8.47815 22.125H16.4781C19.2395 22.125 21.4781 19.8864 21.4781 17.125V9.125C21.4781 6.36358 19.2395 4.125 16.4781 4.125ZM19.7281 17.125C19.7226 18.9176 18.2707 20.3695 16.4781 20.375H8.47815C6.6855 20.3695 5.23364 18.9176 5.22815 17.125V9.125C5.23364 7.33235 6.6855 5.88049 8.47815 5.875H16.4781C18.2707 5.88049 19.7226 7.33235 19.7281 9.125V17.125ZM17.2281 9.375C17.7804 9.375 18.2281 8.92728 18.2281 8.375C18.2281 7.82272 17.7804 7.375 17.2281 7.375C16.6758 7.375 16.2281 7.82272 16.2281 8.375C16.2281 8.92728 16.6758 9.375 17.2281 9.375ZM12.4781 8.625C9.99287 8.625 7.97815 10.6397 7.97815 13.125C7.97815 15.6103 9.99287 17.625 12.4781 17.625C14.9634 17.625 16.9781 15.6103 16.9781 13.125C16.9808 11.9307 16.5075 10.7846 15.663 9.94008C14.8186 9.09559 13.6724 8.62234 12.4781 8.625ZM9.72815 13.125C9.72815 14.6438 10.9593 15.875 12.4781 15.875C13.9969 15.875 15.2281 14.6438 15.2281 13.125C15.2281 11.6062 13.9969 10.375 12.4781 10.375C10.9593 10.375 9.72815 11.6062 9.72815 13.125Z"
                      fill="hsl(var(--foreground))"
                    />
                  </svg>
                  <span className="text-xs">Instagram</span>
                </div>
              </div>
              <div>
                <div className="flex flex-row items-center gap-2">
                  <button className="w-6 h-6 rounded-full border flex items-center justify-center">
                    <LinkIcon size={11} className="text-gray-500" />
                  </button>
                  <span className="text-xs">Copy Link</span>
                </div>
                <div className="flex flex-row items-center gap-2 mt-1">
                  <button className="w-6 h-6 rounded-full border flex items-center justify-center">
                    <DownloadIcon size={11} className="text-gray-500" />
                  </button>
                  <span className="text-xs">Download</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 container mb-10">
        <p className="font-semibold text-2xl text-neutral-800">
          More related Jobs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-3">
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
    </div>
  );
}
