// Write a node.js script to print 1st 10 prime numbers on browser in table of 
// 10 rows. Odd no. of rows should render in blue color and even no. of rows 
// should render in red color.
var http = require('http'); 
function prime_number(num){
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
http.createServer(function (req, res) { 
  res.writeHead(200, {'Content-Type': 'text/html'}); 
  res.write('<table border=1>');
  count=0
  for(let i=2;i<100;i++){
    x=prime_number(i)
    if(x){
        count+=1
        if(count%2==0){
            color='red'
        }
        else{
            color='blue'
        }
        res.write(`<tr style="background-color:${color}"><td>${i}</td></tr>`)
    }
    if(count==10){
        break;
    }
  } 
  res.write("</table>")
  res.end(); 
}).listen(5000); 