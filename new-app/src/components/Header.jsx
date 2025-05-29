import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // стилі можна винести сюди

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <header className="header">
      <div className="burger" onClick={toggleMenu}>
        ☰
      </div>
      <nav className={isOpen ? 'nav open' : 'nav'}>
        <ul>
          <li><Link to="/page1" onClick={() => setIsOpen(false)}>Сторінка 1</Link></li>
          <li><Link to="/page2" onClick={() => setIsOpen(false)}>Сторінка 2</Link></li>
          <li><Link to="/page3" onClick={() => setIsOpen(false)}>Сторінка 3</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;