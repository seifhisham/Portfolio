"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from "@/lib/hooks";

export default function about() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity:0, y:100 }}
      animate={{ opacity:1, y:0 }}
      transition={{ delay: 0.175 }}
      id='about'
      className='mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    >
      <SectionHeading>About Me</SectionHeading>
      <div className="mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg bg-gray-100 dark:bg-gray-900 p-6 shadow-lg"
        >
          <p className="mb-6">
            Hi, I'm <span className="font-medium text-primary">Seif Hisham</span>, 
            a dedicated software developer with a strong focus on{" "}
            <span className="font-medium text-primary">backend programming</span> and 
            a passion for creating efficient, scalable applications. While I specialize 
            in backend development, I also enjoy designing intuitive frontend interfaces 
            using tools like{" "}
            <span className="font-medium text-primary">Figma</span> and crafting sleek, 
            responsive layouts with{" "}
            <span className="font-medium text-primary">Tailwind CSS</span>. My commitment 
            to clean, maintainable code ensures that I deliver robust solutions, while 
            solving complex technical challenges is what drives my passion for development.
          </p>
          <p className="italic text-gray-700 dark:text-gray-300">
            When I'm not coding, I'm either exploring new tech trends, contributing to 
            open-source projects. I'm always eager to learn new technologies and collaborate 
            with fellow developers on exciting projects.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
