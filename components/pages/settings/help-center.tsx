import Modal from "@/components/ui/modal";
import React from "react";
import Image from "next/image";

function HelpCenter() {
  const items = [
    {
      icon: "/icons/livesupport.svg",
      title: "Live Support",
      description: "Description",
    },
    {
      icon: "/icons/ask.svg",
      title: "Ask a Question",
      description: "Description",
    },
    {
      icon: "/icons/contactus.svg",
      title: "Contact Us",
      description: "Description",
    },
    {
      icon: "/icons/feedback.svg",
      title: "Feedback",
      description: "Description",
    },
    {
      icon: "/icons/faq.svg",
      title: "Jobseek FAQ",
      description: "Description",
    },
    {
      icon: "/icons/light.svg",
      title: "Jobseek Features",
      description: "Description",
    },
  ];

  return (
    <Modal>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Help Center</h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 p-4 bg-white rounded-xl hover:shadow transition-shadow cursor-pointer"
          >
            <div className="p-2 rounded-full w-10 h-10 flex items-center justify-center">
              <Image
                src={item.icon}
                alt={item.title}
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
              <p className="text-xs text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  );
}

export default HelpCenter;
