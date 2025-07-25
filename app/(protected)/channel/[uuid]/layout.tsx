import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/base/app-sidebar";
import HeaderRecruiter from "@/components/base/header-recruiter";

export default function RecruiterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider suppressHydrationWarning>
      <AppSidebar />
      <main className="flex-1 relative">
        <HeaderRecruiter />
        {children}
      </main>
    </SidebarProvider>
  );
}
