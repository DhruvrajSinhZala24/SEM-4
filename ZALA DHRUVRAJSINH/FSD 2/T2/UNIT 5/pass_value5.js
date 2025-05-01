var express = require('express');
var app = express();
app.set('view engine','pug')
app.set('views', __dirname)
app.get('/', function (req, res) {
    res.render('pass_value5',{name:'learning',url:'http://www.google.com'});
});
app.listen(3000,()=>{
    console.log("http://localhost:3000");

});