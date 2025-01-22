import React from 'react';
import './styles.css';

function Header() {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span className="fs-4">MarsXport</span>
      </a>
      <nav>
        <ul className="nav nav-pills">
          <li className="nav-item"><a href="#home" className="nav-link active">Home</a></li>
          <li className="nav-item"><a href="#products" className="nav-link">Products</a></li>
          <li className="nav-item"><a href="#about" className="nav-link">About Us</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
