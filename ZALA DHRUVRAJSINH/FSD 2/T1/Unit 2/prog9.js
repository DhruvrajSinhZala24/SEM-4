// Program: Write node js script to request server to display JSON data on
var http=require("http");
var server=http.createServer(function(req,res)
{
if(req.url=="/")
{
const a={"Name":"ABC", "Age":35};
res.writeHead(200,{"content-type":"application/json"});
res.write("Thank you..!");
res.write(JSON.stringify(a));
res.end();
}
});
server.listen(5000);