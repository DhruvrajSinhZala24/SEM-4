// create on folder frontend and backend,create one html and css file in frontend and create one js file in backend folder. In html file print one paragraph format that paragraph using css file and run that html file as a frontend on server
var express=require('express');
var app=express();
var path=require('path');
var staticpath=path.join(__dirname,'../Frontend')
console.log(staticpath)
app.use(express.static(staticpath))
app.listen(5000);