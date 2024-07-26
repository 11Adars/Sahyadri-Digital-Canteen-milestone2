const express = require('express');
const router = express.Router();
const { getFeedbacks, addFeedback, deleteFeedback } = require('../controllers/feedbackController');
const auth = require('../middleware/authMiddleware');


router.get('/', auth, getFeedbacks);

router.post('/', auth, addFeedback);


router.delete('/:id', auth, deleteFeedback);

module.exports = router;
