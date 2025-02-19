"use client"
import { ArrowUp } from 'lucide-react';
import React, { useEffect, useState } from 'react'

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="fixed bottom-10 right-10">
            <button
                onClick={scrollToTop}
                className={`w-10 h-10 bg-primary/70 flex items-center justify-center text-white rounded-full shadow-lg hover:bg-primary transition-all duration-300 ease-in-out transform ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                    }`}
            >
                <ArrowUp size={18} />
            </button>
        </div>
    )
}
