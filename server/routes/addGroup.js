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
    });
}