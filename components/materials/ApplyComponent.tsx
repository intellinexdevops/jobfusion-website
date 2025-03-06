"use client"
import { Building, Star, StarIcon, UploadIcon, Verified } from 'lucide-react'
import React, { useEffect } from 'react'
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
import { useRouter } from 'next/navigation'

export default function ApplyComponent() {

    const [isSuccessApplied, setIsSuccessApplied] = React.useState<boolean>(false)
    const [isOpen, setIsOpen] = React.useState(false);

    const [rating, setRating] = React.useState<number>(0);
    const [hover, setHover] = React.useState<number>(0);
    const [feedback, setFeedback] = React.useState<string>("");

    const router = useRouter()

    const handleOnApplyNow = () => {
        toast.success("You have applied your application.", {
            description: "",
        });
        setIsSuccessApplied(true)
    }

    const handleFeedback = () => {
        // Validate the feedback
        if (feedback.trim() === "") {
            toast.error("Please provide your feedback.", {
                description: "",
            })
            return
        } else if (rating <= 0) {
            toast.error("Please provide a rating.", {
                description: "",
            })
            return
        }

        toast.success("Your feedback has been submitted.", {
            description: "",
        })
        setIsOpen(false)
        setRating(0)
        setFeedback("")
        setHover(0);

        // Redirect to the job details page with 500 seconds
        setTimeout(() => {
            router.back();
        }, 500)
    }

    const handleFeedbackCancel = () => {
        setIsOpen(false)
        setRating(0)
        setFeedback("")
        setHover(0);

        setTimeout(() => {
            router.back();
        }, 500)
    }


    useEffect(() => {
        if (isSuccessApplied) {
            const timer = setTimeout(() => {
                setIsOpen(true)
                setIsSuccessApplied(false)
            }, 1000)
            return () => clearTimeout(timer)
        }
    }, [isSuccessApplied]);
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

            <AlertDialog open={isOpen}>
                {/* <DialogTrigger asChild>
                    <Button>
                        HAHA
                    </Button>
                </DialogTrigger> */}
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle asChild>
                            <span className='font-medium' >Send your feedback</span>
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                            Give feedback to this company.
                        </AlertDialogDescription>
                        <div>
                            <div className='flex flex-row items-center gap-3 mt-4 mb-10' >
                                <div className='w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center' >
                                    <Building className='text-primary' />
                                </div>
                                <div className='flex flex-row'>
                                    <div className='flex flex-col' >
                                        <p className='text-lg font-medium'>Google</p>
                                        <p className='text-xs text-gray-500'>4 days ago</p>
                                    </div>
                                </div>
                            </div>
                            <p className='font-medium text-sm'>How was your experienced?</p>
                            <div className="flex space-x-2 mt-3 mb-10">
                                {[...Array(5)].map((_, index) => {
                                    const starValue = index + 1;
                                    return (
                                        <Star
                                            key={index}
                                            className={`w-5 h-5 cursor-pointer transition-colors duration-200 ${starValue <= (hover || rating) ? 'text-[#FD9426]' : 'text-gray-400'
                                                }`}
                                            onClick={() => setRating(starValue)}
                                            onMouseEnter={() => setHover(starValue)}
                                            onMouseLeave={() => setHover(0)}
                                            fill={starValue <= (hover || rating) ? 'currentColor' : 'none'}
                                        />
                                    );
                                })}
                            </div>
                            <p className='font-medium text-sm mb-3'>Comment</p>
                            <textarea
                                className='w-full text-sm h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-primary'
                                placeholder='Write your feedback here...'
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                            />
                        </div>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={handleFeedbackCancel} >Close</AlertDialogCancel>
                        <AlertDialogAction onClick={handleFeedback}>Submit</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>


        </div>
    )
}
