import React, { useState, useEffect, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion, useScroll } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
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
    </VerticalTimelineElement>
  );
};

const ScrollingDot = ({ timelineRef }) => {
  const { scrollYProgress } = useScroll(
    {
      target: timelineRef,
      offset: ["start end", "end start"]
    }
  );
  const [yPosition, setYPosition] = useState(0);
  const dotRef = useRef(null);

  useEffect(() => {
    const updatePosition = () => {
      if (timelineRef.current && dotRef.current) {
        const timelineRect = timelineRef.current.getBoundingClientRect();
        const scrollProgress = scrollYProgress.get();
        
        const newY = scrollProgress * (timelineRect.height - dotRef.current.offsetHeight);
        
        setYPosition(newY);
      }
    };

    const unsubscribe = scrollYProgress.onChange(updatePosition);
    window.addEventListener('resize', updatePosition);
    
    return () => {
      unsubscribe();
      window.removeEventListener('resize', updatePosition);
    };
  }, [scrollYProgress, timelineRef]);

  return (
    <motion.div
      ref={dotRef}
      className="absolute left-1/2 w-6 h-6 bg-blue-500 rounded-full transform -translate-x-1/2"
      style={{
        top: yPosition,
        zIndex: 10,
      }}
    />
  );
};

const Experience = () => {
  const timelineRef = useRef(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col relative' ref={timelineRef}>
        <ScrollingDot timelineRef={timelineRef} />
        <VerticalTimeline>
          {experiences.map((experience, index) => (
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