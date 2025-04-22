var express=require('express');
var app=express();
app.get('/',function(req,res){
    res.write('Hello World');
    res.end();
});
app.listen(5000,()=>{console.log('server started')});