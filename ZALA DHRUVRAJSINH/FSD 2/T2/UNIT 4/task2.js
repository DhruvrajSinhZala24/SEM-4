// Write a express js script to request server to display array of object in table form on browser


var expr = require('express')
var app = expr()
var obj= [{'student':{'Name':'Vedant','Roll':25}},{'student':{'Name':'Parth','Roll':35}},{'student':{'Name':'Zala','Roll':28}},{'student':{'Name':'Smit','Roll':31}}]
app.get('/',(req,res)=>{
    res.set('content-type','text/html')
    var temp="<table border=2>"
    temp+="<tr><td>Name</td><td>Roll Number</td></tr>"
    for (let i=0;i<obj.length;i++){
        temp+="<tr>"
        temp+=`<td>${obj[i].student.Name}</td>`
        temp+=`<td>${obj[i].student.Roll}</td>`
        temp+="</tr>"
    }
    temp+="</table>"
    res.write(temp)
    res.send()
}).listen(5000)
