import Modal from "@/components/ui/modal";
import React from "react";
import Image from "next/image";

function PersonalInformation() {
  return (
    <Modal>
      {/* Avatar + Name */}
      <div className="flex flex-col items-center gap-2 mb-6">
        {/* Avatar group */}
        <div className="relative group w-24 h-24 rounded-full overflow-hidden bg-yellow-400">
          <Image
            src="/images/Avatar.png"
            alt="Profile"
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
          {/* Hover button */}
          <button className="absolute inset-0 flex items-center justify-center text-white text-xs font-medium bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
            Edit
          </button>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 mb-6 text-center w-full">
          Personal Information
        </h2>
      </div>

      {/* Info */}
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-sm font-medium text-gray-800">Full Name</span>
          <span className="text-sm text-gray-500">Chenter PHAI</span>
        </div>
        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-sm font-medium text-gray-800">Date of birth</span>
          <span className="text-sm text-gray-500">13.05.2003</span>
        </div>
      </div>
    </Modal>
  );
}

export default PersonalInformation;
