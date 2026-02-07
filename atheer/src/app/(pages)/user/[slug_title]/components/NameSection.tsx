import React from 'react'

export default function NameSection() {
    return (
        <div style={{
            display: "flex", flexDirection: "column",
            alignItems: "flex-start", justifyContent: "flex-start", border: "1px solid red",
        }}>
            <h1 className="text-6xl font-bold">Amal halim</h1>
            <h2 className="text-1xl font-semibold">Frontend Engineer</h2>
            <p className="text-sm">I build accessible, pixel-perfect digital experiences for the web.</p>
        </div>
    )
}
