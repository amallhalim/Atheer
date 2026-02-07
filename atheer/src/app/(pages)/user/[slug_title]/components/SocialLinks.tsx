import React from 'react'

export default function SocialLinks() {
    return (
        <div style={{
            display: "flex", flexDirection: "row",
            // alignItems: "center", justifyContent: "center", border: "1px solid green",
            // backgroundColor: "#f6e5bcff",
        }}>

            <ul style={{
                display: "flex", flexDirection: "row",
            }}>
                <li className="pl-1">*Facebook</li>
                <li className="pl-1">*Twitter</li>
                <li className="pl-1">*Instagram</li>
                <li className="pl-1">*Linkedin</li>
            </ul>
        </div>
    )
}
