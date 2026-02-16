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
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTheme } from 'next-themes';
export default function ThemeSelector() {
    const router = useRouter()
    const { theme, setTheme } = useTheme();
    const pathname = usePathname()
    const searchParams = useSearchParams()

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
    // Load theme and set mounted status
    useEffect(() => {
        const syncTheme = () => {
            const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
            setTheme(currentTheme);
            setMounted(true);
        };

        syncTheme();
    }, [searchParams]);

    if (!mounted) return null;

    const handleThemeChange = (value: string) => {
        if (!value) return;

        setTheme(value);
        localStorage.setItem("theme", value);
        document.documentElement.setAttribute("data-theme", value);

        const params = new URLSearchParams(searchParams.toString());
        params.set("theme", value);

        // Use scroll: false to prevent jumpy navigation
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
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







