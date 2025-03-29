"use client"

import { Job } from "@/types/job";
import { Building, Clock2, Heart, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CareerCard({ data }: { data: Job }) {
    const router = useRouter()
    const handleOnDetail = () => {
        router.push(`/careers/details/${data._id}?breadcrumb=${data.title}`)
    }
    return (
        <div className="bg-white dark:bg-primary/5 rounded-lg p-4">
            <div className="flex flex-row  justify-between">
                <div>
                    {/*<Briefcase/>*/}
                    <p className="text-base font-medium">{data.title}</p>
                </div>
                <div className="flex flex-col">
                    <p className="text-xs text-primary font-medium bg-primary/5 px-2 py-1 rounded">$250 - $500</p>
                </div>
            </div>

            <div className="flex flex-row items-center gap-3 mt-2">

                <div className="flex flex-row items-center gap-1">
                    <Building size={12} className="text-gray-500" />
                    <p className="text-xs text-gray-500">{data.company.name}</p>
                </div>

                <div className="flex flex-row items-center gap-1">
                    <MapPin size={12} className="text-gray-500" />
                    <p className="text-xs text-gray-500">{data.location}</p>
                </div>

                <div className="flex flex-row items-center gap-1">
                    <Clock2 size={12} className="text-gray-500" />
                    <p className="text-xs text-gray-500 capitalize">{data.type}</p>
                </div>
            </div>

            <p className="text-xs line-clamp-2 font-light mt-3 leading-5">
                {data.description}
            </p>

            <div className="flex flex-row items-center gap-3 mt-3">

                <button onClick={handleOnDetail} className="text-xs bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium">
                    Details
                </button>

                <button className="text-xs group hover:bg-primary/10 border transition-all duration-200 ease-linear w-[30px] h-[30px] rounded-lg text-white flex items-center justify-center">
                    <Heart size={16} className="text-gray-300 group-hover:text-primary transition-all duration-200 ease-linear" />
                </button>
            </div>

        </div>
    )
}