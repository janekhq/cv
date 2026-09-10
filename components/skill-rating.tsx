import { Star } from "lucide-react";
import { Flex } from "./ui/flex";
import Image from "next/image";

export function SkillRating({ stars = 1, imgSrc, children }: { stars?: number, imgSrc?: string, children?: string }) {

    const stars_items = [...Array(stars).keys()]
    const empty_stars_items = [...Array(5 - stars).keys()]

    return (
        <Flex className="flex-row justify-between items-center gap-2 text-xs">
            <Flex className="relative flex-row gap-2 items-center">
                {imgSrc && <Image src={imgSrc} alt={children + " logo"} width={15} height={15} className="absolute -left-6 h-3.75 w-3.75" />}
                {children}
            </Flex>
            <Flex className="flex-row gap-0.5">
                {stars_items.map(item => <Star key={item} className="size-3 fill-amber-400 dark:stroke-amber-400" />)}
                {empty_stars_items.map(item => <Star key={item} className="size-3" />)}
            </Flex>
        </Flex>
    )
}