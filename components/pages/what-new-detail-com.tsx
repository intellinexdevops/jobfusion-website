"use client";
import React, { useState } from "react";
// All necessary icons are imported, including those for the share dialog
import {
  Share2,
  MessageCircle,
  Send,
  Twitter,
  Mail,
  MoreHorizontal,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

// Static types for our post and related items
type Author = {
  name: string;
  avatarUrl: string;
};

type Post = {
  id: string;
  title: string;
  date: string;
  author: Author;
  imageUrl: string;
  tags: string[];
  content: string;
};

type RelatedPost = Omit<Post, "content">;

// Static sample data
const post: Post = {
  id: "1",
  title: "Master of Business Administration",
  date: "May 10 2025",
  author: {
    name: "JobFusion",
    avatarUrl: "/images/logo.svg",
  },
  imageUrl: "/images/placeholder-image.webp",
  tags: ["Spider", "Marvel"],
  content: `MBA stands for Master of Business Administration. It is a graduate degree focused on teaching students about business management, equipping them with the knowledge and skills to lead and manage businesses. Think of it as a specialized master's degree in the field of business administration.`,
};

const related: RelatedPost[] = [
  {
    id: "2",
    title: "Master of Business Administration",
    date: "May 10 2025",
    author: post.author,
    imageUrl: "/images/placeholder-image.webp",
    tags: post.tags,
  },
  {
    id: "3",
    title: "Master of Business Administration",
    date: "May 10 2025",
    author: post.author,
    imageUrl: "/images/placeholder-image.webp",
    tags: post.tags,
  },
];

//==============================================================
// FINAL DIALOG COMPONENT WITH BUG FIX
//==============================================================
const ShareDialogContent = ({
  postUrl,
  title,
}: {
  postUrl: string;
  title: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Modern browsers in secure contexts (HTTPS, localhost)
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(postUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      });
    } else {
      // Fallback for older browsers or non-secure contexts (HTTP)
      const textArea = document.createElement("textarea");
      textArea.value = postUrl;
      textArea.style.position = "fixed"; // Prevents scrolling to bottom
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Fallback: Unable to copy", err);
      }
      document.body.removeChild(textArea);
    }
  };

  const shareOptions = [
    { name: "Chat", icon: <MessageCircle size={24} /> },
    { name: "Telegram", icon: <Send size={24} /> },
    { name: "Twitter", icon: <Twitter size={24} /> },
    {
      name: "Whatsapp",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967c-.273-.099-.471-.148-.67.15c-.197.297-.767.966-.94 1.164c-.173.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.018-.458.13-.606c.134-.133.298-.347.446-.52c.149-.174.198-.298.298-.497c.099-.198.05-.371-.025-.52c-.075-.149-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372c-.272.297-1.04 1.016-1.04 2.479c0 1.462 1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625c.712.227 1.36.195 1.871.118c.571-.085 1.758-.719 2.006-1.413c.248-.694.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214l-3.741.982l.998-3.648l-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"
          />
        </svg>
      ),
    },
    { name: "E-mail", icon: <Mail size={24} />, highlighted: true },
    { name: "More", icon: <MoreHorizontal size={24} /> },
  ];

  return (
    <DialogContent className="sm:max-w-md p-6">
      <DialogHeader>
        <DialogTitle className="text-xl font-semibold">Share with</DialogTitle>
      </DialogHeader>
      <div className="pt-4">
        <div className="flex justify-around text-center">
          {shareOptions.map((option) => (
            <div
              key={option.name}
              className="flex flex-col items-center gap-2 cursor-pointer w-16"
            >
              <div
                className={`p-4 rounded-full flex items-center justify-center ${
                  option.highlighted
                    ? "bg-red-100 text-red-500"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {option.icon}
              </div>
              <span
                className={`text-xs font-medium ${
                  option.highlighted ? "text-red-500" : "text-gray-700"
                }`}
              >
                {option.name}
              </span>
            </div>
          ))}
        </div>

        <div className="relative my-8 text-center">
          <hr className="absolute top-1/2 left-0 w-full -z-10" />
          <span className="bg-white px-3 text-sm text-gray-500">
            Or share with link
          </span>
        </div>

        <div className="flex items-center space-x-2 rounded-lg border bg-gray-50 p-2">
          <input
            id="link"
            defaultValue={postUrl}
            readOnly
            className="flex-1 bg-transparent text-sm text-gray-700 focus:outline-none px-2"
          />
          <button
            onClick={handleCopy}
            className="px-4 py-2 text-sm font-semibold rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </DialogContent>
  );
};

//==============================================================
// YOUR MAIN COMPONENT
//==============================================================
export default function WhatNewDetailCom({ id }: { id: string }) {
  // In a real app, you would get this from the router or window.location
  const baseUrl = "https://your-job-portal.com/news";

  return (
    <section className="mt-20">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title + Meta + Share */}
          <div className="relative flex justify-between">
            <div>
              <h1 className="text-3xl font-bold">{post.title}</h1>
              <div className="flex items-center text-sm text-gray-500 mt-2 space-x-2">
                <img
                  src={post.author.avatarUrl}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full"
                />
                <span>{post.author.name}</span>
                <span>•</span>
                <time>{post.date}</time>
              </div>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <Share2 size={16} />
                </button>
              </DialogTrigger>
              <ShareDialogContent
                postUrl={`${baseUrl}/${post.id}`}
                title={post.title}
              />
            </Dialog>
          </div>

          {/* Hero Image */}
          <div>
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full rounded-lg object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-gray-200 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <article className="prose max-w-none">
            <p>{post.content}</p>
          </article>
        </div>

        {/* Sidebar: Related Posts */}
        <aside className="lg:col-span-1 space-y-6">
          {related.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-4 space-y-2 relative">
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs bg-gray-200 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="font-semibold text-base">{item.title}</h2>
                <div className="flex items-start justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <img
                      src={item.author.avatarUrl}
                      alt={item.author.name}
                      className="w-6 h-6 rounded-full mr-1"
                    />
                    <span>{item.author.name}</span>
                    <span className="mx-1">•</span>
                    <time>{item.date}</time>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="p-2 rounded-full hover:bg-gray-100 -mt-2">
                        <Share2 size={16} />
                      </button>
                    </DialogTrigger>
                    <ShareDialogContent
                      postUrl={`${baseUrl}/${item.id}`}
                      title={item.title}
                    />
                  </Dialog>
                </div>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
