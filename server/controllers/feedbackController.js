const Feedback = require('../models/Feedback');


exports.getFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().populate('user menuItem');
    res.json(feedbacks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.addFeedback = async (req, res) => {
  const { user, menuItem, rating, comment } = req.body;
  try {
    const newFeedback = new Feedback({ user, menuItem, rating, comment });
    const feedback = await newFeedback.save();
    res.json(feedback);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


exports.deleteFeedback = async (req, res) => {
  const { id } = req.params;
  try {
    await Feedback.findByIdAndDelete(id);
    res.json({ msg: 'Feedback deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
