const consumeNotifications = require('./queue/consumer');
const Notification = require('./models/notification');

async function processNotification(notification) {
  let retries = 0;
  const maxRetries = 3;

  while (retries < maxRetries) {
    try {
      console.log(`Processing notification [${notification.type}]: ${notification.message}`);
      if (Math.random() > 0.5) throw new Error('Simulated failure');

      await Notification.update(
        { status: 'sent' },
        { where: { id: notification.id } }
      );
      console.log('Notification sent successfully.');
      return;
    } catch (error) {
      console.log('Error sending notification, retrying...');
      retries++;
    }
  }

  await Notification.update(
    { status: 'failed' },
    { where: { id: notification.id } }
  );
  console.log('Notification failed after retries.');
}

consumeNotifications(processNotification);
