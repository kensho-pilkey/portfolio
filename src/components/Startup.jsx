import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Startup = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Venture</p>
        <h2 className={styles.sectionHeadText}>TCGenie AI</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        As the Founder and Lead Developer of TCGenie AI since December 2024, 
        I've built a comprehensive platform for TCG enthusiasts to track and 
        manage their card collections.
      </motion.p>

      <div className="mt-12 flex flex-wrap gap-8">
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 0.75)}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <h3 className="text-white font-bold text-[24px]">Full Stack Development</h3>
          <p className="mt-2 text-secondary text-[16px]">
            Built a React JS web application enabling users to view TCG cards,
            access price data, and calculate total card portfolio value.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.75)}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <h3 className="text-white font-bold text-[24px]">Backend Architecture</h3>
          <p className="mt-2 text-secondary text-[16px]">
            Developed robust backend using MySQL, SQLAlchemy, FastAPI, Python,
            JWT authentication, and deployed on Render hosting platform.
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("right", "spring", 0.3, 0.75)}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <h3 className="text-white font-bold text-[24px]">iOS Mobile App</h3>
          <p className="mt-2 text-secondary text-[16px]">
            Currently developing a Swift iOS app with computer vision capabilities
            using YoloV8n Segmentation model trained on synthetic dataset for TCG card identification.
          </p>
        </motion.div>
      </div>

      {/* Development Timeline Section */}
      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        className="w-full mt-16"
      >
        <h3 className="text-white font-bold text-[24px] mb-6">Development Timeline</h3>
        
        <div className="w-full bg-tertiary p-6 rounded-2xl overflow-x-auto">
          <div className="min-w-[768px]">
            {/* Timeline Line */}
            <div className="relative flex items-center justify-between">
              <div className="absolute left-0 right-0 h-1 bg-blue-500/30 rounded-full"></div>
              
              {/* Dec 2024 */}
              <div className="relative flex flex-col items-center z-10">
                <div className="h-10 w-10 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                  <span className="text-xl">✅</span>
                </div>
                <p className="font-medium text-gradient text-sm">Dec 2024</p>
                <p className="font-bold text-white text-sm mt-1">Project Inception</p>
              </div>
              
              {/* Jan 2025 */}
              <div className="relative flex flex-col items-center z-10">
                <div className="h-10 w-10 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                  <span className="text-xl">✅</span>
                </div>
                <p className="font-medium text-gradient text-sm">Jan 2025</p>
                <p className="font-bold text-white text-sm mt-1">Backend Development</p>
              </div>
              
              {/* Feb 2025 */}
              <div className="relative flex flex-col items-center z-10">
                <div className="h-10 w-10 bg-green-500/20 rounded-full flex items-center justify-center mb-2">
                  <span className="text-xl">✅</span>
                </div>
                <p className="font-medium text-gradient text-sm">Feb 2025</p>
                <p className="font-bold text-white text-sm mt-1">Web App Launch</p>
              </div>
              
              {/* Mar 2025 */}
              <div className="relative flex flex-col items-center z-10">
                <div className="h-10 w-10 bg-yellow-500/20 rounded-full flex items-center justify-center mb-2">
                  <span className="text-xl">⏳</span>
                </div>
                <p className="font-medium text-gradient text-sm">Mar 2025</p>
                <p className="font-bold text-white text-sm mt-1">Mobile App Frontend</p>
              </div>
              <div className="relative flex flex-col items-center z-10">
                <div className="h-10 w-10 bg-red-500/20 rounded-full flex items-center justify-center mb-2">
                  <span className="text-xl">🚧</span>
                </div>
                <p className="font-medium text-gradient text-sm">Mar 2025</p>
                <p className="font-bold text-white text-sm mt-1">Historic Price Data</p>
              </div>
              
              {/* Apr 2025 */}
              <div className="relative flex flex-col items-center z-10">
                <div className="h-10 w-10 bg-yellow-500/20 rounded-full flex items-center justify-center mb-2">
                  <span className="text-xl">⏳</span>
                </div>
                <p className="font-medium text-gradient text-sm">Apr 2025</p>
                <p className="font-bold text-white text-sm mt-1">CV Models</p>
              </div>
              
              {/* May 2025 */}
              <div className="relative flex flex-col items-center z-10">
                <div className="h-10 w-10 bg-red-500/20 rounded-full flex items-center justify-center mb-2">
                  <span className="text-xl">🚧</span>
                </div>
                <p className="font-medium text-gradient text-sm">May 2025</p>
                <p className="font-bold text-white text-sm mt-1">Card Hashing Algo</p>
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex justify-end gap-4 mt-8 text-sm text-secondary">
            <div className="flex items-center gap-1">
              <span className="text-green-400">✅</span> Completed
            </div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-400">⏳</span> In Progress
            </div>
            <div className="flex items-center gap-1">
              <span className="text-red-400">🚧</span> Roadblock
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "spring", 0.4, 0.75)}
        className="mt-8"
      >
        <a
          href="https://tcgenie.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[18px] text-gradient font-bold"
        >
          Learn more at <span className="text-blue-500">TCGenie.onrender.com</span> →
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Startup, "startup");