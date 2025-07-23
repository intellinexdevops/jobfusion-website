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
import Link from "next/link";
import React from "react";

const ChevronRight: React.FC = () => (
  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

type ItemProps = {
  iconSrc?: string;
  label: string;
  noIcon?: boolean;
  noBackground?: boolean;
  noBorder?: boolean;
  href: string;
};

const Item: React.FC<ItemProps> = ({ iconSrc, label, noIcon, noBackground, noBorder, href }) => {
  const baseClasses = "flex items-center h-[54px] cursor-pointer px-[16px] transition-colors";
  const bgHoverClass = noBackground ? "" : "bg-50 hover:bg-100";
  const borderClass = noBorder ? "" : "border-t border-gray-200";
  const textHoverUnderline = noBackground ? "hover:underline" : "";

  return (
    <Link href={href} className={`${baseClasses} ${bgHoverClass} ${borderClass}`}>
      <div className="flex items-center gap-3 flex-1">
        {!noIcon && iconSrc && (
          <Image width={24} height={24} src={iconSrc} alt={label} className="w-5 h-5" />
        )}
        <span className={`text-700 text-sm ${textHoverUnderline}`}>{label}</span>
      </div>
      <div className={noBackground ? "ml-2" : "ml-auto"}>
        <ChevronRight />
      </div>
    </Link>
  );
};

const SettingComponent: React.FC = () => {
  const sections = [
    {
      title: "Account",
      items: [
        {
          icon: "/icons/id.svg",
          label: "Personal Information",
          noBorder: true,
          href: "/settings/u/5984795/personal-info",
        },
        {
          icon: "/icons/lock-keyhole-minimalistic.svg",
          label: "Security & Password",
          href: "/settings/u/5984795/security-and-password",
        },
        {
          icon: "/icons/contact-book.svg",
          label: "Contact Info",
          href: "/settings/u/5984795/contact-info",
        },
        {
          icon: "/icons/language-square.svg",
          label: "Language",
          href: "/settings/u/5984795/language-setting",
        },
      ],
    },
    // {
    //   title: "Payment",
    //   items: [
    //     {
    //       icon: "/icons/card.svg",
    //       label: "Billing & Payment",
    //       noBorder: true,
    //       href: "/settings/u/5984795/personal-info",
    //     },
    //   ],
    // },
    {
      title: "Notification",
      items: [
        {
          icon: "/icons/bell-bing.svg",
          label: "Notification setting",
          noBorder: true,
          href: "/settings/u/5984795/notifications-setting",
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
          href: "/settings/u/5984795/close-account",
        },
        {
          icon: "/icons/bin.svg",
          label: "Delete your account",
          href: "/settings/u/5984795/delete-account",
        },
      ],
    },
  ];

  const legalItems = [
    {
      label: "Privacy & Policy",
      noIcon: true,
      noBackground: true,
      noBorder: true,
      href: "/settings/u/5984795/privacy-and-policy",
    },
    {
      label: "Term of uses",
      noIcon: true,
      noBackground: true,
      noBorder: true,
      href: "/settings/u/5984795/term-of-uses",
    },
    {
      label: "Help Center",
      noIcon: true,
      noBackground: true,
      noBorder: true,
      href: "/settings/u/5984795/help-center",
    },
  ];

  return (
    <div className="bg-white min-h-screen p-5 rounded-lg">
      <h1 className="text-xl font-semibold mb-6 text-neutral-700">Settings</h1>

      <div className="w-full space-y-6">
        {sections.map(({ title, items }, idx) => (
          <section key={idx}>
            <p className="text-sm font-medium text-800 mb-4">{title}</p>
            <ul className="rounded-[12px] overflow-hidden divide-y divide-gray-200 border border-gray-100">
              {items.map(({ icon, label, noBorder, href }, itemIdx) => (
                <Item key={itemIdx} iconSrc={icon} label={label} noBorder={noBorder} href={href} />
              ))}
            </ul>
          </section>
        ))}

        {/* Legal Section */}
        <section>
          <p className="text-sm font-medium text-800 mb-4">Legal</p>
          <ul className="rounded-[12px] ">
            {legalItems.map(({ label, noIcon, noBackground, noBorder, href }, idx) => (
              <Item
                key={idx}
                label={label}
                noIcon={noIcon}
                noBackground={noBackground}
                noBorder={noBorder}
                href={href}
              />
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default SettingComponent;
