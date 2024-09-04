import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

const TechCard = ({ index, name, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="w-full sm:w-[250px] rounded-[20px] shadow-lg transition-all duration-300 hover:shadow-[0_0_100px_5px] hover:shadow-blue-400/50"
  >
    <div className="bg-tertiary rounded-[20px] p-6 h-full flex flex-col justify-center items-center">
      <img
        src={icon}
        alt={`${name} icon`}
        className="w-16 h-16 object-contain mb-4"
      />
      <h3 className="text-white text-xl font-bold text-center">{name}</h3>
    </div>
  </motion.div>
);

const Tech = () => (
    <div className="flex flex-wrap justify-center gap-11">
      {technologies.map((tech, index) => (
        <TechCard key={tech.name} index={index} {...tech} />
      ))}
    </div>
);

export default SectionWrapper(Tech, "");