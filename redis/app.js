const express = require('express');

const redis = require('redis');

const app = express();

const port = process.env.port || 3000;

const redisConfig = require('./config/redis');

const redisTest = () => {
	const client = redis.createClient(redisConfig);

	client.set("foo_rand000000000000", "OK");
 
	// This will return a JavaScript String
	client.get("foo_rand000000000000", function(err, reply) {
	  console.log(reply.toString()); // Will print `OK`
	});
}

redisTest();
app.get('/', (req, res) => {



	res.send('hello world');

})

app.listen(port)