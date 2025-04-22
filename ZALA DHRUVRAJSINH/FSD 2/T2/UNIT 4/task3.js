// Write an express js script to define one json array of three objects having properties nae and age sort this object according to age if user request sorted names in url then all names along with age should be printed according to descending order of age also display this sorted values on sort page and display json object on home page 



var expr = require('express')
var app = expr()
student = [
    {'Name':'Vedant','Roll_No':25},
    {'Name':'Parth','Roll_No':35},
    {'Name':'Zala','Roll_No':28}
]
app.get('/home',(req,res)=>{
    res.send(student)    
})
app.get('/sort',(req,res)=>{
    student=student.sort((a,b)=>b.Roll_No-a.Roll_No)
    res.send(student)
})
app.listen(5000)