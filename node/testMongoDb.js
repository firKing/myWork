var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost','test');
db.on('error', console.error.bind(console, '连接错误:'));
db.once('open', function(){

	var PersonSchema = new mongoose.Schema({
		name:String,
		type:String
	});

	// 追加speak方法 ##实例方法##
	PersonSchema.methods.speak = function(){
		console.log('我的名字叫'+ this.name);
	}

	// 查询类似数据  ##实例方法##
	PersonSchema.methods.findSimilarTypes = function(cb){
		return this.model('Person').find({type:this.type}, cb);
	}

	// ##静态方法##
	PersonSchema.statics.findByName = function(name, cb){
		return this.model('Person').find({name:new RegExp(name, 'i')}, cb);
	}


	var PersonModel = db.model('Person', PersonSchema);

	var kim = new PersonModel({name:'peter', type:'master'});
	var key = new PersonModel({name:'key', type:'coder'});


	// // 保存 创建新数据的方法, 会自动生成主键: _id
	// kim.save(function(error){
	// 		    if(error) {
	// 		        console.log(error);
	// 		    } else {
	// 		        console.log('saved OK!');
	// 		    }
	// 		});
	// key.save(function(error){
	// 		    if(error) {
	// 		        console.log(error);
	// 		    } else {
	// 		        console.log('saved OK!');
	// 		    }
	// 		});

	// 根据姓名查找 ##静态方法##
	PersonModel.findByName('kin',function(err,persons){
    	persons.forEach(function(element, index){
    		console.log(element);
    	});
  	});


	// 根据类型查找 ##实例方法##
	kim.findSimilarTypes(function(err, persons){
		console.log(persons);
	});

	kim.speak();
	key.speak();
});
