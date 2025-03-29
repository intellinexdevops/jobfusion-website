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
import Logo from "./logo";
import { useBreadcrumbStore } from "@/config/zustand/breadcrumb";
import { usePathname } from "next/navigation";
import { SearchDialog } from "../search-dialog";
import Brand from "@/public/icons/Brand";
import { ChevronsRight, Computer, Network } from "lucide-react";

const components: { title: string; href: string; description: string, icon?: React.ReactNode }[] = [
  {
    title: "IT & CS Jobs",
    href: "it-and-cs-jobs",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    icon: <Computer size={15} className="text-primary" />
  },
  {
    title: "Freelance",
    href: "freelance",
    description: "Visually or semantically separates content.",
    icon: <Network size={15} className="text-primary" />
  },
  {
    title: "View All",
    description: "",
    href: "/",
    icon: <ChevronsRight size={15} className="text-primary" />
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
                      <Brand size={100} className="rounded-md" />
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
                <ListItem href="/about" title="About">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/about#mission" title="Mission">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/about#vision" title="Vision">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="xl:flex hidden">
            <NavigationMenuTrigger>Jobs</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-1">
                {components.map((component) => {
                  return (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={`/careers/${component.href}`}
                      icon={component.icon}
                    >
                      {component.description}
                    </ListItem>
                  )
                })}
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
            <Link href="/pricing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Post for free
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <SearchDialog />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
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
          <div className="flex flex-row items-center gap-2" >
            {icon && <span className="w-6 h-6 flex items-center justify-center rounded bg-primary/10">{icon}</span>}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
