var express = require('express');
var app = express();
app.set('view engine','pug')
app.set('views',__dirname)
app.get('/', function(req, res){
res.render('sample');
});
app.listen(3000);