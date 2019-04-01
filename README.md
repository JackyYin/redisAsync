# Installation

```
npm install @jackyyin/redisasync
```

# process.env

| Property | Default |
|----------|---------|
| REDIS_HOST | redis |
| REDIS_PORT | 6379  |
| REDIS_PASSWORD | null |

# Usage Example

```js
const redis = require('@jackyyin/redisasync');

const success = await redis.setexAsync('key', 60, 'Hello');
console.log(success); // 'OK'

const ttl = await redis.ttlAsync('key');
console.log(ttl); // 60

const val = await redis.getAsync('key')
console.log(val) // 'Hello'
```
