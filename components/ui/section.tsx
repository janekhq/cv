'use client';

import { cva, VariantProps } from "class-variance-authority";
import { Flex } from "./flex";
import { Separator } from "./separator";
import { createContext, useContext } from "react";
import { cn } from "cn";

const sectionVariants = cva(
    "",
    {
        variants: {
            size: {
                default: "",
                sm: "",
            },
        },
        defaultVariants: {
            size: "default",
        },
    }
)

const SectionContext = createContext<'default' | 'sm' | null>(null)

export function Section({ size = 'default', children }: { children?: React.ReactNode } & VariantProps<typeof sectionVariants>) {

    return (
        <SectionContext.Provider value={size}>
            <Flex className={size === 'default' ? "gap-2" : "gap-3"}>
                {children}
            </Flex>
        </SectionContext.Provider>
    )
}

export function SectionTitle({ children }: { children?: string }) {

    const context = useContext(SectionContext)

    return (
        <>
            <Flex className="flex-row items-center gap-2">
                <Flex className="size-1.5 bg-primary rounded-xl" />
                <h2 className={cn(context === 'default' ? 'text-base' : 'text-sm', "font-semibold")}>
                    {children}
                </h2>
            </Flex>
            {context === 'default' && <Separator className='mb-1' />}
        </>
    )
}

export function SectionContent({ className, children }: { className?: string, children?: React.ReactNode }) {
    return (
        <Flex className={cn("text-xs gap-4", className)}>
            {children}
        </Flex>
    )
}