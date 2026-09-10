import { Flex } from "./ui/flex";
import { me } from "@/constants/me";
import { Section, SectionContent, SectionTitle } from "./ui/section";
import { WorkExperience } from "./work-experience";
import { Item, ItemContent, ItemDescription, ItemTitle } from "./ui/item";
import { Container } from "./ui/container";

export function RightPanel() {
    return (
        <Container className="flex-2/3">
            <Section>
                <SectionTitle>O mnie</SectionTitle>
                <SectionContent>
                    {me.about}
                </SectionContent>
            </Section>
            <Section>
                <SectionTitle>Doświadczenie zawodowe</SectionTitle>
                <SectionContent>
                    {me.work_experience.map((experience, index) => (
                        <WorkExperience key={index} {...experience} />
                    ))}
                </SectionContent>
            </Section>
            <Section>
                <SectionTitle>Wybrane projekty</SectionTitle>
                <SectionContent>
                    {me.projects.map((project, index) => (
                        <WorkExperience key={index} {...project} />
                    ))}
                </SectionContent>
            </Section>
            <Section>
                <SectionTitle>Wykształcenie i certyfikaty</SectionTitle>
                <SectionContent>
                    {me.education.map((school, index) => (
                        <Flex key={index} className="gap-2">
                            <WorkExperience {...school} />
                            {school.certificates.map((cert, certIndex) => (
                                <Item key={certIndex} variant='outline' size='xs'>
                                    <ItemContent>
                                        <ItemTitle className="text-xs">{cert.title}</ItemTitle>
                                        <ItemDescription className="text-xs">
                                            <span className="font-semibold">{cert.rating}</span> - {cert.description}
                                        </ItemDescription>
                                    </ItemContent>
                                </Item>
                            ))}
                        </Flex>
                    ))}
                </SectionContent>
            </Section>

            <Section>
                <SectionTitle>Hobby</SectionTitle>
                <SectionContent className="flex-row">
                    <WorkExperience title='Hobby i dodatkowe umiejętności' duties={me.hobbies} />
                    {/* <WorkExperience title='Szczególne umiejętności' duties={['Umiejętność nauczenia się dowolnej rzeczy w 20 godzin']} /> */}
                </SectionContent>
            </Section>
        </Container>
    )
}