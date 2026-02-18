import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className='flex flex-col items-center justify-center   h-full  p-4 text-center space-y-8 '>
            <div className="space-y-4">
                <h1 className='text-4xl font-bold tracking-tight sm:text-6xl text-foreground'>
                    Welcome to Atheer
                </h1>
                <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
                    A professional portfolio and showcase of modern web development.
                </p>
            </div>

            <Link
                href='/amal'
                className='px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity'
            >
                View Amal&apos;s Portfolio
            </Link>

            <p className='text-sm text-muted-foreground fixed bottom-8'>
                &copy; {new Date().getFullYear()} Atheer Project
            </p>



        </div>
    )
}