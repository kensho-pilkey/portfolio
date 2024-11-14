import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import Timeline from './Timeline';
import { SectionWrapper } from '../hoc';

const Experience = () => {
  return (
    <>
      <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>

      <div className="mt-20">
        <Timeline />
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'experience');
