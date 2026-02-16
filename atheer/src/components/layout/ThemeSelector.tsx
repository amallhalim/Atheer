"use client";

import React, { useEffect, useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
export default function ThemeSelector() {
    const [theme, setTheme] = useState<string>("dark");
    console.log("theme---", theme)
    const [mounted, setMounted] = useState(false);


    const items: { label: string, value: string, color: string }[] = [
        { label: "Light", value: "light", color: "#ffffff" },
        { label: "Dark", value: "dark", color: "#0a192f" },
        { label: "Red", value: "red", color: "#f87171" },
        { label: "Green", value: "green", color: "#4ade80" },
        { label: "Yellow", value: "yellow", color: "#facc15" },
        { label: "Purple", value: "purple", color: "#c084fc" },
    ]
    // Load theme from localStorage on mount
    useEffect(() => {
        setTimeout(() => {
            setMounted(true);
            const savedTheme = localStorage.getItem("theme");
            console.log("savedTheme---=====", savedTheme)
            if (savedTheme) {
                setTheme(savedTheme);
                document.documentElement.setAttribute("data-theme", savedTheme);
            }
        }, 0);
    }, []);

    if (!mounted) return null;

    // Handle theme change
    const handleThemeChange = (value: string) => {
        if (!value) return; // Prevent deselectin 
        setTheme(value);
        localStorage.setItem("theme", value);
        document.documentElement.setAttribute("data-theme", value);
    };

    return (
        <div className="flex justify-end p-4">

            <Select value={theme} onValueChange={handleThemeChange}>
                <SelectTrigger className=" ">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Choose Theme</SelectLabel>
                        {items.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                                <div className="flex items-center gap-3">
                                    <span
                                        className="w-4 h-4 rounded-full border border-foreground/10"
                                        style={{ backgroundColor: item.color }}
                                    />
                                    <span className="text-sm font-medium">{item.label}</span>
                                </div>
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

        </div>
    );
}







