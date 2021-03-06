const fs = require("fs");

// Delete user by username
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
            allData.users = users;
                // Removes selected user from user array
            for(let i = 0; i < users.length; i++){
                if(users[i].username == username){
                    console.log(users[i]);
                    users.splice([i], 1);
                }
            }

            let allDataJson = JSON.stringify(allData);
                fs.writeFile("./data.json", allDataJson, "utf-8", function(err){
                    if(err){
                        throw err;
                    }
                });
                // console.log(allData);
                // console.log(allData.users);
                // console.log(allDataJson);
                console.log(users);
                res.send(users);
        });
    });
}