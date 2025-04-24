// write express script to get form data using get method and display data in json format in next page named second page
var express=require('express');
var app=express();
var path=require('path');
var staticpath=path.join(__dirname,'../Public');
app.use(express.static(staticpath,{index:'second.html'}));
app.get('/second_page',(req,res)=>{
    var obj={'FirstName':req.query.fname,'LastName':req.query.lname}
    res.set('content-type','text/html')
    res.write(`<h1 style='color:red;'>${JSON.stringify(obj)}</h1>`)
    res.send()
}).listen(3000)