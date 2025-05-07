"use client"
import React from 'react'
import { HeaderNavigationMenu } from './header-navigation-menu'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { User } from 'lucide-react'


export default function HeaderCandidate() {
    const router = useRouter()
    const handleOnGetStarted = () => {
        router.push("/authentication/sign-in/")
    }
    return (
        <header className='fixed top-0 z-50 w-full bg-background' >
            <div className='container flex flex-row items-center justify-between py-4' >
                <HeaderNavigationMenu />
                <div className='flex flex-row items-center gap-x-4 ' >
                    <Button className='hidden md:flex' variant={'outline'} onClick={handleOnGetStarted} >
                        Upgrade
                    </Button>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button size={'icon'} className='rounded-full' >
                                <User />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent align='end' className='w-auto' >
                            <div className='flex flex-col gap-y-4 py-1' >
                                <div className='flex flex-row items-center gap-3' >
                                    <svg width="16" height="16" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M39.2127 9.57861C41.3999 7.04364 42.8742 3.51294 42.4707 0C39.3188 0.12 35.5056 2.01344 33.2456 4.54541C31.2161 6.79238 29.4445 10.3827 29.9208 13.8267C33.4367 14.0876 37.0254 12.1166 39.2127 9.57861ZM47.097 31.875C47.1849 40.9559 55.409 43.9766 55.5 44.0156C55.4333 44.2286 54.1865 48.3199 51.168 52.5498C48.5561 56.2038 45.8471 59.8429 41.5789 59.9209C37.3864 59.9959 36.0365 57.5391 31.2404 57.5391C26.4473 57.5391 24.9487 59.8426 20.9808 59.9956C16.8612 60.1426 13.7214 56.0423 11.0913 52.4004C5.7097 44.9515 1.5992 31.3503 7.12033 22.1704C9.86269 17.6135 14.7619 14.7234 20.0828 14.6514C24.1266 14.5764 27.9459 17.2588 30.4183 17.2588C32.8907 17.2588 37.5321 14.0338 42.4101 14.5078C44.4517 14.5888 50.1851 15.2966 53.8649 20.4595C53.5676 20.6365 47.0242 24.2851 47.097 31.875Z" fill="black" />
                                    </svg>
                                    <p className='text-sm text-gray-500' >Download for iOS</p>
                                </div>
                                <div className='flex flex-row items-center gap-3' >
                                    <svg width="16" height="16" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2330_195)">
                                            <path d="M38.1494 5.90299L38.8057 4.91862L39.4619 3.95768L40.915 1.778C41.1025 1.52018 41.0322 1.14518 40.751 0.981118C40.4932 0.793618 40.1182 0.863933 39.9541 1.14518L38.4072 3.46549L37.751 4.44987L37.0947 5.43424C34.9854 4.61393 32.665 4.16862 30.1807 4.16862C27.7197 4.16862 25.376 4.61393 23.2666 5.43424L22.6104 4.44987L21.9541 3.46549L20.4072 1.14518C20.2197 0.887371 19.8682 0.817056 19.6104 0.981118C19.3525 1.16862 19.2822 1.52018 19.4463 1.778L20.8994 3.95768L21.5557 4.91862L22.2119 5.90299C17.29 8.19987 13.9385 12.5358 13.9385 17.528H46.4463C46.4229 12.5358 43.0947 8.19987 38.1494 5.90299ZM23.1963 12.8639C22.2354 12.8639 21.4619 12.0905 21.4619 11.1296C21.4619 10.1686 22.2354 9.39518 23.1963 9.39518C24.1572 9.39518 24.9307 10.1686 24.9307 11.1296C24.9307 12.0905 24.1572 12.8639 23.1963 12.8639ZM37.1182 12.8639C36.1572 12.8639 35.3838 12.0905 35.3838 11.1296C35.3838 10.1686 36.1572 9.39518 37.1182 9.39518C38.0791 9.39518 38.8525 10.1686 38.8525 11.1296C38.876 12.0905 38.1025 12.8639 37.1182 12.8639Z" fill="black" />
                                            <path d="M14.1494 19.8249L13.8916 19.8483V22.7311V25.0983V45.3952C13.8916 47.4342 15.5322 49.0749 17.5713 49.0749H20.2197C20.126 49.3796 20.0791 49.7077 20.0791 50.0358V50.2233V51.3952V57.3952C20.0791 59.3171 21.6494 60.8874 23.5713 60.8874C25.4932 60.8874 27.0635 59.3171 27.0635 57.3952V51.3952V50.2233V50.0358C27.0635 49.7077 27.0166 49.3796 26.9229 49.0749H33.3916C33.2979 49.3796 33.251 49.7077 33.251 50.0358V50.2233V51.3952V57.3952C33.251 59.3171 34.8213 60.8874 36.7432 60.8874C38.665 60.8874 40.2354 59.3171 40.2354 57.3952V51.3952V50.2233V50.0358C40.2354 49.7077 40.1885 49.3796 40.0947 49.0749H42.7432C44.7822 49.0749 46.4229 47.4342 46.4229 45.3952V25.0983V22.7311V19.8249H46.165H14.1494Z" fill="black" />
                                            <path d="M8.10254 19.8483C6.18066 19.8483 4.61035 21.4186 4.61035 23.3405V38.2467C4.61035 40.1686 6.18066 41.7389 8.10254 41.7389C10.0244 41.7389 11.5947 40.1686 11.5947 38.2467V23.3405C11.5713 21.3952 10.0244 19.8483 8.10254 19.8483Z" fill="black" />
                                            <path d="M52.2354 19.8483C50.3135 19.8483 48.7432 21.4186 48.7432 23.3405V38.2467C48.7432 40.1686 50.3135 41.7389 52.2354 41.7389C54.1572 41.7389 55.7275 40.1686 55.7275 38.2467V23.3405C55.7041 21.3952 54.1572 19.8483 52.2354 19.8483Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2330_195">
                                                <rect width="60" height="60" fill="white" transform="translate(0.157227 0.887367)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                    <p className='text-sm text-gray-500' >Download for Android</p>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
        </header>
    )
}
