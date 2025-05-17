const amqplib = require('amqplib');
const { rabbitmqUrl, queueName } = require('../config');
const { Notification } = require('../models/notification');

async function consumeNotifications(processNotification) {
  const connection = await amqplib.connect(rabbitmqUrl);
  const channel = await connection.createChannel();
  await channel.assertQueue(queueName, { durable: true });
  channel.prefetch(1);

  console.log('Worker is listening for notifications...');

  channel.consume(queueName, async (msg) => {
    const notification = JSON.parse(msg.content.toString());

    try {
      await processNotification(notification);
      channel.ack(msg);
    } catch (error) {
      console.error('Failed to process notification:', error);
      channel.nack(msg);
    }
  });
}

module.exports = consumeNotifications;
