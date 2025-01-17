import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaPhp } from "react-icons/fa6";
import { FaPython } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Ataklti Hanis",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/Ataklti-Hanis/portifolio",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "https://github.com/user/ecommerce-platform",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "https://github.com/user/task-management-tool",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
    image: projectImage4,
    githubLink: "https://github.com/user/weather-app",
  },
  {
    id: 5,
    name: "Blog Platform",
    description:
      "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
    image: projectImage5,
    githubLink: "https://github.com/user/blog-platform",
  },
  {
    id: 6,
    name: "Chat Application",
    description:
      "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
    image: projectImage6,
    githubLink: "https://github.com/user/chat-application",
  },
];

export const BIO = [
  "I am Ataklti Hanis a recent graduate from Mekelle University, where I earned a Bachelor’s degree in Computer Science in 2023. During my studies, I developed a strong foundation in software development, data structures, and algorithms. I am passionate about leveraging technology to solve real-world problems and have worked on several projects that showcase my skills in programming and web development.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "Experienced 💪",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "Beginner 👌",
  },
  {
    icon: <FaHtml5 className="text-4xl text-orange-600 lg:text-5xl" />,
    name: "HTML",
    experience: "Experienced 💪",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "Intermediate 👍",
  },
  {
    icon: <FaBootstrap className="text-4xl text-purple-600 lg:text-5xl" />,
    name: "Bootstrap",
    experience: "Experienced 💪",
  },
  {
    icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redis",
    experience: "Beginner 👌",
  },
  {
    icon: <FaCss3 className="text-4xl text-blue-500 lg:text-5xl" />, // Using CSS icon for Tailwind
    name: "Tailwind CSS",
    experience: "Experienced 💪",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "Experienced 💪",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "Experienced 💪",
  },
  {
    icon: <FaPhp className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "PHP",
    experience: "Experienced 💪",
  },
  {
    icon: <FaPython className="text-4xl text-blue-500 lg:text-5xl" />,
    name: "Python",
    experience: "Intermediate 👍",
  },
];

export const EXPERIENCES = [
  {
    title: "Junior Frontend Developer",
    company: "Self Developing",
    duration: "ongoing",
    description:
      "As a Junior Frontend Developer, I contributed to the development of web applications using technologies like React and TypeScript. I collaborated with cross-functional teams, including designers and senior developers, to assist in delivering user-friendly interfaces and improving overall user experiences.",
  },
  {
    title: "Junior Frontend Engineer",
    company: "Self-Develope",
    duration: "ongoing",
    description:
      "At Digital Creations, I focused on building interactive web interfaces using HTML, CSS, and JavaScript. I worked closely with UX/UI designers to implement design changes that enhanced user engagement. My responsibilities included optimizing website performance and ensuring cross-browser compatibility. ",
  },
  {
    title: "Junior Web Developer",
    company: "Mekelle University",
    duration: "Completed",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachlor of Science in Computer Science",
    institution: "Mekelle University",
    duration: "September 2017 - June 2023",
    description:
      "Specialized in Computer Science with a focus on Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications using advanced interactive techniques. Engaged in diverse projects involving frontend development, algorithms, and data structures.",
  },
  {
    degree: "Bachelor of Art in Managemnt",
    institution: "Genfel Collage",
    duration: "September 2019 - June 2022",
    description:
      "Specialized in project management, strategic planning, and resource allocation. Actively participated in business clubs and case competitions, where I led teams to develop innovative solutions for real-world problems. Completed a senior project focused on creating a comprehensive business plan for an e-commerce platform. Graduated with a high GPA.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://web.facebook.com/AtakltiH14/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/atakltihanis/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://twiter.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Ataklti-Hanis",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/ataklti-hanis-a85163347/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
