const amqplib = require('amqplib');
const { rabbitmqUrl, queueName } = require('../config');

async function enqueueNotification(notification) {
  const connection = await amqplib.connect(rabbitmqUrl);
  const channel = await connection.createChannel();
  await channel.assertQueue(queueName, { durable: true });

  channel.sendToQueue(queueName, Buffer.from(JSON.stringify(notification)), {
    persistent: true
  });

  console.log('Notification queued:', notification);
  await channel.close();
  await connection.close();
}

module.exports = enqueueNotification;
