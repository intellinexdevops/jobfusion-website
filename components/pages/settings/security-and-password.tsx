import Modal from "@/components/ui/modal";
import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

function SecurityAndPassword() {
  return (
    <Modal>
      {/* Icon and Title */}
      <div className="flex flex-col items-center gap-2 mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
          <Image
            src="/icons/keylock.svg"
            alt="Security Icon"
            width={96}
            height={96}
            className="object-contain w-full h-full"
          />
        </div>
        <h2 className="text-lg font-semibold text-gray-800 text-center w-full">
          Security & Password
        </h2>
      </div>

      {/* Info List */}
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-3 cursor-pointer hover:bg-gray-50 px-1 rounded">
          <span className="text-sm font-medium text-gray-800">Two-Factor Authentication</span>
          <ChevronRight className="text-gray-500 w-4 h-4" />
        </div>
        <div className="flex justify-between items-center border-b pb-3 cursor-pointer hover:bg-gray-50 px-1 rounded">
          <span className="text-sm font-medium text-green-600">Change Password</span>
        </div>
      </div>
    </Modal>
  );
}

export default SecurityAndPassword;
