import React from 'react';
import './MenuItem.css';

function MenuItem({ item }) {
  return (
    <div className="menu-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>${item.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default MenuItem;
