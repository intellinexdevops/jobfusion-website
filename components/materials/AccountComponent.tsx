"use client";
import { Bell, Calendar, Contact, CreditCard, History, IdCard, Settings, SquareUser } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react'
import AccountDetailOption from './AccountDetailOption';

export default function AccountComponent() {

    const accountMenu: { id: number, label: string, query: string, icon: React.ReactNode }[] = [
        {
            id: 1,
            label: 'Personal Information',
            query: 'account',
            icon: <SquareUser size={14} strokeWidth={1.5} />
        },
        {
            id: 2,
            label: 'Portfolio',
            query: 'profile',
            icon: <IdCard size={14} strokeWidth={1.5} />
        },
        {
            id: 3,
            label: 'Contact',
            query: 'contact',
            icon: <Contact size={14} strokeWidth={1.5} />
        },
        {
            id: 4,
            label: "Apply History",
            query: 'history',
            icon: <History size={14} strokeWidth={1.5} />
        },
        {
            id: 5,
            label: 'Calendar',
            query: 'calendar',
            icon: <Calendar size={14} strokeWidth={1.5} />
        },
        {
            id: 6,
            label: 'Notifications',
            query: 'notifications',
            icon: <Bell size={14} strokeWidth={1.5} />
        },
        {
            id: 7,
            label: 'Billings',
            query: 'billings',
            icon: <CreditCard size={14} strokeWidth={1.5} />
        },
        {
            id: 8,
            label: 'Settings',
            query: 'settings',
            icon: <Settings size={14} strokeWidth={1.5} />
        }
    ]

    const params = useSearchParams();
    const currentMenu = params?.get('menu') ?? "account";



    return (
        <div className='mt-20 mb-10' >
            <div className='container'>
                <div className='grid lg:grid-cols-12 gap-3' >
                    <div className='col-span-3' >
                        <div className='bg-white dark:bg-primary/5 rounded-lg py-3 px-4' >
                            <p className='font-semibold text-xl text-gray-800 mb-5' >Manage Account</p>
                            {accountMenu.map((menu, idx) => (
                                <Link
                                    href={`/account?menu=${menu.query}`}
                                    key={idx}
                                    className={`flex flex-row items-center gap-2 rounded-md px-4 py-3 mb-2 transition-all duration-200 ease-linear hover:text-primary ${currentMenu === menu.query ? 'bg-primary/10 text-primary font-medium hover:bg-primary/5 hover:text-primary' : ' hover:bg-primary/10 text-gray-400'}`} >
                                    {menu.icon}
                                    <span className='text-sm' >{menu.label}</span>
                                </Link>
                            ))}

                        </div>
                    </div>
                    <div className='col-span-9' >
                        <AccountDetailOption menu={currentMenu} />
                    </div>
                </div>
            </div>
        </div>
    )
}
