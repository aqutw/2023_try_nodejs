const { createClient } = require('redis');

const client = createClient({ url: 'redis://localhost:6379' });

(async () => {
    await client.connect();
})();

client.on('connect', () => console.log('::> Redis Client Connected'));
client.on('error', (err) => console.log('<:: Redis Client Error', err));
