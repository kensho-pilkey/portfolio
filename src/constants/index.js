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
    catBreedApp,
    CDSEE,
    chainz,
    akari,
    akariVideo,
    covidVideo,
    brasaVideo,
    travelVideo,
    chainsVideo,
    cyberVideo,
    } from "../assets";
    export const navLinks = [
    {
    id: "home",
    title: "Home",
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
    mastery: 5,
    time: 4,
    },
    {
    name: "CSS 3",
    icon: css,
    mastery: 5,
    time: 4,
    },
    {
    name: "JavaScript",
    icon: javascript,
    mastery: 5,
    time: 4,
    },
    {
    name: "TypeScript",
    icon: typescript,
    mastery: 3,
    time: 1,
    },
    {
    name: "React JS",
    icon: reactjs,
    mastery: 4,
    time: 2,
    },
    {
    name: "Express JS",
    icon: redux,
    mastery: 3,
    time: 1,
    },
    {
    name: "Tailwind CSS",
    icon: tailwind,
    mastery: 5,
    time: 2,
    },
    {
    name: "Node JS",
    icon: nodejs,
    mastery: 4,
    time: 2,
    },
    {
    name: "Three JS",
    icon: threejs,
    mastery: 3,
    time: 1,
    },
    {
    name: "git",
    icon: git,
    mastery: 5,
    time: 6,
    },
    {
    name: "figma",
    icon: figma,
    mastery: 4,
    time: 2,
    },
    {
    name: "docker",
    icon: docker,
    mastery: 4,
    time: 2,
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
    preview_video: travelVideo,
    source_code_link: "https://github.com/kensho-pilkey/Vacation-Home-Finder",
    project_link: "https://kensho-pilkey.github.io/Vacation-Home-Finder/",
    date: "Jul 2023",
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
    preview_video: cyberVideo,
    source_code_link: "https://github.com/kensho-pilkey/CyberCrusade",
    project_link: "https://kenshop.itch.io/cyber-crusade/",
    date: "Mar 2024",
    },
    {
    name: "Chains of Chance",
    description:
    "Strategic one vs one card game that involves deception, chance, and a unique deck of cards. Entry to the Fall 2024 UNC Game Jam. (Waiting on placements)",
    tags: [
    {
    name: "C# & .NET",
    color: "blue-text-gradient",
    },
    {
    name: "Godot Engine",
    color: "green-text-gradient",
    },
    ],
    image: chainz,
    preview_video: chainsVideo,
    source_code_link: "https://github.com/kensho-pilkey/Chains-of-Chance",
    project_link: "https://kenshop.itch.io/chainsofchance",
    date: "Nov 2024",
    },
    {
        name: "Disease Trend Web App",
        description:
        "1st Place - 2024 Carolina Data Challenge Health Science track. This application provides insights into airborne disease trends across the United States from 2020 to 2023.",
        tags: [
        {
        name: "Python",
        color: "green-text-gradient",
        },
        {
        name: "Streamlit",
        color: "blue-text-gradient",
        },
        {
        name: "Numpy",
        color: "pink-text-gradient",
        },
        {
        name: "Plotly",
        color: "red-text-gradient",
        },
        ],
        image: CDSEE,
        preview_video: covidVideo,
        source_code_link: "https://github.com/kensho-pilkey/CDC",
        project_link: "https://cdc2024.streamlit.app/",
        date: "Oct 2024",
    },
    {
    name: "Business Dashboard",
    description:
    "Displays several KPI's via numbers and graphs. Entry to the BRASA-Hack 2024 Hackathon. (For LiveDemo Username: 9132021237731236867 Password: stoneco)",
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
    preview_video: brasaVideo,
    source_code_link: "https://github.com/rmharp/HackBRASADeploy",
    project_link: "https://hackbrasa.streamlit.app/",
    date: "Sep 2024",
    },
    {
        name: "Cat Breed Identifier",
        description:
        "A computer vision Python application that identifies cats and their breed within a photo or live video. Fine tuned ResNet50 on a dataset of 7,000 labeled cat breeds.",
        tags: [
        {
        name: "Numpy",
        color: "blue-text-gradient",
        },
        {
        name: "python",
        color: "green-text-gradient",
        },
        {
        name: "Pytorch",
        color: "pink-text-gradient",
        },
        {
        name: "OpenCV",
        color: "red-text-gradient",
        },
        ],
        image: catBreedApp,
        source_code_link: "https://github.com/kensho-pilkey/catBreedIdentifier",
        project_link: "https://github.com/kensho-pilkey/catBreedIdentifier",
        date: "Sep 2024",
        },
        {
        name: "Akari Light Up Game",
        description:
        "Recreation of the classic Akari Light up game using the Model View Controller Architecture. Includes 5 different levels with varying difficulty.",
        tags: [
        {
        name: "Maven",
        color: "blue-text-gradient",
        },
        {
        name: "JavaFX",
        color: "green-text-gradient",
        },
        {
        name: "Java",
        color: "pink-text-gradient",
        },
        ],
        image: akari,
        preview_video: akariVideo,
        source_code_link: "https://github.com/kensho-pilkey/Akari",
        project_link: "https://github.com/kensho-pilkey/Akari",
        date: "Nov 2023",
        },
    ];
    export { services, technologies, experiences, projects};