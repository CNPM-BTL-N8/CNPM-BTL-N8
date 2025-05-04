const express = require('express');
const router = express.Router();
const Performance = require('../models/Performance');
const Device = require('../models/Device');
const auth = require('../middleware/auth');

// Get performance data for user's devices
router.get('/', auth, async (req, res) => {
  try {
    // Get all device IDs belonging to the user
    const userDevices = await Device.find({ userId: req.user._id }).select('_id');
    const deviceIds = userDevices.map(device => device._id);

    // Get performance data for these devices
    const performanceData = await Performance.find({
      deviceId: { $in: deviceIds }
    }).sort({ timestamp: -1 });

    res.json(performanceData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get performance data for a specific device
router.get('/device/:deviceId', auth, async (req, res) => {
  try {
    // Verify device belongs to user
    const device = await Device.findOne({
      _id: req.params.deviceId,
      userId: req.user._id
    });
    if (!device) {
      return res.status(404).json({ message: 'Device not found' });
    }

    const performanceData = await Performance.find({
      deviceId: req.params.deviceId
    }).sort({ timestamp: -1 });

    res.json(performanceData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add new performance data
router.post('/', auth, async (req, res) => {
  try {
    // Verify device belongs to user
    const device = await Device.findOne({
      _id: req.body.deviceId,
      userId: req.user._id
    });
    if (!device) {
      return res.status(404).json({ message: 'Device not found' });
    }

    const performance = new Performance({
      ...req.body,
      userId: req.user._id
    });
    const newPerformance = await performance.save();
    res.status(201).json(newPerformance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router; 