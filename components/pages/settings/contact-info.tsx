import Modal from "@/components/ui/modal";
import React from "react";
import Image from "next/image";
import { ChevronRight, Copy } from "lucide-react";

function ContactInfo() {
  return (
    <Modal>
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Contact Info</h2>

      {/* icons */}
      <div className="flex flex-col items-center gap-2 mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <Image
            src="/icons/contact.svg"
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
          <span className="text-sm font-medium text-gray-800">Phone Number</span>
          <span className="text-sm text-gray-500">Chenter PHAI</span>
        </div>
        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-sm font-medium text-gray-800">E-mail</span>
          <span className="text-sm text-gray-500">chenterphai@gmail.com</span>
        </div>
        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-sm font-medium text-gray-800">LinkedIn</span>
          <ChevronRight className="text-sm text-gray-500" />
        </div>
        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-sm font-medium text-gray-800">Website</span>
          <Copy className="text-sm text-gray-500" />
        </div>
      </div>
    </Modal>
  );
}

export default ContactInfo;
