var expr = require("express");
var app = expr();
app.use((req,res,next)=>{
    console.log('Initialization')
    res.write('Hello1')
    next()
})
app.get('/',(req,res)=>{
    res.write('Hello2')
    res.send()
})
app.listen(5000);