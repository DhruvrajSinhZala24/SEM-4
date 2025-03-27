var h = require("http");
var server = h.createServer(
    function (req, res) {
        if (req.url == "/") {
            res.writeHead(200, { "content-type": "text/html" });
            res.write("<h1> Home page </h1>");
            res.end();
        }
        else if (req.url == "/about") {
            res.writeHead(200, { "content-type": "text/html" });
            res.write("<h1> About Page </h1>");
            res.end();
        }
        else {
            res.writeHead(404, { "content-type": "text/html" });
            res.write("<h5 style='color:red'>Page not found</h5>");
            res.end("\nPlease check the url");
            /* res.write("Bye");*/ //display nothing if you add any content after res.end
        }
    });
server.listen(5000);
console.log("Thanks!");