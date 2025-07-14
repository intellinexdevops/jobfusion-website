// Copyright 2025 wolf
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import Image from "next/image";
import React from "react";

const ChevronRight: React.FC = () => (
  <svg
    className="w-4 h-4 text-gray-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

type ItemProps = {
  iconSrc?: string;
  label: string;
  noIcon?: boolean;
  noBackground?: boolean;
  noBorder?: boolean;
};

const Item: React.FC<ItemProps> = ({
  iconSrc,
  label,
  noIcon,
  noBackground,
  noBorder,
}) => {
  const baseClasses =
    "flex items-center h-[54px] cursor-pointer px-[16px] transition-colors";
  const bgHoverClass = noBackground ? "" : "bg-50 hover:bg-100";
  const borderClass = noBorder ? "" : "border-t border-gray-200";
  const textHoverUnderline = noBackground ? "hover:underline" : "";

  return (
    <li className={`${baseClasses} ${bgHoverClass} ${borderClass}`}>
      <div className="flex items-center gap-3 flex-1">
        {!noIcon && iconSrc && (
          <Image
            width={24}
            height={24}
            src={iconSrc}
            alt={label}
            className="w-5 h-5"
          />
        )}
        <span className={`text-700 text-sm ${textHoverUnderline}`}>
          {label}
        </span>
      </div>
      <div className={noBackground ? "ml-2" : "ml-auto"}>
        <ChevronRight />
      </div>
    </li>
  );
};

const SettingComponent: React.FC = () => {
  const sections = [
    {
      title: "Account",
      items: [
        { icon: "/icons/id.svg", label: "Personal", noBorder: true },
        {
          icon: "/icons/lock-keyhole-minimalistic.svg",
          label: "Security & Password",
        },
        { icon: "/icons/contact-book.svg", label: "Contact Info" },
        { icon: "/icons/language-square.svg", label: "Language" },
      ],
    },
    {
      title: "Payment",
      items: [
        { icon: "/icons/card.svg", label: "Billing & Payment", noBorder: true },
      ],
    },
    {
      title: "Notification",
      items: [
        {
          icon: "/icons/bell-bing.svg",
          label: "Notification setting",
          noBorder: true,
        },
      ],
    },
    {
      title: "Account Management",
      items: [
        {
          icon: "/icons/wrong-access.svg",
          label: "Close Account",
          noBorder: true,
        },
        { icon: "/icons/bin.svg", label: "Delete your account" },
      ],
    },
  ];

  const legalItems = [
    {
      label: "Privacy & Policy",
      noIcon: true,
      noBackground: true,
      noBorder: true,
    },
    { label: "Term of uses", noIcon: true, noBackground: true, noBorder: true },
  ];

  return (
    <div className="bg-white min-h-screen p-5 rounded-lg">
      <h1 className="text-xl font-semibold mb-6 text-neutral-700">Settings</h1>

      <div className="w-full space-y-6">
        {sections.map(({ title, items }, idx) => (
          <section key={idx}>
            <p className="text-sm font-medium text-800 mb-4">{title}</p>
            <ul className="rounded-[12px] overflow-hidden divide-y divide-gray-200 border border-gray-100">
              {items.map(({ icon, label, noBorder }, itemIdx) => (
                <Item
                  key={itemIdx}
                  iconSrc={icon}
                  label={label}
                  noBorder={noBorder}
                />
              ))}
            </ul>
          </section>
        ))}

        {/* Legal Section */}
        <section>
          <p className="text-sm font-medium text-800 mb-4">Legal</p>
          <ul className="rounded-[12px] ">
            {legalItems.map(
              ({ label, noIcon, noBackground, noBorder }, idx) => (
                <Item
                  key={idx}
                  label={label}
                  noIcon={noIcon}
                  noBackground={noBackground}
                  noBorder={noBorder}
                />
              )
            )}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SettingComponent;
