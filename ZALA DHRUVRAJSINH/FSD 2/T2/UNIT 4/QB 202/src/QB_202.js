// write a expressjs script to print message in next line splitting by "," And use get method to submit the data.html file contains form of text area for the message and submit button
var express=require('express');
var app=express();
var path=require('path');
var bp=require('body-parser')
var url=bp.urlencoded({extended:true})
var staticpath=path.join(__dirname,'../Public');
app.use(express.static(staticpath,{index:'second.html'}));
app.post('/second_page',url,(req,res)=>{
    user=req.body.uname;
    pass=req.body.pass;
    cpass=req.body.cpass;
    gen=req.body.gender;
    if(pass==cpass){
        res.write("Username:- "+user);
        res.write("\nPassword:- "+pass);
        res.write("\nGender:- "+gen);
        res.send();
    }
    else{
        res.set('content-type','text/html')
        res.write("<h2 style='color:red;'>The password does not matches to confirm password</h2>")
        res.send()
    }
}).listen(3000)