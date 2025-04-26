var express=require('express');
var app=express();
var path=require('path');
var bp=require('body-parser')
var url=bp.urlencoded({extended:true})
var staticpath=path.join(__dirname,'../Public');
app.use(express.static(staticpath,{index:'index.html'}));//if we only write staticpath and file name is index.html then no need to write it if html file name is diffrent then only need to write
app.post('/login',url,(req,res,next)=>{
    res.set('content-type','text/html');
    res.write(`<h1>Welcome ${req.body.name}</h1>`)
    res.write(`<h1>Your Email id is ${req.body.mail}</h1>`)
    next();
   
});
app.post('/login',url,(req,res)=>{
    if(req.body.check=='on'){
        res.write("thank you for subscription");
        res.write("<a  href='/'>Logout</a>");
    }
    else{
        res.write("You can subscribe for updates");
        res.write("<a href='/subscribe'>Subscribe</a>");
    }
    res.send()
});
app.get('/subscribe',(req,res)=>{
    res.set('content-type','text/html');
    res.write("Thank you for subscription")
    res.write("<a  href='/'>Logout</a>")
    res.send()
});
app.listen(3001)