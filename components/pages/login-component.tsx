"use client"
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from '../ui/input'
import Brand from '@/public/icons/Brand'
import Logo from '../materials/_components/logo'
import Link from 'next/link'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from '../ui/button'
import { EyeClosedIcon, EyeIcon } from 'lucide-react'
import Image from 'next/image'

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"

import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"


const formSchema = z.object({
    identifier: z.string().min(3).max(50),
    password: z.string().min(8).max(50),
})

export default function LoginComponent() {

    const [showPassword, setShowPassword] = React.useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            identifier: "",
            password: "",
        },
    })

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }


    return (
        <div className='h-screen flex items-center justify-center flex-col gap-10' >
            <div className='flex flex-col items-center gap-2'>
                <Brand size={70} className='rounded-lg' />
                <Logo />
            </div>
            <Card className='w-[400px] p-2'>
                <CardHeader className='flex flex-col items-center justify-center'>
                    <CardTitle>Welcome back!</CardTitle>
                    <CardDescription>Please login to continue.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 flex flex-col">

                            <FormField
                                control={form.control}
                                name="identifier"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder='Email or number' {...field} />
                                        </FormControl>
                                        {/* <FormDescription>
                                            This is your public display name.
                                        </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name='password'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className='flex flex-row items-center gap-1'>
                                                <Input type={showPassword ? 'text' : 'password'} placeholder='Password' {...field} />
                                                <Button
                                                    type='button'
                                                    variant="outline"
                                                    className='w-11 h-11'
                                                    onClick={() => setShowPassword(!showPassword)}
                                                >
                                                    {showPassword ? <EyeIcon /> : <EyeClosedIcon />}
                                                </Button>
                                            </div>
                                        </FormControl>
                                        {/* <FormDescription>
                                            Use 8 or more characters including uppercase, lowercase, numbers, and symbols.
                                        </FormDescription> */}
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />



                            <div className='flex flex-row items-center justify-between'>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" />
                                    <label
                                        htmlFor="terms"
                                        className="text-sm text-gray-600 font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <Link className='text-sm font-medium text-primary' href="/authentication/forgot-password">
                                    Forgot Password?
                                </Link>
                            </div>

                            <Button size="me" type='submit' className='font-medium text-[14px]'>
                                Sign In
                            </Button>

                            <p className='text-xs text-center text-gray-500'>Or other methods</p>


                        </form>
                    </Form>

                    <div className='flex items-center justify-center gap-3 mt-4'>
                        <Button size="icon" variant='outline' >
                            <Image
                                src="/icons/apple.svg"
                                width={20}
                                height={20}
                                alt='Apple'
                            />
                        </Button>
                        <Button size="icon" variant='outline' onClick={() => { }} >
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
                <CardFooter className='flex items-center justify-center'>
                    <p className='text-sm text-gray-500'>Don&apos;t have an account?</p>
                    <Link className='text-sm font-medium text-primary ms-2' href="/authentication/sign-up">
                        Sign up
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}
