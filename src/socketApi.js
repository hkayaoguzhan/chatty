const socketio = require('socket.io');

const io = socketio();

const socketApi = {
    io: io
};

io.on('connection', socket => {
    console.log('A user loggin');
})

module.exports = socketApi;