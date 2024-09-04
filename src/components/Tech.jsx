import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn } from "../utils/motion";

const TechCard = ({ index, name, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="w-full sm:w-[250px] p-[1px] rounded-[20px] shadow-lg hover:shadow-xl transition-shadow duration-300"
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
  <section className="py-16">
    <motion.h2
      variants={fadeIn("", "", 0.1, 1)}
      className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center mb-12"
    >
      Technologies
    </motion.h2>
    <div className="flex flex-wrap justify-center gap-10">
      {technologies.map((tech, index) => (
        <TechCard key={tech.name} index={index} {...tech} />
      ))}
    </div>
  </section>
);

export default SectionWrapper(Tech, "");