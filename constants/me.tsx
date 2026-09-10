import { Bun } from "@/components/icons/bun";
import { Cloudflare } from "@/components/icons/cloudflare";
import { Github } from "@/components/icons/github";
import { PostgreSQL } from "@/components/icons/postgresql";
import { Swagger } from "@/components/icons/swagger";
import { Tailwind } from "@/components/icons/tailwind";
import { TypeScript } from "@/components/icons/typescript";

export const me = {
    fullname: "Janek Zagórski",
    title: 'Full-Stack Web & Mobile Developer',
    about: 'Programista od dekady. Od kilku lat tworzę aplikacje używając nowoczesnych technologii. Buduję też różne automatyzacje w n8n lub Pythonie oraz wdrażam projekty w środowiskach Docker. Poza pracą samodzielnie realizuję projekty dla klientów prywatnych.',
    contact: {
        phone: "+48 730 355 879",
        email: "janekzagorski@proton.me",
        city: "Poznań, Polska",
        github_name: "janekhq",
        github_url: "https://github.com/janekhq/",
        linkedin_name: "Janek Zagórski",
        linkedin_url: "https://pl.linkedin.com/in/janek-zagorski"
    },
    skills: [
        { name: 'HTML, CSS, JS', stars: 4, imgSrc: '/images/html-5.svg' },
        { name: 'React / Next.js', stars: 4, imgSrc: '/images/react.svg' },
        { name: 'React Native / Expo', stars: 4, imgSrc: '/images/expo.svg' },
        { name: 'Python', stars: 4, imgSrc: '/images/python.svg' },
        { name: 'Docker + Coolify', stars: 3, imgSrc: '/images/docker.svg' },
        { name: 'n8n / automatyzacje', stars: 5, imgSrc: '/images/n8n.svg' },
        { name: 'AI / Claude Code', stars: 4, imgSrc: '/images/claude.svg' },
    ],
    tools: [
        { name: "Git", icon: <Github /> },
        { name: "TypeScript", icon: <TypeScript /> },
        { name: "PostgreSQL", icon: <PostgreSQL /> },
        { name: "REST API", icon: <Swagger /> },
        { name: "Tailwind", icon: <Tailwind /> },
        { name: "Bun", icon: <Bun /> },
        { name: "Cloudflare", icon: <Cloudflare /> },
    ],
    languages: [
        { name: 'Polski', flag: 'pl', level: "ojczysty" },
        { name: 'Angielski', flag: 'us', level: "B2" },
    ],
    work_experience: [
        {
            title: "E-commerce Specialist",
            company: "Verseo",
            dates: "08.2024 - 07.2026 (2 lata)",
            duties: [
                'Budowa sklepów internetowych opartych o silnik Selly / Shoper,',
                'Budowa profesjonalnych stron w Wordpress,',
                'Budowa pojedynczych stronek w React lub HubSpot Pages,',
                'Budowa automatyzacji wewnętrznych procesów firmy w n8n / AI, integracje z zewnętrznymi API.',
            ],
        },
    ],
    projects: [
        {
            title: "Integracja LMS z KSEF (+ Fakturownia)",
            dates: '03.2026 - teraz',
            duties: ['Klient ma stary program LMS, który nie posiada integracji z KSEF. Dlatego napisałem customowy program pod jego wymagania. Teraz klika 1 przycisk: faktury są wysyłane do Fakturowni a później do KSEF.'],
            technologies: ['Python', 'HTML', 'REST API', 'MySQL'],
        },
        {
            title: "Varely Search - moja własna wyszukiwarka",
            description: 'https://search.varely.co/',
            dates: 'obecnie',
            duties: ['Wyszukiwanie informacji, grafika, filmy, wiadomości, rozmowa z AI.'],
            technologies: ['React / Next.js', 'REST API', 'n8n'],
        },
    ],
    education: [
        {
            title: 'Technikum Informatyczne',
            description: 'Technik informatyk, Technikum nr 19, Poznań',
            dates: '2019 - 2024',
            certificates: [
                { title: 'Egzamin zawodowy INF.02', rating: '94%', description: 'Administracja i eksploatacja systemów komputerowych, urządzeń peryferyjnych i lokalnych sieci komputerowych' },
                { title: 'Egzamin zawodowy INF.03', rating: '100%', description: 'Tworzenie i administrowanie stronami i aplikacjami internetowymi oraz bazami danych' },
            ]
        },
    ],
    hobbies: [
        'Rozwój osobisty',
        'Łamanie zabezpieczeń stron internetowych 🤫',
        'Umiejętność nauki dowolnej rzeczy w 20 godzin',
        'Od 3 dni siłownia 💪'
    ]
}