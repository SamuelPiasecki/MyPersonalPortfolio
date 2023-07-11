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
} from "../assets";


export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
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
        title: "Flutter Developer",
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
        title: "Internship",
        company_name: "BRSIS",
        icon: brsis,
        iconBg: "#383E56",
        date: "November 2022 - April 2023",
        points: [
            "Developing and maintaining web applications using HTML, SASS, PHP and other related technologies.",
            "Collaborating with cross-functional teams including designers, and other developers.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "BRSIS",
        icon: brsis,
        iconBg: "#383E56",
        date: "April 2023 - Present",
        points: [
            "Developing and maintaining web applications using HTML, SASS, PHP and other related technologies.",
            "Collaborating with cross-functional teams including designers, and other developers.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
        ],
    },
];

const projects = [
    {
        name: "Notionary",
        description:
            "This Project was created to develop more advanced skills with Vue.js. The following tools were used in Notionary: Vue.js, Firebase, Bulma, Vue-router, Pinia and Compositions APIs.",
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
            "The objective of this project is to learn how to build React applications and develop skills to work with front-end. In this project, you will see a landing page to organize characters/items in their roles. You can organize them into: Enemies; Characters; Items; Scenarios; Extras.",
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
            "Welcome to the Angolini Restaurant Menu project! This project is a web application built with React, TypeScript, ESLint, SCSS, and React Router DOM. It aims to showcase a menu for a restaurant that specializes in serving delicious pastas.",
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
            "This mobile game was created as my Final Paper for my graduation. I created this project with a friend, and I created all the interfaces of the game. This includes: UX, sprites, and soundtrack.",
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
            "Study Clock is a simple application built with React and TypeScript that helps you manage your study sessions. With Study Clock, you can set a timer for a specific amount of time.",
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
            "Project with Next.js developed during a course in Alura, where the idea was to develop a 'Blog' about my progress in my careear. In this project was used: Next.js, React, Typescript, CSS-in-Js, Context API, amoung others techs.",
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
                name: "contentx_api",
                color: "text-gray-400",
            },
        ],
        image: timeline,
        source_code_link: "https://github.com/SamuelPiasecki/portifolio-ms",
    },
];

export { services, technologies, experiences, projects };