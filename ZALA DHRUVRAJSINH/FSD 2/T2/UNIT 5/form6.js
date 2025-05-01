var express = require('express');
var app = express();
app.set('view engine','pug')
app.set('views',__dirname)
app.get('/', function(req, res){
res.render('form6');
});
app.listen(3000);