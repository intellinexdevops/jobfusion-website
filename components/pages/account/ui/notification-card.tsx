"use client"
import { Card, CardContent } from '@/components/ui/card'
import { MailOpen, Star, Trash2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import { NotificationProps } from '../notification-component'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

export const NotificationCard = ({ n }: { n: NotificationProps }) => {
    const [open, setOpen] = React.useState(false)
    return (
        <div>
            <Card
                onClick={() => setOpen(true)}
                className={`flex items-center p-4 space-x-4 transition-colors duration-200 cursor-pointer ${!n.read ? "bg-primary/10" : "bg-white"
                    } hover:bg-[rgba(0,191,99,0.1)] hover:text-black`}
            >
                <CardContent className="p-0 flex-1 flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div
                            className={`${!n.read ? "border border-neutral-700" : ""
                                } w-2 h-2 rounded-full `}
                        />
                        <Star size={12} />
                    </div>
                    <div className="flex flex-1 items-start gap-3">
                        <div className="w-8 h-8 rounded-full relative flex items-center justify-center font-bold text-xl">
                            <Image src="/icons/google.svg" fill alt="Logo" />
                        </div>
                        <div className="flex w-full justify-between">
                            <div>
                                <p className="font-medium text-neutral-600 text-sm line-clamp-1">
                                    {n.title}
                                </p>
                                <p className="text-xs text-muted-foreground line-clamp-1">
                                    {n.message}{" "}
                                    <span className="text-primary cursor-pointer">
                                        Read more.
                                    </span>
                                </p>
                                {n.button && (
                                    <Button size="sm" className="mt-2">
                                        {n.button}
                                    </Button>
                                )}
                            </div>
                            <div className="flex items-start gap-3">
                                <span className="text-xs text-muted-foreground">
                                    {n.time}
                                </span>
                                <Trash2 size={16} className="text-error" />
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent
                    className="w-[650px] bg-white p-6 shadow-lg font-poppins"

                    style={{ borderRadius: '20px' }}>

                    {/* Top Section: Google Info + Icons */}
                    <div className="flex justify-between items-start mb-6">
                        {/* Google Logo + Info */}
                        <div className="flex items-start gap-3">
                            <img
                                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
                                alt="logo"
                                className="w-6 h-6 mt-1"
                            />
                            <div>
                                <p className="text-base font-poppins text-gray-800">Google</p>
                                <p className="text-sm font-poppins text-gray-400">Siem Reap - 12 July 2024</p>
                            </div>
                        </div>

                        {/* Icons */}
                        <div className="flex items-center gap-3">
                            <Star size={18} />
                            <MailOpen size={18} />
                            <Trash2 size={18} className='text-error' />

                        </div>
                    </div>

                    {/* Accessible Dialog Title (replaces the h2) */}
                    <DialogTitle className="text-lg font-poppins text-gray-800 mb-4">
                        Congratulation! You have successfully invited ...
                    </DialogTitle>

                    {/* Body Text */}
                    <p className="font-poppins text-gray-600 mb-10">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    {/* Button */}
                    <div className="flex justify-end">
                        <button className="px-4 py-2 bg-green-100 text-green-600 rounded-full hover:bg-green-200 transition text-sm font-poppins">
                            View Jobs
                        </button>
                    </div>

                </DialogContent>
            </Dialog>




        </div>
    )
}
