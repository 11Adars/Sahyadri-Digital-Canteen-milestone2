import React from 'react';
import './AdminOrders.css';

const orders = [
  { id: 1, item: 'Veg Burger', status: 'Pending' },
  { id: 2, item: 'Dosa', status: 'Preparing' },
  { id: 3, item: 'Parota', status: 'Ready for Pickup' }
];

function AdminOrders() {
  return (
    <div className="admin-orders">
      <h1>Manage Orders</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <h2>{order.item}</h2>
            <p>Status: {order.status}</p>
            <button>Edit Status</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminOrders;
