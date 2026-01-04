"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  liveUrl,
  githubUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-white dark:bg-gray-800/40 max-w-[42rem] 
        border border-black/5 dark:border-white/5 rounded-lg overflow-hidden 
        sm:pr-8 relative
        hover:bg-gray-100 dark:hover:bg-gray-700/50 
        transition-colors duration-300
        sm:group-even:pl-8">
        {/* Mobile Image - shown above content on mobile */}
        <div className="sm:hidden w-full px-5 pt-5">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-300">
            {description}
          </p>
          {(liveUrl || githubUrl) && (
            <div className="mt-4 mb-2 sm:mb-2 flex flex-wrap gap-3">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  Demo
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 dark:bg-gray-700 dark:hover:bg-gray-800"
                >
                  GitHub
                </a>
              )}
            </div>
          )}
          <ul className="flex flex-wrap mt-2 gap-2">
            {tags.map((tag, index) => (
              <li
                className="bg-gray-900 dark:bg-gray-700 px-3 py-1 text-[0.7rem] 
                  uppercase tracking-wider text-white dark:text-gray-200 
                  rounded-full shadow-sm hover:shadow-md transition-shadow
                  duration-300"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Image - absolute positioned for larger screens */}
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="hidden sm:block absolute top-8 -right-40 w-[28.25rem] 
            rounded-t-lg shadow-2xl
            transition-all duration-300
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
            group-hover:shadow-3xl

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}