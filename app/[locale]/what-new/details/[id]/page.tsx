import WhatNewDetailCom from "@/components/pages/what-new-detail-com";
import React from "react";

export default async function WhatNewDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <WhatNewDetailCom id={id} />;
}
