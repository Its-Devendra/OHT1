import React from 'react';

const CulinaryExperienceCard = ({ experience }) => {
  return (
    <div>
      <h3>{experience.title}</h3>
      <p>{experience.description}</p>
      <p>Price: ${experience.price}</p>
      {/* Add more details or buttons for booking */}
    </div>
  );
};

export default CulinaryExperienceCard;
