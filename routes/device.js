const express = require('express');
const router = express.Router();
const Device = require('../models/Device');
const auth = require('../middleware/auth');

// Get all devices for current user
router.get('/', auth, async (req, res) => {
  try {
    const devices = await Device.find({ userId: req.user._id });
    res.json(devices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new device
router.post('/', auth, async (req, res) => {
  try {
    const device = new Device({
      ...req.body,
      userId: req.user._id
    });
    const newDevice = await device.save();
    res.status(201).json(newDevice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get device by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const device = await Device.findOne({ _id: req.params.id, userId: req.user._id });
    if (!device) {
      return res.status(404).json({ message: 'Device not found' });
    }
    res.json(device);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update device
router.put('/:id', auth, async (req, res) => {
  try {
    const device = await Device.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true }
    );
    if (!device) {
      return res.status(404).json({ message: 'Device not found' });
    }
    res.json(device);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete device
router.delete('/:id', auth, async (req, res) => {
  try {
    const device = await Device.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
    if (!device) {
      return res.status(404).json({ message: 'Device not found' });
    }
    res.json({ message: 'Device deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 