import React from 'react'
import ShortBio from './components/ShortBio'
import NameSection from './components/NameSection'
import NavLinks from './components/NavLinks'
import ExperienceSection from './components/ExperienceSection'
import Projects from './components/Projects'
import Copyright from './components/Copyright'
import SocialLinks from './components/SocialLinks'
import { Brain, Radiation } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
export default function UserProfile({ params }: { params: { slug_title: string } }) {
    return (
        <div>
            <div
                className="px-[15%] pt-1 flex h-screen bg-slate-900 text-white"

                style={{
                    border: "3px solid red",
                }}
            >

                {/* <Brain />
                <Radiation color="#c41212" strokeWidth={1.25} />
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain-icon lucide-brain"><path d="M12 18V5" /><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" /><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" /><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" /><path d="M18 18a4 4 0 0 0 2-7.464" /><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" /><path d="M6 18a4 4 0 0 1-2-7.464" /><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" /></svg>
                ------------------------------

                <div className="flex flex-wrap gap-2 h-32">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="ghost">Ghost</Badge>
                </div> */}



                <div
                    className=' flex flex-col flex-1 overflow-hidden justify-between py-[5%]'
                    style={{
                        border: "1px solid red",

                    }}>
                    <div className='space-y-16' >
                        <NameSection />
                        <NavLinks />
                    </div>
                    <SocialLinks />

                </div>
                <div
                    className='flex-1 overflow-y-auto space-y-32'
                    style={{
                        border: "1px solid red",
                        // gap: "10px",
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
