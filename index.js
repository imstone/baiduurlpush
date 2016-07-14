
var request = require('request');

function push(url, list, cb){
    if (typeof list === 'string') {
        list = [list];
    }
    // do the POST call  
    // 服务器端发送REST请求 
    var reqPost = request(url, {
        form: list.join('\n')
    }, function(err, res, rep) {
        cb(err, res, rep);
    });   
}

module.exports = push;
