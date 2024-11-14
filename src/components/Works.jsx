import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  preview_video,
  source_code_link,
  project_link,
  date,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        className="cursor-pointer"
        onClick={() => window.open(project_link, "_blank")}
      >
        <div
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
            {/* Static Image */}
            <img
              src={image}
              alt="project_image"
              className={`w-full h-full object-cover rounded-2xl transition-opacity duration-300 ease-in-out ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* Video Preview */}
            <video
              src={preview_video}
              autoPlay
              muted
              loop
              playsInline
              className={`absolute top-0 left-0 w-full h-full rounded-2xl transition-opacity duration-300 ease-in-out ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              style={{
                zIndex: 1,
                pointerEvents: "none",
                objectFit: "fill", // Stretch the video to fill the container
              }}
            />

            {/* GitHub Icon */}
            <div
              className="absolute inset-0 flex justify-end m-3"
              style={{ zIndex: 2 }} // Ensure the icon is above the video
            >
              <div
                onClick={(e) => {
                  e.stopPropagation(); // Prevents the project link from opening
                  window.open(source_code_link, "_blank");
                }}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="text-gray-400 text-[12px]">{date}</p>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                {tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Personal</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These projects showcase my skills and experience through real-world
          examples of my work. They reflect my ability to solve complex problems,
          work with different technologies, and manage projects effectively.
          **Click the project's card for live demos and the GitHub icon to link to
          code repositories.**
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
