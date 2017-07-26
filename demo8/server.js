var http = require('http');
var jade = require('jade');

http.createServer(function (req,res) {
    res.writeHead(200,{
        'Content-Type': 'text/plain'  // 换成text/html可以展示html格式
    })

    html2jade.convertDocument(document,{},function (err,jade) {
        console.log(jade);
        res.end(jade);
    })

}).listen(1337,'127.0.0.1');
console.log('server running');
