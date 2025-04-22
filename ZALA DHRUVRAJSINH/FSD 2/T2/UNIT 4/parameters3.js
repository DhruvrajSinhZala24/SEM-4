var express=require('express');
var app=express();
app.get('/:id',(req,res)=>{
    res.write("This id you specified is:- "+req.params.id)
    res.write(JSON.stringify(req.params)) //or can write res.send(req.params) directly 
    res.send()
}).listen(3000)