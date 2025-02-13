import React from 'react'

export default async function CareesPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug
    return (
        <div>{slug}</div>
    )
}
