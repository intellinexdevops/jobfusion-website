import Modal from "@/components/ui/modal";
import React from "react";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";

function NotificationsSetting() {
  return (
    <Modal>
      {/* Icon and Title */}
      <div className="flex flex-col items-center gap-2 mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
          <Image
            src="/icons/notification-green.svg"
            alt="Notification Icon"
            width={96}
            height={96}
            className="object-contain w-full h-full"
          />
        </div>
        <h2 className="text-lg font-semibold text-gray-800 text-center w-full">Notifications</h2>
      </div>

      {/* Settings List */}
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-3">
          <span className="text-sm font-medium text-gray-800">Push Notification</span>
          <Switch />
        </div>
      </div>
    </Modal>
  );
}

export default NotificationsSetting;
