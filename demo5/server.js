var http = require('http');
var jade = require('jade');

http.createServer(function (req,res) {
    res.writeHead(200,{
        'Content-Type': 'text/plain'  // 换成text/html可以展示html格式
    })

    // 1.jade.compile
    // var fn = jade.compile('div #{course}',{});
    // var html = fn({course: 'jade'});
    // res.end(html);
    //
    // 2.jade.render
    // var html = jade.render('div #{course}', {course: 'jade render'});
    // res.end(html);
    //
    //3.jade.renderFile
    var html = jade.renderFile('index.jade',{course: 'jade renderFile',pretty:true});  // 这里的pretty:true是让显示美观
    res.end(html);

}).listen(1337,'127.0.0.1');
console.log('server running');
