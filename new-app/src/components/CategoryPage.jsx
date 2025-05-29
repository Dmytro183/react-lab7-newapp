import React from 'react';
import { useParams, Link } from 'react-router-dom';

const data = {
  shini: [
    { id: 1, name: 'Nokian 225/65 R17' },
    { id: 2, name: 'Michelin Pilot Sport 4' },
    { id: 3, name: 'Goodyear Eagle' }
  ],
  dysky: [
    { id: 4, name: 'R18 OZ Racing' },
    { id: 5, name: 'R17 Replica RS' },
    { id: 6, name: 'R16 Advanti' }
  ],
  olyvy: [
    { id: 7, name: 'Shell Helix Ultra 5W-30' },
    { id: 8, name: 'Motul 8100 X-cess' },
    { id: 9, name: 'Castrol EDGE 5W-40' }
  ]
};

const CategoryPage = () => {
  const { categoryName } = useParams();
  const items = data[categoryName];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Категорія: {categoryName.toUpperCase()}</h2>
      {items ? (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <Link to={`/product/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Такої категорії не існує</p>
      )}
    </div>
  );
};

export default CategoryPage;
