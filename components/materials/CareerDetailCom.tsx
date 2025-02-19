"use client"
import { MapPin, SearchIcon } from 'lucide-react'
import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


export default function CareerDetailCom({
    title
}: {
    title: string
}) {

    const [role, setRole] = React.useState<string>(title);
    const [location, setLocation] = React.useState<string | null>(null);
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [searchLocation, setSearchLocation] = React.useState<string | null>(location);

    const handleOnChangeRole = (role: string) => {
        setRole(role)
    }
    const handleOnChangeLocation = (location: string) => {
        setLocation(location)
        setIsOpen(false)
    }

    const locations = ["Siem Reap", "Phnom Penh", "Kampong Thom", "Svar Reing", "Battambang"]

    return (
        <div className='container pt-5' >
            <p className='text-4xl leading-snug'>Find your next jobs <br />at <span className='font-semibold'>JobFusion</span></p>

            <div className='flex md:flex-row flex-col md:items-center gap-4 mt-4'>
                <div className='h-12 flex flex-row px-3 border border-gray-400 items-center rounded-xl gap-2 w-64'>
                    <SearchIcon size={20} className='text-gray-400' />
                    <input type="text" value={role} onChange={(text) => handleOnChangeRole(text.target.value)} placeholder='Software developer' className='outline-none bg-transparent flex-1 capitalize' />
                </div>

                <Popover modal onOpenChange={() => setIsOpen(!isOpen)} open={isOpen}>
                    <PopoverTrigger asChild onClick={() => setIsOpen(true)}>
                        <div className='h-12 flex flex-row px-3 border border-gray-400 items-center rounded-xl gap-2 w-64'>
                            <MapPin size={20} className='text-gray-400' />
                            <p className='' >{location ?? "Where ?"}</p>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent align='start' >

                        <div className='border rounded-md h-9 flex flex-row items-center gap-2 px-3' >
                            <SearchIcon size={14} className='text-gray-400' />
                            <input type="text" value={searchLocation ?? ""} onChange={(text) => setSearchLocation(text.target.value)} placeholder='Type a location' className='outline-none bg-transparent flex-1 capitalize' />
                        </div>

                        {locations.map((location) => (
                            <div key={location} className='py-2 px-4 cursor-pointer hover:bg-gray-200' onClick={() => handleOnChangeLocation(location)}>{location}</div>
                        ))}
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    )
}
