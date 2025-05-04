const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');

const Device = require('./models/Device');
const Performance = require('./models/Performance');
const Alert = require('./models/Alert');
const User = require('./models/User');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/api/devices', async (req, res) => {
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/performance/:floor', async (req, res) => {
  try {
    const { floor } = req.params;
    const { period } = req.query;
    
    let timeFilter = {};
    if (period === 'day') {
      timeFilter = { timestamp: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) } };
    } else if (period === 'week') {
      timeFilter = { timestamp: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) } };
    } else if (period === 'month') {
      timeFilter = { timestamp: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } };
    }

    const performance = await Performance.find({
      floor: parseInt(floor),
      ...timeFilter
    }).sort({ timestamp: 1 });

    res.json(performance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/api/alerts', async (req, res) => {
  try {
    const alerts = await Alert.find({ resolved: false });
    res.json(alerts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/devices', async (req, res) => {
  try {
    const device = new Device(req.body);
    await device.save();
    res.status(201).json(device);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post('/api/performance', async (req, res) => {
  try {
    const performance = new Performance(req.body);
    await performance.save();
    res.status(201).json(performance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Đăng ký
app.post('/api/register', async (req, res) => {
  try {
    const { email, phone, password } = req.body;
    if ((!email && !phone) || !password) return res.status(400).json({ message: 'Thiếu thông tin' });
    if (email && await User.findOne({ email })) return res.status(400).json({ message: 'Email đã tồn tại' });
    if (phone && await User.findOne({ phone })) return res.status(400).json({ message: 'Số điện thoại đã tồn tại' });
    const user = new User({ email, phone, password });
    await user.save();
    res.status(201).json({ message: 'Đăng ký thành công!' });
  } catch (error) {
    res.status(400).json({ message: 'Lỗi đăng ký', error });
  }
});

// Đăng nhập
app.post('/api/login', async (req, res) => {
  const { emailOrPhone, password } = req.body;
  let user = null;
  if (emailOrPhone.includes('@')) {
    user = await User.findOne({ email: emailOrPhone });
  } else {
    user = await User.findOne({ phone: emailOrPhone });
  }
  if (!user) return res.status(400).json({ message: 'Sai tài khoản hoặc mật khẩu' });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Sai tài khoản hoặc mật khẩu' });
  res.json({ message: 'Đăng nhập thành công!', isAdmin: user.isAdmin });
});

// Tạo sẵn tài khoản admin nếu chưa có
async function ensureAdmin() {
  const adminEmail = 'ttoan2286@gmail.com';
  const adminPassword = 'cnpmn8';
  let admin = await User.findOne({ email: adminEmail });
  if (!admin) {
    admin = new User({ email: adminEmail, password: adminPassword, isAdmin: true });
    await admin.save();
    console.log('Tạo tài khoản admin mặc định thành công!');
  }
}
ensureAdmin();

// Connect to MongoDB and start server
mongoose.connect('mongodb://127.0.0.1:27017/chatl_network')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  }); 