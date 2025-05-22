const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'express-app',
  brokers: ['localhost:9092'],
});

const producer = kafka.producer();

const initKafka = async () => {
  await producer.connect();
};

module.exports = { producer, initKafka };
