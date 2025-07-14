import Footer from "@/components/base/footer";
import React, { PropsWithChildren } from "react";

export default function PricingLayout({ children }: PropsWithChildren) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
