import React, { useState } from 'react';
import './styles.css';
import Header from 'header./Header';
import ProductList from './ProductList';
import About from './About';
import ContactForm from './ContactForm';

function App() {
  const [products] = useState([
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

  return (
    <div className="App">
      <Header />
      <section id="home">
        <h1>Welcome to KD FarmTech</h1>
        <p>Get the best fertilizers and liquid medicines for your farm</p>
        <img src="Images/Khet.jpg" alt="Farming Supplies Hero Image" />
      </section>
      <ProductList products={products} />
      <About />
      <ContactForm />
      <footer>
        <p>&copy; 2023 Farming Supplies. All rights reserved.</p>
        <ul>
          <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" /></a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" /></a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" /></a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
