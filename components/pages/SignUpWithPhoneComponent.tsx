"use client"
import React from 'react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { EyeClosedIcon, EyeIcon } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import { useMutation } from '@tanstack/react-query';
import Api from '@/libs/Api';


const formSchema = z.object({
    phone: z.string().min(7).max(20),
    password: z.string().min(8).max(50),
    confirmPassword: z.string().min(8).max(50),
})
export default function SignUpWithPhoneComponent() {
    const [showPassword, setShowPassword] = React.useState(false);
    const signUp = useMutation({
        mutationKey: ['signUpWithPhone'],
        mutationFn: async (data: { username: string; email: string; password: string }) => {
            const response = await Api.POST('auth/register', data)
            return response
        }
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phone: "",
            password: "",
            confirmPassword: "",
        },
    })
    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        if (values.password !== values.confirmPassword) {
            // Show errors like zod
            return
        }
        console.log(values)
        signUp.mutate({ username: values.phone, email: values.phone, password: values.password })
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 flex flex-col">

                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder='Phone' {...field} />
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
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name='confirmPassword'
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className='flex flex-row items-center gap-1' >
                                    <Input type={showPassword ? 'text' : 'password'} placeholder='Confirm password' {...field} />
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
                </div>

                <Button size="me" type='submit' className='font-medium text-[14px]'>
                    Sign In
                </Button>

                <p className='text-xs text-center text-gray-500'>Or other methods</p>


            </form>
        </Form>
    )
}
