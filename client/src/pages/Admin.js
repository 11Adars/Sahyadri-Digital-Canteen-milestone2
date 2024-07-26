import React from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  const handleViewOrders = () => {
    navigate('/admin/orders');
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <button onClick={handleViewOrders}>View Orders</button>
      <button onClick={() => navigate('/')}>Logout</button>
    </div>
  );
};

export default Admin;
