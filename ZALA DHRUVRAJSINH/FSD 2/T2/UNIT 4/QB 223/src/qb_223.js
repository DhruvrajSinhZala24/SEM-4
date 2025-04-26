var express=require('express');
var app=express();
var path=require('path');
var bp=require('body-parser')
var url=bp.urlencoded({extended:true})
var staticpath=path.join(__dirname,'../Public');
app.use(express.static(staticpath,{index:'second.html'}));//if we only write staticpath and file name is index.html then no need to write it if html file name is diffrent then only need to write
app.get('/login',(req,res,next)=>{
    res.set('content-type','text/html');
    res.write("Username:- "+req.query.uname)
    res.write("<br>Password:- "+req.query.pass)
    res.write("<br>Message:- "+req.query.message)
    res.write(`<br><a href='/message'>Show Vowel</a>`)
    next();
});
app.get('/login',(req,res)=>{
    var m=req.query.message
    var count=0
    console.log(m)
    for(x in m){
        if(m[x]=="A" || m[x]=="E" || m[x]=="I" || m[x]=="O" || m[x]=="U" || m[x]=="a" || m[x]=="e" || m[x]=="i" || m[x]=="o" || m[x]=="u"){
            count=count+1
        }
    }
    res.write(`Vowels:- ${count}`)
    res.send()
});
app.listen(3001)