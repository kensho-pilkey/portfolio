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
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hello! I'm a passionate undergraduate student studying Computer Science, Statistics, and Entrepreneurship, with a strong interest in Computer Vision and Game Development. 

        I'm eager to connect with like-minded professionals and explore opportunities where I can contribute my skills while continuing to learn and evolve in the field of technology and entrepreneurship.
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");