import CampaignDetailComponent from "@/components/pages/campaign/campaign-detail-component";
import { data } from "@/public/data/jobs";
import { Job } from "@/types/job";
import { Metadata } from "next";
import React from "react";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const job: Job | undefined = data.find((item: Job) => item._id === id);
  return {
    title: job?.title,
    description: job?.description,
  };
}

export default async function CampaignDetailPage({ params }: Props) {
  const { id } = await params;

  const job: Job | undefined = data.find((item: Job) => item._id === id);

  return <CampaignDetailComponent data={job!} />;
}
