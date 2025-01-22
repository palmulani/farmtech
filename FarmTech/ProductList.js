import React from 'react';
import './styles.css';

function ProductList({ products }) {
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

export default ProductList;
