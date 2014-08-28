var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	methodOverride = require("method-override");
	mongoose = require("mongoose");


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(methodOverride());


app.get('/', function(req, res){
	res.send("Hello world");
});


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/patients' , function(err, res){
	if(err) throw err;
	console.log("Connected to Database");
});

var models = require('./models/hospital')(app, mongoose);

var PatientCtrl = require('./controllers/patients');

	
app.get('/patients',PatientCtrl.getPatients);
app.post('/patients',PatientCtrl.addPatient);

app.get('/patients/:id', PatientCtrl.getPatient);
app.put('/patients/:id', PatientCtrl.updatePatient);
app.delete('/patients/:id', PatientCtrl.deletePatient);



app.listen(3000, function(){
	console.log("Node server running on http://localhost:3000");
});

