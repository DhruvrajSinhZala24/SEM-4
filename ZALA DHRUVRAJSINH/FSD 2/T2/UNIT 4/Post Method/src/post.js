// write a expressjs script to print message in next line splitting by "," And use get method to submit the data.html file contains form of text area for the message and submit button
var express=require('express');
var app=express();
var path=require('path');
var bp=require('body-parser')
var url=bp.urlencoded({extended:true})
var staticpath=path.join(__dirname,'../Public');
app.use(express.static(staticpath,{index:'second.html'}));
app.post('/process_get',url,(req,res)=>{
    firstname=req.body.fname;
    lastname=req.body.lname;
    res.write(`FirstName:-${firstname} And LastName:- ${lastname}`)
    res.send()
}).listen(3000)