import Modal from "@/components/ui/modal";
import React from "react";

function TermOfUses() {
  return (
    <Modal>
      {/* Title */}
      <div className="flex flex-col items-center gap-2 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 w-full">Terms of Use</h2>
      </div>

      {/* Terms Content */}
      <div className="space-y-4 text-sm text-gray-500 mb-6">
        <p>
          Welcome to our service. By accessing or using our platform, you agree to comply with and
          be bound by these Terms of Use. Please read them carefully.
        </p>
        <p>
          <strong>Use of Service:</strong>
          <br />
          You agree to use our services only for lawful purposes and in a way that does not infringe
          the rights of, restrict, or inhibit anyone else’s use and enjoyment.
        </p>
        <p>
          <strong>Account Responsibility:</strong>
          <br />
          If you create an account, you are responsible for maintaining the confidentiality of your
          login information and for all activities that occur under your account.
        </p>
        <p>
          <strong>Intellectual Property:</strong>
          <br />
          All content, trademarks, and data on this platform are owned or licensed by us and are
          protected by applicable intellectual property laws.
        </p>
        <p>
          <strong>Limitation of Liability:</strong>
          <br />
          We provide our services “as is” and make no warranties about the accuracy or reliability
          of the service. We are not liable for any damages resulting from the use of our platform.
        </p>
        <p>
          <strong>Modifications:</strong>
          <br />
          We reserve the right to modify or discontinue the service at any time without prior
          notice.
        </p>
        <p>
          By continuing to use our platform, you accept these Terms of Use. If you do not agree,
          please discontinue use immediately.
        </p>
      </div>
    </Modal>
  );
}

export default TermOfUses;
