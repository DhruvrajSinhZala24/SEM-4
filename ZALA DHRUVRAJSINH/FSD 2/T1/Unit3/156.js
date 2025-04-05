var http = require('http');
var ds= require('fs')
http.createServer(function (req, res) {
    if(req.url=='/'){
        res.writeHead(200, {'Content-Type': 'text/html'}); 
        res.write("<p style='color:blue;font-size:32px;'>Welcome to login page</p>")
        res.end()
    }
    if(req.url=='/login'){
        res.writeHead(200, {'Content-Type': 'text/html'}); 
        res.write("<form>")
        res.write("Username: <input type='text'>")
        res.write("Password: <input type='password'>")
        res.write("<input type='submit'>")
        res.write("<input type='reset'>")
        res.write("</form>")
        res.end()
    }
    if(req.url=='/Gallery'){
        res.writeHead(200, {'Content-Type': 'image/jpg'});
        x=ds.readFileSync("hello.png")
        res.write(x)
        res.end(); 
    }
}).listen(5000); 