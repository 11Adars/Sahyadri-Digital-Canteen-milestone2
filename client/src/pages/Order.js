import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Order.css';

function Order() {
  const location = useLocation();
  const { item } = location.state;
  const navigate = useNavigate();

  const handleBackToMenu = () => {
    navigate('/menu');
  };

  const handleGoToFeedback = () => {
    navigate('/feedback');
  };

  return (
    <div className="order">
      <h1>Order</h1>
      <h2>{item.name}</h2>
      <p1>{item.Description}</p1>
      <p>₹{item.price}</p>
      <button onClick={() => alert('Order placed!')} className="order-button">
        Place Order
      </button>
      <button onClick={handleBackToMenu} className="order-button">
        Back to Menu
      </button>
      <button onClick={handleGoToFeedback} className="order-button">
        Go to Feedback
      </button>
   
    </div>
  );
}

export default Order;
