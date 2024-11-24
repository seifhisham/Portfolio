"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3); 
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor={theme === "light" ? "#d1d5db" : "#374151"}>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === "light" ? "#f9fafb" : "#1f2937",
                boxShadow: theme === "light" ? "0 4px 10px rgba(0, 0, 0, 0.1)" : "0 4px 10px rgba(0, 0, 0, 0.3)",
                borderRadius: "8px",
                textAlign: "left",
                padding: "1.5rem 2rem",
                transition: "transform 0.3s ease",
              }}
              contentArrowStyle={{
                borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "#374151",
                color: theme === "light" ? "#4b5563" : "#f3f4f6",
                fontSize: "1.5rem",
                border: theme === "light" ? "2px solid #9ca3af" : "2px solid #6b7280",
                transition: "background 0.3s ease",
              }}
            >
              <h3 className="font-semibold capitalize text-lg text-gray-900 dark:text-gray-100">{item.title}</h3>
              <p className="font-medium text-gray-700 dark:text-gray-300">{item.location}</p>
              <p className="!text-gray-700 dark:!text-gray-300 mt-2 leading-relaxed">{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
