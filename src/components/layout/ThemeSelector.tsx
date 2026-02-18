"use client";

import React, { useSyncExternalStore } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useTheme } from "next-themes";

const subscribe = () => () => { };

export default function ThemeSelector() {
    const { theme, setTheme } = useTheme();

    // We use useSyncExternalStore to detect if we're on the client.
    // This is the modern (React 18+) way to handle hydration mismatches.
    // A "hydration mismatch" happens when the server-rendered HTML differs from the first 
    // client render (e.g., the server doesn't know your theme, but the browser does).
    // Unlike useEffect + setState, this pattern avoids "cascading renders"
    // and performance warnings by providing a stable state during hydration.
    const isClient = useSyncExternalStore(
        subscribe,
        () => true,
        () => false
    );


    const THEME_ITEMS = [
        { label: "Light", value: "light", color: "#ffffff" },
        { label: "Dark", value: "dark", color: "#0a192f" },
        { label: "Red", value: "red", color: "#f87171" },
        { label: "Green", value: "green", color: "#4ade80" },
        { label: "Yellow", value: "yellow", color: "#facc15" },
        { label: "Purple", value: "purple", color: "#c084fc" },
    ];



    if (!isClient) {
        return null
    }
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
