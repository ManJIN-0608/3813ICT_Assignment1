const fs = require("fs");

module.exports = function(app, path){
    app.post("/deleteUser", function(req, res){
        let username = req.body.username;
        let allData = [];
        let users = [];
        console.log("Made it to deleteUser");
        console.log(username);

        fs.readFile("./data.json", "utf8", function(err, data){
            if(err){
                throw err;
            }
            allData = JSON.parse(data);
            users = allData.users;
                // Removes active user from user array
            for(let i = 0; i < users.length; i++){
                if(users[i].username == username){
                    console.log(users[i]);
                    users.splice([i], 1);
                }
            }
            console.log(users);
            allDataJson = JSON.stringify(users);
                fs.writeFile("./data.json", allDataJson, "utf-8", function(err){
                    if(err){
                        throw err;
                    }
                });
                console.log(users);
                res.send(users);
        });
    });
}