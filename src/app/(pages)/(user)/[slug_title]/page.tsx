import React from 'react'
import ShortBio from './components/ShortBio'
import NameSection from './components/NameSection'
import NavLinks from './components/NavLinks'
import ExperienceSection from './components/ExperienceSection'
import Projects from './components/Projects'
import SocialLinks from './components/SocialLinks'


export default function UserProfile() {
    return (
        <div className="container mx-auto px-6 md:px-12 
        lg:px-24 flex flex-col 
        lg:flex-row gap-8 lg:gap-16 lg:h-full">
            {/* Left Section: Stationary on desktop, scrolls on mobile */}
            <div className="lg:w-1/2 flex flex-col 
            justify-start py-8 lg:py-16 shrink-0 space-y-8">
                <NameSection />
                <NavLinks />
                <SocialLinks />
            </div>

            {/* Right Section: Content */}
            <div className="lg:w-1/2 space-y-16 
            lg:space-y-24 py-8 lg:py-16 lg:h-full 
            lg:overflow-y-auto"
                style={{ scrollbarWidth: "none" }}
            >
                <ShortBio />
                <ExperienceSection />
                <Projects />
            </div>
        </div>


    )
}
