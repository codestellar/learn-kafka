const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'kafka-consumer',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'web-ui-group' });

const run = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      console.log(`📥 Received: ${message.value.toString()}`);
    },
  });
};

run().catch(console.error);
