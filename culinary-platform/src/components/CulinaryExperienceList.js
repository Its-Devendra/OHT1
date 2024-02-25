import React, { useState, useEffect } from 'react';
import CulinaryExperienceCard from './CulinaryExperienceCard';

const CulinaryExperienceList = () => {
  // State to store the list of culinary experiences
  const [experiences, setExperiences] = useState([]);

  // useEffect to fetch culinary experiences from backend when component mounts
  useEffect(() => {
    // Fetch culinary experiences from backend
    // For example:
    // const experiencesData = fetchExperiences();
    // setExperiences(experiencesData);
  }, []);

  return (
    <div>
      <h2>Browse Culinary Experiences</h2>
      {experiences.map((experience) => (
        <CulinaryExperienceCard key={experience.id} experience={experience} />
      ))}
    </div>
  );
};

export default CulinaryExperienceList;
