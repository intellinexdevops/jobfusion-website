import Modal from "@/components/ui/modal";
import React from "react";
import Image from "next/image";
import { ChevronRight, Copy } from "lucide-react";

function ContactInfo() {
  return (
    <Modal>
      {/* Icon & Title */}
      <div className="flex flex-col items-center gap-2 mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
          <Image
            src="/icons/contact.svg"
            alt="Contact Icon"
            width={96}
            height={96}
            className="object-contain w-full h-full"
          />
        </div>
        <h2 className="text-lg font-semibold text-gray-800 text-center w-full mb-6">
          Contact Info
        </h2>
      </div>

      {/* Info List */}
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-sm font-medium text-gray-800">Phone Number</span>
          <span className="text-sm text-gray-500">+855 97 123 4567</span>
        </div>

        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-sm font-medium text-gray-800">E-mail</span>
          <span className="text-sm text-gray-500">chenterphai@gmail.com</span>
        </div>

        <div className="flex justify-between items-center border-b pb-3 cursor-pointer hover:bg-gray-50 px-1 rounded">
          <span className="text-sm font-medium text-gray-800">LinkedIn</span>
          <ChevronRight className="text-gray-500 w-4 h-4" />
        </div>

        <div className="flex justify-between items-center border-b pb-3 cursor-pointer hover:bg-gray-50 px-1 rounded">
          <span className="text-sm font-medium text-gray-800">Website</span>
          <Copy className="text-gray-500 w-4 h-4" />
        </div>
      </div>
    </Modal>
  );
}

export default ContactInfo;
