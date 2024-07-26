import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="admin-links">
        <Link to="/admin/menu" className="admin-link">
          Manage Menu
        </Link>
        <Link to="/admin/orders" className="admin-link">
          Manage Orders
        </Link>
        <Link to="/admin/feedback" className="admin-link">
          View Feedback
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
