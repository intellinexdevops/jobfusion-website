import Modal from "@/components/ui/modal";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function CloseAccount() {
  return (
    <Modal>
      {/* Custom SVG Icon */}
      <div className="flex justify-center mb-4">
        <Image
          src="/icons/delete-acc.svg"
          alt="Delete Icon"
          width={50}
          height={50}
          className="text-error"
        />
      </div>

      {/* Confirmation Text */}
      <h2 className="text-center text-lg font-semibold text-gray-800 mb-2">
        Are you sure want to <span className="text-error">DELETE</span> your account?
      </h2>

      {/* Warning */}
      <p className="text-sm text-center text-gray-500 mb-6">
        Warning: After deleted, you won&apos;t be able to see your account anymore.
        <br />
        Please make sure you before delete.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4">
        <Button variant="outline">Cancel</Button>
        <Button variant="destructive">Close</Button>
      </div>
    </Modal>
  );
}

export default CloseAccount;
