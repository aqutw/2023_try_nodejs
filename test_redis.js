const redis = require('redis');

const { createClient } = redis;

const redisClientOptions = { 
    url: 'redis://localhost:6379',
    socket: {
      reconnectStrategy: (retries) => { if (retries > 10) { return new Error('Redis retry time exhausted(>10)'); } return 1000; }
    }
  };

(async () => {
const client = createClient(redisClientOptions);

client.on('error', err => {
  console.log(reqid,'===cmsCacheProxy Redis Client onError', err)
});
client.on('connect', function() {
  console.log('Connected!');
});

client.connect();
console.log( await client.set("xxx", "xxxvalue", {EX:65, NX: true}, function(e, reply) { console.log(reply); }) ); // NX:true --> null   NX:false --> OK
console.log(await client.get("xxx", function(e, reply) { console.log(reply); }));

await client.disconnect(); 

})();

console.log('demo done');

