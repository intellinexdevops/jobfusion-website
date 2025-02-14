import React from 'react'
import clsx from 'clsx'

export default function Brand({ size = 237, className }: { size?: number; className?: string }) {
    return (
        <svg className={clsx(className)} width={size} height={size} viewBox="0 0 237 237" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="237" height="237" fill="#00BF63" />
            <g clipPath="url(#clip0_2277_191)">
                <path d="M152.128 77.8408V156.623C152.128 167.556 148.966 176.078 142.642 182.187C136.318 188.19 127.85 191.191 117.239 191.191C106.52 191.191 97.8381 188.083 91.1925 181.866C84.6541 175.649 81.3849 166.967 81.3849 155.819H103.894C104.001 160.643 105.127 164.394 107.271 167.074C109.521 169.754 112.737 171.093 116.917 171.093C120.99 171.093 124.099 169.807 126.243 167.235C128.386 164.662 129.458 161.125 129.458 156.623V77.8408H152.128Z" fill="white" />
                <path d="M150.628 46.4888V64.6569H103.841V93.4366H139.695V111.283H103.841V158.713H81.3314V46.4888H150.628Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_2277_191">
                    <rect width="98.0759" height="146.042" fill="white" transform="translate(69.4336 45.3633)" />
                </clipPath>
            </defs>
        </svg>

    )
}
