import React from 'react'
import ShortBio from './components/ShortBio'
import NameSection from './components/NameSection'
import NavLinks from './components/NavLinks'
import ExperienceSection from './components/ExperienceSection'
import Projects from './components/Projects'
import Copyright from './components/Copyright'
import SocialLinks from './components/SocialLinks'
export default function UserProfile() {
    return (
        <div>
            <div className="px-[15%] pt-1 flex h-screen bg-background text-foreground transition-colors duration-500" >
                <div className=' flex flex-col flex-1 overflow-hidden justify-between py-[5%]' >
                    <div className='space-y-16' >
                        <NameSection />
                        <NavLinks />
                    </div>
                    <SocialLinks />
                </div>
                <div className=' flex-1 overflow-y-auto space-y-32 py-[5%] '
                    style={{
                        scrollbarWidth: "none",
                    }}>
                    <ShortBio />
                    <ExperienceSection />
                    <Projects />
                </div>

            </div>
            {/* <Copyright /> */}
        </div>
    )
}
