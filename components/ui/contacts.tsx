import Link from "next/link"
import { Button } from "./button"
import { Flex } from "./flex"

export function Contacts({ children }: { children?: React.ReactNode }) {
    return (
        <Flex className="gap-1">
            {children}
        </Flex>
    )
}

export function ContactItem({ href, children }: { href?: string, children?: React.ReactNode }) {
    return (
        <Flex className="flex-row">
            <Button variant='ghost' size='xs' className='-translate-x-3' render={href ? <Link href={href} /> : undefined} nativeButton={!href}>
                {children}
            </Button>
        </Flex>
    )
}