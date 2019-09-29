// Delete user from group by groupname and username
module.exports = function (app, db) {
    app.post("/deleteUsersFromGroup", async function (req, res) {

        let user = req.body.username;
        let group = req.body.groupname;

        // let allData = [];
        // let groups = [];

        console.log(user);
        console.log("Made it to deleteUsersFromGroup");

        if (!req.body) {
            return res.sendstatus(400);
        }

        let groups = db.collection('groups');
        await groups.updateOne({ groupname: group }, {$pull :{users: user }},(err,docs)=>{
            groups.find({}).toArray((err, groups)=>{
                res.send(groups);
                console.log(groups);
            });
        });
});
}