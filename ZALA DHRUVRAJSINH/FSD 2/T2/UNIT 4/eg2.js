var express = require('express')
var app = express()
app.get('/about',(req,res)=>{
    res.set('content-type','text/html')
    res.write('<h1>Hello World</h1>')
    res.send() //If res.send() ma kai lakhyu hase to e eklu hase toj run karse and if res.write() jode lakhisu to res.send() empty ajj rakhvanu or else eroor avse
})
app.get('*',(req,res)=>{
    res.status(404)
    res.send('Page Not Found')
})
app.listen(5000,()=>{console.log('Server Started')})