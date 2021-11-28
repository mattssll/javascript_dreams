
let redis = require('redis');
let client = redis.createClient('6379', 'localhost',
{no_ready_check : true});

// connect to redis db
client.auth('$!banJ0210196!$', (err) => {
	if (err) throw err;
});

client.on('connect', () => {
	console.log('connected to redis')
});

let myJsonObj = "{'name' : 'test', 'age' : 25}";
// redis key foo SET to the value 'bar'
client.set('foo1', myJsonObj, redis.print);
client.get('foo1', (err, reply) => {
	if (err) throw err;
	console.log(reply.toString());
});