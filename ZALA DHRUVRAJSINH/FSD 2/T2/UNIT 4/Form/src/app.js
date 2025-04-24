var express=require('express');
var app=express();
var path=require('path');
var staticpath=path.join(__dirname,'../Public');
app.use(express.static(staticpath,{index:'second.html'}));
app.get('/process_get',(req,res)=>{
    firstname=req.query.fname
    lastname=req.query.lname
    res.set('content-type','text/html')
    res.write(`<h1 style='color:red;'>Welcome ${firstname} ${lastname}</h1>`)
    res.send()
}).listen(3000)