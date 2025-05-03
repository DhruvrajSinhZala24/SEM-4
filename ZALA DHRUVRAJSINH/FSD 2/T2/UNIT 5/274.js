var expr = require("express");
var app = expr();
app.set("view engine","pug");
var p = require("path");
app.get("/",(req,res)=>{
res.render(__dirname+ "/274_form");
});
app.get("/student",(req,res)=>{
res.render(__dirname+"/274_display",{name:req.query.name, email:req.query.email,
course:req.query.course});
});
app.listen(3000,()=>{
    console.log("http://localhost:3000");

});