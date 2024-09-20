import React from 'react';
import '../estilos/header.css';
import logo from '../imagenes/clima.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './Login';


function Header() {
  return (
    <header className='header container-fluid'>
      
        <nav className='container-nav'>
          {/* Logo */}
          <div className='logo-container'>
            <Link to="/">
              <img src={logo} className='logo-header' alt='Clima Logo' />
            </Link>
          </div>

          {/* Enlaces de navegación */}
          <ol className='nav-links'>
            <li>
              <Link to="/" className='nav-item'>Home</Link>
            </li>
            <li>
              <Link to="/map" className='nav-item'>Map</Link>
            </li>
            <li>
              <Link to="/about" className='nav-item'>About</Link>
            </li>
            <li>
              <Link to="/services" className='nav-item'>Services</Link>
            </li>
            <li>
              <Link to="/contact" className='nav-item'>Contact</Link>
            </li>
            <Link to="/registrate" className='nav-item'></Link>
          </ol>

          {/* Menú de usuario */}
          <div className='user-menu'>
            <Link to="/login" className='user-link'>
              <i className="bi bi-person-circle"></i> Login
            </Link>
            <Link to="/profile" className='user-link'>
              <i className="bi bi-person-fill"></i> Profile
            </Link>
          </div>
        </nav>
     
    </header>
  );
}

export default Header;