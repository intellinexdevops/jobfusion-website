"use client"
import {MapPin, SearchIcon} from 'lucide-react'
import React from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {Button} from "@/components/ui/button";
import CareerList from "@/components/materials/CareerList";


export default function CareerBodyComponent({
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
        <div className='container pt-5'>
            <p className='text-4xl leading-snug'>Find your next jobs <br/>at <span
                className='font-semibold'>JobFusion</span></p>

            <div className='flex md:flex-row flex-col md:items-center gap-4 mt-4'>
                <div
                    className='h-12 flex flex-row px-3 border border-gray-200 dark:border-gray-800 items-center rounded-xl gap-2 md:w-64'>
                    <div>
                        <SearchIcon size={14} className="text-gray-400"/>
                    </div>
                    <input type="text" value={role} onChange={(text) => handleOnChangeRole(text.target.value)}
                           placeholder='Role or Position'
                           className='outline-none bg-transparent flex-1 text-sm capitalize'/>
                </div>

                <Popover modal onOpenChange={() => setIsOpen(!isOpen)} open={isOpen}>
                    <PopoverTrigger asChild onClick={() => setIsOpen(true)}>
                        <div
                            className='h-12 dark:border-gray-800 text-sm flex flex-row px-3 border border-gray-200 items-center rounded-xl gap-2 md:w-64'>
                            <MapPin size={14} className='text-gray-400'/>
                            <p className={location ? '' : 'text-gray-400'}>{location ?? "Where ?"}</p>
                        </div>
                    </PopoverTrigger>
                    <PopoverContent align='start'>

                        <div className='border rounded-lg h-11 flex flex-row items-center gap-2 px-3 mb-1'>
                            <div>
                                <SearchIcon size={14} className='text-gray-400'/>
                            </div>
                            <input type="text" value={searchLocation ?? ""}
                                   onChange={(text) => setSearchLocation(text.target.value)}
                                   placeholder='Type a location'
                                   className='outline-none bg-transparent text-sm'/>
                        </div>

                        {locations.map((location) => (
                            <div key={location}
                                 className='py-2 px-4 cursor-pointer text-xs hover:bg-gray-100 rounded transition-all duration-150 ease-linear'
                                 onClick={() => handleOnChangeLocation(location)}>{location}</div>
                        ))}
                    </PopoverContent>
                </Popover>

                <Button className="h-[50px] rounded-xl text-sm px-10 justify-center flex flex-row items-center gap-2">
                    <SearchIcon size={14} className='text-white'/>
                    Search
                </Button>

            </div>

            <CareerList/>

        </div>
    )
}
