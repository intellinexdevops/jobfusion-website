import CareerDetailComponrnt from '@/components/pages/career-detail-component'
import { Job } from '@/types/Job';
import { Metadata } from 'next';
import React from 'react'

interface Props {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/data/jobs.json`);
    const jobs = await response.json();

    const job: Job = jobs.data.find((item: Job) => item._id === id);
    return {
        title: job.title,
        description: job.description
    }
}

export default async function CareerDetailPage({ params }: Props) {

    const { id } = await params

    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/data/jobs.json`);
    const jobs = await response.json();

    const job = jobs.data.find((item: Job) => item._id === id);

    return <CareerDetailComponrnt data={job} />
}
