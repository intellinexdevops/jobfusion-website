import AppSidebar from "@/components/base/app-sidebar";
import Footer from "@/components/base/footer";
import HeaderCandidate from "@/components/base/header-candidate";
import React, { Suspense } from "react";

export default function CandidateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <HeaderCandidate />
      <div className="grid grid-cols-8 items-start gap-6 container mt-24 mb-10">
        <AppSidebar />
        <div className="col-span-6 max-lg:col-span-8">{children}</div>
      </div>
      <Footer />
    </Suspense>
  );
}
