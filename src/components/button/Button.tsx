"use client"

import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'

/**
 * Simplified Button Component
 * 
 * Features:
 * - Orchestrated with Tailind Variants (TV) for clean, maintainable styles.
 * - Polymorphic: Automatically renders as a Next.js <Link> if 'href' is provided.
 * - Supports icons, loading states, and custom variants (solid, outline, ghost, glass, link).
 */

/**
 * buttonStyles - Variant Orchestrator
 */
const buttonStyles = tv({
    // Shared core styles
    base: "relative inline-flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed font-medium overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-offset-2",

    variants: {
        /**
         * 1. THE COLOR (Automatic Theme)
         * Each color applies the background, border, and text color automatically.
         */
        color: {
            primary: "bg-primary border-primary text-primary focus-visible:ring-primary",
            secondary: "bg-secondary border-secondary text-secondary focus-visible:ring-secondary",
            success: "bg-success border-success text-success focus-visible:ring-success",
            error: "bg-error border-error text-error focus-visible:ring-error",
            info: "bg-info border-info text-info focus-visible:ring-info",
            warning: "bg-warning border-warning text-warning focus-visible:ring-warning",
        },

        /**
         * 2. THE VARIANT (The Override)
         * Instead of complex logic, we just "hide" what we don't want.
         */
        variant: {
            // SOLID: Background from 'color', text mapped via compoundVariants
            solid: "border-transparent shadow-sm hover:opacity-90",

            // OUTLINE: Hides background, keeps the border and text from 'color'
            outline: "bg-transparent border-2 hover:bg-black/5 dark:hover:bg-white/5",

            // GHOST: Hides both background and border, keeps text from 'color'
            ghost: "bg-transparent border-transparent hover:bg-black/5 dark:hover:bg-white/5",

            // Special variants
            glass: "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl",
            link: "bg-transparent border-transparent hover:underline px-0 py-0 h-auto",
        },

        size: {
            sm: "px-3 py-1.5 text-sm",
            md: "px-4 py-2 text-base",
            lg: "px-6 py-3 text-lg",
        },
        fullWidth: { true: "w-full" },
        rounded: {
            none: "rounded-none",
            sm: "rounded-sm",
            md: "rounded-md",
            lg: "rounded-lg",
            full: "rounded-full",
        },
        isIconOnly: {
            true: "p-2 aspect-square",
        }
    },

    // ZERO complex logic! 
    compoundVariants: [
        /**
         * 1. THEME-AWARE FOREGROUNDS (Contrast Fix)
         * Ensure solid buttons use the correct accessible text color for their background.
         */
        {
            variant: "solid",
            color: "primary",
            class: "text-primary-foreground",
        },
        {
            variant: "solid",
            color: "secondary",
            class: "text-secondary-foreground",
        },
        {
            variant: "solid",
            color: "success",
            class: "text-white", // Success usually stays white on green
        },
        {
            variant: "solid",
            color: "error",
            class: "text-white", // Error usually stays white on red
        },
        {
            variant: "solid",
            color: "info",
            class: "text-white", // Info usually stays white on blue
        },
        {
            variant: "solid",
            color: "warning",
            class: "text-white", // Warning usually stays white on yellow/orange
        },

        /**
         * COMPOUND VARIANTS: 
         * Use these to apply styles only when a SPECIFIC combination is active.
         */
        {
            variant: "ghost",
            color: "primary",
            class: "hover:bg-primary/10",
        },
        {
            variant: "ghost",
            color: "error",
            class: "hover:bg-error/10",
        },
        {
            variant: "outline",
            color: "primary",
            class: "hover:bg-primary/5",
        },
        // Example: Only add shadow to solid buttons
        {
            variant: "solid",
            class: "shadow-md hover:shadow-lg",
        },
        /**
         * 1. Specific Link Colors
         * Link variants usually need specific text colors rather than backgrounds.
         */
        {
            variant: "link",
            color: "error",
            class: "text-error hover:text-error/80",
        },
        {
            variant: "link",
            color: "success",
            class: "text-success hover:text-success/80",
        },
        /**
         * 2. Icon-Only Adjustments
         * Small icon buttons often need tighter padding to stay perfectly square.
         */
        {
            isIconOnly: true,
            size: "sm",
            class: "p-1.5",
        },
        /**
         * 3. Loading States for Solid Buttons
         * We can dim the button slightly when loading to make the spinner pop.
         */
        {
            loading: true,
            variant: "solid",
            class: "opacity-80 brightness-95",
        },
        /**
         * 4. Primary Glass Effect
         * Apply a subtle primary tint to the glass variant.
         */
        {
            variant: "glass",
            color: "primary",
            class: "bg-primary/10 border-primary/20",
        }
    ],

    defaultVariants: {
        variant: "solid",
        color: "primary",
        size: "md",
        rounded: "md",
    }
})



/**
 * Component Props Interface
 * We combine standard HTML button attributes with our custom variant props.
 */
type ButtonProps = {
    label?: string,
    href?: string,
    icon?: React.ReactNode,
    iconPlacement?: string,
    loading?: boolean,
    onClick?: () => void,
    className?: string,
    disabled?: boolean,
    children?: React.ReactNode,
} & VariantProps<typeof buttonStyles> // <-- THIS ADDS AUTOMATIC TYPE FOR 'variant', 'color', 'size', etc.

export default function Button({
    label,
    variant,
    color,
    size,
    fullWidth,
    rounded,
    isIconOnly,
    href,
    icon,
    iconPlacement = 'right',
    loading,
    onClick,
    className,
    disabled,
    children,
    ...props
}: ButtonProps) {
    // Generate the final Tailwind class string based on props
    const finalClassName = buttonStyles({ variant, color, size, fullWidth, rounded, isIconOnly, className })

    /**
     * Shared render helper for the button's internal content (labels, icons, spinners)
     */
    const renderContent = () => (
        <>
            {loading ? (
                <Loader2 className="w-4 h-4 animate-spin shrink-0" /> // Standard spinning loader
            ) : (
                <div className={`flex items-center gap-2 ${iconPlacement === 'right' ? 'flex-row' : 'flex-row-reverse'}`}>
                    {icon && (
                        <span className="shrink-0">
                            {icon}
                        </span>
                    )}
                    {/* Only render label/children if not in 'icon-only' mode */}
                    {(!isIconOnly && (label || children)) && <span>{label || children}</span>}
                </div>
            )}
        </>
    )

    // CASE 1: Render as a Link for navigation
    if (href) {
        return (
            <Link
                href={href}
                aria-busy={loading}
                aria-disabled={disabled || loading}
                className={finalClassName}
                {...props}
            >
                {renderContent()}
            </Link>
        )
    }

    // CASE 2: Render as a standard HTML button
    return (
        <button
            className={finalClassName}
            onClick={onClick}
            disabled={disabled || loading}
            {...props}
            aria-busy={loading}
            aria-disabled={disabled || loading}
        >
            {renderContent()}
        </button>
    )
}

