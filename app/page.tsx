import { LeftPanel } from "@/components/left-panel"
import { RightPanel } from "@/components/right-panel"
import { Button } from "@/components/ui/button"
import { Flex } from "@/components/ui/flex"
import { Separator } from "@/components/ui/separator"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Janek Zagórski - CV'
}

export default function Page() {
    return (
        <Flex className="relative w-[210mm] h-[297mm] p-[15mm] mx-auto shadow-lg print:shadow-none print:w-[210mm] print:p-[15mm] print:m-0">

            <Flex className="absolute top-4 right-4 flex-row gap-2">
                <Link href='https://janek-cv.varely.co/' target='_blank'>
                    <Button size='xs'>
                        Zobacz CV w internecie <ExternalLink />
                    </Button>
                </Link>
            </Flex>

            <Flex className="flex-row gap-8">
                <LeftPanel />
                <Separator orientation='vertical' />
                <RightPanel />
            </Flex>

            <Flex className="absolute left-2 bottom-2 text-xs text-muted-foreground">
                Ten dokument jest interaktywny. Linki do np. social media albo stron internetowych można klikać.
            </Flex>

        </Flex>
    )
}