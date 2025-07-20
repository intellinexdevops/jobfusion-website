import Modal from "@/components/ui/modal";
import React from "react";
import Image from "next/image";
import { Switch } from "@/components/ui/switch";

function NotificationsSetting() {
  return (
    <Modal>
      <h2 className="text-lg font-semibold text-gray-800 mb-6">Notifications</h2>

      {/* Icon */}
      <div className="flex flex-col items-center gap-2 mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <Image
            src="/icons/notification-green.svg"
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
          <span className="text-sm font-medium text-gray-800">Push Notification</span>
          <Switch checked />
        </div>
      </div>
    </Modal>
  );
}

export default NotificationsSetting;
