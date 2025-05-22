const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { producer, initKafka } = require('./kafka');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

app.post('/publish', async (req, res) => {
  const { message } = req.body;

  try {
    await producer.send({
      topic: 'test-topic',
      messages: [{ value: message }],
    });
    res.json({ success: true, message: 'Message sent to Kafka' });
  } catch (err) {
    console.error('Kafka error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, async () => {
  await initKafka();
  console.log(`🚀 Express server running on http://localhost:${PORT}`);
});
