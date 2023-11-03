import React from 'react';

const ExperienceCard = ({ title, subtitle, date, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{date}</p>
      <p>{description}</p>
    </div>
  );
};

export default ExperienceCard;
