// Delete user by username
module.exports = function(app, db){
    app.post("/deleteUser", function(req, res){
        let username = req.body.username;
        console.log("Made it to deleteUser");
        console.log(username);

        // Connect MongoDB
        // Delete one record
        var myquery = {username:req.body.username};
        let users = db.collection('users');
        users.deleteOne(myquery,(err,docs)=>{
            users.find({}).toArray((err, users)=>{
                res.send(users);
                console.log(users);
            });
        });
    });
}