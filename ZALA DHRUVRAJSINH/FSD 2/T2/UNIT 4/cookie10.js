var express=require('express');
var app=express();
var cookie=require('cookie-parser')
app.use(cookie())
app.get('/',(req,res,next)=>{
    res.cookie('username','xyz');
    res.cookie('lastname','pqr');
    next();
})
app.get('/',(req,res,next)=>{
    console.log(req.cookies.username);
    next()
})
app.get('/',(req,res)=>{
   res.clearCookie('lastname')
    res.send('cookie deleted')
}).listen(5000)