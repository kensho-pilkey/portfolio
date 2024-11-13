import React, { useRef, useEffect, useState } from 'react';
import TimelineItem from './TimelineItem';
import { experiences } from '../constants';

const Timeline = () => {
  const timelineRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (timelineRef.current) {
        const lastItem = timelineRef.current.querySelector('.timeline-item:last-child .circle');
        if (lastItem) {
          const timelineRect = timelineRef.current.getBoundingClientRect();
          const lastItemRect = lastItem.getBoundingClientRect();
          const newHeight = lastItemRect.top - timelineRect.top + (lastItemRect.height / 2);
          setLineHeight(newHeight);
        }
      }
    };

    // Initial calculation
    updateHeight();

    // Recalculate on window resize
    window.addEventListener('resize', updateHeight);
    
    // Cleanup
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <div className="relative" ref={timelineRef}>
      {/* Vertical line */}
      <div
        className="absolute left-8 w-1 bg-white top-6"
        style={{ height: `${lineHeight}px` }}
      ></div>

      {/* Timeline items */}
      {experiences.map((experience, index) => (
        <TimelineItem
          key={index}
          experience={experience}
          isLast={index === experiences.length - 1}
        />
      ))}
    </div>
  );
};

export default Timeline;