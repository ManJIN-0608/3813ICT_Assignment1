// Delete channel by channelname
module.exports = function(app, db){
    app.post("/deleteChannel", function(req, res){
        let channelname = req.body.channelname;
        console.log("Made it to deleteChannel");
        console.log(channelname);

        // Connect MongoDB
        // Delete one record
        var myquery = {channelname:req.body.channelname};
        let channels = db.collection('channels');
        channels.deleteOne(myquery,(err,docs)=>{
            channels.find({}).toArray((err, channels)=>{
                res.send(channels);
                console.log(channels);
            });
        });
    });
}