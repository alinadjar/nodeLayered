const http = require('http');
const socketio = require('socket.io');



const server = http.createServer((req, res) => {
    res.end("I'm connected");
});


const io = socketio(server);

io.on('connection', (socket, req) => {
    socket.emit('admission', 'Welcome');
    io.emit('NewMember', 'a new visitor connected');
    
    socket.on('message', (msg) => {
        console.log(msg);
    });
});


server.listen(8000);


