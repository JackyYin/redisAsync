const redis = require('redis');
const bluebird = require("bluebird");

bluebird.promisifyAll(redis);

const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

client.on('connect', () => {
  console.log('Redis client connected');
});

client.on('error', (err) => {
  console.error('Redis Client Error: ', err);
});

module.exports = client;
