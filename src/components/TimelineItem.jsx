import React from 'react';

const TimelineItem = ({ experience, isLast }) => {
  return (
    <div className={`flex items-start relative timeline-item ${!isLast ? 'mb-8' : ''}`}>
      {/* Circle with logo */}
      <div className="absolute left-8 top-0 transform -translate-x-1/2 circle">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-white">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-6 h-6 object-contain"
          />
        </div>
      </div>

      {/* Job info */}
      <div className="ml-20">
        <div className="bg-tertiary rounded-2xl p-6">
          <h3 className="text-3xl font-bold text-white">{experience.title}</h3>
          <p className="text-xl font-semibold text-gray-400">
            {experience.company_name}
          </p>
          <p className="text-gray-300 text-lg">{experience.date}</p>
          <ul className="mt-4 list-disc ml-5 space-y-2">
            {experience.points.map((point, idx) => (
              <li key={idx} className="text-gray-300 text-base">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
