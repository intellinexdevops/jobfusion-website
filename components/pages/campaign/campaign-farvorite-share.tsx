"use client";

import Modal from '@/components/ui/modal';
import React from 'react';
import {
    MessageSquare,
    Send,
    X,
    Mail,
    Share2,
    Copy,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const shareOptions = [
    { icon: <MessageSquare size={20} />, label: "Chat", link: "#" },
    { icon: <Send size={20} />, label: "Telegram", link: "https://t.me/share/url?url=YOUR_LINK" },
    { icon: <X size={20} />, label: "X", link: "https://twitter.com/intent/tweet?url=YOUR_LINK" },
    { icon: <Mail size={20} />, label: "E-mail", link: "mailto:?subject=Check this out&body=YOUR_LINK" },
    { icon: <Share2 size={20} />, label: "More", link: "#" },
];

function CampaignShareComponent() {
    const link = "https://www.figma.com/file/NlfVhYygR9mAQasassdsada/Share...";

    const copyToClipboard = () => {
        if (typeof window !== 'undefined' && navigator.clipboard) {
            navigator.clipboard.writeText(link)
                .then(() => alert("Link copied to clipboard!"))
                .catch((err) => alert("Failed to copy: " + err));
        } else {
            alert("Clipboard API is not supported.");
        }
    };

    return (
        <Modal>
            <div className="w-[400px] ">
                <h2 className="text-lg font-semibold mb-4">Share with</h2>

                <div className="flex flex-wrap items-center justify-between gap-y-4 mb-6">

                    {shareOptions.map((opt, index) => (
                        <a
                            key={index}
                            href={opt.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center hover:opacity-80 transition"
                        >
                            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full text-gray-800">
                                {opt.icon}
                            </div>
                            <span className="mt-2 text-sm text-gray-700">{opt.label}</span>
                        </a>
                    ))}
                </div>

                <div className="text-center text-sm text-gray-500 mb-2">Or share with link</div>

                <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                    <input
                        type="text"
                        value={link}
                        readOnly
                        className="flex-1 bg-transparent outline-none text-sm"
                    />
                    <Button size="sm" variant="ghost" onClick={copyToClipboard}>
                        <Copy></Copy>
                    </Button>
                </div>
            </div>
        </Modal>
    );
}

export default CampaignShareComponent;
