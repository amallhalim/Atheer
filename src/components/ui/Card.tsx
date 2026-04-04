"use client";

import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

/**
 * 🚀 ADVANCED VARIANT ORCHESTRATION
 * Demonstrating: TypeScript Types, Responsive Breakpoints, and Compound Logic.
 */
const cardStyles = tv({
    base: "relative rounded-xl border bg-card text-card-foreground shadow-sm transition-all overflow-hidden",

    variants: {
        // 1. RESPONSIVE-READY VARIANTS
        padding: {
            none: "p-0",
            sm: "p-3 md:p-4",
            md: "p-4 md:p-6",
            lg: "p-6 md:p-10",
        },

        level: {
            flat: "border-transparent shadow-none",
            base: "border-border shadow-sm",
            elevated: "border-border/50 shadow-xl scale-[1.02]",
        },

        // 2. FEATURE TOGGLES
        isInteractive: {
            true: "hover:border-primary/50 cursor-pointer active:scale-[0.99] transition-transform",
        },

        glass: {
            true: "bg-white/5 backdrop-blur-md border-white/10",
        }
    },

    // 3. 🧩 COMPOUND VARIANTS (Advanced Logic)
    // "If it's interactive AND glass, give it a specific hover glow"
    compoundVariants: [
        {
            isInteractive: true,
            glass: true,
            class: "hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]",
        },
        {
            level: "elevated",
            isInteractive: true,
            class: "hover:-translate-y-1 hover:shadow-2xl",
        }
    ],

    // 4. DEFAULTS
    defaultVariants: {
        padding: "md",
        level: "base",
    },
});

/**
 * 🏷️ TYPESCRIPT INTEGRATION
 * We extract the types from the 'tv' object so they stay in sync automatically.
 */
type CardProps = React.HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof cardStyles> & {
        children?: React.ReactNode;
    };

export function Card({
    className,
    padding,
    level,
    isInteractive,
    glass,
    children,
    ...props
}: CardProps) {
    return (
        <div
            className={cardStyles({ padding, level, isInteractive, glass, className })}
            {...props}
        >
            {children}
        </div>
    );
}

/**
 * 💡 USAGE EXAMPLE (In your code):
 * 
 * <Card 
 *   level="elevated" 
 *   isInteractive 
 *   padding={{ initial: 'sm', md: 'lg' }}  // <-- Responsive Object prop!
 * >
 *   Content...
 * </Card>
 */
