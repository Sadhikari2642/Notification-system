const express = require('express');
const sequelize = require('./models');
const User = require('./models/user');
const Notification = require('./models/notification');
const enqueueNotification = require('./queue/producer');

const app = express();
app.use(express.json());

// POST /notifications
app.post('/notifications', async (req, res) => {
  const { userId, type, message } = req.body;

  if (!userId || !type || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const user = await User.findByPk(userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const notification = await Notification.create({ userId, type, message });
  await enqueueNotification(notification);

  res.status(201).json({ message: 'Notification queued', notificationId: notification.id });
});

// GET /users/:userId/notifications
app.get('/users/:userId/notifications', async (req, res) => {
  const userId = req.params.userId;

  const user = await User.findByPk(userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const notifications = await Notification.findAll({ where: { userId } });
  res.json(notifications);
});

// Initialize and start server
(async () => {
  await sequelize.sync();
  app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
})();
