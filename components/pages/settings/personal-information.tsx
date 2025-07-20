import Modal from "@/components/ui/modal";
import React from "react";
import Image from "next/image";

function PersonalInformation() {
  return (
    <Modal>
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Personal Information</h2>

      {/* Avatar */}
      <div className="flex flex-col items-center gap-2 mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-yellow-400">
          <Image
            src="/images/Avatar.png"
            alt="Profile"
            width={96}
            height={96}
            className="object-cover w-full h-full"
          />
        </div>
        <button className="text-green-600 font-medium text-sm hover:underline">Edit</button>
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
