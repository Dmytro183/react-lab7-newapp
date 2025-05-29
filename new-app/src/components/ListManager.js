import React, { useState } from 'react';

const ListManager = () => {
  const [items, setItems] = useState(['Елемент 1', 'Елемент 2', 'Елемент 3']);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem.trim()]);
      setNewItem('');
    }
  };

  const deleteItem = index => {
    const updated = [...items];
    updated.splice(index, 1);
    setItems(updated);
  };

  return (
    <div>
      <ul>
        {items.map((el, index) => (
          <li key={index}>
            {el}
            <button onClick={() => deleteItem(index)} style={{ marginLeft: '10px' }}>Видалити</button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        placeholder="Новий елемент"
        onChange={e => setNewItem(e.target.value)}
      />
      <button onClick={addItem}>Додати</button>
    </div>
  );
};

export default ListManager;
