const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const Device = require('./models/Device');
const Performance = require('./models/Performance');
const Alert = require('./models/Alert');

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://127.0.0.1:27017/chatl', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Clear existing data
    await User.deleteMany({});
    await Device.deleteMany({});
    await Performance.deleteMany({});
    await Alert.deleteMany({});

    // Create admin user
    const hashedPassword = await bcrypt.hash('cnpmn8', 10);
    const adminUser = await User.create({
      email: 'ttoan2286@gmail.com',
      password: hashedPassword,
      isAdmin: true
    });

    // Create sample devices for admin
    const devices = await Device.create([
      {
        name: 'Router chính',
        type: 'Router',
        location: 'Phòng server',
        status: 'Online',
        ipAddress: '192.168.1.1',
        macAddress: '00:1A:2B:3C:4D:5E',
        userId: adminUser._id
      },
      {
        name: 'Switch tầng 1',
        type: 'Switch',
        location: 'Tầng 1',
        status: 'Online',
        ipAddress: '192.168.1.2',
        macAddress: '00:1A:2B:3C:4D:5F',
        userId: adminUser._id
      }
    ]);

    // Create sample performance data for admin's devices
    await Performance.create([
      {
        deviceId: devices[0]._id,
        cpuUsage: 25,
        memoryUsage: 50,
        networkUsage: 30,
        userId: adminUser._id
      },
      {
        deviceId: devices[1]._id,
        cpuUsage: 20,
        memoryUsage: 45,
        networkUsage: 25,
        userId: adminUser._id
      }
    ]);

    // Create sample alerts for admin's devices
    await Alert.create([
      {
        deviceId: devices[0]._id,
        type: 'CPU Usage',
        severity: 'Warning',
        message: 'CPU usage above 80%',
        userId: adminUser._id
      },
      {
        deviceId: devices[1]._id,
        type: 'Network',
        severity: 'Info',
        message: 'Network traffic increased',
        userId: adminUser._id
      }
    ]);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase(); 