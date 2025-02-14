import WhatNewDetailCom from "@/components/pages/WhatNewDetailCom";
import React from "react";

export default async function WhatNewDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return <WhatNewDetailCom id={id} />;
}
