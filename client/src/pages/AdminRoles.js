import React from 'react';
import Navbar from '../components/Navbar';
import './AdminRoles.css';

const AdminRoles = () => {
  return (
    <div className="admin-roles">
      <Navbar />
      <h1>Manage Roles</h1>
      <p>Here you can manage user roles and permissions.</p>
    </div>
  );
};

export default AdminRoles;
