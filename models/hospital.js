var mongoose = require("mongoose"),
	Schema   = mongoose.Schema;


var patientSchema = new Schema({
	first_name 	: {type : String},
	last_name  	: {type : String},
	phone 		: {type : String},
	address 	: {type : String},
	age  		: {type : Number},
	genre  		: {type : String, 
				enum: ['Male' , 'Female']},
	url 		: {type : String}
});

module.exports = mongoose.model('Patient' , patientSchema);