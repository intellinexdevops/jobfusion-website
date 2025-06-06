"use client"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Calendar, AppWindowIcon, MessageCircleMore, LayoutDashboard, Briefcase, Atom, FolderUp } from "lucide-react";
import Logo from "../logo";
import FooterSidebarCom from "../footer-sidebar-com";
import { usePathname } from "next/navigation";

const items = [
    {
        title: "Job",
        url: "job",
        icon: Briefcase,
    },
    {
        title: "Workspace",
        url: "workspace",
        icon: Atom,
    },
    {
        title: "Report",
        url: "report",
        icon: FolderUp,
    },
    {
        title: "Dashboard",
        url: "dashboard",
        icon: LayoutDashboard,
    },
    {
        title: "Message",
        url: "message",
        icon: MessageCircleMore,
    },
    {
        title: "Calendar",
        url: "calendar",
        icon: Calendar,
    },
    {
        title: "Application",
        url: "application",
        icon: AppWindowIcon,
    },
]

export function AppSidebar() {
    const pathname = usePathname();
    const isActive = (url: string) => url === pathname!.split("/")[3];
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarHeader>
                        <Logo />
                    </SidebarHeader>
                    <SidebarGroupLabel>Menu</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.slice(3).map((item) => (
                                <SidebarMenuItem key={item.title} className={`my-1 rounded-md ${isActive(item.url) ? 'bg-primary/15' : ''}`} >
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon className={`${isActive(item.url) ? "text-primary" : "text-gray-500"}`} size={16} />
                                            <span className={`text-xs ${isActive(item.url) ? "text-primary font-medium" : "text-gray-500"}`} >{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup className="flex-1" >
                    <SidebarGroupLabel>Platform</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.slice(0, 3).map((item) => (
                                <SidebarMenuItem key={item.title} className={`my-1 rounded-md ${isActive(item.url) ? 'bg-primary/15' : ''}`} >
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon className={`${isActive(item.url) ? "text-primary" : "text-gray-500"}`} size={16} />
                                            <span className={`text-xs ${isActive(item.url) ? "text-primary font-medium" : "text-gray-500"}`} >{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup className="" >
                    <SidebarFooter>
                        <FooterSidebarCom />
                    </SidebarFooter>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}