// import WhatNewDetailCom from "@/components/pages/what-new-detail-com";
import dynamic from "next/dynamic";
import React from "react";

const WhatNewDetailCom = dynamic(() => import('@/components/pages/what-new-detail-com'))

export default async function WhatNewDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <WhatNewDetailCom id={id} />;
}
