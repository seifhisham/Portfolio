import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "GRADUATED WITH A COMPUTER SCIENCE BACHELOR",
    location: "Misr International University",
    description:
      "I graduated with a 3.38 GPA as a software engnieer and my graduation project was called Gestify which is made to control the laptop using only hand gestures and face detection for more features.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2024",
  },
  {
    title: "TECHNICAL SUPPORT INTERN",
    location: "At Optima Professional services",
    description:
      "As an intern, I learned about the network and how it works and about the security and also learned how to start some appliances to secure and manage a specific network.",
    icon: React.createElement(CgWorkAlt),
    date: "9-July-2023 - 20-July-2023",
  },
  {
    title: "NETWORKS INTERN",
    location: "At Egas",
    description:
      "As an intern, I learned about how the company network works and how they secure it using their appliances and servers and made a presentation demonstrating what I learned from them.",
    icon: React.createElement(CgWorkAlt),
    date: "9-July-2023 - 20-July-2023",
  },
  {
    title: "ORACLE SQL DEVELOPER INTERN",
    location: "At Modern Gas",
    description:
      "As an Intern, I learned how to use Oracle SQL how to make an app using it, and how to manage the database.",
    icon: React.createElement(CgWorkAlt),
    date: "8-Aug-2022 - 22-Aug-2022",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "C++",
  "C#",
  "Java",
  "Spring Boot",
  "Python",
  "HTML",
  "CSS",
  "PHP",
  "Flutter",
  "ASP.NET",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Larvel",
  "Tailwind",
  "MySQL",
  "Framer Motion",
] as const;