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
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
      onMouseEnter={() => {
        document.body.style.cursor = "pointer";
      }}
      onMouseLeave={() => {
        document.body.style.cursor = "default";
      }}
      onTimelineElementClick={() => {
        console.log("Card clicked!");
        setIsExpanded(!isExpanded);
      }}
      className="hover:scale-105 transition-transform duration-300"
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {isExpanded && (
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
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
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("desc");

  const filteredExperiences = experiences.filter(exp => 
    filter === "all" || exp.category === filter
  );

  const sortedExperiences = [...filteredExperiences].sort((a, b) => {
    const dateA = new Date(a.date.split(" - ")[0]);
    const dateB = new Date(b.date.split(" - ")[0]);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {sortedExperiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");