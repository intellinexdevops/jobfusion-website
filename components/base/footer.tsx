"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, LinkIcon, Moon, Sun } from "lucide-react";
import AppleDownload from "@/public/icons/AppleDownload";
import AndroidDownload from "@/public/icons/AndroidDownload";
import { useTheme } from "next-themes";
import Logo from "../logo";
import { Button } from "../ui/button";

export default function Footer() {
  const keywords = [
    {
      name: "Software Developer",
      href: "/software-development",
    },
    {
      name: "Web Developer",
      href: "/web-development",
    },
    {
      name: "Mobile Developer",
      href: "/mobile-development",
    },
    {
      name: "Data Science",
      href: "/data-science",
    },
    {
      name: "AI",
      href: "/ai",
    },
    {
      name: "Cybersecurity",
      href: "/cybersecurity",
    },
  ];

  const routers = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      href: "/about-us",
    },
    {
      name: "Contact Us",
      href: "/contact-us",
    },
    {
      name: "Careers",
      href: "/careers",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "FAQ",
      href: "/faq",
    },
    {
      name: "Terms & Conditions",
      href: "/terms-and-conditions",
    },
    {
      name: "Privacy Policy",
      href: "/privacy-policy",
    },
  ];

  const now = new Date();
  const year = now.getFullYear();
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <footer className="bg-footer pt-14">
      <div className="container mx-auto">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <div>
              <div className="mb-10">
                <Logo />
              </div>
              <div className="flex flex-col gap-2 mt-3">
                <AppleDownload />
                <AndroidDownload />
              </div>
              <div className="flex flex-row items-center gap-2 mt-5">
                <Button
                  onClick={() => toggleTheme()}
                  variant="outline"
                  size="icon"
                >
                  {theme === "light" ? <Moon /> : <Sun />}
                </Button>
              </div>
            </div>
            <div>
              <p className="text-base font-semibold mb-4">Keywords</p>
              <ul className="font-normal text-sm">
                {keywords.map((keyword) => (
                  <li key={keyword.name} className="mt-3 group">
                    <Link
                      href="#"
                      className="transition-all duration-300 ease-linear group-hover:ps-2 flex flex-row items-center gap-2 group-hover:font-medium"
                    >
                      <LinkIcon className="" size={13} />
                      {keyword.name}
                      <ChevronRight
                        size={13}
                        className="group-hover:opacity-100 opacity-0 transition-all duration-300 ease-linear"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-base font-semibold mb-4">Useful Links</p>
              <ul className="font-normal text-sm">
                {routers.map((router) => (
                  <li key={router.name} className="mt-3">
                    <Link
                      href={router.href}
                      className="transition-all duration-300 ease-linear"
                    >
                      {router.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-base font-semibold mb-4">For Client</p>
              <ul className="font-normal text-sm">
                {routers.map((router) => (
                  <li key={router.name} className="mt-3">
                    <Link
                      href={router.href}
                      className="transition-all duration-300 ease-linear"
                    >
                      {router.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-base font-semibold mb-4">Company</p>
              <ul className="font-normal text-sm">
                {routers.map((router) => (
                  <li key={router.name} className="mt-3">
                    <Link
                      href={router.href}
                      className="transition-all duration-300 ease-linear"
                    >
                      {router.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t py-4 mt-10">
          <div className="container mx-auto flex md:flex-row flex-col items-center justify-between">
            <div className="flex md:flex-row flex-col items-center gap-10">
              <p className="text-sm text-gray-500">
                &copy; {year} JobFusion. All rights reserved.
              </p>
              <Link href="#" className="text-sm underline text-gray-500">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm underline text-gray-500">
                Terms of Service
              </Link>
            </div>
            <div className="flex flex-row items-center gap-2 md:mt-0 mt-10">
              <Link href="#" className="text-sm text-gray-500">
                <svg
                  className=""
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.4781 13.1861C22.4781 7.62951 18.001 3.125 12.4781 3.125C6.9553 3.125 2.47815 7.62951 2.47815 13.1861C2.47815 18.2078 6.13499 22.3702 10.9156 23.125V16.0944H8.37659V13.1861H10.9156V10.9695C10.9156 8.44796 12.4086 7.05512 14.6927 7.05512C15.7869 7.05512 16.9312 7.25163 16.9312 7.25163V9.72761H15.6703C14.4281 9.72761 14.0406 10.5032 14.0406 11.2989V13.1861H16.814L16.3707 16.0944H14.0406V23.125C18.8214 22.3702 22.4781 18.208 22.4781 13.1861Z"
                    fill="hsl(var(--foreground))"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-sm text-gray-500">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.4781 4.125H8.47815C5.71673 4.125 3.47815 6.36358 3.47815 9.125V17.125C3.47815 19.8864 5.71673 22.125 8.47815 22.125H16.4781C19.2395 22.125 21.4781 19.8864 21.4781 17.125V9.125C21.4781 6.36358 19.2395 4.125 16.4781 4.125ZM19.7281 17.125C19.7226 18.9176 18.2707 20.3695 16.4781 20.375H8.47815C6.6855 20.3695 5.23364 18.9176 5.22815 17.125V9.125C5.23364 7.33235 6.6855 5.88049 8.47815 5.875H16.4781C18.2707 5.88049 19.7226 7.33235 19.7281 9.125V17.125ZM17.2281 9.375C17.7804 9.375 18.2281 8.92728 18.2281 8.375C18.2281 7.82272 17.7804 7.375 17.2281 7.375C16.6758 7.375 16.2281 7.82272 16.2281 8.375C16.2281 8.92728 16.6758 9.375 17.2281 9.375ZM12.4781 8.625C9.99287 8.625 7.97815 10.6397 7.97815 13.125C7.97815 15.6103 9.99287 17.625 12.4781 17.625C14.9634 17.625 16.9781 15.6103 16.9781 13.125C16.9808 11.9307 16.5075 10.7846 15.663 9.94008C14.8186 9.09559 13.6724 8.62234 12.4781 8.625ZM9.72815 13.125C9.72815 14.6438 10.9593 15.875 12.4781 15.875C13.9969 15.875 15.2281 14.6438 15.2281 13.125C15.2281 11.6062 13.9969 10.375 12.4781 10.375C10.9593 10.375 9.72815 11.6062 9.72815 13.125Z"
                    fill="hsl(var(--foreground))"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-sm text-gray-500">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6542 5.125H20.4143L14.3842 11.9024L21.4781 21.125H15.9237L11.5732 15.5316L6.59538 21.125H3.83359L10.2833 13.8758L3.47815 5.125H9.1736L13.106 10.2376L17.6542 5.125ZM16.6854 19.5004H18.2149L8.34256 6.66428H6.70135L16.6854 19.5004Z"
                    fill="hsl(var(--foreground))"
                  />
                </svg>
              </Link>
              <Link href="#" className="text-sm text-gray-500">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.97815 4.125C4.14972 4.125 3.47815 4.79657 3.47815 5.625V20.625C3.47815 21.4534 4.14972 22.125 4.97815 22.125H19.9781C20.8065 22.125 21.4781 21.4534 21.4781 20.625V5.625C21.4781 4.79657 20.8065 4.125 19.9781 4.125H4.97815ZM8.99891 8.12772C9.00454 9.08397 8.28876 9.67319 7.43938 9.66897C6.63922 9.66475 5.94172 9.02772 5.94594 8.12913C5.95016 7.28397 6.61813 6.60475 7.48579 6.62444C8.3661 6.64413 9.00454 7.2896 8.99891 8.12772ZM12.7578 10.8868H10.2379H10.2364V19.4466H12.8998V19.2469C12.8998 18.867 12.8995 18.487 12.8992 18.1069C12.8984 17.0931 12.8975 16.0782 12.9027 15.0647C12.9041 14.8186 12.9153 14.5627 12.9786 14.3278C13.2162 13.4503 14.0052 12.8836 14.8855 13.0229C15.4508 13.1114 15.8248 13.4391 15.9823 13.9721C16.0794 14.3053 16.123 14.6639 16.1272 15.0113C16.1386 16.0589 16.137 17.1065 16.1354 18.1542C16.1348 18.524 16.1342 18.894 16.1342 19.2638V19.4452H18.8061V19.2399C18.8061 18.7879 18.8059 18.336 18.8056 17.8841C18.8051 16.7546 18.8045 15.6251 18.8075 14.4952C18.8089 13.9847 18.7542 13.4813 18.629 12.9877C18.4419 12.2536 18.0552 11.6461 17.4266 11.2074C16.9808 10.8952 16.4914 10.6941 15.9444 10.6716C15.8821 10.669 15.8193 10.6656 15.7562 10.6622C15.4765 10.6471 15.1922 10.6317 14.9248 10.6857C14.1598 10.8389 13.4877 11.1891 12.98 11.8064C12.921 11.8772 12.8633 11.9491 12.7772 12.0564L12.7578 12.0807V10.8868ZM6.15979 19.4494H8.81057V10.8923H6.15979V19.4494Z"
                    fill="hsl(var(--foreground))"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
