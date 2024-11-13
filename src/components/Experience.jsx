import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        boxShadow: "0 3px 0 #2196f3",
        transition: "all 0.3s ease-in-out",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #1d1836" }}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
      onTimelineElementClick={() => {
        console.log("Card clicked!");
        setIsExpanded(!isExpanded);
      }}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
        <p className="text-secondary text-[14px]">{experience.date}</p>
      </div>

      {isExpanded && (
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      )}

      <div className="flex justify-center mt-4">
        {isExpanded ? (
          <ChevronUp className="text-white" />
        ) : (
          <ChevronDown className="text-white" />
        )}
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  // Reintroduce sortOrder state
  const [sortOrder] = useState("desc"); // Fixed to "desc" for descending order

  // Sort experiences from newest to oldest
  const sortedExperiences = [...experiences].sort((a, b) => {
    const getDate = (dateStr) => new Date(dateStr.split(" - ")[0]);
    const dateA = getDate(a.date);
    const dateB = getDate(b.date);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline layout="1-column-left">
          {sortedExperiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
