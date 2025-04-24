// write a expressjs script to print message in next line splitting by "," And use get method to submit the data.html file contains form of text area for the message and submit button
var express=require('express');
var app=express();
var path=require('path');
var staticpath=path.join(__dirname,'../Public');
app.use(express.static(staticpath,{index:'second.html'}));
app.get('/process_get',(req,res)=>{
    res.set('content-type','text/html')
    data=req.query.textarea1
    data=data.split(",");
    for(x in data){
        res.write(data[x]+"<br>")
    }
    res.send()
}).listen(3000)