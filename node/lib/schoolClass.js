var tea = require('./teacher.js');
var stu = require('./student.js');

function add (teacher, students) {
	tea.add(teacher);

	students.forEach(function(item, index){
		stu.add(item)
	});
}

exports.add = add;