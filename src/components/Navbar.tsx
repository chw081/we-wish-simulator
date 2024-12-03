import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Navbar: React.FC = () => {
  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      const height = navbar.offsetHeight;
      document.documentElement.style.setProperty('--navbar-height', `${height}px`);
    }
  }, []);

  return (
    <div className="navbar-container">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/inventory">Inventory</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <img src={logo} alt="Logo" className="navbar-logo" />
      </nav>
    </div>
  );
};

export default Navbar;

