var http =require('http')
var h=http.createServer((req,res)=>{
    res.write("Welcome to NODE.js server");
    res.end()
})
h.listen(5000,()=>{console.log('Server start')});