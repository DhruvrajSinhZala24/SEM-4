//write express.js script to request server to display json object values on browser
var express=require('express');
var app=express();
var obj={'xyz':'x','abc':'a','def':1}
app.get('/',function(req,res){
 res.write(obj.xyz)
 res.send()
}).listen(3000,()=>{console.log("Server is live")})