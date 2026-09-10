import { Flex } from "./ui/flex";

export function Language({ flag, level, children }: { flag: string, level: string, children?: React.ReactNode }) {
    return (
        <Flex className="flex-row justify-between items-center gap-2 text-xs">
            <Flex className="flex-row gap-2">
                <img
                    src={`https://flagcdn.com/${flag.toLowerCase()}.svg`}
                    alt={flag}
                    className="h-4 w-4 rounded-full object-cover border border-border"
                />
                {children}
            </Flex>
            <span className="text-muted-foreground">{level}</span>
        </Flex>
    )
}