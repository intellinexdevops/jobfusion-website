
import CareerHeaderBottom from '@/components/materials/CareerHeaderBottom'
import React, { Suspense } from 'react'
import CareerBodyComponent from "@/components/materials/CareerBodyComponent";
import Loading from '../loading';

export default function CareerPage() {
    return (
        <Suspense fallback={<Loading />} >
            <CareerHeaderBottom />
            <CareerBodyComponent title="" />
        </Suspense>
    )
}
