"use client";
import { Job } from "@/types/job";
import React from "react";

const CareerList = React.lazy(
  () => import("@/components/layout/find-job/career-list")
);

export default function CareerBodyComponent({ data }: { data?: Job[] }) {
  return (
    <div className="container">
      <CareerList data={data!} />
    </div>
  );
}
