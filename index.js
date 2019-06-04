var http = require('http');

//create a server object:
http.createServer(function (req, res) {
	  var html = [
        '<!DOCTYPE html>',
        '<html>',
            '<head>',
                '<meta charset="utf-8" />',
                '<title>微服務風雲</title>',
            '</head>',
            '<body>',
                '<p>Hello World  微服務  from  OpenShift Online 公共雲 PaaS 平台 !</p><br><p></p>',
            '</body>',
        '</html>'
    ].join('');
  res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  res.write(html); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080