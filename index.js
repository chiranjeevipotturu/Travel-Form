var express = require('express');

var app = express();
var mongoose = require('mongoose');

app.use(express.static('public'));

mongoose.connect('mongodb://travelform:travelform@ds053126.mlab.com:53126/chiranjeevi', {},function(){
	console.log('connect to data base')

	app.listen('9999',function(){
	console.log('is server running')
	})
})

var travel = mongoose.model('Travel',{
	firstName: String,
	lastName: String,
	eMail: String,
	phoneNumber: Number,
	from: String,
	destination: String,
	date: Date
})

app.post('/',function(req, res){
	travel.create({
		firstName:request.body.firstName,
	    lastName:request.body.lastName,
	    eMail: request.body.eMail,
	    phoneNumber: request.body.phoneNumber,
	    from: request.body.from,
	    destination: request.body.destination,
	    date: request.body.date

	})
})



