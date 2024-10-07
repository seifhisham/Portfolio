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
        Hi, I’m <strong>Seif Hisham</strong>, a dedicated software developer with a strong focus on backend programming and a passion for creating efficient, scalable applications. While I specialize in backend development, I also enjoy designing intuitive frontend interfaces using tools like Figma and crafting sleek, responsive layouts with Tailwind CSS. My commitment to clean, maintainable code ensures that I deliver robust solutions, while solving complex technical challenges is what drives my passion for development.
        </p>
        <p>
            When I’m not coding, I’m either exploring new tech trends, contributing to open-source projects, or sharpening my problem-solving skills through competitive programming. I’m always eager to learn new technologies and collaborate with fellow developers on exciting projects.
        </p>
    </motion.section>
  )
}
