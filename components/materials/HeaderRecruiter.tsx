"use client"
import React from 'react'
import { SidebarTrigger } from '../ui/sidebar'
import SidebarBreadcrumb from './SidebarBreadcrumb'
import { ArrowLeftRight, Building2Icon, Search, BellIcon } from 'lucide-react'
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useRouter } from 'next/navigation'

export default function HeaderRecruiter() {

    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, []);


    const company = [
        {
            id: 1,
            name: "JobFusion",
            slug: "jobFusion",
            logo: "https://github.com/shadcn.png"
        },
        {
            id: 2,
            name: "Microsoft",
            slug: "microsoft365",
            logo: "https://github.com/shadcn.png"
        }
    ]

    const companyProfileMenu = [
        {
            id: 1,
            label: "Profile",
            icon: Building2Icon,
            href: "profile"
        },
        {
            id: 2,
            label: "Notifications",
            icon: BellIcon,
            href: "company"
        }
    ]

    const router = useRouter()

    return (
        <header className='sticky top-0 z-50 bg-background' >
            <div className='flex flex-row items-center justify-between py-3 px-5' >
                <div className='flex flex-row items-center gap-4' >
                    <SidebarTrigger />
                    <SidebarBreadcrumb />
                </div>
                <div className='flex flex-row items-center gap-3' >
                    <div className='flex flex-row items-center bg-gray-100 border p-2 rounded-xl gap-2 cursor-pointer' onClick={() => setOpen(true)} >
                        <Search size={16} className='text-gray-500' />
                        <span className='text-xs text-gray-400' >Search candidate</span>
                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                            <span className="text-xs">⌘</span>K
                        </kbd>
                    </div>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Avatar className='w-9 h-9 cursor-pointer'>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </PopoverTrigger>

                        <PopoverContent className='border-none me-5 mt-2' >
                            <div className='flex flex-col gap-1' >
                                <div className='flex flex-row items-center justify-between mb-4' >
                                    <div className='flex flex-row items-center gap-3' >
                                        <Avatar className='w-8 h-8 cursor-pointer'>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className='text-xs font-medium'>Google Inc.</p>
                                            <p className='text-xs text-gray-500' >Siem Reap</p>
                                        </div>
                                    </div>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <button>
                                                <ArrowLeftRight size={15} className='text-gray-500' />
                                            </button>
                                        </PopoverTrigger>
                                        <PopoverContent className='border rounded-xl me-[50px] mt-4 max-w-60' >
                                            <p className='text-xs font-medium text-gray-500' >Switch company</p>
                                            <div className='mt-3 pb-4 border-b flex flex-col gap-3' >
                                                {company.map((com, idx) => (
                                                    <div className='flex flex-row items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-md transition-all duration-200 ease-linear' key={idx}>
                                                        <Avatar className='w-5 h-5 cursor-pointer'>
                                                            <AvatarImage src="https://github.com/shadcn.png" />
                                                            <AvatarFallback>CN</AvatarFallback>
                                                        </Avatar>
                                                        <div className='flex flex-row items-center gap-3' >
                                                            <p className='text-xs font-semibold'>{com.name}</p>
                                                            <p className='text-xs text-gray-400' >{com.slug}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className='mt-3 flex flex-col' >
                                                <button className='flex flex-row items-end gap-2 px-2 py-1 rounded-md hover:bg-slate-100 transition-all duration-200 ease-in-out' >
                                                    <Building2Icon size={14} className='text-gray-700' />
                                                    <span className='text-xs text-gray-700 hover:text-gray-900 transition-all duration-200 ease-in-out' >Create new</span>
                                                </button>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                {companyProfileMenu.map((menu, idx) => (
                                    <div onClick={() => router.push(menu.href)} className='flex flex-row items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-md transition-all duration-200 ease-linear' key={idx}>
                                        <menu.icon size={14} className='text-gray-700' />
                                        <span className='text-xs text-gray-700 hover:text-gray-900 transition-all duration-200 ease-in-out' >{menu.label}</span>
                                    </div>
                                ))}
                            </div>
                        </PopoverContent>

                    </Popover>

                </div>
            </div>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Search candidate..." />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Recent">
                        <CommandItem>Chenter PHAI</CommandItem>
                        <CommandItem>Kemleap VEN</CommandItem>
                        <CommandItem>Roeksann BAL</CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </header>
    )
}
