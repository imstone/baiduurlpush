
var http = require('http');

function app(url){
	var optionspost = {  
        host : 'data.zz.baidu.com',  
        port : '80',  
        path : '/urls?site=www.fe178.com&token=hzK64gK4fkBzseX2',  
        method : 'POST'
    };  

    // do the POST call  
    // 服务器端发送REST请求  
    var reqPost = http.request(optionspost, function(resPost) {  
        console.log(resPost)
    });  

    reqPost.end();  

    reqPost.on('error', function(e) {  
        console.error(e);  
    });  
}

module.exports = app;
