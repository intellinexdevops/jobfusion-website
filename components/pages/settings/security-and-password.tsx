import Modal from "@/components/ui/modal";
import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

function SecurityAndPassword() {
  return (
    <Modal>
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Security & Password</h2>

      {/* Icon */}
      <div className="flex flex-col items-center gap-2 mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <Image
            src="/icons/keylock.svg"
            alt="Profile"
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Info */}
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-sm font-medium text-gray-800">Two-Factor Authentication</span>
          <ChevronRight className="text-sm text-gray-500" />
        </div>
        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-sm font-medium text-green-600">Change Password</span>
        </div>
      </div>
    </Modal>
  );
}

export default SecurityAndPassword;
