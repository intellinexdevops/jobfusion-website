"use client"
import { Building, StarIcon, UploadIcon, Verified } from 'lucide-react'
import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from "sonner"

export default function ApplyComponent() {


    const handleOnApplyNow = () => {
        toast.success("You have applied your application.", {
            description: "",
        })
    }

    return (
        <div className='container mb-10' >
            <div className='grid lg:grid-cols-12 grid-cols-1' >
                <div className='col-span-7' >
                    <div className='bg-white dark:bg-primary/5 p-5 rounded-lg' >
                        <form>
                            <p className='font-medium text-gray-500 text-xs'>Personal Info</p>
                            <div className='grid grid-cols-1 md:grid-cols-2 mt-2 gap-5' >

                                <div className='flex flex-col gap-2'>
                                    <Label>Fisrt name</Label>
                                    <Input placeholder='First-name' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Label>Last name</Label>
                                    <Input placeholder='Last-name' />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <Label>Email</Label>
                                    <Input placeholder='chenterphai@gmail.com' />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <Label>Phone</Label>
                                    <Input placeholder='964903404' />
                                </div>
                            </div>
                            <p className='font-medium text-xs text-gray-500 mt-8'>Attachment<span className='text-red-500'> *</span></p>
                            <div className='mt-2 grid grid-cols-1 md:grid-cols-2 mb-5' >
                                <div className='flex flex-col gap-2' >
                                    <Label>CV / Resume</Label>
                                    <div className='rounded-lg border border-dashed h-12 flex flex-row gap-3 justify-center items-center' >
                                        <UploadIcon size={13} className='text-gray-500' />
                                        <Label htmlFor='upload_cv_resume' className='text-gray-500 font-normal text-xs' >Upload</Label>
                                        <input id='upload_cv_resume' type='file' hidden />
                                    </div>
                                </div>
                            </div>

                            <AlertDialog>
                                <AlertDialogTrigger>
                                    <div className='text-sm h-10 flex items-center justify-center bg-primary text-white px-10 rounded-md' >
                                        Submit
                                    </div>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your account
                                            and remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={handleOnApplyNow}>Apply Now</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>


                        </form>
                    </div>
                </div>
                <div className='lg:col-span-5 lg:ms-5 mt-5 lg:mt-0' >
                    <div className='bg-white dark:bg-primary/5 p-5 rounded-lg' >
                        <p className='text-2xl font-semibold' >Web Developer</p>
                        <div className='flex flex-row items-center justify-between' >
                            <div className='flex flex-row items-center gap-3 mt-4' >
                                <div className='w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center' >
                                    <Building className='text-primary' />
                                </div>
                                <div className='flex flex-row'>
                                    <div className='flex flex-col' >
                                        <p className='text-lg font-medium'>Google</p>
                                        <p className='text-xs text-gray-500'>4 days ago</p>
                                    </div>

                                    <div className='h-auto w-[1px] bg-gray-300 mx-10 my-2' />

                                    <div className='flex flex-col gap-1' >
                                        <div className='flex flex-row items-center gap-1' >
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <StarIcon fill="#FD9426" key={i} size={14} className='text-[#FD9426]' />
                                            ))}
                                            <p className='text-sm font-medium' >
                                                4.9 <span className='text-gray-500 font-normal'>(59406)</span>
                                            </p>
                                        </div>
                                        <div className='flex flex-row items-center gap-1' >
                                            <Verified size={15} className='text-primary' />
                                            <p className='text-xs text-primary font-medium'>Verified</p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
