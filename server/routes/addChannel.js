// Create a new channel by channelname and groupname
module.exports = function(app, db){
    app.post("/addChannel", async function(req, res){
        let newChannel = {
            "channelname": req.body.channelname,
            "groupname" : req.body.groupname,
            "users" : []
        }
        

        console.log(newChannel.channelname);
        console.log(newChannel.groupname);

        let channelExists = false;
        // let allData = [];
        // let channels = [];
        console.log("Made it to addChannel");

        if(!req.body){
            return res.sendstatus(400);
        }

        // Connect MondoDB
        let channels = db.collection('channels');
        await channels.find().toArray((err, channels) => { 
            // console.log(users)
            for (let i = 0; i < channels.length; i++) {
                    if (channels[i].channelname == newChannel.channelname) {
                        channelExists = true;
                    }
            }        
            // console.log(userExists);

        });

        // Check the channel exists or not and insert one record
        if(channelExists == false){
            //console.log(userExists);
            channels.insertOne(newChannel);
            channels.find().toArray((err, channels) => {
                res.send(channels);
                console.log(channels);
             });
        }else{
            channels.find().toArray((err, channels) => {
                res.send(channels);
             });
        }
    });
}