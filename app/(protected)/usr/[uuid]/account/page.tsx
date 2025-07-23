import AccountComponent from "@/components/pages/account/account-component";
import React, { unstable_ViewTransition as ViewTransaction } from "react";

export default function AccountPage() {
  return (
    <ViewTransaction>
      <AccountComponent />;
    </ViewTransaction>
  );
}
