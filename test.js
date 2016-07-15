var img = require('./index.js');
// img(' http://data.zz.baidu.com/urls?site=www.fe178.com&token=hzK64gK4fkBzseX2','http://www.fe178.com/?p=95577', function(err, res, rep) {
// 	console.log(rep)
// });


// }
var i =25009
setInterval(function(){
	i++
	img(' http://data.zz.baidu.com/urls?site=www.fe178.com&token=hzK64gK4fkBzseX2','www.fe178.com/?p='+i, function(err, res, rep) {
		console.log(rep)
		console.log(i)

	});
},20)