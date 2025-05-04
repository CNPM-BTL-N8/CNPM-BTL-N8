const express = require('express');
const router = express.Router();
const Alert = require('../models/Alert');
const Device = require('../models/Device');
const auth = require('../middleware/auth');

// Get all alerts for user's devices
router.get('/', auth, async (req, res) => {
  try {
    // Get all device IDs belonging to the user
    const userDevices = await Device.find({ userId: req.user._id }).select('_id');
    const deviceIds = userDevices.map(device => device._id);

    // Get alerts for these devices
    const alerts = await Alert.find({
      deviceId: { $in: deviceIds }
    }).sort({ timestamp: -1 });

    res.json(alerts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get alerts for a specific device
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

    const alerts = await Alert.find({
      deviceId: req.params.deviceId
    }).sort({ timestamp: -1 });

    res.json(alerts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create new alert
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

    const alert = new Alert({
      ...req.body,
      userId: req.user._id
    });
    const newAlert = await alert.save();
    res.status(201).json(newAlert);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update alert status
router.put('/:id', auth, async (req, res) => {
  try {
    const alert = await Alert.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      req.body,
      { new: true }
    );
    if (!alert) {
      return res.status(404).json({ message: 'Alert not found' });
    }
    res.json(alert);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete alert
router.delete('/:id', auth, async (req, res) => {
  try {
    const alert = await Alert.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id
    });
    if (!alert) {
      return res.status(404).json({ message: 'Alert not found' });
    }
    res.json({ message: 'Alert deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 