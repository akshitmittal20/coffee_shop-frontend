import React from 'react';

const CoffeeShop = ({ shop }) => {
  return (
    <div className="coffee-shop">
      <h2>{shop.name}</h2>
      <p>{shop.location}</p>
      <p>Rating: {shop.rating}</p>
      {shop.image && <img src={shop.image} alt={shop.name} onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150"; }} />}
      <ul>
        {shop.products.map(product => (
          <li key={product._id}>
            {product.name} - ${product.price} ({product.category})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoffeeShop;
