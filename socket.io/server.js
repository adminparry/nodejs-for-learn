const http = require('http');
const express = require('express');
const app = express();
const server = http.Server(app);
const io = require('socket.io')(server, {
    pingTimeout: 5000,
    pingInterval: 2000
});
const path = require('path');
const port = process.env.port || 3000;

const view = f => path.resolve(__dirname, 'view', f);
app.use(express.static('node_modules/socket.io-client/dist', {}));

app.get('/', (req, res) => {
    res.sendFile(view('index.html'));
})
io.on('connection', client => {

    client.on('chat message', function(msg){
        io.emit('send message', msg);
        console.log('message: ' + msg);
    });
    client.on('disconnect', () => {
        console.log('user disconnect')
    })
})
server.listen(port)