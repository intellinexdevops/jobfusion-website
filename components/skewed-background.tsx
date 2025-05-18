'use client'
import { useEffect, useRef } from 'react'

export default function SkewedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas dimensions
        canvas.width = window.innerWidth
        canvas.height = 400

        // Create gradient
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        gradient.addColorStop(0, '#d1fae5') // light green
        gradient.addColorStop(1, '#ecfdf5') // even lighter green

        ctx.fillStyle = gradient

        // Draw custom polygon
        ctx.beginPath()
        ctx.moveTo(0, 0)
        ctx.lineTo(canvas.width, 0)
        ctx.lineTo(canvas.width, canvas.height - 50)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()
        ctx.fill()
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="w-full h-[600px] block -z-30 absolute top-0 left-0 right-0"
        />
    )
}
