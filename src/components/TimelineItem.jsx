import React from 'react';

const TimelineItem = ({ experience }) => {
  return (
    <div className="flex items-start mb-12 relative">
      {/* Circle with logo */}
      <div className="absolute left-0">
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black border-4 border-white">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-4 h-4 object-contain"
          />
        </div>
      </div>

      {/* Job info */}
      <div className="ml-12">
        <h3 className="text-lg font-bold text-white">{experience.title}</h3>
        <p className="text-md font-semibold text-gray-400">
          {experience.company_name}
        </p>
        <p className="text-gray-300 text-sm">{experience.date}</p>
        <ul className="mt-2 list-disc ml-5 space-y-1">
          {experience.points.map((point, idx) => (
            <li key={idx} className="text-gray-300 text-sm">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineItem;
