import React from 'react';
import { useParams } from 'react-router-dom';

const LandmarkDetails = ({ landmarks }) => {
  const { id } = useParams();
  const landmark = landmarks.find(item => item.id === parseInt(id));

  if (!landmark) {
    return <p>Памʼятку не знайдено</p>;
  }

  return (
    <div>
      <h2>{landmark.name}</h2>
      <p>{landmark.description}</p>
    </div>
  );
};

export default LandmarkDetails;
