import React from 'react'

export default function UserProfile({ params }: { params: { slug_title: string } }) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-bold">User: {params.slug_title}</h1>
        </div>
    )
}
