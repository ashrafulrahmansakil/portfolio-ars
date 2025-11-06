import facebook from "../assets/icon/facebook-brands-solid-full.svg";
import linkedin from "../assets/icon/linkedin-brands-solid.svg";
import github from "../assets/icon/github-brands-solid.svg";
//
import project1 from "../assets/project/1.project.jpg";
import project2 from "../assets/project/Scumis.jpg";

const myself = {
  name: "Ashraful Rahman Sakil",
  title: "Welcome to my portfolio website",
  subTitle: "I am a Frontend Based Full Stack Developer",
  bio: "You are welcome to understand, know, and be aware of my skills clearly.",
};

const about = {
  users: [
    { id: 1, bio: "I live in Narsingdi Sadar." },

    {
      id: 2,
      bio: "I am student of Southeast University study at B.Sc in Computer Science & Engineering.",
    },
    {
      id: 3,
      bio: "I have completed my diploma graduation complete from Narsingdi Polytechnic Institute in Computer Science & Technology.",
    },
    
  ],
};

const socialMediaLinks = [
  {
    id: 1,
    platform: "Facebook",
    icon: facebook,
    url: "https://facebook.com/ashrafulrahmansakil/",
  },
  {
    id: 2,
    platform: "LinkedIn",
    icon: linkedin,
    url: "https://linkedin.com/in/ashrafulrahmansakil",
  },
  {
    id: 3,
    platform: "GitHub",
    icon: github,
    url: "https://github.com/ashrafulrahmansakil",
  },
];

const skills = {
  frontend: {
    id: 1,
    name: "frontend",
    fskills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Reactjs",
      "Tailwind CSS",
      "Bootstrap",
      "TypeScript",
      "Nextjs",
      "Redux",
      "Sass",
    ],
  },

  backend: {
    id: 2,
    name: "backend",
    bskills: ["Node.js", "Express", "MongoDB", "GraphQL", "Firebase"],
  },
  database: {
    id: 3,
    name: "database",
    dskills: ["MongoDB", "MySQL", "PostgreSQL", "Prisma"],
  },
  mobile: {
    id: 4,
    name: "mobile",
    mskills: ["React Native", "Flutter"],
  },

  testing: {
    id: 6,
    name: "testing",
    tskills: ["Jest", "React Testing Library"],
  },

  tools: {
    id: 8,
    name: "tools",
    tskills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "Jira", "CI/CD"],
  },

  game: { id: 4, name: "game", mskills: ["Unity", "Unreal Engine"] },
  design: { id: 5, name: "design", dskills: ["Figma", "Adobe XD"] },
  content: { id: 7, name: "content", cskills: ["Markdown", "MDX"] },
  deployment: { id: 9, name: "deployment", dskills: ["Vercel", "Netlify"] },
};

const projects = [
  {
    id: 1,
    title: "Project Internship",
    description:
      "this project is about creating a responsive web site using basic html css.",
    thumbnail: project1,
    link: "https://project-int.netlify.app/",
    github: "https://github.com/ashrafulrahmansakil/project-int",
  },
  {
    id: 2,
    title: "exam card management system",
    description:
      "basically this project is for managing exam cards of students. teachers can create exam cards for their students and students can download their exam cards from this system.",
    thumbnail: project2,
    link: "https://scumis.netlify.app/",
    github: "https://github.com/ashrafulrahmansakil/school_mangement",
  },
  {
    id: 3,
    title: "exam card management system",
    description:
      "basically this project is for managing exam cards of students. teachers can create exam cards for their students and students can download their exam cards from this system.",
    thumbnail: project2,
    link: "https://scumis.netlify.app/",
    github: "https://github.com/ashrafulrahmansakil/school_mangement",
  },
];

export { about, socialMediaLinks, myself, projects, skills };
