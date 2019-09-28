module.exports = {
    connect: function(io, PORT) {
        // When a connection request comes in output to the server console
        io.on('connection', (socket) => {
            console.log('user connection on port' + PORT + ':' + socket.id);

            // When a message comes in emit it back to all sockets with the message
            socket.on('message', (message) => {
                io.emit('message', message);
            });
        });
    }
}