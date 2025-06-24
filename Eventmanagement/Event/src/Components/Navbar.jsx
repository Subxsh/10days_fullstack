// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
//import './Navbar.css'; // optional if you want custom styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">EventPro</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
