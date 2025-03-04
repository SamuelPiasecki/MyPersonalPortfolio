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
        title: "projects.title",
    },
    {
        id: "contact",
        title: "contact.title",
    },
];

const services = [
    {
        title: "Frontend Developer",
        icon: "/assets/creator.png",
    },
    {
        title: "Web Developer",
        icon: "/assets/web.png",
    },
    {
        title: "Mobile Developer",
        icon: "/assets/mobile.png",
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: "/assets/tech/html.png",
    },
    {
        name: "CSS 3",
        icon: "/assets/tech/css.png",
    },
    {
        name: "JavaScript",
        icon: "/assets/tech/javascript.png",
    },
    {
        name: "TypeScript",
        icon: "/assets/tech/typescript.png",
    },
    {
        name: "Tailwind CSS",
        icon: "/assets/tech/tailwind.png",
    },
    {
        name: "git",
        icon: "/assets/tech/git.png",
    },
    {
        name: "React JS",
        icon: "/assets/tech/reactjs.png",
    },
    {
        name: "Angular",
        icon: "/assets/tech/angular.png",
    },
    {
        name: "Vue",
        icon: ".//assets/tech/vue.png",
    },
    {
        name: "Next.js",
        icon: "/assets/tech/nextjs.png",
    },
    {
        name: "MUI",
        icon: "/assets/tech/mui.png",
    },
    {
        name: "Flutter",
        icon: "/assets/tech/flutter.png",
    },
    {
        name: "MySQL",
        icon: "/assets/tech/mysql.png",
    },
    {
        name: "PostgreSQL",
        icon: "/assets/tech/postgresql.png",
    },
    {
        name: "Bootstrap",
        icon: "/assets/tech/bootstrap.png",
    },
];

const experiences = [
    {
        title: "experience.internship",
        company_name: "BRSIS",
        icon: "../assets/company/brsis.png",
        iconBg: "#383E56",
        date: "experience.internshipDate",
        points: [
            "experience.internshipPoint1",
            "experience.internshipPoint2",
            "experience.internshipPoint3",
        ],
    },
    {
        title: "experience.developerBrsis",
        company_name: "BRSIS",
        icon: "/assets/company/brsis.png",
        iconBg: "#383E56",
        date: "experience.developerBrsisDate",
        points: [
            "experience.developerBrsisPoint1",
            "experience.developerBrsisPoint2",
            "experience.developerBrsisPoint3",
        ],
    },
    {
        title: "experience.developer3C",
        company_name: "3C+",
        icon: "/assets/company/logo_3c.svg",
        iconBg: "#383E56",
        date: "experience.developer3CDate",
        points: [
            "experience.developer3CPoint1",
            "experience.developer3CPoint2",
            "experience.developer3CPoint3",
        ],
    },
    {
        title: "experience.developerPalinha",
        company_name: "Palinha Musical App",
        icon: "/assets/company/logo_palinha.svg",
        iconBg: "#383E56",
        date: "experience.developerPalinhaDate",
        points: [
            "experience.developerPalinhaPoint1",
            "experience.developerPalinhaPoint2",
        ],
    },
    {
        title: "experience.developerCoamo",
        company_name: "Coamo Agroindustrial Cooperativa",
        icon: "/assets/company/logo_coamo.png",
        iconBg: "#383E56",
        date: "experience.developerCoamoDate",
        points: [
            "experience.developerCoamoPoint",
        ],
    }
];

const projects = [
    {
        name: "Notionary",
        description:
            "projects.notionaryDescription",
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
        image: "/assets/notionary.webp",
        source_code_link: "https://github.com/SamuelPiasecki/great-vue",
    },
    {
        name: "Apolo",
        description:
            "projects.apoloDescription",
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
        image: "/assets/apoloCards.webp",
        source_code_link: "https://github.com/SamuelPiasecki/Apolo-react",
    },
    {
        name: "Agnolini",
        description:
            "projects.agnoliniDescription",
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
        image: "/assets/agnolini.webp",
        source_code_link: "https://github.com/SamuelPiasecki/Agnolini",
    },
    {
        name: "Tales of Tale",
        description:
            "projects.talesOfTaleDescription",
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
        image: "/assets/talesOfTale.webp",
        source_code_link: "",
    },
    {
        name: "Study Clock",
        description:
            "projects.studyClockDescription",
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
        image: "/assets/studyClock.webp",
        source_code_link: "https://github.com/SamuelPiasecki/StudyClockReact",
    },
    {
        name: "Timeline",
        description:
            "projects.timelineDescription",
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
        image: "/assets/timeline.webp",
        source_code_link: "https://github.com/SamuelPiasecki/portifolio-ms",
    },
    {
        name: "CRUD Qualidade",
        description:
            "projects.crudDescription",
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
        image: "/assets/crud_qualidade.webp",
        source_code_link: "https://github.com/SamuelPiasecki/CRUD_Qualidade",
    },
];

export { services, technologies, experiences, projects };