import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tech} from "./";

const About = () => {
  return (
    <>
      <h2 className={styles.sectionHeadText}>About Me</h2>

      <div
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] mb-12'
      >
        Hello! I'm a passionate undergraduate student studying Computer Science and Entrepreneurship, with a strong interest in Computer Vision and Game Development.

        In short, I'm fascinated by cutting-edge technology and love exploring its possibilities. I'm currently seeking a full-time software engineering role where I can apply my skills and learn by solving complex problems.


      </div>
      <Tech />
    </>
  );
};

export default SectionWrapper(About, "about");