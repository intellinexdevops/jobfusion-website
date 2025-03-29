"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import Link from 'next/link'
import Brand from '@/public/icons/Brand'
import Logo from '../materials/_components/logo'
import { Button } from '../ui/button'
import Image from 'next/image'


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SignUpWithEmailComponent from './sign-up-with-email-component'
import SignUpWithPhoneComponent from './sign-up-with-phone-component'

export default function SignUpComponent() {
    return (
        <div className='h-screen flex items-center justify-center flex-col gap-10' >
            <div className='flex flex-col items-center gap-2'>
                <Brand size={70} className='rounded-lg' />
                <Logo />
            </div>
            <Card className='w-[450px] p-2'>
                <CardHeader className='flex flex-col items-center justify-center'>
                    <CardTitle>Create new account!</CardTitle>
                    <CardDescription>Enter your credentials.</CardDescription>
                </CardHeader>

                <Tabs defaultValue="email">
                    <TabsList className="grid grid-cols-2 mx-6 mb-5">
                        <TabsTrigger value="email">Email</TabsTrigger>
                        <TabsTrigger value="phone">Phone</TabsTrigger>
                    </TabsList>
                    <CardContent>
                        <TabsContent value="email">
                            <SignUpWithEmailComponent />
                        </TabsContent>
                        <TabsContent value="phone">
                            <SignUpWithPhoneComponent />
                        </TabsContent>
                        <div className='flex items-center justify-center gap-3 mt-4'>
                            <Button size="icon" variant='outline' >
                                <Image
                                    src="/icons/apple.svg"
                                    width={20}
                                    height={20}
                                    alt='Apple'
                                />
                            </Button>
                            <Button size="icon" variant='outline' >
                                <Image
                                    src="/icons/google.svg"
                                    width={20}
                                    height={20}
                                    alt='Apple'
                                />
                            </Button>
                            <Button size="icon" variant='outline' >
                                <Image
                                    src="/icons/linkedin.svg"
                                    width={20}
                                    height={20}
                                    alt='Apple'
                                />
                            </Button>
                        </div>
                    </CardContent>
                </Tabs>


                <CardFooter className='flex items-center justify-center'>
                    <p className='text-sm text-gray-500'>Already have account?</p>
                    <Link className='text-sm font-medium text-primary ms-2' href="/authentication/sign-in">
                        Sign In
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}
