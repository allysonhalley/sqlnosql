var pg = require('pg');
pg.connect('mongodb://localhost:27017/sqlnosql');

var userSchema = new pg.Schema({
	username: String,
	email: String
}, { collection: 'usercollection'}
);

module.exports = { Mongoose: mongoose, UserSchema: userSchema }