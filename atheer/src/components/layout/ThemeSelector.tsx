"use client";

import React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";

export default function ThemeSelector() {
    const { theme, setTheme } = useTheme();


    const THEME_ITEMS = [
        { label: "Light", value: "light", color: "#ffffff" },
        { label: "Dark", value: "dark", color: "#0a192f" },
        { label: "Red", value: "red", color: "#f87171" },
        { label: "Green", value: "green", color: "#4ade80" },
        { label: "Yellow", value: "yellow", color: "#facc15" },
        { label: "Purple", value: "purple", color: "#c084fc" },
    ];



    return (
        <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger className="w-[140px] justify-between">
                <div className="flex items-center gap-2">
                    <SelectValue placeholder="Theme" />
                </div>
            </SelectTrigger>

            <SelectContent align="end" className="w-[180px]">
                <SelectGroup>
                    {THEME_ITEMS.map((item) => (
                        <SelectItem
                            key={item.value}
                            value={item.value}
                            className="flex items-center justify-between"
                        >
                            <div className="flex items-center gap-3">
                                <span
                                    className="w-4 h-4 rounded-full border border-foreground/20"
                                    style={{ backgroundColor: item.color }}
                                />
                                {item.label}
                            </div>

                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
