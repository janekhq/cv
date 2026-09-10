import Image from "next/image";
import { Flex } from "./ui/flex";
import { ContactItem, Contacts } from "./ui/contacts";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { me } from "@/constants/me";
import { Github } from "./icons/github";
import { LinkedIn } from "./icons/linkedin";
import { Section, SectionContent, SectionTitle } from "./ui/section";
import { SkillRating } from "./skill-rating";
import { Badge } from "./ui/badge";
import { Language } from "./language";
import { Container } from "./ui/container";
import Link from "next/link";
import { Button } from "./ui/button";

export function LeftPanel() {
    return (
        <Container className="flex-1/3">
            <Flex className="gap-1">
                <Flex className="max-w-35 max-h-35 overflow-hidden rounded-4xl mb-1">
                    {/* było translate-y-4 gdy rodzic nie miał flex-row */}
                    <Image className="w-full h-full object-cover scale-300 translate-x-3 translate-y-9" src='/images/jaaa.jpg' alt="Janek Zagórski" width={960} height={1280} />
                </Flex>
                <h1 className="text-xl font-semibold">{me.fullname}</h1>
                <p className="text-base font-medium text-primary">{me.title}</p>
            </Flex>

            <Contacts>
                <ContactItem href={'tel:' + me.contact.phone}>
                    <Phone /> {me.contact.phone}
                </ContactItem>
                <ContactItem href={'mailto:' + me.contact.email}>
                    <Mail /> {me.contact.email}
                </ContactItem>
                <ContactItem>
                    <MapPin /> {me.contact.city}
                </ContactItem>
                <ContactItem href={me.contact.github_url}>
                    <Github /> {me.contact.github_name}
                </ContactItem>
                <ContactItem href={me.contact.linkedin_url}>
                    <LinkedIn /> {me.contact.linkedin_name}
                </ContactItem>
            </Contacts>

            <Section size='sm'>
                <SectionTitle>Umiejętności techniczne</SectionTitle>
                <SectionContent className="gap-2">
                    {me.skills.map((skill, index) => (
                        <SkillRating key={index} imgSrc={skill.imgSrc} stars={skill.stars}>
                            {skill.name}
                        </SkillRating>
                    ))}
                </SectionContent>
            </Section>

            <Section size='sm'>
                <SectionTitle>Narzędzia</SectionTitle>
                <Flex className="flex-row flex-wrap gap-1">
                    {me.tools.map(tool => (
                        <Badge variant='secondary' key={tool.name}>
                            {tool.icon}
                            {tool.name}
                        </Badge>
                    ))}
                </Flex>
            </Section>

            <Section size='sm'>
                <SectionTitle>Języki</SectionTitle>
                <Flex className="gap-1">
                    {me.languages.map(lang => <Language key={lang.name} level={lang.level} flag={lang.flag}>{lang.name}</Language>)}
                </Flex>
            </Section>

            <Section size='sm'>
                <SectionTitle>Linki do projektów</SectionTitle>
                <SectionContent className="gap-1">
                    <Link href='https://www.varely.co/pl/about-janek' target='_blank'>
                        <Button size='xs' variant='outline'>
                            Strona internetowa <ExternalLink />
                        </Button>
                    </Link>
                    <Link href='https://search.varely.co' target='_blank'>
                        <Button size='xs' variant='outline'>
                            Wyszukiwarka internetowa <ExternalLink />
                        </Button>
                    </Link>
                </SectionContent>
            </Section>

        </Container>
    )
}