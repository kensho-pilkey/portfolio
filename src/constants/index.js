import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    sharry,
    global_tech,
    maxam,
    cryptoDrive,
    carrent,
    jobit,
    tripguide,
    threejs,
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
    id: "contact",
    title: "Contact",
    },
    ];
    const services = [
    {
    title: "Web Developer",
    icon: web,
    },
    {
    title: "Game Developer",
    icon: mobile,
    },
    {
    title: "Musician",
    icon: backend,
    },
    {
    title: "Cat Enthusiast",
    icon: creator,
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
    name: "Node JS",
    icon: nodejs,
    },
    {
    name: "MongoDB",
    icon: mongodb,
    },
    {
    name: "Three JS",
    icon: threejs,
    },
    {
    name: "git",
    icon: git,
    },
    {
    name: "figma",
    icon: figma,
    },
    {
    name: "docker",
    icon: docker,
    },
    ];
    const experiences = [
    {
    title: "Web Development Trainee",
    company_name: "Global Tech Experience",
    icon: global_tech,
    iconBg: "#E6DEDD",
    date: "May 2023 - Aug 2023",
    points: [
    "Tasked with creating a series of websites, webapps, and games using HTML, CSS, and JavaScript.",
    "Technical skills mastered include: JavaScript functions, arrays, conditionals and loops, CSS styling, Bootstrap, DOM manipulation, and using APIs. ",
    "Professional skills mastered include: peer and mob programming, debugging, creating projects to customer specifications, utilizing JavaScript to create website interactions, commenting on code, and collaborating with a global team.",
    ],
    category: "Web Development",
    },
    {
    title: "Co-Founder & Portfolio Manager",
    company_name: "CryptoDrive Capital Management",
    icon: cryptoDrive,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Aug 2022",
    points: [
    "Co-Founded and assisted in the management of a student-run cryptocurrency investment fund.",
    "In charge of testing various trading strategies, trading bots, and deep learning price prediction models using 3Commas’s paper trading feature.",
    "Outsourced the development of a LSTM Cryptocurrency price prediction model trained using data from 8 different coins on CoinMarketCap.",
    "Achieved a 63% price forecast accuracy and 51% higher returns than the buy and hold strategy over a 10 week period.",
    ],
    category: "Finance",
    },
    {
    title: "AI Integration Specialist",
    company_name: "Maxam Hotels",
    icon: maxam,
    iconBg: "#E6DEDD",
    date: "May 2024 - Jun 2024",
    points: [
    "Developed a functional chatbot for an existing website, utilizing the OpenAI API with the GPT-4o model.",
    "The process involved defining the chatbot’s objectives, integrating it with the website, creating a comprehensive Q&A database, and fine-tuning the model to ensure accurate and helpful responses.",
    "This project enhanced user engagement and provided a seamless customer support experience.",
    ],
    category: "AI Integration",
    },
    {
    title: "Frontend Developer",
    company_name: "Sharry Tech",
    icon: sharry,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Aug 2024",
    points: [
    "In charge of developing a web application to help clients design & preview their own app.",
    "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    "Utilized Vue.js, Node.js and Bootstrap CSS to create a dynamic, user-friendly interface that enabled real-time previews and modifications.",
    ],
    category: "Web Development",
    },
    ];
    
    const projects = [
    {
    name: "Vacation Home Finder",
    description:
    "A vacation home finding platform that offers curated recommendations for popular destinations based on filters and user preferences.",
    tags: [
    {
    name: "HTML",
    color: "blue-text-gradient",
    },
    {
    name: "Javascript",
    color: "green-text-gradient",
    },
    {
    name: "Bootstrap CSS",
    color: "pink-text-gradient",
    },
    ],
    image: carrent,
    source_code_link: "https://kensho-pilkey.github.io/Vacation-Home-Finder/",
    },
    {
    name: "Cyber Crusade",
    description:
    "Save your computer from a vicious computer virus in this thrilling 2D platoformer style game. Features a tutorial, 4 different levels, and a final boss fight.",
    tags: [
    {
    name: "Gdscript",
    color: "blue-text-gradient",
    },
    {
    name: "Godot Engine",
    color: "green-text-gradient",
    },
    ],
    image: jobit,
    source_code_link: "https://kenshop.itch.io/cyber-crusade/",
    },
    {
    name: "Business Dashboard",
    description:
    "A comprehensive web application that displays several KPI's via numbers and graphs. Project was part of BRASA-Hack 2024 Hackathon.",
    tags: [
    {
    name: "css",
    color: "blue-text-gradient",
    },
    {
    name: "python",
    color: "green-text-gradient",
    },
    {
    name: "streamlit",
    color: "pink-text-gradient",
    },
    ],
    image: tripguide,
    source_code_link: "https://github.com/rmharp/HackBRASA/",
    },
    ];
    export { services, technologies, experiences, projects};