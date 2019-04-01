const redis = require('redis');
const bluebird = require("bluebird");

bluebird.promisifyAll(redis);

const client = redis.createClient({
  host: process.env.REDIS_HOST || 'redis',
  port: process.env.REDIS_PORT || 6379,
  password: process.env.REDIS_PASSWORD ? process.env.REDIS_PASSWORD : null
});

client.on('connect', () => {
  console.log('Redis client connected');
});

client.on('error', (err) => {
  console.error('Redis Client Error: ', err);
});

module.exports = client;
