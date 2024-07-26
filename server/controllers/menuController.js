const MenuItem = require('../models/MenuItem');


exports.getMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.addMenuItem = async (req, res) => {
  const { name, description, price, category, isVeg, image } = req.body;
  try {
    const newItem = new MenuItem({ name, description, price, category, isVeg, image });
    const menuItem = await newItem.save();
    res.json(menuItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


exports.updateMenuItem = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category, isVeg, image } = req.body;
  try {
    const menuItem = await MenuItem.findByIdAndUpdate(
      id,
      { name, description, price, category, isVeg, image },
      { new: true }
    );
    res.json(menuItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteMenuItem = async (req, res) => {
  const { id } = req.params;
  try {
    await MenuItem.findByIdAndDelete(id);
    res.json({ msg: 'Menu item deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
