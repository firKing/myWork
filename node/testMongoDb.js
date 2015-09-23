var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost','test');
db.on('error', console.error.bind(console, '连接错误:'));
db.once('open', function(){

	var PersonSchema = new mongoose.Schema({
		name:String
	});

	var PersonModel = db.model('Person', PersonSchema);

	var PersonEntity = new PersonModel({name:'key'});
	
	console.log(PersonEntity.name);
});
