// Check user whether in the data.json file and return userVaild
module.exports = function(app, db){
    app.post("/checkUser", function(req, res){
        let username = req.body.username;
        let password = req.body.password;
        // let users = [];
        let userValid = false;
        console.log("Made it to checkUser");

        if(!req.body){
            return res.sendstatus(400);
        }

        // Connect MongoDB
        // Check user's username and password
        let users = db.collection('users');
        users.find().toArray((err, users) => {
            for(let i = 0; i < users.length; i++){
                if(username == users[i].username && password == users[i].password){
                userValid = true
                }
            }
            res.send(userValid);
        });
    });
}