import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import project1 from "../assets/project/1.project.jpg";
import project2 from "../assets/project/2.project.jpg";
import project3 from "../assets/project/3.project.jpg";

const navLinks = [
  { id: 1, name: "about", path: "about" },
  { id: 2, name: "projects", path: "projects" },
  { id: 3, name: "skills", path: "skills" },
  { id: 4, name: "experience", path: "experience" },
  { id: 5, name: "education", path: "education" },
  { id: 6, name: "contact", path: "contact" },
];

const myself = {
  name: "Ashraful Rahman Sakil",
  title: "Welcome to my portfolio website",
  subTitle: "I am a Frontend Based Full Stack Developer",
  bio: "You are welcome to understand, know, and be aware of my skills clearly.",
};

const about = {
  myself: [
    {
      id: 1,
      selfResume:
        "https://drive.google.com/file/d/1IrIGofZ5Q5u9Vv_uS9JdXmrp-h-tTyQP/view?usp=sharing",
      details:
        "I’m a front-end based passionate about crafting pixel-perfect interfaces and smooth interactions. I love turning design ideas into fast, accessible, and delightful products. With a strong foundation in HTML, CSS, and JavaScript, I specialize in ReactJS and NextJS to build dynamic web applications with modern.",
    },
  ],
};

const educationData = [
  {
    id: 1,
    year: "2023 - present",
    degree: "Bachelor of Computer Science & Enginnering",
    institution: "Southeast Uinversity",
    description: "study present",
  },
  {
    id: 2,
    year: "2022",
    degree: "Bachalor of Social Science",
    institution:
      "National university of Abdul Mannan Bhuiyan University College",
    description: "Graduated with good result",
  },
  {
    id: 3,
    year: "2021",
    degree: "Diploma in Computer Science & technology",
    institution: "Narsingdi Polytechnic inistitute",
    description: "Graduated with CGPA 3.42 out of 4.00",
  },
  {
    id: 4,
    year: "2018",
    degree: "Higher Secondary School Certificate",
    institution: "Hazi Abed ali degree college",
    description: "Graduated with good result",
  },
  {
    id: 5,
    year: "2016",
    degree: "Secondary School Certificate",
    institution: "Brahmondi K.K.M. Govt High School",
    description: "Graduated with good result",
  },
];

const experience = [
  {
    id: 1,
    year: "2025",
    degree: "Reactive axcelerator course (reactjs-nextjs)",
    institution: "learn with sumit platform",
    description:
      "i hvae compleated this awesome course. it's course of frontend enginering in-deepth level course & you full fill this course in time you get a build good knowledge ",
  },
  {
    id: 2,
    year: "2022",
    degree: "web design & development",
    institution: "enginnering project development",
    description:
      "diploma internship with handsome projects making, process, guidelines & working in software industry",
  },
  {
    id: 3,
    year: "2019",
    degree: "360 hours computer basic skill",
    institution: "Dalil uddin computers",
    description:
      "knowledge accquird this training of about in computer office suit.",
  },
];

const socialMediaLinks = [
  {
    id: 1,
    platform: "Facebook",
    icon: FaFacebook,
    url: "https://facebook.com/ashrafulrahmansakil/",
  },
  {
    id: 2,
    platform: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com/in/ashrafulrahmansakil",
  },
  {
    id: 3,
    platform: "GitHub",
    icon: FaGithub,
    url: "https://github.com/ashrafulrahmansakil",
  },
];

const skillsList = {
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
    id: 5,
    name: "testing",
    tskills: ["Jest", "React Testing Library"],
  },

  tools: {
    id: 6,
    name: "tools",
    tskills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "Jira", "CI/CD"],
  },

  game: { id: 7, name: "game", mskills: ["Unity", "Unreal Engine"] },
  design: { id: 8, name: "design", dskills: ["Figma", "Adobe XD"] },
  content: { id: 9, name: "content", cskills: ["Markdown", "MDX"] },
  deployment: { id: 10, name: "deployment", dskills: ["Vercel", "Netlify"] },
};

const ProjectsList = [
  {
    id: 1,
    title: "Project Internship",
    description:
      "this project is about creating a responsive web site using basic html css.",
    thumbnail: project1,
    tech: ["html", "css"],
    link: "https://project-int.netlify.app/",
    github: "https://github.com/ashrafulrahmansakil/project-int",
  },
  {
    id: 2,
    title: "responsive web designing",
    description:
      "basically this project is for managing exam cards of students. teachers can create exam cards for their students and students can download their exam cards from this system.",
    thumbnail: project3,
    tech: ["html", "css"],
    link: "https://ashrafulrahmansakil.github.io/progress/",
    github: "https://github.com/ashrafulrahmansakil/progress",
  },
  {
    id: 3,
    title: "exam card management system",
    description:
      "this project basicially making by exam seat card management system. if you are a teacher you can create exam seat card for your students & students can download their exam seat card from this system.",
    thumbnail: project2,
    tech: ["reactjs", "bootstrap"],
    link: "https://scumis.netlify.app/",
    github: "https://github.com/ashrafulrahmansakil/school_mangement",
  },
  // {
  //   id: 4,
  //   title: "exam card management system",
  //   description:
  //     "this project basicially making by exam seat card management system. if you are a teacher you can create exam seat card for your students & students can download their exam seat card from this system.",
  //   thumbnail: project2,
  //   tech: ["reactjs", "bootstrap"],
  //   link: "https://scumis.netlify.app/",
  //   github: "https://github.com/ashrafulrahmansakil/school_mangement",
  // },
  // {
  //   id: 5,
  //   title: "exam card management system",
  //   description:
  //     "this project basicially making by exam seat card management system. if you are a teacher you can create exam seat card for your students & students can download their exam seat card from this system.",
  //   thumbnail: project2,
  //   tech: ["reactjs", "bootstrap"],
  //   link: "https://scumis.netlify.app/",
  //   github: "https://github.com/ashrafulrahmansakil/school_mangement",
  // },
  // {
  //   id: 6,
  //   title: "exam card management system",
  //   description:
  //     "this project basicially making by exam seat card management system. if you are a teacher you can create exam seat card for your students & students can download their exam seat card from this system.",
  //   thumbnail: project2,
  //   tech: ["reactjs", "bootstrap"],
  //   link: "https://scumis.netlify.app/",
  //   github: "https://github.com/ashrafulrahmansakil/school_mangement",
  // },
];

export {
  educationData,
  experience,
  navLinks,
  about,
  socialMediaLinks,
  myself,
  ProjectsList,
  skillsList,
};
