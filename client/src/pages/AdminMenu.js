import React from 'react';
import './AdminMenu.css';

const menuItems = [
  { id: 1, name: 'Veg Burger', description: 'A delicious burger with cheese and lettuce', price: '₹50.00' },
  { id: 2, name: 'Dosa', description: 'A classic Dosa', price: '₹80.00' },
  { id: 3, name: 'Parota', description: 'very tasty', price: '₹30.00' }
];

function AdminMenu() {
  return (
    <div className="admin-menu">
      <h1>Manage Menu</h1>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
      <button>Add New Item</button>
    </div>
  );
}

export default AdminMenu;
