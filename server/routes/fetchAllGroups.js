// Module returns an array containing all group objects
module.exports = function(app, db){
    app.post("/fetchAllGroups", function(req, res){
        let groupname = req.body.groupname;
        // let groups = {};
        console.log("Made it to fetchAllGroups");
        console.log(groupname);

        let groups = db.collection('groups');
        groups.find({}).toArray((err, groups) => {
            res.send(groups);
            console.log(groups);
        });
    });
}