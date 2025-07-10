"use client";
import { Job } from "@/types/job";
import React from "react";
import RootLabel from "@/components/base/root-label";

const CampaignListing = React.lazy(
  () => import("@/components/com/campaign/campaign-list")
);

export default function CampaignComponent({ data }: { data?: Job[] }) {
  return (
    <div className="container">
      <RootLabel value="Find Job" />
      <CampaignListing data={data!} />
    </div>
  );
}
