"use client"
import {
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query"
import { PropsWithChildren } from "react";

export default function ReactQueryProvider({ children }: PropsWithChildren) {

    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient} >
            {children}
        </QueryClientProvider>
    )
}