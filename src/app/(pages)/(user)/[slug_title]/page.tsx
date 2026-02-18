import React from 'react'
import ShortBio from './components/ShortBio'
import NameSection from './components/NameSection'
import NavLinks from './components/NavLinks'
import ExperienceSection from './components/ExperienceSection'
import Projects from './components/Projects'
import SocialLinks from './components/SocialLinks'

export default function UserProfile() {
    return (
        <div className="h-full overflow-hidden">
            <div className="px-[12%] flex h-full bg-background text-foreground transition-colors duration-500 overflow-hidden" >
                {/* Left Section: Stationary */}
                <div className='flex flex-col flex-1 justify-between py-[4%] h-full shrink-0' >
                    <div className='space-y-12' >
                        <NameSection />
                        <NavLinks />
                    </div>
                    <div className="pb-4">
                        <SocialLinks />
                    </div>
                </div>

                {/* Right Section: Scrollable */}
                <div className='flex-1 overflow-y-auto space-y-32 py-[4%] scrollbar-hide'
                    style={{
                        scrollbarWidth: "none",
                    }}>
                    <ShortBio />
                    <div className="space-y-32 pb-16">
                        <ExperienceSection />
                        <Projects />
                    </div>
                </div>
            </div>
        </div>
    )
}
