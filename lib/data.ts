import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import gestifyImg from "@/public/Gestify.png"
import Aqaryimg from "@/public/Aqary.jpg"
import Adoore from "@/public/Adoore.png"
import FaxSign from "@/public/FaxSign.png"
import Via from "@/public/Via.png"

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
    title: "FREELANCE SOFTWARE DEVELOPER",
    location: "Remote",
    description:
      "Worked as a freelance developer building full-stack web applications for clients. Delivered projects using technologies like Next.js, Supabase, and other modern web tools, focusing on fast development, clean UI, and reliable backend solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - Present",
  },
  {
    title: "GRADUATED WITH A COMPUTER SCIENCE BACHELOR",
    location: "Misr International University",
    description:
      "I graduated with a 3.38 GPA as a software engineer and my graduation project was called Gestify which is made to control the laptop using only hand gestures and face detection for more features.",
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
    title: "GESTIFY - Laptop Control",
    description:
      "I worked as a full-stack developer on this graduation project for 1 year. Users can control their laptops using hand gestures and face recognition to switch between accounts to change the saved settings.",
    tags: ["Python", "YOLO V5", "MYSQL"],
    imageUrl: gestifyImg,
    liveUrl: "https://youtu.be/ySvdqMFAkds?si=lrfdqssig-1CQJFJ",
    githubUrl: "https://github.com/seifhisham/TouchPoint-Detection-Advancements-in-Projector-Camera-HCI",
  },
  {
    title: "ADOORE - Clothing E-Commerce App With Admin Dashboard",
    description:
      "This is a clothing e-commerce website that I built using Next.js, Supabase, and Resend. It includes a full admin dashboard for managing products, orders, and customers.",
    tags: ["Next.js", "Supabase", "Resend"],
    imageUrl: Adoore,
    liveUrl: "https://adoore.com.co",
    githubUrl: "https://github.com/seifhisham/e-store",
  },
  {
    title: "VIA - Admin Management System",
    description:
      "A web app that helps businesses manage their admin system and employees and customers and orders and products and more.",
    tags: ["Next.js", "Xata", "Stripe"],
    imageUrl: Via,
    liveUrl: "https://app.viacontractors.co.uk/",
    githubUrl: "https://github.com/seifhisham/via",
  },
  {
    title: "AQARY - E-Commerce App",
    description:
      "This project was made in 2 weeks using flutter I worked on it as a full stack developer and added alot of feature into it.",
    tags: ["Flutter", "FireBase", "SQFLite"],
    imageUrl: Aqaryimg,
    liveUrl: "https://www.figma.com/proto/N9we0KQ6iTbMV2JxEJuRr5/Aqary?node-id=0-1&t=HQ9YiMLLgphIj7vU-1",
    githubUrl: "https://github.com/ahmedemad2222/Aqary",
  },
  {
    title: "FaxSign - Digital Fax Management",
    description:
      "A web app that helps businesses manage fax documents online. Users can Upload and track faxes Add digital signatures Route documents to different departments View document history.",
    tags: ["Node.js", "Express", "SQLite"],
    imageUrl: FaxSign,
    liveUrl: "https://github.com/seifhisham/faxsign",
    githubUrl: "https://github.com/seifhisham/faxsign",
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
