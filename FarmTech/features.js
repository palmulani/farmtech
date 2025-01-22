// components/Features.js
import React, { useState } from 'react';

function Features() {
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
  ]);

  return (
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
  );
}

export default Features;
