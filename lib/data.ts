import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import gestifyImg from "@/public/Gestify.png"
import Aqaryimg from "@/public/Aqary.jpg"
import Bankimg from "@/public/Bank.png"

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
    title: "GESTIFY",
    description:
      "I worked as a full-stack developer on this graduation project for 1 year. Users can control their laptops using hand gestures and face recognition to switch between accounts to change the saved settings.",
    tags: ["Python", "YOLO V5", "MYSQL", "PyQt5", "CSS"],
    imageUrl: gestifyImg,
  },
  {
    title: "AQARY",
    description:
      "This project was made in 2 weeks using flutter I worked on it as a full stack developer and added alot of feature into it.",
    tags: ["Flutter", "FireBase", "SQFLite"],
    imageUrl: Aqaryimg,
  },
  {
    title: "Bank",
    description:
      "This is a simple banking website that I made with my team in 3 months, I worked as a backend developer on this project using java spring boot framework.",
    tags: ["Java", "Spring-Boot", "Html", "CSS", "MicroService"],
    imageUrl: Bankimg,
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