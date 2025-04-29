// write a script to create a login form on index.html file. After
// clicking submit button it should jump to /next page and value of
// username should be stored inside cookie. perform the task using get
// method. observe and check inside browser that the cookie is stored
// perfectly or not.

var express=require('express');
var app=express();
var path=require('path');
var staticpath=path.join(__dirname,'../Public');
var cookie=require('cookie-parser')
app.use(cookie())
app.use(express.static(staticpath,{index:'second.html'}));
app.get('/next_page',(req,res)=>{
    var uname=req.query.uname
    res.cookie('Username',uname);
    res.send("cookie created");
}).listen(3000)