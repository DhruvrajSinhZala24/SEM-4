var express=require('express');
var app=express();
app.use(express.static("Public",{index:'index.html'}))
app.listen(5000)