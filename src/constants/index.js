import {
    mobile,
    web,
    creator,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    brsis,
    angular,
    bootstrap,
    flutter,
    mui,
    mysql,
    nextjs,
    php,
    postgresql,
    vue,
    agnolini,
    apoloCards,
    notionary,
    studyClock,
    talesOfTale,
    timeline,
    crudQualidade,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "about",
    },
    {
        id: "work",
        title: "work",
    },
    {
        id: "projects",
        title: "projects",
    },
    {
        id: "contact",
        title: "contact",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: creator,
    },
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Mobile Developer",
        icon: mobile,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "Vue",
        icon: vue,
    },
    {
        name: "Flutter",
        icon: flutter,
    },
    {
        name: "MUI",
        icon: mui,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
    },
    {
        name: "PHP",
        icon: php,
    },
    {
        name: "Next.js",
        icon: nextjs,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
];

const experiences = [
    {
        title: "internship",
        company_name: "BRSIS",
        icon: brsis,
        iconBg: "#383E56",
        date: "November 2022 - April 2023",
        points: [
            "internshipPoint1",
            "internshipPoint2",
            "internshipPoint3",
        ],
    },
    {
        title: "developer",
        company_name: "BRSIS",
        icon: brsis,
        iconBg: "#383E56",
        date: "April 2023 - Present",
        points: [
            "developerPoint1",
            "developerPoint2",
            "developerPoint3",
        ],
    },
];

const projects = [
    {
        name: "Notionary",
        description:
            "notionaryDescription",
        tags: [
            {
                name: "vue",
                color: "green-text-gradient",
            },
            {
                name: "firebase",
                color: "green-text-gradient",
            },
            {
                name: "bulma",
                color: "green-text-gradient",
            },
            {
                name: "vue-router",
                color: "green-text-gradient",
            },
            {
                name: "pinia",
                color: "green-text-gradient",
            },
            {
                name: "composition_apis",
                color: "green-text-gradient",
            },
        ],
        image: notionary,
        source_code_link: "https://github.com/SamuelPiasecki/great-vue",
    },
    {
        name: "Apolo",
        description:
            "apoloDescription",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "blue-text-gradient",
            },
        ],
        image: apoloCards,
        source_code_link: "https://github.com/SamuelPiasecki/Apolo-react",
    },
    {
        name: "Agnolini",
        description:
            "agnoliniDescription",
        tags: [
            {
                name: "react",
                color: "pink-text-gradient",
            },
            {
                name: "typescript",
                color: "pink-text-gradient",
            },
            {
                name: "eslint",
                color: "pink-text-gradient",
            },
            {
                name: "sass",
                color: "pink-text-gradient",
            },
            {
                name: "react-router-dom",
                color: "pink-text-gradient",
            },
        ],
        image: agnolini,
        source_code_link: "https://github.com/SamuelPiasecki/Agnolini",
    },
    {
        name: "Tales of Tale",
        description:
            "talesOfTaleDescription",
        tags: [
            {
                name: "unity",
                color: "text-sky-200",
            },
            {
                name: "mobile",
                color: "text-sky-200",
            },
            {
                name: "aseprite",
                color: "text-sky-200",
            },
        ],
        image: talesOfTale,
        source_code_link: "",
    },
    {
        name: "Study Clock",
        description:
            "studyClockDescription",
        tags: [
            {
                name: "react",
                color: "text-purple-300",
            },
            {
                name: "typescript",
                color: "text-purple-300",
            },
            {
                name: "sass",
                color: "text-purple-300",
            },
        ],
        image: studyClock,
        source_code_link: "https://github.com/SamuelPiasecki/StudyClockReact",
    },
    {
        name: "Timeline",
        description:
            "timelineDescription",
        tags: [
            {
                name: "nextjs",
                color: "text-gray-400",
            },
            {
                name: "typescript",
                color: "text-gray-400",
            },
            {
                name: "css-in-js",
                color: "text-gray-400",
            },
            {
                name: "context_api",
                color: "text-gray-400",
            },
        ],
        image: timeline,
        source_code_link: "https://github.com/SamuelPiasecki/portifolio-ms",
    },
    {
        name: "CRUD Qualidade",
        description:
            "crudDescription",
        tags: [
            {
                name: "nextjs",
                color: "text-gray-400",
            },
            {
                name: "typescript",
                color: "text-gray-400",
            },
            {
                name: "supabase",
                color: "text-gray-400",
            },
            {
                name: "cypress",
                color: "text-gray-400",
            },
        ],
        image: crudQualidade,
        source_code_link: "https://github.com/SamuelPiasecki/CRUD_Qualidade",
    },
];

export { services, technologies, experiences, projects };