// Add user to group by username and groupname
module.exports = function (app, db) {
    app.post("/addUsersToGroup", async function (req, res) {

        let user = req.body.username;
        let group = req.body.groupname;

        // let allData = [];
        // let groups = [];

        console.log(user);
        console.log("Made it to addUsersToGroup");

        if (!req.body) {
            return res.sendstatus(400);
        }

        // Connect MongoDB
        // Update one record
        let groups = db.collection('groups');
        await groups.updateOne({ groupname: group }, {$push :{users: user }},(err,docs)=>{
            groups.find({}).toArray((err, groups)=>{
                res.send(groups);
                console.log(groups);
            });
        });
});
}