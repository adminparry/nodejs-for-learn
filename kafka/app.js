const express = require('express');

const kafka = require('kafka-node');

const app = express();

const port = process.env.port || 3000;

const Producer = kafka.Producer;
const Consumer = kafka.Consumer;

const kafkaClient = new kafka.Client();

const producer = new Producer(kafkaClient);
const consumer = new Consumer(
		kafkaClient, 
		[
            {topic:'CAR_NUMBER',partition:0}
        ],
        {
            autoCommit:false,
            fetchMaxWaitMs: 1000,
            fetchMaxBytes: 1024 * 1024,
            fromOffset: true
        }
);
consumer.on('message', message => {
	console.log('生产者数据', message)
})

let count = 0;

app.use(express.json());
app.use(express.urlencoded({
	extended: true,
}))

app.post('/kill', (req, res) => {
	console.log(count++);
var args = {
    openid: 'b05NZ2Y1WjbE9fRV9MZTBWWQ==',
    seckillTime: '2018-12-12 00:00:01',
}
let payload=[{
    topic:'PROUDCT_NUMBER',
    messages:[JSON.stringify(args)],
    key:"seckill",
    partition:0
}];
producer.send(payload,function(err,data){
                            console.log(data);
                        });
})

app.listen(port)