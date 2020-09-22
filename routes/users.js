var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
	var db = require("../database/db_mongodb");
	var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
	Users.find({}).lean().exec(
		function (e, docs){
			res.send({ "users": docs });
		}
	);
});

/* POST to add user */
router.post('/adduser', function (req, res){
	var db = require("../database/db_mongodb");
	var userName = req.body.username;
	var userEmail = req.body.usermail;

	var Users = db.Mongoose.model('usercollection', db.UserSchema, 'usercollection');
	var user = new Users({ username: userName, email: userEmail });
	user.save(function ( err ) {
		if (err) {
			console.log("Error! " + err.message);
			return err;
		} else {
			console.log("Post saved");
			res.redirect("users");
		}
	});
});

module.exports = router;
