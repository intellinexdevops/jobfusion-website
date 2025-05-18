"use client"
import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { Input } from '../ui/input'
import Logo from '../logo'
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
    FormLabel
} from "@/components/ui/form"
import Modal from '../ui/modal'
import { Label } from '../ui/label'
import { auth } from '@/utils/firebase';
import { createClient } from '@/utils/supabase/client';


const formSchema = z.object({
    identifier: z.string().min(3).max(50),
    password: z.string().min(8).max(50),
})

export default function LoginComponent() {

    const provider = new GoogleAuthProvider();

    const supabase = createClient()

    const [showPassword, setShowPassword] = React.useState(false);
    const handleGoogleSignIn = () => {

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential!.accessToken;
                console.log("Access Token", token)
                const user = result.user;
                console.log(JSON.stringify(user, null, 2))
            }).catch((error) => {
                // Handle Errors here.
                // const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.customData.email;
                // The AuthCredential type that was used.
                // const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorMessage)
            });
    }

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            identifier: "",
            password: "",
        },
    })

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        // console.log(values)
        const { data } = await supabase.auth.signInWithOtp({
            email: values.identifier,
            options: {
                shouldCreateUser: false,
            }
        });

        console.log(data)
    }


    return (
        <Modal>
            <div>
                <Logo />
                <div className='mt-[30px]'>
                    <p className='text-xl font-bold text-text'>Sign In</p>
                    <p className='text-sm text-gray-600'>Please enter your details.</p>
                </div>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 flex flex-col mt-3">
                    <FormField
                        control={form.control}
                        name="identifier"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input placeholder='' {...field} />
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
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <div className='flex flex-row items-center gap-1'>
                                        <Input type={showPassword ? 'text' : 'password'} {...field} />
                                        <Button
                                            type='button'
                                            variant="outline"
                                            className='w-10 h-10 rounded-[10px]'
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
                        <Link className='text-sm font-medium text-primary underline' href="/authentication/forgot-password">
                            Forgot Password?
                        </Link>
                    </div>

                    <Button size="me" type='submit' className='font-medium text-[14px]'>
                        Sign In
                    </Button>

                    <p className='text-xs text-center text-gray-500'>Or other methods</p>
                </form>
            </Form>

            <div className='grid grid-cols-2 gap-3 mt-3'>
                <Button variant='outline' className='space-x-1' >
                    <Image
                        src="/icons/apple.svg"
                        width={20}
                        height={20}
                        alt='Apple'
                    />
                    <Label className='text-gray-600 font-medium'>Apple</Label>
                </Button>
                <Button variant='outline' className='space-x-1' onClick={handleGoogleSignIn} >
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

            <div className='flex items-center space-x-1 justify-center'>
                <p className='text-xs text-center text-gray-500'>Don&apos;t have an account?</p>
                <Link replace href="/sign-up" className='text-sm font-medium text-primary underline'>Sign Up</Link>
            </div>

        </Modal>
    )
}
