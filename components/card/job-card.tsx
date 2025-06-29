import Image from "next/image";
import Link from "next/link";
import React from "react";

const JobCard = () => {
  return (
    <Link href="/jobs/job-details">
      <div className="bg-white rounded-lg p-5 border border-neutral-100">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10">
            <Image
              src="/icons/google.svg"
              width={256}
              height={256}
              loading="lazy"
              className="w-full h-full"
              alt="Brand logo"
            />
          </div>
          <div>
            <p className="text-lg font-medium text-neutral-900">Google Inc.</p>
            <div className="flex items-center space-x-3">
              <p className="text-sm text-neutral-400">Software Company</p>
              <div className="w-1 h-1 rounded-full bg-neutral-400" />
              <p className="text-sm text-neutral-400">New York, USA</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
