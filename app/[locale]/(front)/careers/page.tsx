import React, { Suspense } from "react";
import CareerBodyComponent from "@/components/pages/career-body-component";
import { Metadata } from "next";
import { data } from "@/public/data/jobs";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Find your dream jobs",
};

const CareerBreadCrumb = dynamic(
  () => import("@/components/layout/find-job/career-breadcrumb")
);

export default async function CareerPage() {
  return (
    <Suspense>
      <CareerBreadCrumb />
      <CareerBodyComponent data={data} />
    </Suspense>
  );
}
