// You have been assigned to develop a user feedback form for a website
// using Express.js and cookies. Implement the following requirements:
// Create a form with the following fields:
// Name (input field)
// Email (input field)
// Message (textarea field)
// Rating (radio buttons: Bad, Average, Good, Very Good, Excellent)
// When the user submits the form, store their feedback information (name,
// email, message, and rating) in a cookie named "feedback" that expires
// in 10 seconds.
// Display a confirmation message to the user after successfully
// submitting the form & Create a link to display the feedback details
// stored in the "feedback" cookie.
// When the user click to the link, retrieve the feedback information from
// the cookie and display it on the page also include a link on the
// feedback details page to Logout.When the user clicks the link, user
// redirected to home page.
// Make simple.html file and app.js file use get method in express js.

var express=require('express');
var app=express();
var path=require('path');
var staticpath=path.join(__dirname,'../Public');
var cookie=require('cookie-parser')
app.use(cookie())
app.use(express.static(staticpath,{index:'second.html'}));
app.get('/next_page',(req,res)=>{
    var uname=req.query.uname
    var mail=req.query.email
    var message=req.query.message
    var radio=req.query.r1
    var obj={"Username":uname,"Email":mail,"Message":message,"Rating":radio}
    res.set('content-type','text/html');
    res.cookie('Cookie',obj,{
        expires: new Date(Date.now() + 10000)
    });
    res.write("<a href='/next_page1'>Link</a>")
})
app.get('/next_page1',(req,res)=>{
    res.set('content-type','text/html');
    res.write(JSON.stringify(req.cookies.Cookie))
    res.write("<br><a href='/'>Logout</a>")
    res.send()
}).listen(3000)