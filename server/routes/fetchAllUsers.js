// Module returns an array containing all users objects
module.exports = function(app, db){
    app.post("/fetchAllUsers", function(req, res){
        let username = req.body.username;
        // let users = {};
        console.log("Made it to fetchAllUsers");
        console.log(username);

        let users = db.collection('users');
        users.find({}).toArray((err, users) => {
            res.send(users);
            console.log(users);
        });
    });
}