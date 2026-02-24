"use client"

import React from "react"
import Button from "@/components/button/Button"
import {
    Mail,
    ArrowRight,
    Lock
} from "lucide-react"

export default function ShowcasePage() {
    return (
        <div className="overflow-auto h-screen px-6 py-12 space-y-16 bg-slate-950 text-slate-100 pb-32">
            <header className="space-y-4 border-b border-slate-800 pb-8">
                <h1 className="text-4xl font-bold tracking-tight">Component Showcase: Button</h1>
                <p className="text-slate-400 text-lg">
                    Demonstrating the <code>tailwind-variants</code> implementation with all color, size, and layout permutations.
                </p>
            </header>

            {/* Side-by-Side Comparison */}
            <section className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-blue-400">Side-by-Side Comparison</h2>
                    <p className="text-slate-400 text-sm">Compare basic variant behavior with our new enhanced compound logic.</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-3 gap-8 p-6 rounded-xl border border-slate-800 bg-slate-900/50 items-center">
                        <div className="text-sm font-medium text-slate-500 uppercase">Scenario</div>
                        <div className="text-sm font-medium text-slate-100">Normal / Basic</div>
                        <div className="text-sm font-medium text-amber-400">Enhanced (Compound)</div>

                        {/* Row 1: Solid Shadows */}
                        <div className="text-xs text-slate-400">Solid Shadow</div>
                        <div className="flex gap-2">
                            <Button label="Basic" variant="solid" color="secondary" className="shadow-none hover:shadow-none" />
                        </div>
                        <div className="flex gap-2">
                            <Button label="Enhanced" variant="solid" color="secondary" />
                        </div>

                        {/* Row 2: Colored Ghost Hovers */}
                        <div className="text-xs text-slate-400">Ghost / Link Hovers</div>
                        <div className="flex gap-2">
                            <Button label="Basic Link" variant="link" color="error" className="text-slate-100" />
                        </div>
                        <div className="flex gap-2">
                            <Button label="Enhanced Link" variant="link" color="error" />
                        </div>

                        {/* Row 3: Glass Tints */}
                        <div className="text-xs text-slate-400">Glass Effects</div>
                        <div className="flex gap-2">
                            <Button label="Basic Glass" variant="glass" className="bg-white/10" />
                        </div>
                        <div className="flex gap-2">
                            <Button label="Enhanced Glass" variant="glass" color="primary" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Compound Variants Example */}
            <section className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-amber-400">Compound Variant Magic</h2>
                    <p className="text-slate-400 text-sm">
                        These buttons use <code>compoundVariants</code> to apply special styles only when specific combinations are active.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Shadow on Solid */}
                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 space-y-4">
                        <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Shadow on Solid</h3>
                        <p className="text-xs text-slate-500 italic">Solid buttons automatically get shadows and loading dimmers.</p>
                        <div className="flex flex-wrap gap-3">
                            <Button label="Shadowed" color="primary" variant="solid" />
                            <Button label="Loading Dim" color="success" variant="solid" loading />
                        </div>
                    </div>

                    {/* Special Ghost & Link */}
                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 space-y-4">
                        <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Colored Links & Ghosts</h3>
                        <p className="text-xs text-slate-500 italic">Links and Ghosts adapt their text/hover colors automatically.</p>
                        <div className="flex flex-wrap gap-3">
                            <Button label="Error Link" variant="link" color="error" />
                            <Button label="Success Link" variant="link" color="success" />
                            <Button label="Ghost Error" variant="ghost" color="error" />
                        </div>
                    </div>

                    {/* Glass & Icons */}
                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 space-y-4">
                        <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Glass Tint & Mini Icons</h3>
                        <p className="text-xs text-slate-500 italic">Tinted glass effects and optimized padding for small icons.</p>
                        <div className="flex flex-wrap gap-3 items-center">
                            <Button label="Primary Glass" variant="glass" color="primary" />
                            <Button isIconOnly size="sm" color="info" icon={<Mail className="w-4 h-4" />} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Variant Matrix */}
            <section className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold">Visual Variants</h2>
                    <p className="text-slate-400 text-sm">Solid, Outline, and Ghost permutations across our color palette.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Solid Row */}
                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 space-y-4">
                        <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Solid (Default)</h3>
                        <div className="flex flex-wrap gap-3">
                            <Button label="Solid Primary" color="primary" />
                            <Button label="Solid Success" color="success" />
                            <Button label="Solid Error" color="error" />
                        </div>
                    </div>

                    {/* Outline Row */}
                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 space-y-4">
                        <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Outline</h3>
                        <div className="flex flex-wrap gap-3">
                            <Button label="Outline Primary" variant="outline" color="primary" />
                            <Button label="Outline Success" variant="outline" color="success" />
                            <Button label="Outline Error" variant="outline" color="error" />
                        </div>

                    </div>

                    {/* Ghost Row */}
                    <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 space-y-4">
                        <h3 className="text-sm font-medium text-slate-500 uppercase tracking-wider">Ghost / Simple</h3>
                        <div className="flex flex-wrap gap-3">
                            <Button label="Ghost Primary" variant="ghost" color="primary" />
                            <Button label="Link Primary" variant="link" color="primary" />
                            <Button label="glass" variant="glass" color="primary" />

                        </div>
                    </div>
                </div>
            </section>

            {/* Smart States Section */}
            <section className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold">Smart Feedback & States</h2>
                    <p className="text-slate-400 text-sm">Handling busy and disabled states with built-in animations.</p>
                </div>

                <div className="flex flex-wrap items-center gap-6 p-8 rounded-xl bg-slate-900/30 border border-slate-800">
                    <div className="space-y-2 flex-1 min-w-[200px]">
                        <p className="text-xs text-slate-500">Interactive Loading State</p>
                        <Button label="Click to Load" color="primary" loading />
                    </div>
                    <div className="space-y-2 flex-1 min-w-[200px]">
                        <p className="text-xs text-slate-500">Disabled State</p>
                        <Button label="System Restricted" color="secondary" disabled icon={<Lock className="w-4 h-4" />} />
                    </div>
                    <div className="space-y-2 flex-1 min-w-[200px]">
                        <p className="text-xs text-slate-500">Full Width Utility</p>
                        <Button label="Submit Application" fullWidth color="success" />
                    </div>
                </div>
            </section>

            {/* Sizes Section */}
            <section className="space-y-8 mb-20">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold">Scaling & Sizing</h2>
                    <p className="text-slate-400 text-sm">Consistent scaling from small actions to large call-to-actions.</p>
                </div>
                <div className="flex items-end gap-6 p-8 rounded-xl bg-slate-900/10 border border-slate-800/50">
                    <Button label="Small" size="sm" color="info" />
                    <Button label="Medium" size="md" color="info" />
                    <Button label="Large" size="lg" color="info" />
                    <Button variant="outline" size="lg" color="info" rounded="full">Pill Style</Button>
                </div>
            </section>

            {/* Layout Section */}
            <section className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold">Icon Placement</h2>
                    <p className="text-slate-500 text-sm italic">Flipping layouts without changing component structure.</p>
                </div>
                <div className="flex flex-wrap gap-6">
                    <Button
                        label="Continue"
                        color="primary"
                        icon={<ArrowRight className="w-4 h-4" />}
                        iconPlacement="right"
                    />
                    <Button
                        label="Send Email"
                        color="info"
                        icon={<Mail className="w-4 h-4" />}
                        iconPlacement="left"
                    />
                </div>
            </section>

            {/* States Section */}
            <section className="space-y-8 mb-20">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold">Interactive States</h2>
                    <p className="text-slate-500 text-sm italic">Automatic handling of disabling and loading views.</p>
                </div>
                <div className="flex flex-wrap gap-6">
                    <Button label="Disabled Button" color="primary" disabled />
                    <Button label="Loading Instance" color="primary" loading />
                </div>
            </section>
            {/* Simple Scenarios Section */}
            <section className="space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-slate-200">Polymorphic & Icon Utility</h2>
                    <p className="text-slate-400 text-sm">Flexible rendering as buttons or links, with icon-only support.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Polymorphic Link */}
                    <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-6">
                        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Polymorphic Navigation</h4>
                        <p className="text-xs text-slate-500 italic">This is an actual Next.js Link tag styled as a button.</p>
                        <Button href="/" label="Back Home" variant="outline" icon={<ArrowRight className="w-4 h-4" />} />
                    </div>

                    {/* Icon Only */}
                    <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/40 space-y-6">
                        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Icon-Only Utility</h4>
                        <div className="flex gap-4">
                            <Button isIconOnly rounded="full" color="secondary" icon={<Mail className="w-5 h-5" />} />
                            <Button isIconOnly rounded="lg" color="primary" icon={<ArrowRight className="w-5 h-5" />} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
