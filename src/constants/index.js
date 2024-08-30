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
    meta,
    starbucks,
    tesla,
    shopify,
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
    title: "React Native Developer",
    icon: mobile,
    },
    {
    title: "Backend Developer",
    icon: backend,
    },
    {
    title: "Content Creator",
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
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2023 - Aug 2023",
    points: [
    "Tasked with creating a series of websites, webapps, and games using HTML, CSS, and JavaScript.",
    "Technical skills mastered include: JavaScript functions, arrays, conditionals and loops, CSS styling, Bootstrap, DOM manipulation, and using APIs. ",
    "Professional skills mastered include: peer and mob programming, debugging, creating projects to customer specifications, utilizing JavaScript to create website interactions, commenting on code, and collaborating with a global team.",
    ],
    },
    {
    title: "Co-Founder & Portfolio Manager",
    company_name: "CryptoDrive Capital Management",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Aug 2022",
    points: [
    "Co-Founded and assisted in the management of a student-run cryptocurrency investment fund.",
    "In charge of testing various trading strategies, trading bots, and deep learning price prediction models using 3Commas’s paper trading feature.",
    "Outsourced the development of a LSTM Cryptocurrency price prediction model trained using data from 8 different coins on CoinMarketCap.",
    "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    },
    {
    title: "AI Integration Specialist",
    company_name: "Maxam Hotels",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2024 - Jun 2024",
    points: [
    "Developed a functional chatbot for an existing website, utilizing the OpenAI API with the GPT-4o model.",
    "The process involved defining the chatbot’s objectives, integrating it with the website, creating a comprehensive Q&A database, and fine-tuning the model to ensure accurate and helpful responses.",
    "This project enhanced user engagement and provided a seamless customer support experience.",
    ],
    },
    {
    title: "Frontend Developer",
    company_name: "Sharry Tech",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Aug 2024",
    points: [
    "In charge of developing a web application to help clients design & preview their own app.",
    "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    "Utilized Vue.js, Node.js and Bootstrap CSS to create a dynamic, user-friendly interface that enabled real-time previews and modifications.",
    ],
    },
    ];
    const testimonials = [
    {
    testimonial:
    "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
    testimonial:
    "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
    testimonial:
    "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    ];
    const projects = [
    {
    name: "Car Rent",
    description:
    "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
    {
    name: "react",
    color: "blue-text-gradient",
    },
    {
    name: "mongodb",
    color: "green-text-gradient",
    },
    {
    name: "tailwind",
    color: "pink-text-gradient",
    },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
    },
    {
    name: "Job IT",
    description:
    "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
    {
    name: "react",
    color: "blue-text-gradient",
    },
    {
    name: "restapi",
    color: "green-text-gradient",
    },
    {
    name: "scss",
    color: "pink-text-gradient",
    },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
    },
    {
    name: "Trip Guide",
    description:
    "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
    {
    name: "nextjs",
    color: "blue-text-gradient",
    },
    {
    name: "supabase",
    color: "green-text-gradient",
    },
    {
    name: "css",
    color: "pink-text-gradient",
    },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    },
    ];
    export { services, technologies, experiences, testimonials, projects};