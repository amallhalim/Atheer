
"use client"
import React, { useState, useMemo, useEffect } from 'react'

export default function NavLinks() {
    const links = useMemo(() => [
        { name: 'About', id: 'shortBio' },
        { name: 'Experience', id: 'experienceSection' },
        { name: 'Projects', id: 'projects' }
    ], []);

    const [active, setActive] = useState('About');


    useEffect(() => {
        // STEP 1: SET THE RULES 
        // Think of this as where we choose exactly where to put the "Sensor" on the wall.
        const observerOptions = {
            root: null, // The "House" where the sensor lives (the browser window)
            rootMargin: "-20% 0px -75% 0px", // Put the sensor in the top 20% of the screen
            threshold: 0,
        };

        // STEP 2: WHAT TO DO WHEN THE SENSOR TRIGGERS 
        // This is the "Brain" or the "Phone App" that receives the alert.
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            // "entries" is a list of all sections that just moved in or out of the sensor zone
            entries.forEach((entry) => {
                // Check if this specific section actually entered the sensor area
                if (entry.isIntersecting) {
                    // We look at the section's ID (e.g., 'projects') to find the name ('Projects')
                    const activeLink = links.find((link) => link.id === entry.target.id);
                    if (activeLink) {
                        // Finally, we highlight the matching link in the sidebar
                        setActive(activeLink.name);
                    }
                }
            });
        };

        // STEP 3: CREATE THE "GUARD" (OBSERVER) 
        // This machine needs the rules and the brain (function) we defined above.
        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        // STEP 4: START WATCHING (STICK THE SENSORS) 
        // This is where we physically tell the browser: "Start watching these specific doors."
        links.forEach((link) => {
            const element = document.getElementById(link.id);
            if (element) {
                // "Hey Browser, watch THIS specific section!"
                observer.observe(element);
            }
        });

        // STEP 5: CLEAN UP (TAKE DOWN THE SENSORS) 
        // If the user leaves this page, we tell the guard to stop working.
        return () => observer.disconnect();
    }, [links]);

    return (
        <nav aria-label="In-page jump links">
            <ul className='space-y-4'>
                {links.map(({ name, id }) => (
                    <li key={id}>
                        <a
                            href={`#${id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                // Smoothly scroll to the target section
                                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                                // Set this link as active immediately when clicked
                                setActive(name);
                            }}
                            className={`nav-line flex items-center gap-4 text-xs font-bold uppercase transition-all duration-300 ${active === name ? "active text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                        >
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
