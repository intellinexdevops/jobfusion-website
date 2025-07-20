import Modal from "@/components/ui/modal";
import React from "react";
import Image from "next/image";

function LanguageSetting() {
  return (
    <Modal>
      {/* Title & Icon */}
      <div className="flex flex-col items-center gap-2 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 text-center w-full">Language</h2>
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
          <Image
            src="/icons/language.svg"
            alt="Language Icon"
            width={96}
            height={96}
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      {/* Info */}
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-sm font-medium text-gray-800">Current Language</span>
          <span className="text-sm text-gray-500">English</span>
        </div>
        <div className="flex justify-between items-center border-b pb-3 cursor-pointer hover:bg-gray-50 px-1 rounded">
          <span className="text-sm font-medium text-green-600">Change Language</span>
        </div>
      </div>
    </Modal>
  );
}

export default LanguageSetting;
