var express=require('express');
var app=express();
var path=require('path')
var staticpath=path.join(__dirname,'../Public')
app.use(express.static(staticpath))
app.listen(3000)