import React from 'react';
import './AdminFeedback.css';

const feedbacks = [
  { id: 1, user: 'John Doe', feedback: 'Great food!', status: 'Pending' },
  { id: 2, user: 'Jane Smith', feedback: 'Could improve service speed.', status: 'Reviewed' },
  { id: 3, user: 'Mike Johnson', feedback: 'Very satisfied with the quality.', status: 'Resolved' }
];

function AdminFeedback() {
  return (
    <div className="admin-feedback">
      <h1>View Feedback</h1>
      <ul>
        {feedbacks.map(feedback => (
          <li key={feedback.id}>
            <h2>{feedback.user}</h2>
            <p>{feedback.feedback}</p>
            <p>Status: {feedback.status}</p>
            <button>Respond</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminFeedback;
