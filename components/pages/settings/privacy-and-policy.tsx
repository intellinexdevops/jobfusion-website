import Modal from "@/components/ui/modal";
import React from "react";

function PrivacyAndPolicy() {
  return (
    <Modal>
      {/* Title */}
      <div className="flex flex-col items-center gap-2 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 w-full">Privacy & Policy</h2>
      </div>

      {/* Policy Content */}
      <div className="space-y-4 text-sm text-gray-500 mb-6">
        <p>
          Our Privacy & Policy outlines how we handle the personal information you provide while
          using our services. We are committed to protecting your privacy and ensuring that your
          data is handled securely and responsibly.
        </p>
        <p>
          This includes how we collect, use, store, and protect your information. We do not sell
          your data, and any third-party usage complies with legal and ethical standards.
        </p>
        <p>
          <strong>What We Cover:</strong>
          <br />
          - Information collection: Name, email, contact info, usage data
          <br />
          - Purpose of use: Improve services, personalize experience, communication
          <br />
          - Data security: Protection from unauthorized access or disclosure
          <br />
          - Your rights: View, edit, or delete your data
          <br />- Third-party sharing: Only when necessary for core services
        </p>
        <p>
          By continuing to use our services, you agree to this policy. Updates to this policy will
          be communicated clearly.
        </p>
      </div>

      {/* Sections (Optional) */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-sm font-medium text-gray-800">Data Collection</span>
        </div>
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-sm font-medium text-gray-800">Usage & Tracking</span>
        </div>
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-sm font-medium text-gray-800">Third-Party Sharing</span>
        </div>
        <div className="flex justify-between items-center border-b pb-2">
          <span className="text-sm font-medium text-gray-800">Account Deletion</span>
        </div>
      </div>
    </Modal>
  );
}

export default PrivacyAndPolicy;
