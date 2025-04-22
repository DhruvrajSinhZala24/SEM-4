var express=require('express');
var app=express();
app.get('/things/:name/:id',(req,res)=>{
    res.write('Name: '+req.params.name+' id: '+req.params.id)
    res.send()
}).listen(3000) //http://localhost:3000/things/xyz/123