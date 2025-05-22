# Sample application to Learn Kafka

## ✅ What is Kafka?
- A distributed event streaming platform
- Stores streams of records (messages) in topics
- Producers send data to topics
- Consumers read data from topics

## ✅ What is Zookeeper?
- A centralized service for maintaining configuration, naming, and synchronization
- Kafka uses it to manage brokers, elect leaders, and maintain metadata

## Use Cases

### ✅ 1. Real-Time Data Processing
You need to react to events as they happen.
Examples:
1. Fraud detection in banking
2. Live monitoring of temperature, pressure, or location from IoT devices
3. Clickstream analysis on websites

## Why Kafka is not a Database?

| Feature                 | Traditional Database | Kafka                                                |
| ----------------------- | -------------------- | ---------------------------------------------------- |
| **Query language**      | SQL                  | ❌ None built-in (you need KSQL or stream processors) |
| **Indexing**            | Custom indexes       | ❌ Only sequential log access (by offset)             |
| **Random reads/writes** | ✅ Yes                | ❌ No — only sequential appends and reads             |
| **ACID transactions**   | ✅ Fully supported    | ⚠️ Limited (no complex multi-row transactions)       |
| **Primary keys**        | ✅ Yes                | ❌ Optional (only for compaction)                     |
| **Data updates**        | ✅ Yes                | ❌ No updates — only new events (append-only)         |

## Why Kafka is like a Database?
| Feature                          | Kafka                     |
| -------------------------------- | ------------------------- |
| **Durable storage on disk**      | ✅ Yes                     |
| **Can replay old data**          | ✅ Yes                     |
| **High-throughput writes**       | ✅ Yes                     |
| **Scalable horizontally**        | ✅ Yes                     |
| **Retains data for days/months** | ✅ Yes (retention config)  |
| **Acts as source of truth**      | ✅ In event-driven systems |

1. Use docker compose and run 
````
docker compose up
````
1. backend folder contains a simple kafka producer
````
npm i
node index.js
````
2. consumer folder contains a simple kafka consumer
````
npm i
node index.js
````
3. frontend contains a simple web application which sends message on a topic in kafka, which will be received by consumer.
````
# Run this on any web server. e.g:
php -S localhost:8084 -t .
````
## Run Kafdrop
````
docker run -d --rm -p 9000:9000 \
    -e KAFKA_BROKERCONNECT=localhost:9092 \
    -e SERVER_SERVLET_CONTEXTPATH="/" \
    obsidiandynamics/kafdrop
````
