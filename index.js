var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    console.log('Request Received');

    //var body = '';

    res.writeHead(200, {
        'Context-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*'
    });

    req.on('data', function (chunk) {
        //body += chunk;
        console.log(chunk);

    });

    req.on('end', function() {
    //    fs.writeFile('file.json', body, 'utf8');
    //    res.end('{"msg": "OK"}');
       console.log("----");
    })

}).listen(3001, '0.0.0.0'); 

console.log('Server running at http://127.0.0.1:4560/');
