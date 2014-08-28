var mongoose = require('mongoose');
var Patient = mongoose.model('Patient');

//Get all the Patients
exports.getPatients = function(req, res){
	Patient.find(function(err, patients){
		if(err)
			res.send(500, err.message);

		console.log('GET /patients')
			res.status(200).jsonp(patients);
	});
};

//Get a specific patient with the ID
exports.getPatient = function(req, res){
	Patient.findById(req.params.id, function(err, patient){
		if(err)
			return res.send(500, err.message);
		console.log('GET /patient/' + req.params.id);
			res.status(200).jsonp(patient);
	});
};

exports.addPatient = function(req, res){
	console.log("POST");
	console.log(req.body);

	var patient = new Patient({
		first_name: req.body.first_name,
		last_name: 	req.body.last_name,
		phone: 		req.body.phone,
		address: 	req.body.address,
		age: 		req.body.age,
		genre: 		req.body.genre,
		url: 		req.body.url
	});

	patient.save(function(err, patient){
		if(err)
			return res.send(500, err.message);
		res.status(200).jsonp(patient);
	});
};

exports.updatePatient = function(req, res){
	Patient.getPatient(req.params.id, function (err, patient){
		patient.first_name = req.body.first_name;
		patient.last_name  = req.body.last_name;
		patient.phone 	   = req.body.phone;
		patient.address    = req.body.address;
		patient.age 	   = req.body.age;
		patient.genre 	   = req.body.genre;
		patient.url 	   = req.body.url;

		patient.save(function(err){
			if(err)
				return res.send(500, err.message);
			res.status(200).jsonp(patient);
		});
	});
};

exports.deletePatient = function(req, res){
	Patient.getPatient(req.params.id, function(err, patient){
		patient.remove(function(err){
			if(err)
				return res.send(500, err.message);
			res.status(200);
		});
	});
};