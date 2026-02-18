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
            <div className="lg:w-1/2 flex flex-col justify-start shrink-0  lg:h-full">
                <div className=" h-fit lg:h-full py-8 lg:py-16 flex flex-col justify-start space-y-12 
                    lg:bg-slate-900/10 lg:backdrop-blur-sm lg:border-x lg:border-slate-800/30 lg:px-8">
                    <div className="space-y-8">
                        <NameSection />
                        <NavLinks />
                        <SocialLinks />
                        <Button labal="View Full Resume" icon={<HiOutlineArrowDownTray />} />
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 space-y-16 lg:space-y-24 py-8 lg:py-16 lg:h-full lg:overflow-y-auto" style={{ scrollbarWidth: "none" }}>
                <ShortBio />
                <ExperienceSection />
                <Projects />
            </div>
        </div>
    )
}
