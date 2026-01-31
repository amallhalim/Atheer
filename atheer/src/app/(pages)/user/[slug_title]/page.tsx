import React from 'react'
import ShortBio from './components/ShortBio'
import NameSection from './components/NameSection'
import NavLinks from './components/NavLinks'
import ExperienceSection from './components/ExperienceSection'
import Projects from './components/Projects'
import Copyright from './components/Copyright'
import SocialLinks from './components/SocialLinks'
export default function UserProfile({ params }: { params: { slug_title: string } }) {
    return (
        <div>
            <div style={{
                backgroundColor: "white", color: "black",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                border: "3px solid red",
                gap: "10px",
                height: "100vh"
            }}>
                {/* <h1 className="text-4xl font-bold">User: {params?.slug_title}</h1> */}
                <div style={{
                    display: "flex", flexDirection: "column",
                    border: "1px solid red",
                    gap: "10px",
                    width: "45%"

                }}>
                    <NameSection />
                    <NavLinks />
                    <SocialLinks />

                </div>
                <div style={{
                    display: "flex", flexDirection: "column",
                    border: "1px solid red",
                    gap: "10px",
                    width: "55%"
                }}>
                    <ShortBio />
                    <ExperienceSection />
                    <Projects />
                </div>

            </div>
            <Copyright />
        </div>
    )
}
