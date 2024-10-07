"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

export default function about() {
  return (
    <motion.section className='mb-28 max-2-[45rem] text-center leading-8 sm:mb-40'
    initial={{ opacity:0, y:100}}
    animate={{ opacity:1, y:0 }}
    transition={{ delay: 0.175}}
    >
        <SectionHeading>About Me</SectionHeading>
        <p>
        Hi, I’m <strong>Seif Hisham</strong>, a passionate software developer with a keen interest in building innovative and efficient web applications. I specialize in modern JavaScript frameworks like <strong>React</strong>, <strong>Next.js</strong>, and <strong>TypeScript</strong>, alongside tools like <strong>Tailwind CSS</strong> for sleek and responsive designs. With a focus on clean, maintainable code, I love crafting user-friendly interfaces and solving complex technical challenges.
        </p>
        <p>
            When I’m not coding, I’m either exploring new tech trends, contributing to open-source projects, or sharpening my problem-solving skills through competitive programming. I’m always eager to learn new technologies and collaborate with fellow developers on exciting projects.
        </p>
        <p>
            Feel free to connect with me on <a href="https://www.linkedin.com" target="_blank">LinkedIn</a> or check out some of my projects on <a href="https://github.com" target="_blank">GitHub</a>. Let’s create something amazing together!
        </p>
    </motion.section>
  )
}
