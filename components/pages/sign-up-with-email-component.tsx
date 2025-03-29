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


const formSchema = z.object({
    email: z.string().min(3).max(50).email(),
    password: z.string().min(8).max(50),
    confirmPassword: z.string().min(8).max(50),
})
export default function SignUpWithEmailComponent() {
    const [showPassword, setShowPassword] = React.useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
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
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 flex flex-col">

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input placeholder='Email' {...field} />
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
