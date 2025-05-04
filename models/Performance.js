const mongoose = require('mongoose');

const performanceSchema = new mongoose.Schema({
  deviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Device', required: true },
  cpuUsage: { type: Number, required: true },
  memoryUsage: { type: Number, required: true },
  networkUsage: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Performance', performanceSchema); 