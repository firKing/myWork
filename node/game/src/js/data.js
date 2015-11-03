var data = [];

for (var i = 1; i <= 40; i++) {
    var item = {};
    item.name =  i-1;
    if (i < 10) {
        item.value = require('../img/h_0' + i + '.jpg');
    } else{
        item.value = require('../img/h_' + i + '.jpg');
    };

    data.push(item);
};

module.exports = data;