"use client"
import React from 'react'
import Logo from '../materials/_components/logo'
import { Button } from '../ui/button'
import Image from 'next/image'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SignUpWithEmailComponent from './sign-up-with-email-component'
import SignUpWithPhoneComponent from './sign-up-with-phone-component'
import { Label } from '../ui/label'
import Modal from '../ui/modal'

export default function SignUpComponent() {
    return (
        <Modal>
            <div>
                <Logo />
                <div className='mt-[30px]'>
                    <p className='text-xl font-bold text-text'>Sign Up</p>
                    <p className='text-sm text-gray-600'>Please enter your details.</p>
                </div>
            </div>

            <div className='grid grid-cols-2 gap-3 mt-[30px]'>
                <Button variant='outline' className='space-x-1' >
                    <Image
                        src="/icons/apple.svg"
                        width={20}
                        height={20}
                        alt='Apple'
                    />
                    <Label className='text-gray-600 font-medium'>Apple</Label>
                </Button>
                <Button variant='outline' className='space-x-1' onClick={() => { }} >
                    <Image
                        src="/icons/google.svg"
                        width={20}
                        height={20}
                        alt='Apple'
                    />
                    <Label className='text-gray-600 font-medium'>Google</Label>
                </Button>
                <Button variant='outline' className='space-x-1' >
                    <Image
                        src="/icons/linkedin.svg"
                        width={20}
                        height={20}
                        alt='Apple'
                    />
                    <Label className='text-gray-600 font-medium'>LinkedIn</Label>
                </Button>
                <Button variant='outline' className='space-x-1' >
                    <Image
                        src="/icons/github.svg"
                        width={20}
                        height={20}
                        alt='Apple'
                    />
                    <Label className='text-gray-600 font-medium'>GitHub</Label>
                </Button>
            </div>
            <div className='mt-[10px]'>
                <p className='text-sm text-gray-600 text-center'>OR</p>
            </div>
            <div className='mt-[10px]'>
                <Tabs defaultValue="email">
                    <TabsList className="grid grid-cols-2 mb-5">
                        <TabsTrigger value="email">Email</TabsTrigger>
                        <TabsTrigger value="phone">Phone</TabsTrigger>
                    </TabsList>

                    <TabsContent value="email">
                        <SignUpWithEmailComponent />
                    </TabsContent>
                    <TabsContent value="phone">
                        <SignUpWithPhoneComponent />
                    </TabsContent>
                </Tabs>
            </div>
        </Modal>
    )
}
