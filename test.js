var img = require('./index.js');
img(' http://data.zz.baidu.com/urls?site=www.fe178.com&token=hzK64gK4fkBzseX2','http://www.fe178.com/?p=93788', function(err, res, rep) {
	console.log(rep)
});