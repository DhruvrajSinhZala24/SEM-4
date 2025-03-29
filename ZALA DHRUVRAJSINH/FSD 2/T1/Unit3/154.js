var url=require('url');
var ps=require('fs');
var h=require('http')
var link='https://www.google.com/exam.txt?c1=Hello&c2=FSD+T1+Test&c3=Welcome+to+LJU#ALLTHEBEST';
//output:- hello! 
//welcome to lju fsd2 t1 test 
// #all the best
var q=url.parse(link,true);
x=ps.writeFileSync("Exam.txt",q.query.c1+"!"+"\n"+q.query.c3+" "+q.query.c2+"\n"+q.hash)
var server = h.createServer(
    function (req, res) {
        if (req.url == "/") {
            x=ps.readFileSync("Exam.txt","UTF-8")
            const lines = x.split('\n');
            let html = '<h1 style="color:red">';
            lines.forEach(line => {
              html += line + '<br>'; // Add each line with a line break
            });
            html += '</h1>';
            res.writeHead(200, { "content-type": "text/html" });
            res.write(html);
            res.end();
        }
        else {
            res.writeHead(404, { "content-type": "text/html" });
            res.write("<h5 style='color:red'>Page not found</h5>");
            res.end("\nPlease check the url");
        }
    });
server.listen(5000);
console.log("Thanks!");