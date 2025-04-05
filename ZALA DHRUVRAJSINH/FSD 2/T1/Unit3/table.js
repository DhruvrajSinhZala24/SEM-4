var http = require('http'); 
http.createServer(function (req, res) { 
  res.writeHead(200, {'Content-Type': 'text/html'}); 
  res.write('<table border=1><tr><td>Parth</td></tr><tr><td>Satyam</td></tr><tr><td>Dhruv</td></tr></table>'); 
  res.end(); 
}).listen(5000); 

