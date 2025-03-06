"use client"
import React from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { CircleUser, Moon, Settings, Sun, User } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/navigation'

export default function FooterSidebarCom() {
    const { setTheme, theme } = useTheme();
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    const router = useRouter();
    return (
        <div className=''>
            <Popover>
                <PopoverTrigger asChild>
                    <Button className='flex flex-row items-center justify-start gap-3 px-0 bg-transparent w-full hover:bg-transparent' >
                        <div className='w-8 h-8 flex items-center justify-center bg-primary rounded-full' >
                            <User />
                        </div>
                        <div className='flex flex-col items-start'>
                            <span className='text-gray-700 font-medium dark:text-gray-50' >Account</span>
                            <span className='text-gray-400 text-xs'>chenterphai@gmail.com</span>
                        </div>
                    </Button>
                </PopoverTrigger>
                <PopoverContent align='start' className='w-auto' >
                    <div className='flex flex-col gap-y-4 py-1' >
                        <div className='flex flex-row items-center gap-2 cursor-pointer' onClick={() => router.push("/account")}  >
                            <Button variant="outline" size='icon' className='w-6 h-6'>
                                <CircleUser size={16} strokeWidth={2} className='text-gray-500 dark:text-gray-200' />
                            </Button>
                            <p className='text-xs text-gray-500 dark:text-gray-200'>My Account</p>
                        </div>

                        <div className='flex flex-row items-center gap-2' >
                            <Button variant="outline" size='icon' className='w-6 h-6' >
                                <Settings size={16} className='text-gray-500 dark:text-gray-200' />
                            </Button>
                            <span className='text-xs text-gray-500 dark:text-gray-200'>Settings</span>
                        </div>

                        <div className='flex flex-row items-center cursor-pointer gap-2' onClick={() => toggleTheme()} >
                            <Button variant="outline" size='icon' className='w-6 h-6' >
                                {theme === "light" ? <Moon size={10} className='text-gray-500' /> : <Sun size={10} />}
                            </Button>
                            <span className='text-xs text-gray-500 dark:text-gray-200' >
                                Dark Mode
                                {theme === "light" ? " (Off)" : " (On)"}
                            </span>
                        </div>


                        <Button className='hidden md:flex' variant={'outline'} onClick={() => router.push("/pricing/plans")} >
                            Upgrade Account
                        </Button>

                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}
