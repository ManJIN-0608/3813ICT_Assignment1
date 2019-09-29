// Module returns an array containing all channel objects
module.exports = function(app, db){
    app.post("/fetchAllChannels", function(req, res){
        let channelname = req.body.channelname;
        // let channels = {};
        console.log("Made it to fetchAllChannels");
        console.log(channelname);

        let channels = db.collection('channels');
        channels.find({}).toArray((err, channels) => {
            res.send(channels);
            console.log(channels);
        });
    });
}