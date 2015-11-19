// Import mongoose and bcrypt
var mongoose = require('mongoose');

// need an alias for mongoose.Schema
var Schema = mongoose.Schema;

// Define our user Schema
var ContactSchema = new Schema({
	name: String,
	phone: Number,
	email: String
}, {
	collection: 'contactInfo'
});

module.exports = mongoose.model('Contact', ContactSchema);