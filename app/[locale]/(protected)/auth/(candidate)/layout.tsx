import HeaderCandidate from "@/components/header-candidate";
import dynamic from "next/dynamic";
import React, { Suspense } from "react";

const Footer = dynamic(() => import("@/components/layout/footer"));

export default function CandidateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <HeaderCandidate />
      {children}
      <Footer />
    </Suspense>
  );
}
