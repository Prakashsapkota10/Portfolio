import React from 'react';

const HobbyCard = ({ hobby }) => {
  const Icon = hobby.icon;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
      <div className="flex justify-center mb-4">
        <Icon size={32} className="text-indigo-600" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{hobby.name}</h3>
      <p className="text-gray-600">{hobby.description}</p>
    </div>
  );
};

export default HobbyCard;
