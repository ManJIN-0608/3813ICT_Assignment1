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


// Not figured out (join room)
// module.exports = {
//     connect: function(io, PORT) {
//         var channels=["room1","room2","room3","room4"];
//         var socketRoom = [];
//         var socketRoomnum = [];

//         const chat = io.of('/chat');

//         chat.on('connection', (socket) => {
//             socket.on('message',(message)=>{
//                 for(i=0; i<socketRoom.length; i++){
//                     if(socketRoom[i][0] == socket.id){
//                         chat.to(socketRoom[i][1]).emit('message', message);
//                     }
//                 }
//             });

//             socket.on('channelname',(m)=>{
//                 chat.emit('channelroom', JSON.stringify(channels));
//             });

//             socket.on('numusers', (room)=>{
//                 var usercount = 0;

//                 for (i=0; i<socketRoomnum.length; i++){
//                     if(socketRoomnum[i][0] == room){
//                         usercount = socketRoomnum[i][1];
//                     }
//                 }

//                 chat.in(room).emit('numusers', usercount);
//             });

//             socket.on('joinRoom', (room)=>{
//                 if(channels.includes(room)){
//                     socket.join(room, ()=>{
//                         var inroomSocketarray = false;
//                         for(i=0;i<socketRoom.length;i++){
//                             if(socketRoom[i][0] == socket.id){
//                                 socketRoom[i][1] == room;
//                                 inroom = true;
//                             }
//                         }
//                     if(inroomSocketarray = false){
//                         socketRoom.push([socket.id, room]);
//                         var hasroomnum = false;
//                         for(let j=0;j<socketRoomnum.length;j++){
//                             if(socketRoomnum[j][0] == room){
//                                 socketRoomnum[j][1] = socketRoomnum[j][1]+1;
//                                 hasroomnum = true;
//                             }
//                         }
//                             if(hasroomnum == false){
//                                 socketRoomnum.push([room,1]);
//                             }
//                     }
//                         chat.in(room).emit("notice", "A new user joined");
//                     });
//                     return chat.in(room).emit("joined",room);
//                 }
//             });

//             socket.on('leaveRoom', (room)=>{
//                 for(let i=0;i<socketRoom.length;i++){
//                     if(socketRoom[i][0] == socket.id){
//                         socketRoom.splice(i,1);
//                         socket.leave(room);
//                         chat.to(room).emit("notice", "A user has left")
//                     }
//                 }
//                 for(let j=0;j<socketRoomnum.length;j++){
//                     if(socketRoomnum[j][0] == room){
//                         socketRoomnum[j][1] = socketRoomnum[j][1]-1;
//                         if(socketRoomnum[j][1] == 0){
//                             socketRoomnum.splice(j,1);
//                         }
//                     }
//                 }
//             });

//             socket.on("disconnect",()=>{
//                 chat.emit("disconnect");
//                 for(let i=0;i<socketRoom.length;i++){
//                     if(socketRoom[i][0] == socket.id){
//                         socketRoom.splice(i,1);
//                     }
//                 }
//                 for(let j=0;j<socketRoom.length;j++){
//                     if(socketRoomnum[j][0] == room){
//                         socketRoomnum[j][1] = socketRoomnum[j][1]-1;
//                     }
//                 }
//             });
//         });
//     }
// }