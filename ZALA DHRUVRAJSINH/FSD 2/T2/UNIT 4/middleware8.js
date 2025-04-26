var expr = require("express");
var app = expr();
app.get('/hello',(req,res,next)=>{
    res.write('request recevied on '+new Date())
    next()
})
app.get('/hello',(req,res,next)=>{
    console.log('hello1')
    next()
})
app.get('/hello',(req,res,next)=>{
    res.send()
})
app.listen(5000);