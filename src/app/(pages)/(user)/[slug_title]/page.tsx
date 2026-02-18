import React from 'react'
import ShortBio from './components/ShortBio'
import NameSection from './components/NameSection'
import NavLinks from './components/NavLinks'
import ExperienceSection from './components/ExperienceSection'
import Projects from './components/Projects'
import SocialLinks from './components/SocialLinks'
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import Button from '@/components/Button'

export default function UserProfile() {
    return (
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row gap-8 lg:gap-16 lg:h-full">
            {/* Left Section: Stationary on desktop, scrolls on mobile */}
            <div className="lg:w-1/2 flex flex-col justify-start shrink-0  lg:h-full">
                <div className=" h-fit lg:h-full py-8 lg:py-16 flex flex-col justify-start space-y-12 
                    lg:bg-slate-900/10 lg:backdrop-blur-sm lg:border-x lg:border-slate-800/30 lg:px-8">
                    <div className="space-y-8">
                        <NameSection />
                        <NavLinks />
                        <SocialLinks />

                        <button className="pt-4">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] hover:-translate-y-1 group"
                            >
                                View Full Resume
                                <HiOutlineArrowDownTray className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                            </a>
                        </button>
                    </div>


                </div>
            </div>

            {/* Right Section: Content */}
            <div className="lg:w-1/2 space-y-16 lg:space-y-24 py-8 lg:py-16 lg:h-full lg:overflow-y-auto">
                <ShortBio />
                <ExperienceSection />
                <Projects />
            </div>
        </div>
    )
}
