"use client";
import { Job } from "@/types/job";
import React from "react";
import RootLabel from "../com/root-label";

const CareerList = React.lazy(
  () => import("@/components/com/find-job/career-list")
);

export default function CareerBodyComponent({ data }: { data?: Job[] }) {
  return (
    <div className="container">
      <RootLabel value="Find Job" />
      <CareerList data={data!} />
    </div>
  );
}
