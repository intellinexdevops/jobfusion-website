import React from 'react'
import { Button } from './ui/button'

export default function Discoverable() {
    return (
        <section className='container'>
            <div className='py-32 grid grid-cols-1 md:grid-cols-2' >
                <div className='flex flex-col justify-start'>
                    <p className='font-medium'>Dicoverable</p>
                    <p className='text-3xl font-semibold' >Discover Your Next <br /> Opportunity with Ease</p>
                    <div className='flex flex-row gap-2 mt-10'>
                        <Button variant={'outline'} size='lg' >
                            Discover Now
                        </Button>
                    </div>
                </div>
                <div className='flex flex-col md:mt-0 mt-10' >
                    <div className='flex flex-row items-start gap-2' >
                        <svg width="24" height="24" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.2981 5.24048L14.2048 5.07381C14.0844 4.87227 13.9146 4.70477 13.7115 4.58715L9.23815 2.00715C9.03561 1.88965 8.80568 1.82756 8.57148 1.82715H8.37815C8.14395 1.82756 7.91401 1.88965 7.71148 2.00715L3.23815 4.59381C3.03613 4.71065 2.86832 4.87846 2.75148 5.08048L2.65815 5.24715C2.54065 5.44971 2.47856 5.67964 2.47815 5.91381V11.0805C2.47856 11.3147 2.54065 11.5446 2.65815 11.7471L2.75148 11.9138C2.87134 12.1135 3.03848 12.2806 3.23815 12.4005L7.71815 14.9805C7.91968 15.1004 8.15028 15.1627 8.38481 15.1605H8.57148C8.80568 15.1601 9.03561 15.098 9.23815 14.9805L13.7115 12.3938C13.9155 12.2796 14.0839 12.1111 14.1981 11.9071L14.2981 11.7405C14.4142 11.5373 14.4762 11.3078 14.4781 11.0738V5.90715C14.4777 5.67297 14.4157 5.44304 14.2981 5.24048ZM8.37815 3.16048H8.57148L12.4781 5.41381L8.47815 7.72048L4.47815 5.41381L8.37815 3.16048ZM9.14481 13.4938L13.0448 11.2405L13.1448 11.0738V6.56715L9.14481 8.88048V13.4938Z" fill="hsl(var(--foreground))" />
                        </svg>
                        <div className='-mt-1' >
                            <p className='font-medium'>For Job Seekers</p>
                            <p className='text-sm line-clamp-1'>Easily search and apply for jobs that match your skills and interests.</p>
                        </div>
                    </div>
                    <div className='h-14 w-[1px] bg-foreground lg:ms-3 md:ms-2 ms-3 mb-3' />
                    <div className='flex flex-row items-start gap-2' >
                        <svg width="24" height="24" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.2981 5.24048L14.2048 5.07381C14.0844 4.87227 13.9146 4.70477 13.7115 4.58715L9.23815 2.00715C9.03561 1.88965 8.80568 1.82756 8.57148 1.82715H8.37815C8.14395 1.82756 7.91401 1.88965 7.71148 2.00715L3.23815 4.59381C3.03613 4.71065 2.86832 4.87846 2.75148 5.08048L2.65815 5.24715C2.54065 5.44971 2.47856 5.67964 2.47815 5.91381V11.0805C2.47856 11.3147 2.54065 11.5446 2.65815 11.7471L2.75148 11.9138C2.87134 12.1135 3.03848 12.2806 3.23815 12.4005L7.71815 14.9805C7.91968 15.1004 8.15028 15.1627 8.38481 15.1605H8.57148C8.80568 15.1601 9.03561 15.098 9.23815 14.9805L13.7115 12.3938C13.9155 12.2796 14.0839 12.1111 14.1981 11.9071L14.2981 11.7405C14.4142 11.5373 14.4762 11.3078 14.4781 11.0738V5.90715C14.4777 5.67297 14.4157 5.44304 14.2981 5.24048ZM8.37815 3.16048H8.57148L12.4781 5.41381L8.47815 7.72048L4.47815 5.41381L8.37815 3.16048ZM9.14481 13.4938L13.0448 11.2405L13.1448 11.0738V6.56715L9.14481 8.88048V13.4938Z" fill="hsl(var(--foreground))" />
                        </svg>
                        <div className='-mt-1' >
                            <p className='font-medium'>For Recruiter</p>
                            <p className='text-sm line-clamp-1'>Post jobs and find the perfect candidates to grow your team.</p>
                        </div>
                    </div>
                    <div className='h-14 w-[1px] bg-foreground lg:ms-3 md:ms-2 ms-3 mb-3' />
                    <div className='flex flex-row items-start gap-2' >
                        <svg width="24" height="24" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.2981 5.24048L14.2048 5.07381C14.0844 4.87227 13.9146 4.70477 13.7115 4.58715L9.23815 2.00715C9.03561 1.88965 8.80568 1.82756 8.57148 1.82715H8.37815C8.14395 1.82756 7.91401 1.88965 7.71148 2.00715L3.23815 4.59381C3.03613 4.71065 2.86832 4.87846 2.75148 5.08048L2.65815 5.24715C2.54065 5.44971 2.47856 5.67964 2.47815 5.91381V11.0805C2.47856 11.3147 2.54065 11.5446 2.65815 11.7471L2.75148 11.9138C2.87134 12.1135 3.03848 12.2806 3.23815 12.4005L7.71815 14.9805C7.91968 15.1004 8.15028 15.1627 8.38481 15.1605H8.57148C8.80568 15.1601 9.03561 15.098 9.23815 14.9805L13.7115 12.3938C13.9155 12.2796 14.0839 12.1111 14.1981 11.9071L14.2981 11.7405C14.4142 11.5373 14.4762 11.3078 14.4781 11.0738V5.90715C14.4777 5.67297 14.4157 5.44304 14.2981 5.24048ZM8.37815 3.16048H8.57148L12.4781 5.41381L8.47815 7.72048L4.47815 5.41381L8.37815 3.16048ZM9.14481 13.4938L13.0448 11.2405L13.1448 11.0738V6.56715L9.14481 8.88048V13.4938Z" fill="hsl(var(--foreground))" />
                        </svg>
                        <div className='-mt-1' >
                            <p className='font-medium'>Freelance Opportunities</p>
                            <p className='text-sm line-clamp-1'>Connect with freelancers for projects that require specialized skills and expertise.</p>
                        </div>
                    </div>
                    <div className='h-14 w-[1px] bg-foreground lg:ms-3 md:ms-2 ms-3 mb-3' />
                    <div className='flex flex-row items-start gap-2' >
                        <svg width="24" height="24" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.2981 5.24048L14.2048 5.07381C14.0844 4.87227 13.9146 4.70477 13.7115 4.58715L9.23815 2.00715C9.03561 1.88965 8.80568 1.82756 8.57148 1.82715H8.37815C8.14395 1.82756 7.91401 1.88965 7.71148 2.00715L3.23815 4.59381C3.03613 4.71065 2.86832 4.87846 2.75148 5.08048L2.65815 5.24715C2.54065 5.44971 2.47856 5.67964 2.47815 5.91381V11.0805C2.47856 11.3147 2.54065 11.5446 2.65815 11.7471L2.75148 11.9138C2.87134 12.1135 3.03848 12.2806 3.23815 12.4005L7.71815 14.9805C7.91968 15.1004 8.15028 15.1627 8.38481 15.1605H8.57148C8.80568 15.1601 9.03561 15.098 9.23815 14.9805L13.7115 12.3938C13.9155 12.2796 14.0839 12.1111 14.1981 11.9071L14.2981 11.7405C14.4142 11.5373 14.4762 11.3078 14.4781 11.0738V5.90715C14.4777 5.67297 14.4157 5.44304 14.2981 5.24048ZM8.37815 3.16048H8.57148L12.4781 5.41381L8.47815 7.72048L4.47815 5.41381L8.37815 3.16048ZM9.14481 13.4938L13.0448 11.2405L13.1448 11.0738V6.56715L9.14481 8.88048V13.4938Z" fill="hsl(var(--foreground))" />
                        </svg>
                        <div className='-mt-1' >
                            <p className='font-medium'>User-Friendly</p>
                            <p className='text-sm line-clamp-1'>Our intuitive interface makes job searching and posting simple and efficient.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
