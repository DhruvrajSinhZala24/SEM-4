var express=require('express');
var app=express();
var cookie=require('cookie-parser')
app.use(cookie())
app.get('/',(req,res)=>{
    res.cookie('mycookie','express');
    res.send("cookie created");
}).listen(3000)