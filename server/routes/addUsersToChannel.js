module.exports = function (app, db) {
    app.post("/addUsersToChannel", async function (req, res) {

        let user = req.body.username;
        let channel = req.body.channelname;

        // let allData = [];
        // let channels = [];

        console.log(user);
        console.log("Made it to addUsersToChannel");

        if (!req.body) {
            return res.sendstatus(400);
        }

        let channels = db.collection('channels');
        await channels.updateOne({ channelname: channel }, {$push :{users: user }},(err,docs)=>{
            channels.find({}).toArray((err, channels)=>{
                res.send(channels);
                console.log(channels);
            });
        });

        // fs.readFile("./data.json", "utf-8", function (err, data) {
        //     if (err) {
        //         throw err;
        //     }
        //     allData = JSON.parse(data);
        //     for (let i = 0; i < allData.channels.length; i++) {
        //         // Prevent duplicatoin of users
        //         if (allData.channels[i].channelname == channel && allData.channels[i].users.indexOf(user) == -1) {
        //             allData.channels[i].users.push(user);
        //         }
        //     }

        //     channels = allData.channels;
        //     console.log(allData);
            
        //     let allDataJson = JSON.stringify(allData);
        //     fs.writeFile("./data.json", allDataJson, "utf-8", function (err) {
        //         if (err) {
        //             throw err;
        //         }
        //     });
        //     console.log(channels);
        //     res.send(channels);
        // });
});
}