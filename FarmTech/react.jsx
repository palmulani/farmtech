import React, { useState } from 'react';
import './styles.css';

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'NPK Fertilizers',
      description: 'The secret handshake between plants and their nutrient buddies!',
      image: 'Images/NPK.png',
    },
    {
      id: 2,
      name: 'Liquid Medicine Product 2',
      description: 'Description of Liquid Medicine Product 2',
      image: 'product2.jpg',
    },
    // Add more products here
  ]);

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleContactFormSubmit = (event) => {
    event.preventDefault();
    console.log(contactForm);
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="home">
        <h1>Welcome to KD FarmTech</h1>
        <p>Get the best fertilizers and liquid medicines for your farm</p>
        <img src="Images/Khet.jpg" alt="Farming Supplies Hero Image" />
      </section>

      <section id="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <button>Buy Now</button>
            </div>
          ))}
        </div>
      </section>

      <section id="about">
        <h2>About Us</h2>
        <p>We are a team of farmers and experts dedicated to providing the best fertilizers and liquid medicines for your farm.</p>
        <img src="about-image.jpg" alt="About Us Image" />
      </section>

      <section id="contact">
        <h2>Get in Touch</h2>
        <p>Contact us for more information or to place an order.</p>
        <form onSubmit={handleContactFormSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={contactForm.name}
            onChange={(event) =>
              setContactForm({ ...contactForm, name: event.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            value={contactForm.email}
            onChange={(event) =>
              setContactForm({ ...contactForm, email: event.target.value })
            }
          />
          <textarea
            placeholder="Message"
            value={contactForm.message}
            onChange={(event) =>
              setContactForm({ ...contactForm, message: event.target.value })
            }
          />
          <button>Send</button>
        </form>
      </section>

      <footer>
        <p>&copy; 2023 Farming Supplies. All rights reserved.</p>
        <ul>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
import React from 'react';

function Header() {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span className="fs-4">MarsXport</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
      </ul>
    </header>
  );
}
import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Pricing from './Pricing';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </div>
  );
}

import React from 'react';
import './styles.css';

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img src="logo.png" alt="VD FarmTech Logo" className="logo" />
          </a>

          {/* Toggler for smaller screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#home">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#products">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;