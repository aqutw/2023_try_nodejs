const redis = require('redis');

setting = {
  url: 'redis://localhost:6379',
  socket: {
    reconnectStrategy: (retries) => {
      if (retries > 5) {
        return new Error('Redis retry time exhausted(>10)');
      }
      return 1000;
    },
    host: 'localhost',
    port: 6379,
    connectTimeout: 5000,
    keepAlive: 5000,
    noDelay: true
  }
};

(async function(){
const client = redis.createClient(setting)
client.on('error', err => {
  console.log('xx','', err)
});
await client.connect();

const reply = await client.scan('0', { MATCH: 'yyyyyyyy*', COUNT: 9999 });
for (key of reply.keys) {
  console.log('key :', key);
  // await client.del(key);
}

client.del('yyyyyy*', (err, count) => { // del DOES NOT support *
  console.log('count :', count, err);
});
client.keys('*', (err, keys) => {
  if (err) { console.log('xx', '===on.redis.keys ', err); return; }

  if (keys.length === 0) {
    console.log('xx', '===nothing to flush');
    client.quit();
    return;
  }

  // client.del(keys, (err, count) => {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }

  //   console.log(reqid, '===cmsCacheProxy', `${count} keys deleted.`);
  //   client.quit();
  // });
});
})();
console.log('111 :', 111);
