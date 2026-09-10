import { Badge } from "./ui/badge"
import { Flex } from "./ui/flex"

type Props = {
    title: string
    description?: string
    company?: string
    dates?: string
    duties?: string[]
    technologies?: string[]
}

export function WorkExperience({ title, description, company, dates, duties, technologies }: Props) {
    return (
        <Flex className="gap-2">
            <Flex className="flex-row justify-between items-start gap-2">
                <Flex className="gap-1">
                    <h3 className="text-sm font-semibold">{title} {company && <span className="text-primary">- {company}</span>}</h3>
                    {description && <p className="text-xs text-muted-foreground">{description}</p>}
                </Flex>
                <span className="text-xs text-muted-foreground">{dates}</span>
            </Flex>
            {duties &&
                <ul className="list-disc list-inside space-y-1">
                    {duties.map(duty => (
                        <li key={duty}>{duty}</li>
                    ))}
                </ul>
            }
            <Flex className="flex-row flex-wrap gap-1">
                {technologies && technologies.map(technology => (
                    <Badge key={technology} variant='outline'>{technology}</Badge>
                ))}
            </Flex>
        </Flex>
    )
}