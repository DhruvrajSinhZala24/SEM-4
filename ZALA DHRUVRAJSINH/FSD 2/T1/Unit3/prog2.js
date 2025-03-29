// create a node js file that opens the requested file and return the content to the client if anything goes wrong then it should display 404 errora
var h = require("http");
var fs=require("fs");
var url1=require('url')
var server = h.createServer(
    function (req, res) {
        var v=url1.parse(req.url,true)
        x=fs.readFile("."+v.path,(err,data)=>{
            if(err){
                res.writeHead(404, { "content-type": "text/html" });
                res.write("<h5 style='color:red'>404 Error! Page not found</h5>");
                res.end("\nPlease check the url");
            }
            else{
                res.writeHead(200, { "content-type": "text/html" });
                res.write(data);
                res.end();
            }
        })    
    });
server.listen(5001);
console.log("Thanks!");