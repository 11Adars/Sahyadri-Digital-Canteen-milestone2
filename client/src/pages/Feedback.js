import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Feedback.css';

function Feedback() {
  const [feedback, setFeedback] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    alert('Feedback submitted!');
    navigate('/menu');
  };

  return (
    <div className="feedback">
      <h1>Feedback</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="feedback">Your Feedback:</label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;
