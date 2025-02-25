import {Briefcase, Check} from "lucide-react";
import {Button} from "@/components/ui/button";
import Image from "next/image";

export default function PricingPage() {

    const freePlans = {
        "seeker": [
            "Create and upload a basic profile.",
            "Apply to a limited number of jobs per month (e.g., 5 applications).",
            "Access to basic job search filters (e.g., location, job type).",
            "Receive email alerts for new job postings."
        ],
        "recruiter": [
            "Post up to 1 job listing per month",
            "Access to basic candidate search filters.",
            "Limited visibility for job postings (e.g., lower in search results)."
        ],
    }

    const premiumPlans = {
        "seeker": [
            "Unlimited job applications.",
            "Advanced job search filters (e.g., salary range, remote work, company size).",
            "Priority listing in employer searches (higher visibility to recruiters).",
            "Access to premium resources (e.g., resume templates, interview tips).",
            "Ability to message employers directly.",
            "Exclusive access to webinars or networking events."
        ],
        "seekerPriceMonthly": 9.99,
        "seekerPriceYearly": 99,
        "recruiter": [
            "Post up to 10 job listings per month.",
            "Enhanced visibility for job postings (e.g., featured listings, highlighted in search results).",
            "Access to advanced candidate search filters (e.g., skills, experience level).",
            "Ability to message candidates directly.",
            "Basic analytics dashboard (e.g., views, applications, candidate demographics).",
            "Employer branding tools (e.g., company profile, logo on job postings)."
        ],
        "recruiterPriceMonthly": 49,
        "recruiterPriceYearly": 499,
    }

    const enterprisePlans = {
        "seeker": [],
        "recruiter": [
            "Unlimited job postings.",
            "Dedicated account manager for support.",
            "Advanced analytics and reporting (e.g., time-to-hire, candidate pipeline).",
            "Customizable employer branding (e.g., career page integration).",
            "Bulk candidate messaging and interview scheduling tools.",
            "Access to a talent pool database with advanced search capabilities.",
            "Integration with HR tools (e.g., ATS, payroll systems).",
            "Priority customer support (24/7)."
        ],
        "recruiterPriceMonthly": "Custom",
        "recruiterPriceYearly": "Custom",
    }

    return <div className="container pt-20 bg-background">
        <div className="flex flex-col justify-center items-center">
            <p className="text-sm mb-2 text-gray-500 uppercase font-medium">Subscription</p>
            <h1 className="text-3xl font-semibold">Pricing Plan</h1>
            <p className="text-gray-500 mt-2">Subscribe to our plan to get full functionality accessing.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">

            <div>

                <div className="bg-gray-100 rounded-lg border p-5 py-6">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col">
                            <p className="text-3xl font-semibold">$0
                                <sup className="text-sm font-medium">USD</sup>
                            </p>
                            <p className="text-xs font-medium">/month</p>
                        </div>

                        <div className="flex flex-col">
                            <p className="bg-white px-4 text-xs py-1 rounded">Free</p>
                        </div>

                    </div>
                    <div className="flex flex-row mt-5 items-center gap-2">
                        <Briefcase size={16}/>
                        <p className="font-medium">Job Seekers</p>
                    </div>
                    <div className={"mt-3"}>
                        {freePlans.seeker.map((item, index) => (
                            <div key={index} className="flex flex-row gap-2">
                                <Check size={12} className="flex-shrink-0"/>
                                <p className="text-xs">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-row mt-5 items-center gap-2">
                        <Briefcase size={16}/>
                        <p className="font-medium">Employers</p>
                    </div>

                    <div className={"mt-3"}>
                        {freePlans.recruiter.map((item, index) => (
                            <div key={index} className="flex flex-row gap-2">
                                <Check size={12} className="flex-shrink-0"/>
                                <p className="text-xs">{item}</p>
                            </div>
                        ))}
                    </div>

                    <Button className="w-full mt-4 bg-gray-300 text-gray-800" disabled={true}>
                        Current Plan
                    </Button>

                </div>
            </div>
            <div className="bg-gradient-to-br p-1 from-primary to-secondary  rounded-xl">
                <div className="bg-white rounded-lg p-5">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col">
                            <p className="text-3xl font-semibold">${premiumPlans.seekerPriceMonthly}
                                <sup className="text-sm font-medium">USD</sup>
                            </p>
                            <p className="text-xs font-medium">/month</p>
                        </div>

                        <div className="flex flex-col">
                            <p className="bg-gradient-to-br from-primary to-secondary text-white px-4 text-xs py-1 rounded">Premium</p>
                        </div>

                    </div>
                    <div className="flex flex-row mt-5 items-center gap-2">
                        <Briefcase size={16}/>
                        <p className="font-medium">Job Seekers</p>
                    </div>
                    <div className={"mt-3"}>
                        {premiumPlans.seeker.map((item, index) => (
                            <div key={index} className="flex flex-row gap-2">
                                <Check size={12} className="flex-shrink-0"/>
                                <p className="text-xs">{item}</p>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-row mt-5 items-center gap-2">
                        <Briefcase size={16}/>
                        <p className="font-medium">Employers</p>
                    </div>

                    <div className={"mt-3"}>
                        {premiumPlans.recruiter.map((item, index) => (
                            <div key={index} className="flex flex-row gap-2">
                                <Check size={12} className="flex-shrink-0"/>
                                <p className="text-xs">{item}</p>
                            </div>
                        ))}
                    </div>

                    <Button className="w-full mt-4">
                        Subscribe
                    </Button>
                </div>
            </div>

            <div>

                <div className="bg-gradient-to-br p-1 from-blue-500 to-primary rounded-xl">
                    <div className="bg-white rounded-lg p-5">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col">
                                <p className="text-3xl font-semibold">${enterprisePlans.recruiterPriceMonthly}
                                    <sup className="text-sm font-medium">USD</sup>
                                </p>
                                <p className="text-xs font-medium">/month</p>
                            </div>

                            <div className="flex flex-col">
                                <p className="bg-gradient-to-br from-blue-500 to-primary text-white px-4 text-xs py-1 rounded">Enterprise</p>
                            </div>

                        </div>

                        <div className="flex flex-row mt-5 items-center gap-2">
                            <Briefcase size={16}/>
                            <p className="font-medium">Employers</p>
                        </div>

                        <div className={"mt-3"}>
                            {enterprisePlans.recruiter.map((item, index) => (
                                <div key={index} className="flex flex-row gap-2">
                                    <Check size={12} className="flex-shrink-0"/>
                                    <p className="text-xs">{item}</p>
                                </div>
                            ))}
                        </div>

                        <Button className="w-full mt-4">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}