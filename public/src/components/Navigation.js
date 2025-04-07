import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/sports">Sports</NavLink></li>
        <li><NavLink to="/food">Food</NavLink></li>
        <li><NavLink to="/cars">Cars</NavLink></li>
        <li><NavLink to="/technology">Technology</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
