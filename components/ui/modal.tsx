"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  // DialogDescription,
  // DialogFooter,
  // DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <Dialog open={true} modal onOpenChange={() => router.back()}>
      <DialogContent
        className="max-w-[425px] w-full"
        style={{ borderRadius: 20 }}
      >
        {children}
        <DialogTitle></DialogTitle>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
