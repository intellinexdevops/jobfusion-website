import React, { Suspense } from "react";
import CareerBodyComponent from "@/components/pages/career-body-component";
import { Metadata } from "next";
import { data } from "@/public/data/jobs";
import BreadcrumbCom from "@/components/breadcrumb-com";

export const metadata: Metadata = {
  title: "Jobs",
  description: "Find your dream jobs",
};

const CareerHero = React.lazy(
  () => import("@/components/com/find-job/career-breadcrumb")
);

export default async function CareerPage() {
  return (
    <Suspense>
      <CareerHero />
      <BreadcrumbCom />
      <CareerBodyComponent data={data} />
    </Suspense>
  );
}
