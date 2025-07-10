import React, { Suspense } from "react";
import CampaignComponent from "@/components/pages/campaign/campaign-component";
import { Metadata } from "next";
import { data } from "@/public/data/jobs";
import BreadcrumbCom from "@/components/base/breadcrumb-com";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Find your dream jobs",
};

const CampaignHero = React.lazy(
  () => import("@/components/com/campaign/campaign-breadcrumb")
);

export default async function CareerPage() {
  return (
    <Suspense>
      <CampaignHero />
      <BreadcrumbCom />
      <CampaignComponent data={data} />
    </Suspense>
  );
}
