const fs = require("fs");

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

        let channels = db.collection('channels');
        // users.insertOne(newUser);
        await channels.find().toArray((err, channels) => { 
            // console.log(users)
            for (let i = 0; i < channels.length; i++) {
                    if (channels[i].channelname == newChannel.channelname) {
                        channelExists = true;
                    }
            }        
            // console.log(userExists);

        });

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

        // fs.readFile("./data.json", "utf-8", function(err, data){
        //     if(err) {
        //         throw err;
        //     }
        //     allData = JSON.parse(data);
        //     for(let i = 0; i < allData.channels.length; i++){
        //         if(allData.channels[i].channelname == newChannel.channelname){
        //             channelExists = true;
        //         }
        //     }
        //     if(!channelExists){
        //         allData.channels.push(newChannel);
        //         channels = allData.channels;
        //         console.log(allData);

        //         let allDataJson = JSON.stringify(allData);
                
        //         fs.writeFile("./data.json", allDataJson, "utf-8", function(err){
        //             if(err){
        //                 throw err;
        //             }
        //         });
        //         console.log(channels);
        //         res.send(channels);
        //     }else{
        //         res.send("Channel exists");
        //     }
        // });
    });
}