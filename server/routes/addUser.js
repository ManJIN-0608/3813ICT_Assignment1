const fs = require("fs");

// Create a new user by username, email and role
module.exports = function(app, path){
    app.post("/addUser", function(req, res){
        let newUser = {
            "username" : req.body.newUser,
            "email" : req.body.newEmail,
            "role" : req.body.newRole,
        }

        let userExists = false;
        let allData = [];
        let users = [];
        console.log("Made it to addUser");

        if(!req.body){
            return res.sendstatus(400);
        }

        fs.readFile("./data.json", "utf-8", function(err, data){
            if(err) {
                throw err;
            }
            allData = JSON.parse(data);
            for(let i = 0; i < allData.users.length; i++){
                if(allData.users[i].username == newUser.username){
                    userExists = true;
                }
            }

            if(!userExists){
                allData.users.push(newUser);
                users = allData.users;
                console.log(allData);

                let allDataJson = JSON.stringify(allData);
                
                fs.writeFile("./data.json", allDataJson, "utf-8", function(err){
                    if(err){
                        throw err;
                    }
                });
                console.log(users);
                res.send(users);
            }else{
                res.send("User exists");
            }
        });
    });
}