import Link from "next/link";
import React from "react";
import { Job } from "@/types/job";
import CampaignCard from "@/components/card/campaign-card";

import * as campaigns from "@/public/data/jobs";

const JobOfTheDayCom = () => {
  return (
    <section>
      <div className="container py-24 mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-left title">job of the day</p>
            <p className="text-left text-xs md:text-sm mt-2">
              Your Gateway to Success -Find{" "}
              <span className="text-text">Your Dream Job</span>
            </p>
          </div>
          <Link
            href="/jobs"
            className="text-xs font-medium text-primary bg-primary/5 rounded-md py-2 px-3"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {campaigns.data
            .slice(campaigns.data.length - 3)
            .map((item: Job, i: number) => (
              <CampaignCard item={item} key={i} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default JobOfTheDayCom;
