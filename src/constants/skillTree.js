export const skillTree = [
    {
      name: "Programming Languages",
      children: [
        {
          name: "Java",
          details: "Used in backend systems and object-oriented programming.",
        },
        {
          name: "Python",
          details: "ML, data analysis",
          children: [
            { name: "PyTorch" },
            { name: "NumPy" },
            { name: "Matplotlib" },
          ],
        },
        {
          name: "JavaScript & TypeScript",
          children: [
            {
              name: "Frontend",
              children: [{ name: "React" }, { name: "Vue" }],
            },
            {
              name: "Backend",
              children: [{ name: "Node.js" }],
            },
          ],
        },
        {
          name: "GDScript",
          details: "Experience with Godot for game development.",
        },
        {
          name: "C#",
          details: ".NET and game development skills, possibly in relation to Godot.",
        },
      ],
    },
    {
      name: "Frontend Tools",
      children: [
        {
          name: "React",
          details: "Specific projects and proficiency.",
        },
        {
          name: "Vue",
          details: "Specific applications or projects you worked on.",
        },
        {
          name: "Angular",
          details: "Highlight any particular projects or experience level.",
        },
        {
          name: "CSS Frameworks",
          children: [{ name: "Tailwind CSS" }, { name: "Bootstrap" }],
        },
        {
          name: "Three.js",
          details: "Interactive projects or 3D models.",
        },
        {
          name: "HTML & CSS",
          details: "Core web technologies.",
        },
        {
          name: "Testing Tools",
          children: [{ name: "Jest", details: "Specific testing experience." }],
        },
      ],
    },
    {
      name: "Backend Tools",
      children: [
        {
          name: "Node.js",
          details: "JavaScript-based backend runtime.",
          children: [
            {
              name: "Express",
              details: "REST API development experience.",
            },
          ],
        },
        {
          name: "REST APIs",
          children: [
            {
              name: "Flask",
              details: "Python framework for API development.",
            },
            {
              name: "FastAPI",
              details: "High-performance API framework in Python.",
            },
          ],
        },
        {
          name: "Databases",
          children: [
            {
              name: "SQLAlchemy",
              details: "ORM usage.",
            },
            {
              name: "Relational Databases",
              children: [{ name: "PostgreSQL" }, { name: "MySQL" }],
            },
          ],
        },
        {
          name: "API Testing Tools",
          children: [{ name: "Postman" }, { name: "Axios" }],
        },
      ],
    },
    {
      name: "Other Skills",
      children: [
        {
          name: "Data Science and ML Tools",
          details: "Experience in machine learning.",
          children: [{ name: "PyTorch" }, { name: "NumPy" }, { name: "Matplotlib" }],
        },
        {
          name: "Version Control",
          details: "Collaboration experience using Git.",
          children: [{ name: "Git" }],
        },
        {
          name: "Testing Tools",
          details: "Unit testing experience.",
          children: [{ name: "JUnit" }],
        },
        {
          name: "Prototyping and Design",
          details: "Experience prototyping UI.",
          children: [{ name: "Figma" }],
        },
        {
          name: "Containers and Deployment",
          details: "Experience deploying applications.",
          children: [{ name: "Docker" }],
        },
        {
          name: "OOP",
          details: "Understanding of design principles linked to Java and C# experience.",
          children: [{ name: "Java" }, { name: "C#" }],
        },
        {
          name: "Game Development",
          details: "Godot experience and tools like GDScript and C#.",
          children: [{ name: "Godot" }, { name: "GDScript" }, { name: "C#" }],
        },
      ],
    },
  ];
  