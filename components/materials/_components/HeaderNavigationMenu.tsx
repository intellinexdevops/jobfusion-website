"use client";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Logo from "./Logo";
import { useBreadcrumbStore } from "@/libs/zustand/BreadCrumb";
import { usePathname } from "next/navigation";
import { SearchDialog } from "../SearchDialog";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Software Development",
    href: "software-development",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Graphic Design",
    href: "graphic-design",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Database Management",
    href: "database-management",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Network Engineering",
    href: "network-engineering",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Cybersecurity",
    href: "cybersecurity",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Blockchain",
    href: "blockchain",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function HeaderNavigationMenu() {
  const setBreadCrumb = useBreadcrumbStore((state) => state.setBreadcrumb);
  const pathname = usePathname();

  React.useEffect(() => {
    console.log(pathname);
    switch (pathname) {
      case "/":
        setBreadCrumb({ title: "Home", url: "/" });
        break;
      case "/careers":
        setBreadCrumb({ title: "Careers", url: "/careers" });
        break;
      case "/career-details":
        setBreadCrumb({ title: "Details", url: "/career-details" });
      default:
        break;
    }
  }, [pathname, setBreadCrumb]);

  return (
    <div className="flex flex-row items-center gap-x-10">
      <Logo />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="hidden xl:flex">
            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      {/*Logo  */}
                      <div className="mb-2 mt-4 text-lg font-medium">
                        JobFusion
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="About">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Mission">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Vision">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="xl:flex hidden">
            <NavigationMenuTrigger>Jobs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={`/careers/${component.href}`}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="xl:flex hidden">
            <Link href="/what-new" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                What&apos;s new ?
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="xl:flex hidden">
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Post Jobs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <SearchDialog />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
