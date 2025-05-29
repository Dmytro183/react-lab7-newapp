import React from 'react';
import { useParams } from 'react-router-dom';

const allProducts = [
  { id: 1, name: 'Nokian 225/65 R17', description: 'Зимова шина, висока зносостійкість.' },
  { id: 2, name: 'Michelin Pilot Sport 4', description: 'Спортивна літня шина, клас преміум.' },
  { id: 3, name: 'Goodyear Eagle', description: 'Баланс комфорту та керованості.' },
  { id: 4, name: 'R18 OZ Racing', description: 'Легкосплавний диск, спортивний стиль.' },
  { id: 5, name: 'R17 Replica RS', description: 'Бюджетне рішення з якісним покриттям.' },
  { id: 6, name: 'R16 Advanti', description: 'Компактний стиль для міського авто.' },
  { id: 7, name: 'Shell Helix Ultra 5W-30', description: 'Синтетична моторна олива з чистячими властивостями.' },
  { id: 8, name: 'Motul 8100 X-cess', description: 'Високоефективна синтетична олива.' },
  { id: 9, name: 'Castrol EDGE 5W-40', description: 'Потужний захист для сучасних двигунів.' }
];

const ProductDetails = () => {
  const { productId } = useParams();
  const product = allProducts.find(p => p.id === parseInt(productId));

  if (!product) {
    return <p>Товар не знайдено</p>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
