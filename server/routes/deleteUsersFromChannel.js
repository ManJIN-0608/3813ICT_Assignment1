// Delete user from channel by channelname and username
module.exports = function (app, db) {
    app.post("/deleteUsersFromChannel", async function (req, res) {

        let user = req.body.username;
        let channel = req.body.channelname;

        // let allData = [];
        // let channels = [];

        console.log(user);
        console.log("Made it to deleteUsersFromChannel");

        if (!req.body) {
            return res.sendstatus(400);
        }

        // Connect MongoDB
        // Update one record
        let channels = db.collection('channels');
        await channels.updateOne({ channelname: channel }, {$pull :{users: user }},(err,docs)=>{
            channels.find({}).toArray((err, channels)=>{
                res.send(channels);
                console.log(channels);
            });
        });
});
}