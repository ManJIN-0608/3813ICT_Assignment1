const express = require('express');
const app = express();
const path = require('path');

//Cross origin resourse sharing to cater for port 4200 to port 3000
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Point static path to dist if you want use your own server to serve Angular webpage
app.use(express.static('http://localhost:4200'));


var http = require('http').Server(app);
let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: "+ host + " port: " + port);
});

require("./routes/checkUser.js")(app, path);
require("./routes/fetchAllUsers.js")(app, path);
require("./routes/addUser.js")(app, path);
require("./routes/fetchUser.js")(app, path);
require("./routes/deleteUser.js")(app, path);
require("./routes/addGroup.js")(app, path);
require("./routes/fetchAllGroups.js")(app, path);
require("./routes/deleteGroup.js")(app, path);
require("./routes/addUsersToGroup.js")(app, path);
require("./routes/addChannel.js")(app, path);
require("./routes/fetchAllChannels.js")(app, path);
require("./routes/deleteChannel.js")(app, path);
require("./routes/addUsersToChannel.js")(app, path);
require("./routes/deleteUsersFromChannel.js")(app, path);
