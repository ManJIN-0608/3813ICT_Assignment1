// Delete group by groupname
module.exports = function(app, db){
    app.post("/deleteGroup", function(req, res){
        let groupname = req.body.groupname;
        console.log("Made it to deleteGroup");
        console.log(groupname);

        // Connect MongoDB
        // Delete one record
        var myquery = {groupname:req.body.groupname};
        let groups = db.collection('groups');
        groups.deleteOne(myquery,(err,docs)=>{
            groups.find({}).toArray((err, groups)=>{
                res.send(groups);
                console.log(groups);
            });
        });
    });
}