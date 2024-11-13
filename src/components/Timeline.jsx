import React from 'react';
import TimelineItem from './TimelineItem';
import { experiences } from '../constants';

const Timeline = () => {
  return (
    <div className="relative ml-6">
      {/* Vertical line */}
      <div className="absolute left-0 top-0 w-px h-full bg-white"></div>
      
      {/* Timeline items */}
      {experiences.map((experience, index) => (
        <TimelineItem
          key={index}
          experience={experience}
        />
      ))}
    </div>
  );
};

export default Timeline;
