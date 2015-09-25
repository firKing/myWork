
// mongoose 连接
var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/NodeJS');

// 数据库连接
db.on('error', function(error){
	console.log(error);
});

//Schemac结构
var testSchema = mongoose.Schema({
	name: {type: String, default: '匿名用户'},
	title: {type: String},
	content: {type: String},
	time: {type: Date, default: Date.now},
	age: {type: Number}
});

// 添加mongoose实例方法
testSchema.methods.findByName = function(name, cb){
	return this.model('mongoose').find({name: name}, cb);
}

// 添加mongoose静态方法, 静态方法在model层就可以使用
testSchema.statics.findByTitle = function(title, cb){
	return this.model('mongoose').find({title: title}, cb);
}

// model
var testModel = db.model('mongoose', testSchema);

// //增加记录	基于entity操作
// var doc = {name: 'jone', title: 'weather', content: 'the weather is good', age: 20};

// var testEntity = new testModel(doc);

// testEntity.save(function(err){
// 	if (err) {
// 		console.log(err);
// 	}else{
// 		console.log('saved ok');
// 	}

// 	// 关闭数据库连接
// 	// db.close();
// });

// // 增加记录	基于model操作
// var doc = {name: 'tony', title: 'weather', content: 'the weather is good', age: 20};

// testModel.create(doc, function(err){
// 	if (err) {
// 		console.log(err);
// 	} else{
// 		console.log('saved ok');
// 	};

// 	// 关闭数据库连接
// 	// db.close();
// });

// //修改记录	testModel.update(conditions, update, options, callback);
// var conditions = {name: 'tom'};
// var update = {$set: {title: 'food', content: 'the food is good'}};
// var options = {};

// testModel.update(conditions, update, options, function(err){
// 	if (err) {
// 		console.log(err);
// 	} else{
// 		console.log('updated ok');
// 	};
// });

// 查询 基于实例方法的查询
var findEntity = new testModel({});
findEntity.findByName('tony', function (error, result) {
	if (error) {
		console.log(error);
	} else{
		console.log(result);
	};
});

// 查询 基于静态方法的查询
testModel.findByTitle('food', function (error, result) {
	if (error) {
		console.log(error);
	} else{
		console.log(result);
	};
})

//mongoose find  testModel.find(criteria, fields, options, callback);
var criteria = {name: 'jone'};
var fields = {name: 1, time: 1};
var options = {};

testModel.find(criteria, fields, options, function (error, result){
	if (error) {
		console.log(error);
	} else{
		console.log(result);
	};
});

//删除记录
var conditions = {name: 'jone'};
testModel.remove(conditions, function (error) {
	if (error) {
		console.log(error);
	} else{
		console.log('deleted ok');
	};
});