const fs = require("fs");

// Create a new group by groupname
module.exports = function(app, db){
    app.post("/addGroup", async function(req, res){
        let newGroup = {
            "groupname" : req.body.groupname,
            "users" : []
        }
        

        let groupExists = false;
        // let allData = [];
        // let groups = [];
        console.log("Made it to addGroup");

        if(!req.body){
            return res.sendstatus(400);
        }

        let groups = db.collection('groups');
        // users.insertOne(newUser);
        await groups.find().toArray((err, groups) => { 
            // console.log(users)
            for (let i = 0; i < groups.length; i++) {
                    if (groups[i].groupname == newGroup.groupname) {
                        groupExists = true;
                    }
            }        
            // console.log(userExists);

        });

        if(groupExists == false){
            //console.log(userExists);
            groups.insertOne(newGroup);
            groups.find().toArray((err, groups) => {
                res.send(groups);
                console.log(groups);
             });
        }else{
            groups.find().toArray((err, groups) => {
                res.send(groups);
             });
        }

        // fs.readFile("./data.json", "utf-8", function(err, data){
        //     if(err) {
        //         throw err;
        //     }
        //     allData = JSON.parse(data);
        //     for(let i = 0; i < allData.groups.length; i++){
        //         if(allData.groups[i].groupname == newGroup.groupname){
        //             groupExists = true;
        //         }
        //     }
        //     if(!groupExists){
        //         allData.groups.push(newGroup);
        //         groups = allData.groups;
        //         console.log(allData);

        //         let allDataJson = JSON.stringify(allData);
                
        //         fs.writeFile("./data.json", allDataJson, "utf-8", function(err){
        //             if(err){
        //                 throw err;
        //             }
        //         });
        //         console.log(groups);
        //         res.send(groups);
        //     }else{
        //         res.send("Group exists");
        //     }
        // });
    });
}