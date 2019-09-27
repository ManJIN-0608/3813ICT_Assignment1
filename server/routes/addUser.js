const fs = require("fs");

// Create a new user by username, email and role
module.exports = function (app, db) {
    app.post("/addUser", async function (req, res) {
        let newUser = {
            "username": req.body.newUser,
            "password": req.body.newPassword,
            "email": req.body.newEmail,
            "role": req.body.newRole,
        }

        let userExists = false;
        // let allData = [];
        // let users = [];
        console.log("Made it to addUser");

        if (!req.body) {
            return res.sendstatus(400);
        }

        let users = db.collection('users');
        // users.insertOne(newUser);
        await users.find().toArray((err, users) => { 
            // console.log(users)
            for (let i = 0; i < users.length; i++) {
                    if (users[i].username == newUser.username) {
                        userExists = true;
                    }
            }        
            // console.log(userExists);

        });

        if(userExists == false){
            console.log(userExists);
            users.insertOne(newUser);
            users.find().toArray((err, users) => {
                res.send(users);
             });
        }else{
            users.find().toArray((err, users) => {
                res.send(users);
             });
        }

        // fs.readFile("./ data.json", "utf-8", function(err, data){
        //     if(err) {
        //         throw err;
        //     }
        //     allData = JSON.parse(data);
        //     for(let i = 0; i < allData.users.length; i++){
        //         if(allData.users[i].username == newUser.username){
        //             userExists = true;
        //         }
        //     }

        //     if(!userExists){
        //         allData.users.push(newUser);
        //         users = allData.users;
        //         console.log(allData);

        //         let allDataJson = JSON.stringify(allData);

        //         fs.writeFile("./data.json", allDataJson, "utf-8", function(err){
        //             if(err){
        //                 throw err;
        //             }
        //         });
        //         console.log(users);
        //         res.send(users);
        //     }else{
        //         res.send("User exists");
        //     }
        // });
    });
}