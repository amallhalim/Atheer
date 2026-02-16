"use client";

import React, { useEffect, useState } from 'react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useTheme } from 'next-themes';
export default function ThemeSelector() {
    const { theme, setTheme } = useTheme();

    const THEME_ITEMS: { label: string, value: string, color: string }[] = [
        { label: "Light", value: "light", color: "#ffffff" },
        { label: "Yellow", value: "yellow", color: "#facc15" },

        { label: "Dark", value: "dark", color: "#0a192f" },
        { label: "Red", value: "red", color: "#f87171" },
        { label: "Green", value: "green", color: "#4ade80" },
        { label: "Purple", value: "purple", color: "#c084fc" },
    ]




    return (
        <div className="flex justify-end px-4 py-2">
            <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger className="w-[180px]transition - all hover: bg - muted / 50">
                    < SelectValue placeholder="Select Theme" />
                </SelectTrigger >
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Choose Theme</SelectLabel>
                        {THEME_ITEMS.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                                <div className="flex items-center gap-3">
                                    <span
                                        className="w-4 h-4 rounded-full border border-foreground/10"
                                        style={{ backgroundColor: item.color }}
                                    />
                                    {/* <span className="text-sm font-medium">{item.label}</span> */}
                                </div>
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select >

        </div >
    );
}







