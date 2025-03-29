import Link from 'next/link'
import React from 'react'

const NotFoundCompoennt = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-center' >
            <h1 className='text-8xl font-bold bg-gradient-to-b bg-clip-text text-transparent from-primary to-primary/60'>404</h1>
            <p className='text-xs text-gray-700' >Could not find requested resource</p>
            <Link href="/" replace className='btn-inx mt-3' >
                Return Home
            </Link>
        </div>
    )
}

export default NotFoundCompoennt