// Current folder ni andar file run thai jay
var expr = require('express')
var app = expr()
app.use(expr.static(__dirname))
app.listen(3002) //by default it will take the index.html file and if we want to run any other html file
//then we need to pass that in the url and in expr.static wecan pass the folder name expr.static('folder_name')