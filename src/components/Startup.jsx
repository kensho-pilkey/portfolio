import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Startup = () => {
  const timelineItems = [
    {
      date: "Dec 2024",
      title: "Web Frontend",
      description: "Built React UI with responsive design for desktop and mobile. Implemented card viewing and collection features.",
      status: "completed",
      emoji: "✅"
    },
    {
      date: "Jan 2025",
      title: "FastApi Backend",
      description: "Implemented database schema, API endpoints, and JWT authentication system with role-based access control.",
      status: "completed",
      emoji: "✅"
    },
    {
      date: "Feb 2025",
      title: "Web App Launch",
      description: "Deployed MVP with core features and initial database of 10,000+ pokemon cards across multiple TCG series.",
      status: "completed",
      emoji: "✅"
    },
    {
      date: "Mar 2025",
      title: "Mobile App Frontend",
      description: "Developing Swift UI components and collection management screens with real-time synchronization to web platform.",
      status: "in-progress",
      emoji: "⏳"
    },
    {
      date: "Apr 2025",
      title: "Train CV Model",
      description: "Training YoloV8n seg model on synthetic dataset of 20k+ composite card images to segment pokemon cards at the pixel level.",
      status: "completed",
      emoji: "✅"
    },
    {
        date: "Apr 2025",
        title: "Mobile Card Scan",
        description: "Export tuned Yolov8 model to CoreML and incorporate in Swift app for single and multiscan functionality.",
        status: "in-progress",
        emoji: "⏳"
      },
    {
      date: "Apr 2025",
      title: "Card Hashing Algo",
      description: "Optimizing perceptual hash generation for high volume image comparison to detect counterfeits and card condition.",
      status: "roadblock",
      emoji: "🚧"
    },
  ];

  // State to track which item is selected (default to first item)
  const [selectedIndex, setSelectedIndex] = useState(0);

  const statusColors = {
    completed: "bg-green-500/20",
    "in-progress": "bg-yellow-500/20",
    roadblock: "bg-red-500/20"
  };

  const statusBorderColors = {
    completed: "border-green-500",
    "in-progress": "border-yellow-500",
    roadblock: "border-red-500"
  };

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
        I'm actively developing a platform for TCG enthusiasts to track, 
        manage, and grade their card collections using the power of computer vision.
      </motion.p>

      <div className="mt-12 flex flex-wrap gap-8">
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 0.75)}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <h3 className="text-white font-bold text-[24px]">Web Application</h3>
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
              {/* Horizontal line */}
              <div className="absolute left-0 right-0 h-1 bg-blue-500/30 rounded-full"></div>
              
              {/* Timeline Items */}
              {timelineItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative flex flex-col items-center z-10"
                >
                  {/* Circle with emoji */}
                  <button
                    onClick={() => setSelectedIndex(index)}
                    className={`
                      h-12 w-12 ${statusColors[item.status]} rounded-full 
                      flex items-center justify-center mb-2 cursor-pointer
                      transition-all duration-300
                      ${selectedIndex === index ? `ring-2 ring-offset-2 ring-offset-gray-900 ${statusBorderColors[item.status]}` : ''}
                    `}
                    aria-label={`View details for ${item.title}`}
                  >
                    <span className="text-xl">{item.emoji}</span>
                  </button>
                  
                  {/* Date */}
                  <p className={`font-medium text-sm ${selectedIndex === index ? 'text-gradient font-bold' : 'text-secondary'}`}>
                    {item.date}
                  </p>
                  
                  {/* Title - UPDATED: using flex layout with min-width and no ellipsis */}
                  <p className={`text-sm mt-1 text-center min-w-[120px] whitespace-nowrap overflow-hidden ${selectedIndex === index ? 'text-white font-bold' : 'text-secondary'}`}>
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Info Box for Selected Item */}
            <div className="mt-12 bg-gray-800 border border-blue-500/30 rounded-lg p-4 shadow-lg">
              <div className="flex items-center mb-2">
                <span className="text-xl mr-2">{timelineItems[selectedIndex].emoji}</span>
                <h4 className="text-white font-bold">{timelineItems[selectedIndex].title} - {timelineItems[selectedIndex].date}</h4>
              </div>
              <p className="text-secondary">
                {timelineItems[selectedIndex].description}
              </p>
              <div className="mt-2 text-xs text-blue-400">
                Status: {selectedIndex !== null && (
                  timelineItems[selectedIndex].status === "completed" ? "Completed" :
                  timelineItems[selectedIndex].status === "in-progress" ? "In Progress" :
                  "Facing Challenges"
                )}
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex justify-end gap-4 mt-4 text-sm text-secondary">
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