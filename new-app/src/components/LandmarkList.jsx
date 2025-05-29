import React from 'react';
import { Link } from 'react-router-dom';

const LandmarkList = ({ landmarks }) => (
  <div>
    <h2>Памʼятки Харкова</h2>
    <ul>
      {landmarks.map(item => (
        <li key={item.id}>
          <Link to={`/landmark/${item.id}`}>{item.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default LandmarkList;
