// Tech.js

import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  // Group technologies by category
  const categories = {};

  technologies.forEach((tech) => {
    const category = tech.category || "Other";
    if (!categories[category]) {
      categories[category] = [];
    }
    categories[category].push(tech);
  });

  // Define the order and arrangement of the categories
  const orderedCategories = [
    ["Programming Languages", "Other"],
    ["Frontend Tools", "Backend Tools"],
  ];

  return (
    <>
      <span className={styles.sectionSubText}>Proficient</span>
      <h3 className={styles.sectionHeadText}>Technologies</h3>
      <div className="flex flex-col gap-10 mt-12">
        {orderedCategories.map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col md:flex-row gap-10">
            {row.map((categoryName) => (
              <div
                key={categoryName}
                className="flex-1 bg-black-100 p-8 rounded-2xl"
              >
                <h3 className="text-white text-2xl font-bold mb-6">
                  {categoryName}
                </h3>
                <div className="grid grid-cols-5 gap-8">
                  {categories[categoryName] &&
                    categories[categoryName].map((technology) => (
                      <div
                        className="flex flex-col items-center"
                        key={technology.name}
                      >
                        <img
                          src={technology.icon}
                          alt={technology.name}
                          className="w-20 h-20 object-contain"
                        />
                        <p className="text-white mt-2 text-center">
                          {technology.name}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
  
};

export default SectionWrapper(Tech, "");
