import React from 'react';

const TimelineItem = ({ item }) => {
  return (
    <div className="relative pl-8 border-l-2 border-indigo-200">
      <div className="absolute w-4 h-4 bg-indigo-600 rounded-full -left-[9px] top-1"></div>
      <div className="mb-2">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-600">{item.institution || item.company}</p>
        <p className="text-sm text-indigo-600">{item.period}</p>
      </div>
      <p className="text-gray-600">{item.description}</p>
    </div>
  );
};

export default TimelineItem;
